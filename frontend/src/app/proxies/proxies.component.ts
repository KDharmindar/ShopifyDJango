import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProxiesService } from '../service/proxies.service';;
import { Router, ActivatedRoute } from '@angular/router';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proxies',
  templateUrl: './proxies.component.html',
  styleUrls: ['./proxies.component.css']
})
export class ProxiesComponent implements OnInit {

  proxies:any;
  constructor(private fb:FormBuilder, private proxiesService: ProxiesService, private router: Router) {
  	this.proxies = fb.group({
      proxies_list:['']
    })
  }

  ngOnInit() {
    this.proxiesService.proxiesLoad()
              .subscribe(
                  res_data => {
                    //clear all forms
                      let data=res_data.json();
                      let strRes = "";
                      if ( data.length > 0 ){
                        for ( let i = 0; i < data.length; i++ ){
                          strRes = strRes + data[i].ip + ":" + data[i].port;
                          if ( i < ( data.length - 1 ) ){
                            strRes = strRes + '\n';
                          }
                        }
                        this.proxies.value["proxies_list"] = strRes;
                        this.proxies.patchValue(this.proxies.value);
                      }
                      this.router.navigate(['/home/proxies']);
                  },
                  error => {
                    //alert errors
          });
  }


  validate_ipaddress_port(str){
  	// if ":"'s count is 1 then
  	let proxy_tmp 		= ""; // gmail_account tmp variable
  	let port_tmp 		= ""; // password tmp variable
  	let res 			= {}; // return value variable
  	let proxy_re		= /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  	let port_re			= /[0-9]+$/;
  	if ( ( str.split(":").length - 1 ) === 1 ){
  		// correct string type
  		let split_res 	= str.split(":");
  		proxy_tmp 		= split_res[0].trim().toLowerCase();
  		port_tmp 		= split_res[1];
  		if ( proxy_re.test( proxy_tmp ) && ( ( port_re.test( port_tmp ) ) && ( parseInt(port_tmp)  < 65536 ) ) ){
  			res["ip"] 	= proxy_tmp;
  			res["port"] = port_tmp;
  		} else {
  			return false;
  		}
  	} else {
  		// not correct string
  		return false;
  	}
  	return res;
  }

  //split every line from textarea
  split_string(str){
  	let tmp_res 		= str.split("\n"); 	// each item of textarea
  	let res 			= []; 				//result array
  	let res_item_json	= {}; 				//json item of result array {"email":"","password":""}
  	let check_flag		= true; 			//validate all or not
  	let tmp 			= "";
  	for ( let i = 0; i < tmp_res.length; i ++ ){
  		//remove white space
  		tmp = tmp_res[i];
  		if ( tmp == '' ){
  			continue;
  		} else {
  			res_item_json = this.validate_ipaddress_port( tmp )
  			if ( res_item_json ){

  				res.push( res_item_json );
  			} else {

  				check_flag = false;
  				break;
  			}
  		}
  	}
  	//return array if all can be validated.
  	if ( check_flag === false ){

  		return false;
  	} else {
  		res = res.filter((value, index, array) => 
     		!array.filter((v, i) => JSON.stringify(value) == JSON.stringify(v) && i < index).length);
  		return res;
  	}
  }
  save_proxy(){
  	if ( this.proxies.value["proxies_list"] != "" ) {
  		let res = this.split_string( this.proxies.value["proxies_list"] );
	  	if ( res ) {
	  		this.proxiesService.proxies(res)
	            .subscribe(
	                data => {
	                  //clear all forms
	                    data = data.json();
	                    if (data['stat'] === 'success'){
	                      //save data succesfully alert
	                      // alert("Proxy lists are saved.");
                        Swal("Nice!", "Proxy lists are saved!", "success");
	                      // this.proxies.reset();
	                    }
	                    this.router.navigate(['/home/proxies']);
	                },
	                error => {
	                  //alert errors
	        });
	  	}
	  	else
	  	{
	  		// alert( "Please input Correct Data." );
        Swal("Wrong!", "Please input Correct Data.", "error");
	  	}	
  	}
  	else
  	{
  		// alert( "Please Input Data first." );
      Swal("Wrong!", "Please Input Data first.", "error");
  	}
  	
  }

  delete_proxy(){
  	this.proxies.reset();
    Swal("Clear!", "All data is cleared.", "success");
  }

  test_proxy(){
  	console.log("test_proxy");
  }

  export_proxy(){
  	if ( this.proxies.value["proxies_list"] != "" ) {
  		let res = this.split_string( this.proxies.value["proxies_list"] )
	  	if ( res ) {
		    new Angular2Csv(res, 'Proxy Lists');
	  	}
	  	else
	  	{
	  		// alert( "Please input Correct Data." );
        Swal("Wrong!", "Please input Correct Data.", "error");
	  	}	
  	}
  	else
  	{
  		// alert( "Please Input Data first." );
      Swal("Wrong!", "Please Input Data first.", "error");
  	}
  }

  import_proxy(fileInput: any){
  	if (fileInput.target.files[0]){
		let fileReaded 			= fileInput.target.files[0]; 
		let reader: FileReader 	= new FileReader();
		reader.readAsText(fileReaded);
		let exist_flag	= 0;
		reader.onload = (e) => {
			let csv: string 	= reader.result;
			let allTextLines 	= csv.split(/\r|\n|\r/);
			let res_import		= [];
			let data = [];
			for ( let i = 0; i < allTextLines.length; i++ ) {
				if ( allTextLines[i] != "" ){
					data = allTextLines[i].split( ',' );
					if ( data.length == 2 ){
						let ip_tmp 		= data[0].replace( new RegExp('"','g') , '' );
						let port_tmp 	= data[1].replace( new RegExp('"','g') , '' );
						let proxy_re	= /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  						let port_re		= /[0-9]+$/;
  						if ( proxy_re.test( ip_tmp ) && ( ( port_re.test( port_tmp ) ) && ( parseInt(port_tmp)  < 65536 ) ) ){
							exist_flag = 1;
							res_import.push({"ip":ip_tmp,"port":port_tmp});
						} else {
							// alert("No Match CSV Data Style");
              Swal("Wrong!", "No Match CSV Data Style.", "error");
							return false;
						}
					}
				}	
			}
			if ( exist_flag == 0 )
			{
				// alert("No Match CSV Data Style");
        Swal("Wrong!", "No Match CSV Data Style.", "error");
				return false;
			}
			else
			{
				let suffix = "";
				let res_text = "";
				//create plain text by using json content
				for ( var i = 0; i < res_import.length; i++ ) {
					suffix = "\n";
					if ( i == ( res_import.length - 1 ) )
					{
						suffix = "";
					}
					res_text = res_text + res_import[i]["ip"] + ":" + res_import[i]["port"] + suffix;
				}
				this.proxies.value["proxies_list"] = res_text;
				this.proxies.patchValue(this.proxies.value);
			}
		}
	}
  }
}

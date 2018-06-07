import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GmailaccountService } from '../service/gmailaccount.service';;
import { Router, ActivatedRoute } from '@angular/router';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

@Component({
  selector: 'app-gmail-accounts',
  templateUrl: './gmail-accounts.component.html',
  styleUrls: ['./gmail-accounts.component.css']
})
export class GmailAccountsComponent implements OnInit {
	gmail_account:any;
  constructor(private fb:FormBuilder, private gmailaccountService: GmailaccountService, private router: Router) {
  	this.gmail_account = fb.group({
      gmail_list:['']
    })
  }

  ngOnInit() {
  }

  // get email and password and validate
  validate_email_password(str){
  	// if ":"'s count is 1 then
  	let gmail_tmp 		= ""; // gmail_account tmp variable
  	let password_tmp 	= ""; // password tmp variable
  	let res 			= {}; // return value variable
  	let gmail_re		= /(\W|^)[\w.+\-]*@gmail\.com(\W|$)/;
  	if ( ( str.split(":").length - 1 ) === 1 ){
  		// correct string type
  		let split_res 	= str.split(":");
  		gmail_tmp 		= split_res[0].trim().toLowerCase();
  		password_tmp 	= split_res[1];
  		if ( gmail_re.test( gmail_tmp ) ){
  			res["email"] 	= gmail_tmp;
  			res["password"] = password_tmp;
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
  			res_item_json = this.validate_email_password( tmp )
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

  		return res;
  	}
  }

  save_gmail(){
  	console.log('save_gmail');
  	if ( this.gmail_account.value["gmail_list"] != "" ) {
  		let res = this.split_string( this.gmail_account.value["gmail_list"] )
	  	if ( res ) {
	  		console.log( res );
	  		this.gmailaccountService.gmailAccount(res)
	            .subscribe(
	                data => {
	                  //clear all forms
	                    data=data.json();
	                    if (data['stat'] === 'success'){
	                      //save data succesfully alert
	                      alert("Gmail account lists are saved.");
	                      this.gmail_account.reset();
	                    }
	                    this.router.navigate(['/home/gmail-accounts']);
	                },
	                error => {
	                  //alert errors
	        });
	  	}
	  	else
	  	{
	  		console.log( "failed" );
	  		alert( "Please input Correct Data." )
	  	}	
  	}
  	else
  	{
  		alert( "Please Input Data first." )
  	}
  	
  }

  clear_session(){
  	this.gmail_account.reset();
  }

  export_gmail(){
  	// console.log(this.gmail_account.value["gmail_list"].split('\n'));
  	if ( this.gmail_account.value["gmail_list"] != "" ) {
  		let res = this.split_string( this.gmail_account.value["gmail_list"] )
	  	if ( res ) {
	  		console.log( res );
		    new Angular2Csv(res, 'Gmail Account Lists');
	  	}
	  	else
	  	{
	  		console.log( "failed" );
	  		alert( "Please input Correct Data." )
	  	}	
  	}
  	else
  	{
  		alert( "Please Input Data first." )
  	}
  	
  }

  import_gmail(fileInput: any){
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
						let email_tmp 		= data[0].replace( new RegExp('"','g') , '' );
						let password_tmp 	= data[1].replace( new RegExp('"','g') , '' );
						let gmail_re		= /(\W|^)[\w.+\-]*@gmail\.com(\W|$)/;
						if ( gmail_re.test( email_tmp ) ){
							exist_flag = 1;
							res_import.push({"email":email_tmp,"password":password_tmp});
						} else {
							console.log( "failed" );
							return false;
						}
					}
				}	
			}
			console.log(res_import);
			if ( exist_flag == 0 )
			{
				console.log( "failed" );
				return false;
			}
			else
			{
				let suffix = "";
				let res_text = "";
				//create plain text by using json content
				// console.log( res_import );
				for ( var i = res_import.length - 1; i >= 0; i-- ) {
					suffix = "\n";
					if ( i == 0 )
					{
						suffix = "";
					}
					res_text = res_text + res_import[i]["email"] + ":" + res_import[i]["password"] + suffix;
				}
				console.log( res_text );
				this.gmail_account.value["gmail_list"] = res_text;
				this.gmail_account.patchValue(this.gmail_account.value);
			}
		}
	}
  } 
}


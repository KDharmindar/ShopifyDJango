import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-profile',
  templateUrl: './checkout-profile.component.html',
  styleUrls: ['./checkout-profile.component.css']
})
export class CheckoutProfileComponent implements OnInit {

  checkout:any;
  constructor(private fb:FormBuilder) {
    this.checkout = fb.group({
      first_name:['',Validators.required],
      last_name:'',
      address_1:'',
      address_2:'',
      city:['',Validators.required],
      state:'',
      zipcode:['',Validators.required],
      country:'',
      email:['',Validators.email,Validators.required],
      phone:'',
      card:null,
      cvv:null,
      expiryDate:'',
      isPaypal:false,
      paypalEmail:'',
      paypalPassword:''
    })
  }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.checkout.hasError('required') ? 'You must enter a value' :
        this.checkout.hasError('email') ? 'Not a valid email' :
            '';
  }

  saveCheckout(){
    console.log('I am saved',this.checkout)
  }

}

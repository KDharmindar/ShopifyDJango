import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../service/checkout.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout-profile',
  templateUrl: './checkout-profile.component.html',
  styleUrls: ['./checkout-profile.component.css']
})
export class CheckoutProfileComponent implements OnInit {

  checkout:any;
  constructor(private fb:FormBuilder, private checkoutservice: CheckoutService, private router: Router) {
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
    console.log('I am saved',this.checkout.value);
        this.checkoutservice.checkoutProfile(this.checkout.value)
            .subscribe(
                data => {
                    this.router.navigate(['/home/checkout-profile']);
                },
                error => {

        });    
  }

}

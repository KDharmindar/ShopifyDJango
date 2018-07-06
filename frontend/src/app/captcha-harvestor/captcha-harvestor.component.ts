import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-captcha-harvestor',
  templateUrl: './captcha-harvestor.component.html',
  styleUrls: ['./captcha-harvestor.css']
})
export class CaptchaHarvestorComponent implements OnInit {

  form: FormGroup;
  description: string;

  constructor(private captchaDialog: MatDialog){}


  ngOnInit(){}

  openDialog() {
    const captchaDialogConfig = new MatDialogConfig();
    captchaDialogConfig.disableClose = true;
    captchaDialogConfig.autoFocus = true;

    this.captchaDialog.open(CaptchaHarvestorComponent, captchaDialogConfig);
  }
}


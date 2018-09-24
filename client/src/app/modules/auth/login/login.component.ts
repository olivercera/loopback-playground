import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { User } from '../../../apiclient/models';
import { UserApi } from '../../../apiclient/services/index';
import { LoopBackConfig } from '../../../apiclient/index';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: User;
  form = new FormGroup({});

  fields: FormlyFieldConfig[] = [
    {
      key: 'username',
      type: 'input',
      templateOptions: {
        type: 'username',
        label: 'User Name',
        placeholder: 'User Name',
        required: true,
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Password',
        placeholder: 'Password',
        required: true,
      }
    },
  ];

  constructor(
    private userApi: UserApi,
    private toastr: ToastrService

  ) {
    LoopBackConfig.setBaseURL('http://127.0.0.1:3000');
    LoopBackConfig.setApiVersion('api');
  }

  ngOnInit() {
  }

  login(creds) {
    this.userApi.login(
      creds
    ).subscribe(
      user => {

      },
      error => {
        this.toastr.error('whhhhat?');
        console.log(error);
      }
    )
  }

}

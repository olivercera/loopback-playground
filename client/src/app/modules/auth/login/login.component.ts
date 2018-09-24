import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { UserApi } from '../../../apiclient/services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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

  constructor(private userApi: UserApi) { }

  ngOnInit() {
  }

  login( creds ) {
    this.userApi.login(
      creds
    ).subscribe(
      user => {

      },
      error => {
        console.log(error);
      }
    )
  }

}

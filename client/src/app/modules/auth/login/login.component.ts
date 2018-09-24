import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { User } from '../../../apiclient/models';
import { UserApi } from '../../../apiclient/services/index';
import { LoopBackConfig } from '../../../apiclient/index';
import { NotificationsService, NotificationType } from 'angular2-notifications';
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
      key: 'email',
      type: 'input',
      templateOptions: {
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
    private _notifications: NotificationsService

  ) {
    LoopBackConfig.setBaseURL('http://127.0.0.1:3000');
    LoopBackConfig.setApiVersion('api');
  }

  ngOnInit() {
    this.model = {} as User;
  }

  login(creds) {
    console.log(creds);
    this.userApi.login(
      creds
    ).subscribe(
      data => {
        this._notifications.success('Welcome back!');
      },
      error => {
        if (error.statusCode === 400) {
          this._notifications.warn('Oooops!', error.message);
        } else {
          this._notifications.error('Oooops!', error.message);
        }
        console.log(error);
      }
    );
  }

}

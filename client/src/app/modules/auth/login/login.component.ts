import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { User } from '../../../apiclient/models';
import { UserApi, LoopBackAuth } from '../../../apiclient/services/index';
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
    private _notifications: NotificationsService,
    private loopBackAuth: LoopBackAuth

  ) {
    LoopBackConfig.setBaseURL('http://127.0.0.1:3000');
    LoopBackConfig.setApiVersion('api');
  }

  ngOnInit() {
    this.model = {} as User;
    this.isUserLoggedIn();
  }

  isUserLoggedIn() {
    if (this.loopBackAuth.getAccessTokenId()) {
      this._notifications.info('How did we get here?', 'You\'re logged in');
      // todo: redirect to home page
    }
  }

  login(creds) {
    this.userApi.login(
      creds
    ).subscribe(
      data => {
        this._notifications.success('Welcome back!');
        this.loopBackAuth.clear();
        this.loopBackAuth.setToken(data);
      },
      error => {
        if (error.statusCode === 400) {
          this._notifications.warn('Oooops!', error.message);
        } else {
          this._notifications.error('Oooops!', error.message);
        }
      }
    );
  }

}

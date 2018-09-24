import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { Routing } from './app.routing';
import { SDKBrowserModule } from './apiclient/index';
import { AppComponent } from './app.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    Routing,
    HttpClientModule,
    SharedModule,
    SimpleNotificationsModule.forRoot(),
    SDKBrowserModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

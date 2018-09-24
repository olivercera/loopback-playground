import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { Routing } from './app.routing';
import { SDKBrowserModule } from './apiclient/index';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    Routing,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    SDKBrowserModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

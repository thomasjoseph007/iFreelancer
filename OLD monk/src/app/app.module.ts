import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonkComponent } from './monk/monk.component';
import { DareComponent } from './dare/dare.component';
import { ProfileComponent } from './profile/profile.component';
import { ServiceComponent } from './service/service.component';
import { MonkService } from './monk.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MonkComponent,
    DareComponent,
    ProfileComponent,
    ServiceComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MonkService],
  bootstrap: [AppComponent]

})
export class AppModule { }

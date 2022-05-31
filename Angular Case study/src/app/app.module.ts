import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LayoutModule } from './layout/layout.module';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { ViewComponent } from './view/view.component';
import { HttpClientModule } from '@angular/common/http';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';

import { RegistrationComponent } from './registration/registration.component';
import { AddAirlineComponent } from './add-airline/add-airline.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ViewComponent,
    AddFlightComponent,
    RegistrationComponent,
    UserComponent,
    LoginComponent,
    AddAirlineComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
   LayoutModule,
   MatCardModule,
   MatListModule,
   HttpClientModule,
   MatFormFieldModule,
   ReactiveFormsModule,
   FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

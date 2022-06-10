import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {MDBBootstrapModule}  from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateVentureComponent } from './create-venture/create-venture.component';
import { UpdateVentureComponent } from './update-venture/update-venture.component';
import { GetVentureComponent } from './get-venture/get-venture.component';
import { GetAllVenturesComponent } from './get-all-ventures/get-all-ventures.component';
import { DeleteVentureComponent } from './delete-venture/delete-venture.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConceptService } from './concept.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateVentureComponent,
    UpdateVentureComponent,
    GetVentureComponent,
    GetAllVenturesComponent,
    DeleteVentureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot ()
    
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ConceptService],
  bootstrap: [AppComponent]
})
export class AppModule { }

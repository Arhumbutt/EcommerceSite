import { BrowserModule , BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app.routing";
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {LoginComponent  } from "./login/login.component";
import { AdmindashboardComponent } from "./sidebar-layout/admindashboard/admindashboard.component";
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FooterComponent } from './footer/footer.component';
import { ListedproductsComponent } from './listedproducts/listedproducts.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { AddnewproductComponent } from './addnewproduct/addnewproduct.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe, DecimalPipe} from '@angular/common';
import { Config } from "./config";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatFormFieldModule,
} from '@angular/material';
import { LoginService } from './login/login_service';
import { UserdashboardComponent } from './sidebar-layout/userdashboard/userdashboard.component';
import { addproductService } from './addnewproduct/addnewproductservice';
import { FilterbycategoryComponent } from './filterbycategory/filterbycategory.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { MycheckoutComponent } from './mycheckout/mycheckout.component';
import { headerService } from './header/headerservice';
import { SignupComponent } from './signup/signup.component';
import { filterproductService } from './filterbycategory/filterproductservice';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ListedproductsComponent,
    ProductdetailComponent,
    AddnewproductComponent,
    AdmindashboardComponent, UserdashboardComponent, FilterbycategoryComponent, WatchlistComponent, MycheckoutComponent, SignupComponent
  ],
  imports: [
    // BrowserModule ,
    // AppRoutingModule,
    ReactiveFormsModule, FormsModule ,
    BrowserModule,
    // AppRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    // CommonModule,
    // FormsModule,
    // TextMaskModule,
    // HttpClientModule,
    // HttpModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    HttpClientModule,
    HttpModule,
    CommonModule
  ],
  providers: [
    
    LoginService ,Config, addproductService,headerService ,filterproductService ],
  bootstrap: [AppComponent]
})

export class AppModule { }

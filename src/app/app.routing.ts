import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { NormalLayoutComponent } from './layouts/normal-layout/normal-layout.component';
import { HomeComponent } from './home/home.component';
import { AddnewproductComponent } from "./addnewproduct/addnewproduct.component";
import { ListedproductsComponent } from "./listedproducts/listedproducts.component";
import { ProductdetailComponent } from "./productdetail/productdetail.component";
import { LoginComponent } from "./login/login.component";
import { AdmindashboardComponent } from "./sidebar-layout/admindashboard/admindashboard.component";
import { UserdashboardComponent } from "./sidebar-layout/userdashboard/userdashboard.component";
import { FilterbycategoryComponent } from "./filterbycategory/filterbycategory.component";
import { WatchlistComponent } from "./watchlist/watchlist.component";
import { MycheckoutComponent } from "./mycheckout/mycheckout.component";
import { SignupComponent } from "./signup/signup.component";
const routes: Routes = [
  { path: "", component: HomeComponent },

     
      { path: 'productdetail', component: ProductdetailComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'userdashboard', component: UserdashboardComponent },    
      { path: 'filterbycategory', component: FilterbycategoryComponent },
      { path: 'watchlist', component: WatchlistComponent },
      { path: 'checkout', component: MycheckoutComponent },

      {
        path: '',    component: AdmindashboardComponent,
        children: [
          { path: 'admindashboard', component: AdmindashboardComponent },
          { path: 'addnewproduct', component: AddnewproductComponent },
          { path: 'listedproducts', component: ListedproductsComponent },
        ]
      }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { NormalLayoutComponent } from './layouts/normal-layout/normal-layout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },

//   {
//     path: '',
//     component: NormalLayoutComponent,
//     children: [
//       { path: 'resetpassword/:query1', loadChildren: './authentication/reset-password/reset-password.module#ResetPasswordModule' },
//       { path: 'forgetpassword', loadChildren: './authentication/forgetpassword/forgetpassword.module#ForgetPasswordModule' },
//       { path: 'contactus', loadChildren: './component/contact-us/contactus.module#ContactusModule' },
//       { path: 'aboutus', loadChildren: './component/staticpage/about-us/aboutus.module#AboutusModule' },
//       { path: 'single-product', loadChildren: './component/single-product/single-product.module#SingleProductModule' },
//       { path: 'login', loadChildren: './authentication/login/login.module#LoginModule' },
     
//       { path: 'pay-now', loadChildren: './component/pay-now/paynow.module#PayNowModule' },
//       { path: 'gallery', loadChildren: './component/staticpage/gallery/gallery.module#galleryModule' },
//       { path: 'verfiyemail/:key', loadChildren: './authentication/verify-email/verify-email.module#VerfiyEmailModule' },
//       { path: 'signup', loadChildren: './authentication/user-signup/signup.module#UsersignupModule'},
//       { path: 'terms', loadChildren: './component/staticpage/terms-use/terms-use.module#TermsUseModule'},
//       { path: 'privacy-policy', loadChildren: './component/staticpage/privacy-policy/privacy-policy.module#PrivacyPolicyModule'}, 
//       { path: 'product', loadChildren: './component/product/product.module#ProductModule'},   
//       { path: 'checkout', loadChildren: './component/user-dashboard/check-out/checkout.module#checkoutModule' },
//       { path: 'vendors', loadChildren: './component/vendors/vendors.module#VendorsModule'},
  
//     ]
//   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
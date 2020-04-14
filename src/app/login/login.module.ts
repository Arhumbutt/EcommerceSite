import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
// import { LoginRoutes } from './login.routing';
import { LoginComponent } from './login.component';
import { MatAutocompleteModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    
    MatFormFieldModule, } from "@angular/material";
@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
            // RecapchaModule
    ],
    declarations: [
        // LoginComponent
    ],
    providers: []
})

export class LoginModule { }

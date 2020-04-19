import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from "./signup.component";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatAutocompleteModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule, } from "@angular/material";
 
@NgModule({
    imports: [
        CommonModule,
        MatSlideToggleModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
      
    ],
    declarations: [SignupComponent],
    providers: []
})
export class UsersignupModule { }

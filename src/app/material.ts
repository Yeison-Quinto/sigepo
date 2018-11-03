import {MatButtonModule, MatCheckboxModule,} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  imports: [MatButtonModule, 
    MatCheckboxModule,
    MatMenuModule, 
    MatStepperModule, 
    MatIconModule,
    MatGridListModule,
    MatCardModule, 
    MatFormFieldModule],
  
    exports: [MatButtonModule, 
    MatCheckboxModule, 
    MatMenuModule, 
    MatStepperModule, 
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule],
})
export class MaterialModule { }
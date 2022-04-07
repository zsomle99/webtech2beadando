import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFociComponent } from './listFociPage/list-foci.component';
import { CreateFociComponent } from './create-foci/create-foci.component';
import { FociRoutingModule } from './foci-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [ListFociComponent, CreateFociComponent],
  imports: [
    CommonModule,
    FociRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FociModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DogsComponent } from './dogs/dogs.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ButtonDialogComponent } from './button-dialog/button-dialog.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DogsComponent, ButtonDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule {}

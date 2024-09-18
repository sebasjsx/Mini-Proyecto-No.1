import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DogsComponent } from './dogs/dogs.component';
import { WhiteSpaceDirective } from '../shared/directives/white-space.directive';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [DogsComponent, WhiteSpaceDirective],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule {}

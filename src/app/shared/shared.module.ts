import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { WhiteSpaceDirective } from './directives/white-space.directive';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [WhiteSpaceDirective, DialogComponent],
  imports: [
    CommonModule,
    MatDialogModule 
  ],
  exports: [WhiteSpaceDirective, DialogComponent]
})
export class SharedModule {}

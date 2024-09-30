import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsComponent } from './dogs/dogs.component';
import { ButtonDialogComponent } from './button-dialog/button-dialog.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'dogs', component: DogsComponent },
      { path: 'dialog', component: ButtonDialogComponent },
      { path: '**', redirectTo: '' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}

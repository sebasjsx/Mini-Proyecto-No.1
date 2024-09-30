import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { DialogComponent, DialogData } from 'src/app/shared/components/dialog/dialog.component';

@Component({
  selector: 'app-button-dialog',
  templateUrl: './button-dialog.component.html',
  styleUrls: ['./button-dialog.component.scss']
})
export class ButtonDialogComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogData: DialogData = {
      UserCreated: 'sebas1',
      DateCreated: new Date('2024-09-29'),
      UserUpdated: 'sebas2',         
      DateUpdated: new Date('2024-09-30')
    };

    this.dialog.open(DialogComponent, {
      data: dialogData
    });
  }
}

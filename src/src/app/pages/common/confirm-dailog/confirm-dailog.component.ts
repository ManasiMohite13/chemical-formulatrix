import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConstantsMessage } from 'src/assets/config/constants-messages';

@Component({
  selector: 'app-confirm-dailog',
  templateUrl: './confirm-dailog.component.html',
  styleUrls: ['./confirm-dailog.component.scss'],
})
export class ConfirmDailogComponent implements OnInit {
  confirm: any;
  title: string = '';
  message: string = '';
  constructor(
    public dialogRef: MatDialogRef<ConfirmDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data.title == ConstantsMessage.CONFIRM_POPUP_TITLE_LOGOUT) {
      this.confirm = ConstantsMessage.CONFIRM_POPUP_TITLE_LOGOUT;
    } else {
      this.confirm = ConstantsMessage.CONFIRM;
    }
  }

  ngOnInit(): void {}
}

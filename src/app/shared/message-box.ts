import { MatDialog } from "@angular/material";
import { DialogComponent } from './dialog/dialog.component';

export class MessageBox {
  static show(dialog: MatDialog, title = "Alert", message, button = 0, width = "200px") {
    const dialogRef = dialog.open(DialogComponent, {
      data: {
        title: title || "Alert",
        message: message,
        button: button || 0,
        style: 1,
        allow_outside_click: false
      },
      width: width
    });
    return dialogRef.afterClosed();
  }
}

export enum MessageBoxButton {
  Ok = 0,
  OkCancel = 1,
  YesNo = 2,
  AcceptReject = 3
}

export enum MessageBoxStyle {
  Simple = 0,
  Full = 1
};

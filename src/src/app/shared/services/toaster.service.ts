import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  constructor(private _snackBar: MatSnackBar) {}

  showSuccess(message: string, action: string) {
    return this._snackBar.open(message, action,{
      duration: 5000,
      verticalPosition: "top", // Allowed values are  'top' | 'bottom'
      horizontalPosition: "right",
      panelClass:"success-snackbars"
    });
  }
  
  showError(message: string, action: string) {
    return this._snackBar.open(message, action,{
      duration: 5000,
      verticalPosition: "top", 
      horizontalPosition: "right",
      panelClass:"failed-snackbar"
    });
  }

  showWarning(message: string, action: string) {
    return this._snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      panelClass: 'warning-snackbar',
    });
  }
}

import { Component, HostListener, Input, OnInit, TemplateRef } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject, fromEvent } from 'rxjs';
import { ConfirmDailogComponent } from 'src/app/pages/common/confirm-dailog/confirm-dailog.component';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { RolePriority } from 'src/assets/config/authorizations';
import { ConstantsMessage } from 'src/assets/config/constants-messages';
import { Location } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string = '';
  userId: any;
  settingsData: any;
  isAdmin: boolean = false;
  role: any;
  vatForm!: FormGroup;
  passwordForm!: FormGroup;
  showNotification: boolean = false;
  notificationCount: number = 0;
  notificationList: any;
  hide: boolean = true;
  isnotificationdisabled: boolean = false;
  private unsubscriber : Subject<void> = new Subject<void>();
  subscription: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private dialog: MatDialog,
    private sessionService: SessionService,
    private toasterService: ToasterService,
    private location: Location
  ) {
    this.userId = this.sessionService.getLoggedInUserData('loggedInUser');
    this.role = Boolean(localStorage.getItem('roleId'));
    if (this.role != null && this.role == RolePriority.SuperAdmin) {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
  onConfirm() {
    const confirmDialog = this.dialog.open(ConfirmDailogComponent, {
      height: '150px',
      data: {
        title: ConstantsMessage.CONFIRM_POPUP_TITLE_LOGOUT,
        message: ConstantsMessage.CONFIRM_MESSAGE_LOGOUT,
      },
      disableClose: true,
    });
    confirmDialog.afterClosed().subscribe((result) => {
      if (result === true) {
        this.onLogout();
      }
    });
  }
  onLogout() {
    localStorage.clear();
    this.authService.logout();
    history.pushState(null, '', location.href);

    this.subscription = fromEvent(window, 'popstate').subscribe(_ => {
       history.pushState(null, '', location.href);
    });
    this.router.navigate(['/']);
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event: any) {
    // Prevent browser navigation
    this.location.forward();
  }

  getProfile() {
    this.router.navigate(['/pages/profile/' + this.userId]);
  }
}

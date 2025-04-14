import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-dashboard-alpha',
  styles: [
    `
      .page404 {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .inner {
        max-width: 560px;
        background-color: #fff;
        padding: 80px 30px;
        margin: 100px auto;
        border-radius: 10px;
        flex: 1;
      }
      .content {
        max-width: 430px;
        margin: 0 auto;
      }
    `,
  ],
  template: `
    <div class="page404">
      <div class="inner">
        <div class="content">
          <h1 class="font-size-36 mb-2">{{ data.head }}</h1>
          <p class="mb-3">{{ data.message }}</p>
          <h1 class="font-size-80 mb-4 font-weight-bold">
            {{ data.status }} —
          </h1>
          <span (click)="back()" class="btn">
            <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
            Go back to previous page
          </span>
          <span (click)="logout()" class="btn ml-2">
            <i class="fa fa-sign-out" aria-hidden="true"></i>
            Go to login page
          </span>
        </div>
      </div>
    </div>
  `,
})
export class NotFoundComponent {
  constructor(private route: ActivatedRoute, private auth: AuthService) {}
  data: any;
  ngOnInit() {
    this.data = {
      ...this.route.snapshot.data,
      ...this.route.snapshot.queryParams,
    };
  }
  back() {
    window.history.back();
  }
  logout() {
    this.auth.logout();
  }
}

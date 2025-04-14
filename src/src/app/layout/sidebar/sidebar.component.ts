import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { RoleService } from 'src/app/shared/services/role.service';

import { DATA } from './input-json';
import { ManagePermissionService } from 'src/app/shared/services/manage-permission.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ApplicationConstants } from 'src/app/shared/model/application.constants';
import { ConstantsRoutes } from 'src/assets/config/constants-routes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  roleId: any;
  menuList: any = [];
  menusData: any[] = DATA;
  hospitalPic: any
  apiURL: any;

  constructor(
    private httpService: HttpService,
    private roleService: RoleService,
    private authService: AuthService,
    private router: Router,
    private sessionService: SessionService,
    private managePermission: ManagePermissionService,
  ) {
    this.roleId = Number(this.httpService.getDecryptedValue('roleId'));
    this.hospitalPic = localStorage.getItem('hospitalPic');
    if (this.hospitalPic) {
      this.hospitalPic = ConstantsRoutes.Main_URL + this.hospitalPic;
    }

    if (this.roleId) {
      this.getUserMenuByRoleId();
    }
  }
  ngOnInit(): void { }

  getUserMenuByRoleId() {
    this.roleService.getUserMenuByRoleId(this.roleId).subscribe((res: any) => {
      if (res.success) {
        if (res.result.length > 0) {
          this.menuList = res.result;
          const validRoutes: any[][] = [];
          this.menuList.map((a: { menuRouteLink: any; subMenus: [] }) => {
            validRoutes.push(a.menuRouteLink);
            validRoutes.push(
              a.subMenus.map(
                (sb: { subMenuRouteLink: any }) => sb.subMenuRouteLink
              )
            );
          });
          localStorage.setItem(
            'validRoutes',
            JSON.stringify(validRoutes.flat())
          );
        } else {
          // localStorage.clear();
          // this.authService.logout();
          // this.router.navigate(['/']);
        }
      }
    });
  }

  panelOpenState = false;
}

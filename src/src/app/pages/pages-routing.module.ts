import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guard/auth.guard';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './common/confirm-dailog/404.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
           canActivate: [AuthGuard],
           data: {
            roles: [1,2,3,4,5],
         },
           

      },
        
      {
        path:'profile',
        component:ProfileComponent,
        canActivate: [AuthGuard],

      },
      {
        path: 'user-register',
        component: UserRegisterComponent,
      }
     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

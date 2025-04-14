import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from '../layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    
  ],
  imports: [
    SharedModule,
    // BrowserModule,
    LayoutRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule,
    CommonModule ,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatListModule,
    MatExpansionModule,

  ],
 exports:[HeaderComponent,FooterComponent,SidebarComponent],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class LayoutModule { }

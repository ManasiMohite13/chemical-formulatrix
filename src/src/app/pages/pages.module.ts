import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PagesComponent } from '../pages/pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { KmPipe } from '../shared/services/common/km.pipe';
import { ConfirmDailogComponent } from './common/confirm-dailog/confirm-dailog.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { AtomComponent } from './atom/atom/atom.component';
import { AtomDetailsComponent } from './atom-details/atom-details/atom-details.component';
import { PeriodicTableComponent } from './periodic-table/periodic-table/periodic-table.component';
import { SelectionBarComponent } from './selection-bar/selection-bar/selection-bar.component';
import { AppPhaseComponent } from './app-phase/app-phase.component';
import { AppWikiComponent } from './app-wiki/app-wiki.component';
import { UserRegisterComponent } from './user-register/user-register.component';

@NgModule({
  declarations: [PagesComponent, KmPipe, ConfirmDailogComponent, ProfileComponent, AtomComponent, AtomDetailsComponent, PeriodicTableComponent, SelectionBarComponent,AppWikiComponent,AppPhaseComponent, UserRegisterComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    PagesRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule,
    MatInputModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatSortModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatCardModule,
    MatListModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    NgScrollbarModule,
    MatTabsModule,
    MatFormFieldModule,
    
  ],

  providers: [DatePipe],
  bootstrap: [PagesComponent],
})
export class PagesModule {}

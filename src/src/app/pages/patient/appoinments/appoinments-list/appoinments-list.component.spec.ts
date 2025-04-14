import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentsListComponent } from './appoinments-list.component';

describe('AppoinmentsListComponent', () => {
  let component: AppoinmentsListComponent;
  let fixture: ComponentFixture<AppoinmentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppoinmentsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppoinmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

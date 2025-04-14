import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAppoinmentsComponent } from './edit-appoinments.component';

describe('EditAppoinmentsComponent', () => {
  let component: EditAppoinmentsComponent;
  let fixture: ComponentFixture<EditAppoinmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAppoinmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAppoinmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

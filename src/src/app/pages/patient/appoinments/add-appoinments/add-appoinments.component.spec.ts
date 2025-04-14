import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppoinmentsComponent } from './add-appoinments.component';

describe('AddAppoinmentsComponent', () => {
  let component: AddAppoinmentsComponent;
  let fixture: ComponentFixture<AddAppoinmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAppoinmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAppoinmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicalRecordsComponent } from './add-medical-records.component';

describe('AddMedicalRecordsComponent', () => {
  let component: AddMedicalRecordsComponent;
  let fixture: ComponentFixture<AddMedicalRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMedicalRecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMedicalRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

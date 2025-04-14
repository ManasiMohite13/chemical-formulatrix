import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedicalRecordsComponent } from './edit-medical-records.component';

describe('EditMedicalRecordsComponent', () => {
  let component: EditMedicalRecordsComponent;
  let fixture: ComponentFixture<EditMedicalRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMedicalRecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMedicalRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

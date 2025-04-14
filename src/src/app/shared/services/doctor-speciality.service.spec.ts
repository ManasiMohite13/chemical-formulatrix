import { TestBed } from '@angular/core/testing';

import { DoctorSpecialityService } from './doctor-speciality.service';

describe('DoctorSpecialityService', () => {
  let service: DoctorSpecialityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorSpecialityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

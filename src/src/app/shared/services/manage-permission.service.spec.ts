import { TestBed } from '@angular/core/testing';

import { ManagePermissionService } from './manage-permission.service';

describe('ManagePermissionService', () => {
  let service: ManagePermissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagePermissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

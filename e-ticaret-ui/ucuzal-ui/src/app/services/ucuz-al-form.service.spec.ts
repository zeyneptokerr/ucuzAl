import { TestBed } from '@angular/core/testing';

import { UcuzAlFormService } from './ucuz-al-form.service';

describe('UcuzAlFormService', () => {
  let service: UcuzAlFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UcuzAlFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

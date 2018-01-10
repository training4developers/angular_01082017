import { TestBed, inject } from '@angular/core/testing';

import { MySecondService } from './my-second.service';

describe('MySecondService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MySecondService]
    });
  });

  it('should be created', inject([MySecondService], (service: MySecondService) => {
    expect(service).toBeTruthy();
  }));
});

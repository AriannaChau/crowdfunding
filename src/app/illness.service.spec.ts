import { TestBed, inject } from '@angular/core/testing';

import { IllnessService } from './illness.service';

describe('IllnessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IllnessService]
    });
  });

  it('should ...', inject([IllnessService], (service: IllnessService) => {
    expect(service).toBeTruthy();
  }));
});

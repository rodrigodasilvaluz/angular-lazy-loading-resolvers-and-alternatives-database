import { TestBed } from '@angular/core/testing';

import { ApiibgeResolver } from './apiibge.resolver';

describe('ApiibgeResolver', () => {
  let resolver: ApiibgeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ApiibgeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

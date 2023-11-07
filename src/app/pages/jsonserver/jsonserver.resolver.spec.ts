import { TestBed } from '@angular/core/testing';

import { JsonserverResolver } from './jsonserver.resolver';

describe('JsonserverResolver', () => {
  let resolver: JsonserverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(JsonserverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

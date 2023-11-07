import { TestBed } from '@angular/core/testing';

import { JsonplaceholderResolver } from './jsonplaceholder.resolver';

describe('JsonplaceholderResolver', () => {
  let resolver: JsonplaceholderResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(JsonplaceholderResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

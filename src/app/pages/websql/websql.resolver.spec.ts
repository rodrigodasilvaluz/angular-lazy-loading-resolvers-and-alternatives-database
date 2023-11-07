import { TestBed } from '@angular/core/testing';

import { WebsqlResolver } from './websql.service';

describe('WebsqlResolver', () => {
  let resolver: WebsqlResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(WebsqlResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

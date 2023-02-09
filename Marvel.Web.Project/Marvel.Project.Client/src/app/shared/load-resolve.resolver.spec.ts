import { TestBed } from '@angular/core/testing';

import { LoadResolveResolver } from './load-resolve.resolver';

describe('LoadResolveResolver', () => {
  let resolver: LoadResolveResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LoadResolveResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

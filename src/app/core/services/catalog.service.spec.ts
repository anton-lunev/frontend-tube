import { TestBed, inject } from '@angular/core/testing';

import { CatalogService } from './catalog.service';

xdescribe('CatalogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatalogService]
    });
  });

  it('should ...', inject([CatalogService], (service: CatalogService) => {
    expect(service).toBeTruthy();
  }));
});

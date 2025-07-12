/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CryptosService } from './cryptos.service';

describe('Service: Cryptos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptosService]
    });
  });

  it('should ...', inject([CryptosService], (service: CryptosService) => {
    expect(service).toBeTruthy();
  }));
});

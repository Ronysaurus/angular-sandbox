/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PacienteInfoService } from './paciente-info.service';

describe('Service: PacienteInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PacienteInfoService]
    });
  });

  it('should ...', inject([PacienteInfoService], (service: PacienteInfoService) => {
    expect(service).toBeTruthy();
  }));
});

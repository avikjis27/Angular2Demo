/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuestionBankService } from './question-bank.service';

describe('QuestionBankService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionBankService]
    });
  });

  it('should ...', inject([QuestionBankService], (service: QuestionBankService) => {
    expect(service).toBeTruthy();
  }));
});

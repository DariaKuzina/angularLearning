import { Injectable } from '@angular/core';

@Injectable()
export class DataProviderService {

  constructor() { }
  getMagicStrings(): string[]{
     return ['A1', 'A2', 'A3'];
  }

}

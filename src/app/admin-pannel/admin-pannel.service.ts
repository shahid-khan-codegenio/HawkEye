import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AdminPannelService {
  private darkMode = new BehaviorSubject<boolean>(false);

  constructor() { }

}

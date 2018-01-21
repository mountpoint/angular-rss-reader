import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {
  generateId() {
    return Math.random().toString(36).substr(2, 10);
  }
}

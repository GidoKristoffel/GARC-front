import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Base64Service {
  encode(value: string): string {
    return btoa(value);
  }
}

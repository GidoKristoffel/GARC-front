import { Injectable } from '@angular/core';
import { ELocalStorage } from "../../enums/local-storage";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public get(key: ELocalStorage): string {
    return localStorage.getItem(key) || '';
  }

  public set(key: ELocalStorage, value: any): void {
    localStorage.setItem(key, value);
  }
}
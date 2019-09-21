import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'http://54.175.223.32/cotizador/backend/api/console/v1/';

  constructor() { }
}

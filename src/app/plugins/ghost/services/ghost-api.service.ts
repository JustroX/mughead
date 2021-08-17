import GhostContentAPI, { GhostAPI } from '@tryghost/content-api';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GhostApiService {
  private ghost_api: GhostAPI;
  constructor() {
    this.ghost_api = new GhostContentAPI({
      url: environment.ghost.host,
      key: environment.ghost.key,
      version: 'v3',
    });
  }

  get api() {
    return this.ghost_api;
  }
}

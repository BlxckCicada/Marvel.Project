import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Villain } from '../models/villains.model';

@Injectable({providedIn:'root'})
export class VillainService {
  private url = 'https://localhost:7068';
  constructor(private http: HttpClient) {}

  getVillains() {
    return this.http.get<Villain[]>(`${this.url}/villains`);
  }

  getVillain(id: string) {
    return this.http.get<Villain>(`${this.url}/villains/${id}`);
  }

  addVillain(villain: Villain) {
    return this.http.post<Villain>(`${this.url}/villains`, villain);
  }

  updateVillain(villain: Villain) {
    return this.http.put<Villain>(`${this.url}/villains`, villain);
  }

  deleteVillain(id: string) {
    return this.http.delete<Villain>(`${this.url}/villains/${id}`);
  }
}

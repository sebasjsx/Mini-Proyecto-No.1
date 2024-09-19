import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  private url = environment.apiUrl;

  constructor(private soli: HttpClient) {}

  getDog(): Observable<any> {
    return this.soli.get(this.url);
  }
}

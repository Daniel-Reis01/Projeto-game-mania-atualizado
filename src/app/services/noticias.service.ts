import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Noticias } from '../models/noticias';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

 url = "http://localhost:4200/noticias"

  constructor(private httpClient: HttpClient) { }

  getNoticias(): Observable<Noticias[]> {
    return this.httpClient.get<Noticias[]>(this.url)
  }
}
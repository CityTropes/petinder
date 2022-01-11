import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private _responseUrl : string;


  constructor(private http: HttpClient) {
    this._responseUrl = `${environment.backendUrl}/pets`;
  }


  getResponse(): string {         //goes to /pets url
    return this._responseUrl;
  }


  getPets(): Observable<any> {
    return this.http.get(this._responseUrl);
  }


  // get pet$(): Pet {                            when to use what getter?
  //   return this._pet$.asObservable();
  // }
}

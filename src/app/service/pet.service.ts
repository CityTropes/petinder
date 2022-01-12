import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Pet} from "../model/Pet";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private _responseUrl: string;


  constructor(private http: HttpClient) {
    this._responseUrl = `${environment.backendUrl}/pets`;
  }


  getResponse(): string {         //goes to /pets url
    return this._responseUrl;
  }


  getPets(): Observable<Pet[]> {

    return this.http.get<Pet[]>(this._responseUrl)
      .pipe(
        map((pets: Pet[]) => pets.sort((a: Pet, b: Pet) => a.name.localeCompare(b.name)))
      );
  }

  findPetByName(name: string): Observable<any> {
    return this.http.get<Pet>(`${this._responseUrl}/${name}`);
  }


}

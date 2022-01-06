import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColumnService {
  private URL = environment.api;
  private _reloadColumn$ = new BehaviorSubject<any>(null);
  public reloadColumn$ = this. _reloadColumn$.asObservable();

  constructor(private httpClient:HttpClient) { }

  reloadColumn(id:string | null):void{
    this.httpClient.get(
      `${this.URL}/task/${id}`
    ).subscribe((response) => this._reloadColumn$.next(response))
  }


}

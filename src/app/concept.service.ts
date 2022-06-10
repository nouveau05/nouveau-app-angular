import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venture } from './venture';
import { catchError,retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {  map, tap } from 'rxjs/operators';

interface myData {

  message: string,
  success: boolean
}

const httpOptions = {

  headers: new HttpHeaders({'Content-Type': 'application/json'})

}


@Injectable({
  providedIn: 'root'
})
export class ConceptService {


constructor(private httpclient: HttpClient) { }

  public addVenture(venture: Venture): Observable<Object> {
    return this.httpclient.post(`http://localhost:8086/api/newventure`, venture, httpOptions).pipe
    (retry(2), catchError(this.handleError));
  
}

public updateVenture(venture: Venture): Observable<Object> {
  const ventureid = venture.ventureid
  return this.httpclient.put(`http://localhost:8086/api/venture/${ventureid}`, venture, httpOptions).pipe
  (retry(2), catchError(this.handleError));

}


public getVenture(ventureid: number): Observable<any> {
  return this.httpclient.get<Venture>(`http://localhost:8086/api/venture/${ventureid}`,  httpOptions).pipe
  //  tap(_ => this.log('fetched ventures ventureid=${venrureid}')),
  (retry(2), catchError(this.handleError));

}
  log(arg0: string): void {
    throw new Error('Method not implemented.');
  }



public getAllVentures(): Observable<any> {
  return this.httpclient.get<Venture[]>(`http://localhost:8086/api/venture`,  httpOptions).pipe
  (retry(2), catchError(this.handleError));

}

public deleteVenture(ventureid: number): Observable<any>  {
  return this.httpclient.delete<Venture>(`http://localhost:8086/api/venture/${ventureid}`,  httpOptions).pipe
  //  tap(_ => this.log(`deleted venture ventureid=${ventureid} `)),
  (retry(2), catchError(this.handleError));

}

handleError(error:HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // client-side error
    errorMessage = `Error: ${error.error.message}`;
    console.error('Client Side Error: ', errorMessage);
  } else {
    // server-side error
    errorMessage = `Error Code: ${error.status}\nError Message: ${error.error.message}`;
    console.error('Server Side Error: ', error);
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}

}


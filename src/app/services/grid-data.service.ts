import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { dataUrl } from './../config/constant';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GridDataService {

  constructor(private http:HttpClient) { }

  /**
   * @ function : getGridData()
   * @ Purpose  : Creating Http request to get json data
   * @ version  : 1.0.1
   * @ author   : Shivam
   */
  
   public getGridData() :Observable<any>{
    return this.http
    .get(dataUrl)
    .pipe(retry(1),catchError(this.errorHandler))
  }

  /**
   * @ function : errorHandler()
   * @ Purpose  : Handling error message
   * @ version  : 1.0.1
   * @ author   : Shivam
   */

  public errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}

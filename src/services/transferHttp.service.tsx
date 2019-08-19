import axios from 'axios';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

export default class TransferHttpService {

  /**
   * Performs a request with `get` http method.
   */
  get(url: string, options?: any): Observable<any> {
    return from(axios.get(url, options))
      .pipe(map(result => result.data));
  }

  /**
   * Performs a request with `post` http method.
   */
  post(url: string, body?: any, options?: any): Observable<any> {
    return from(axios.post(url, body, options))
      .pipe(map(result => result.data));
  }

  /**
   * Performs a request with `patch` http method 
   */
  patch(url: string, body?: any, options?: any): Observable<any> {
    return from(axios.patch(url, body, options))
      .pipe(map(result => result.data)); 
  }

}

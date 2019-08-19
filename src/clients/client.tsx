import { Observable } from 'rxjs';

import TransferHttpService from '../services/transferHttp.service';

export default class Client {

  private base: string;
  private transferHttpService: TransferHttpService;

  constructor(base: string) {
    this.base = base;
    this.transferHttpService = new TransferHttpService();
  }

  get(uri: string, options?: any): Observable<any> {
    const url = this.base + uri;
    return this.transferHttpService.get(url, options);
  }

  post(uri: string, options?: any): Observable<any> {
    const url = this.base + uri;
    return this.transferHttpService.post(url, options);
  }

  patch(uri: string, options?: any): Observable<any> {
    const url = this.base + uri;
    return this.transferHttpService.patch(url, options);
  }

}

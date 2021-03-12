import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  getImage(url:string): Observable<Blob> {
    console.log('Image service response >> ', this.http.get(url, {responseType: 'blob'}));
    return this.http.get(url, {responseType : "blob"})
    // .map((res: Response) => res.blob());
  }
}

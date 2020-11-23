import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../environments/environment';

const BACKEND_URL = environment.apiUrl + '/users/';

@Injectable({providedIn: 'root'})
export class AppService {

  constructor(
    private http: HttpClient
  ){}
  contactUsFunction(
    name: string,
    email: string,
    subject: string,
    message: string
  ) {
    let emailBody = {
      name,
      email,
      subject,
      message,
    };

    this.http.post(BACKEND_URL + 'contact', emailBody).subscribe((response) => {
      //this.openSnackBar('Email sent successfully');
      //cons'.log
      location.reload();

    });
  }
}

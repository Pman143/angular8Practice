import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

interface AuthResponseDataLogin {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: true;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
      'AIzaSyAB3kiJaUdf-eUtDAn2uy0r1rHxk_bljnQ',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(catchError(
      errorRes => {
        let errorMessage = 'An unknown error occurred!';
        if (!errorRes.error || !errorRes.error.error) {
          return throwError(errorRes);
        }
        switch (errorRes.error.error.message) {
          case 'EMAIL_EXISTS':
            errorMessage = 'This email exists already';
            break;
        }
        return throwError(errorMessage);
      }
    ));
  }

  login(email: string, password: string){
    return this.http.post<AuthResponseDataLogin>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
      'AIzaSyAB3kiJaUdf-eUtDAn2uy0r1rHxk_bljnQ', {
      email: email,
      password: password,
      returnSecureToken: true
    });
  }
}

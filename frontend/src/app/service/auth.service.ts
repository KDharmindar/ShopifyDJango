import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthService {
	private url = 'http://54.89.230.137/api/v1/login/';
    constructor(private http: HttpClient) { }
 


    login(username: string, password: string) {
    	console.log(username);
        return this.http.
        	post(this.url, { 'username': username, 'password': password,'csrfmiddlewaretoken': '{{ csrf_token }}' })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
 
                return user;
            });
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
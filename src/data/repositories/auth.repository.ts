import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse, UserCredentials } from '../../core/domain/models/user.model';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class AuthRepository {
    private baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}

    login(credentials: UserCredentials): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(`${this.baseUrl}/auth/login`, credentials);
    }

    refreshToken(token: string): Observable<{ token: string }> {
        return this.http.post<{ token: string }>(`${this.baseUrl}/auth/refresh`, { token });
    }
}
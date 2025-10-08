import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { UserMapper } from '../mappers/user.mapper';
import { environment } from '../../../../../environments/environment';
import { AuthResponse, UserCredentials, UserEntity } from '../../../../../domain/auth/entities/user.entity';

@Injectable({ providedIn: 'root' })
export class AuthImplementationRepository {
  private readonly baseUrl = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  login(credentials: UserCredentials): Observable<UserEntity> {
    return this.http
      .post<AuthResponse>(`${this.baseUrl}/auth/login`, credentials)
      .pipe(map((response) => UserMapper.toEntity(response)));
  }
}

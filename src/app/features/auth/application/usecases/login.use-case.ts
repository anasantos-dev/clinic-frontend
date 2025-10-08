import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRepository } from '../../../../../domain/auth/repositories/auth.repository';
import { UserCredentials, UserEntity } from '../../../../../domain/auth/entities/user.entity';


@Injectable({
  providedIn: 'root',
})
export class LoginUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  execute(credentials: UserCredentials): Observable<UserEntity> {
    return this.authRepository.login(credentials);
  }
}

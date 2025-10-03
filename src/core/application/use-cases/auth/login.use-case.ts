import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse, UserCredentials } from '../../../domain/models/user.model';
import { AuthRepository } from '../../../../data/repositories/auth.repository';


@Injectable({
    providedIn: 'root'
})
export class LoginUseCase {
    constructor(private authRepository: AuthRepository) {}

    execute(credentials: UserCredentials): Observable<AuthResponse> {
        return this.authRepository.login(credentials);
    }
}
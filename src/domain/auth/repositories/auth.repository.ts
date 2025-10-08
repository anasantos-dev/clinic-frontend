import { Observable } from 'rxjs';
import { UserEntity, UserCredentials } from '../entities/user.entity';

export abstract class AuthRepository {
  /**
   * Efetua o login do usuário com base nas credenciais fornecidas.
   * Retorna um Observable com a entidade de domínio UserEntity.
   */
  abstract login(credentials: UserCredentials): Observable<UserEntity>;

  /**
   * Revalida o token atual e retorna um novo.
   */
  abstract refreshToken(token: string): Observable<{ token: string }>;
}

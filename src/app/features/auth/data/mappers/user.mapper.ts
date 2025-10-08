import { AuthResponse, UserEntity } from "../../../../../domain/auth/entities/user.entity";


export class UserMapper {
  static toEntity(response: AuthResponse): UserEntity {
    return {
      id: response.user.id,
      email: response.user.email,
      name: response.user.name,
      role: response.user.role,
    };
  }
}

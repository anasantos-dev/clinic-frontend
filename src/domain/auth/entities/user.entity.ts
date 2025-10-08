export interface UserEntity {
    id?: string;
    email: string;
    name?: string;
    role?: string;
}

export interface UserCredentials {
    email: string;
    password: string;
}

export interface AuthResponse {
    user: UserEntity;
    token: string;
    refreshToken: string;
}

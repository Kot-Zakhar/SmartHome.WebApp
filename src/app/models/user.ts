export class User {
    id: number;
    publicId: string;
    email: string;
    passwordHash: string;
    name: string;
    authToken?: string;
    refreshToken?: string;
}

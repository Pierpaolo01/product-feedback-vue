export interface AuthenticatedUser {
  id: number;
  name: string;
  avatarUurl: string;
  permissions: string[];
}

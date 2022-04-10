export interface AuthenticatedUser {
  id: number;
  name: string;
  avatar_url: string;
  permissions: string[];
}

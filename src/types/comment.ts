import { AuthenticatedUser } from '@/types/authenticatedUser'

export interface Comment {
  id: number;
  comment: string;
  user: AuthenticatedUser;
  suggestionId: number;
}

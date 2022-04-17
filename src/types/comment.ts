import { AuthenticatedUser } from '@/types/authenticatedUser'

export interface Comment {
  comment: string;
  user: AuthenticatedUser;
  suggestionId: number;
  id: number;
}

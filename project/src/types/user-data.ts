
export type UserData = {
  avatarUrl: string
  email: string
  id: number
  name: string
  token: string
} | null;

export type UserComment = {
  id: string;
  rating: number;
  comment: string;
};

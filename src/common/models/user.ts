export type AuthUser = {
  jwt: string | null;
  user: User;
};

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  phoneNumber: string;
};

export type UserToEdit = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

export enum Role {
  Admin = "Admin",
  User = "User",
}

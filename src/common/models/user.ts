export type AuthUser = {
  jwt: string | null;
  user: User;
};

export type User = {
  id: string;
  email: string;
  fisrtName: string;
  lastName: string;
  role: string;
  phoneNumber: string;
};

export enum Role {
  Admin = "Admin",
  User = "User",
}

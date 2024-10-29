// src/types/user.types.ts

export interface User {
  name: string;
  email: string;
  about: string;
  contacts?: {
    phone?: string;
    address?: string;
  };
  profilePicture: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'user' | 'manager'; // Restricting roles with a union type
  avatarUrl?: string;                // Optional field
  createdAt: string;                 // ISO Date string
}

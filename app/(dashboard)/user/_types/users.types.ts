export type UserStatus = "Active" | "Banned";

export interface User {
  readonly id: number;
  name: string;
  avatar: string;
  company: string;
  role: string;
  verified: boolean;
  status: UserStatus;
}

export interface UsersTableProps {
  users: User[];
}

export interface UserTableRowProps {
  user: User;
}

export interface UserActionsMenuProps {
  userId: number;
}

export interface UserEmptyStateProps {
  searchQuery: string;
}

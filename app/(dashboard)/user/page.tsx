import Button from "@/app/components/ui/Button";
import { USERS_DATA } from "@/app/(dashboard)/user/_components/usersData";
import { UsersTable } from "@/app/(dashboard)/user/_components/UsersTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users - Minimal-UI",
  description:
    "Manage user accounts efficiently. Search, filter, view user roles and verification statuses, and update or delete user profiles seamlessly from the admin dashboard.",
};

const UsersPage = () => {
  return (
    <div className="flex flex-col w-full gap-12">
      <div className="flex w-full justify-between items-center">
        <h2 className="font-bold text-2xl text-dark-gray">Users</h2>
        <Button variant="primary">+ New User</Button>
      </div>

      <UsersTable users={USERS_DATA} />
    </div>
  );
};

export default UsersPage;

"use client";

import { useState } from "react";
import Button from "@/app/components/ui/Button";
import SearchInput from "@/app/components/ui/SearchInput";
import { ListFilterIcon, ArrowUpIcon } from "lucide-react";
import { UsersTableProps } from "@/app/(dashboard)/user/_types/users.types";
import { UserTableRow } from "@/app/(dashboard)/user/_components/UserTableRow";
import { UserEmptyState } from "@/app/(dashboard)/user/_components/UserEmptyState";

export const UsersTable = ({ users }: UsersTableProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex flex-col gap-4 py-8 bg-pure-white rounded-2xl shadow-2xl">
      <div className="flex w-full justify-between items-center px-2 sm:px-6">
        <SearchInput
          placeholder="Search user..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <Button variant="icon" aria-label="Filter Icon">
          <ListFilterIcon className="w-5 h-5 text-medium-gray" />
        </Button>
      </div>

      <div className="overflow-y-auto max-h-100 w-full [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-border-gray [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-border-gray">
        <table className="w-full min-w-200 text-left border-collapse">
          <thead className="bg-border-gray/40 sticky top-0 z-20 backdrop-blur-md">
            <tr>
              <th className="p-4 text-sm font-semibold text-very-dark-gray cursor-pointer select-none">
                <div className="flex items-center gap-1">
                  Name
                  <ArrowUpIcon className="w-3.5 h-3.5 text-dark-gray stroke-[2.5]" />
                </div>
              </th>
              <th className="p-4 text-sm font-semibold text-medium-gray">
                Company
              </th>
              <th className="p-4 text-sm font-semibold text-medium-gray">
                Role
              </th>
              <th className="p-4 text-sm font-semibold text-medium-gray">
                Verified
              </th>
              <th className="p-4 text-sm font-semibold text-medium-gray">
                Status
              </th>
              <th className="p-4 w-10"></th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <UserTableRow key={user.id} user={user} />
              ))
            ) : (
              <UserEmptyState searchQuery={searchQuery} />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

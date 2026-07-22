"use client";

import { CheckIcon } from "lucide-react";
import { UserActionsMenu } from "@/app/(dashboard)/user/_components/UserActionsMenu";
import { UserTableRowProps } from "@/app/(dashboard)/user/_types/users.types";

export const UserTableRow = ({ user }: UserTableRowProps) => {
  return (
    <tr className="hover:bg-soft-gray/50 transition-colors border-b border-b-very-dark-gray">
      <td className="p-4 whitespace-nowrap">
        <div className="flex items-center gap-3">
          <img
            src={user.avatar}
            alt=""
            className="w-10 h-10 rounded-full object-cover bg-soft-gray"
          />
          <span className="font-semibold text-dark-gray">{user.name}</span>
        </div>
      </td>

      <td className="p-4 text-very-dark-gray whitespace-nowrap">
        {user.company}
      </td>
      <td className="p-4 text-very-dark-gray whitespace-nowrap">{user.role}</td>

      <td className="p-2 text-center align-middle">
        <div className="flex items-center justify-center">
          {user.verified ? (
            <div className="w-7 h-7 rounded-full bg-success/15 text-success flex items-center justify-center">
              <CheckIcon className="w-3 h-3 stroke-3" />
            </div>
          ) : (
            <span className="text-dark-gray text-2xl">-</span>
          )}
        </div>
      </td>

      <td className="p-4 whitespace-nowrap">
        <span
          className={`px-2.5 py-1 rounded-md text-xs font-bold ${
            user.status === "Active"
              ? "bg-success/15 text-success"
              : "bg-danger/10 text-danger"
          }`}
        >
          {user.status}
        </span>
      </td>

      <UserActionsMenu userId={user.id} />
    </tr>
  );
};

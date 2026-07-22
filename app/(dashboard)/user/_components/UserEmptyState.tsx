import { UserXIcon } from "lucide-react";
import { UserEmptyStateProps } from "@/app/(dashboard)/user/_types/users.types";

export const UserEmptyState = ({ searchQuery }: UserEmptyStateProps) => {
  return (
    <tr>
      <td colSpan={6} className="py-12 text-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="w-12 h-12 rounded-full bg-soft-gray flex items-center justify-center text-medium-gray">
            <UserXIcon className="w-6 h-6" />
          </div>
          <p className="font-semibold text-very-dark-gray text-base">
            No users found
          </p>
          <p className="text-xs text-medium-gray">
            No matching results for "{searchQuery}". Try searching for another
            name.
          </p>
        </div>
      </td>
    </tr>
  );
};

"use client";
import { useState } from "react";
import Button from "@/app/components/ui/Button";
import { MoreVerticalIcon, PencilIcon, Trash2Icon } from "lucide-react";
import { UserActionsMenuProps } from "@/app/(dashboard)/user/_types/users.types";

export const UserActionsMenu = ({ userId }: UserActionsMenuProps) => {
  const [activeMenuId, setActiveMenuId] = useState<number | null>(null);
  const toggleMenu = (id: number) => {
    setActiveMenuId((prev) => (prev === id ? null : id));
  };

  return (
    <td className="p-4 relative">
      <Button
        variant="icon"
        onClick={() => toggleMenu(userId)}
        aria-label={`Actions menu for user ${userId}`}
      >
        <MoreVerticalIcon className="w-5 h-5 text-medium-gray" />
      </Button>

      <div
        className={`absolute ${
          activeMenuId === userId ? "scale-100" : "scale-0"
        } origin-top-right right-6 top-12 z-30 w-36 bg-pure-white duration-300 rounded-xl shadow-xl border border-soft-gray py-1.5 flex flex-col gap-0.5 transition-all`}
      >
        <Button
          variant="menuItem"
          onClick={() => setActiveMenuId(null)}
          className="text-very-dark-gray hover:bg-border-gray"
        >
          <PencilIcon className="w-4 h-4 text-medium-gray" />
          Edit
        </Button>
        <Button
          variant="menuItem"
          onClick={() => setActiveMenuId(null)}
          className="text-danger hover:bg-danger/10"
        >
          <Trash2Icon className="w-4 h-4" />
          Delete
        </Button>
      </div>
    </td>
  );
};

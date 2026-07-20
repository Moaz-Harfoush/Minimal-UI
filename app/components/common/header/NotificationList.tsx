"use client";

import { memo } from "react";
import NotificationItem from "@/app/components/common/header/NotificationItem";
import { NOTIFICATIONS } from "./notificationsData";

const newNotifications = NOTIFICATIONS.filter((n) => n.isNew);
const oldNotifications = NOTIFICATIONS.filter((n) => !n.isNew);

const NotificationList = () => {
  return (
    <div className="max-h-90 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-border-gray [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-border-gray">
      {newNotifications.length > 0 && (
        <>
          <div className="px-5 py-2 text-xs text-medium-gray bg-soft-gray/50 uppercase tracking-wider">
            New
          </div>
          <div className="flex flex-col">
            {newNotifications.map((item) => (
              <NotificationItem key={item.id} item={item} />
            ))}
          </div>
        </>
      )}

      {oldNotifications.length > 0 && (
        <>
          <div className="px-5 py-2 text-xs text-medium-gray bg-soft-gray/50 uppercase tracking-wider">
            Before that
          </div>
          <div className="flex flex-col">
            {oldNotifications.map((item) => (
              <NotificationItem key={item.id} item={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default memo(NotificationList);

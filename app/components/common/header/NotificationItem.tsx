import { Clock } from "lucide-react";
import { NotificationType } from "@/app/components/common/header/notificationsData";
import { memo } from "react";

interface NotificationItemProps {
  item: NotificationType;
}

const NotificationItem = ({ item }: NotificationItemProps) => {
  return (
    <div
      className={`flex gap-3 px-5 py-3 hover:bg-border-gray/50 transition-colors cursor-pointer border-b border-border-gray/60 items-start ${
        item.isNew ? "bg-soft-gray" : "bg-transparent"
      }`}
    >
      <div className="h-10 w-10 shrink-0 flex items-center justify-center overflow-hidden rounded-full border border-border-gray bg-soft-gray">
        <img
          src={item.avatar}
          alt={
            item.type === "user"
              ? `${item.title} avatar`
              : `${item.type} notification icon`
          }
        />
      </div>

      <div className="flex flex-col gap-0.5">
        <p className="text-sm text-medium-gray leading-relaxed">
          <span className="font-semibold text-dark-gray">{item.title}</span>{" "}
          {item.desc}
        </p>
        <span className="flex items-center gap-1 text-xs text-medium-gray/75 mt-0.5">
          <Clock className="w-3.5 h-3.5" /> {item.time}
        </span>
      </div>
    </div>
  );
};

export default memo(NotificationItem);

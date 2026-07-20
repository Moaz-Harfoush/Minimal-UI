export interface NotificationType {
  id: number;
  title: string;
  desc: string;
  time: string;
  isNew: boolean;
  avatar: string;
  type: "package" | "user" | "chat" | "mail" | "shipping";
}

export const NOTIFICATIONS: NotificationType[] = [
  {
    id: 1,
    title: "Your order is placed",
    desc: "waiting for shipping",
    time: "2 years",
    isNew: true,
    avatar: "/assets/icons/notification/ic-notification-package.svg",
    type: "package",
  },
  {
    id: 2,
    title: "Teresa Luettgen",
    desc: "answered to your comment on the Minimal",
    time: "3 years",
    isNew: true,
    avatar: "/assets/images/avatar/avatar-2.webp",
    type: "user",
  },
  {
    id: 3,
    title: "You have new message",
    desc: "5 unread messages",
    time: "3 years",
    isNew: false,
    avatar: "/assets/icons/notification/ic-notification-chat.svg",
    type: "chat",
  },
  {
    id: 4,
    title: "You have new mail",
    desc: "sent from Guido Padberg",
    time: "2 years",
    isNew: false,
    avatar: "/assets/icons/notification/ic-notification-mail.svg",
    type: "mail",
  },
  {
    id: 5,
    title: "Delivery updates",
    desc: "Your package has been delivered",
    time: "1 year",
    isNew: false,
    avatar: "/assets/icons/notification/ic-notification-shipping.svg",
    type: "shipping",
  },
];

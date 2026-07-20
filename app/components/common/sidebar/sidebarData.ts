export interface Team {
  id: number;
  name: string;
  logo: string;
  type: "Free" | "Pro";
}

interface SidebarLink {
  id: number;
  href: string;
  image: string;
  text: string;
  badge?: string;
}

export const TEAMS_DATA: Team[] = [
  {
    id: 1,
    name: "Team 1",
    logo: "/assets/icons/workspaces/logo-1.webp",
    type: "Free",
  },
  {
    id: 2,
    name: "Team 2",
    logo: "/assets/icons/workspaces/logo-2.webp",
    type: "Pro",
  },
  {
    id: 3,
    name: "Team 3",
    logo: "/assets/icons/workspaces/logo-3.webp",
    type: "Pro",
  },
];

export const SIDEBAR_LINKS: SidebarLink[] = [
  {
    id: 1,
    href: "/",
    image: "/assets/icons/navbar/ic-analytics.svg",
    text: "Dashboard",
  },
  {
    id: 2,
    href: "/user",
    image: "/assets/icons/navbar/ic-user.svg",
    text: "User",
  },
  {
    id: 3,
    href: "/product",
    image: "/assets/icons/navbar/ic-cart.svg",
    text: "Product",
    badge: "+3",
  },
  {
    id: 4,
    href: "/blog",
    image: "/assets/icons/navbar/ic-blog.svg",
    text: "Blog",
  },
  {
    id: 5,
    href: "/sign-in",
    image: "/assets/icons/navbar/ic-lock.svg",
    text: "Sign in",
  },
  {
    id: 6,
    href: "/not-found",
    image: "/assets/icons/navbar/ic-disabled.svg",
    text: "Not Found",
  },
];

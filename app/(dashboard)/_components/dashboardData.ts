import {
  NewsItem,
  TimelineItem,
  TaskItem,
  TrafficSiteItem,
} from "@/app/(dashboard)/_types/dashboard.types";

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Whiteboard Templates By Industry Leaders",
    description: "The Nagasaki Lander is the trademarked name...",
    time: "3 years",
    image: "/assets/images/cover/cover-1.webp",
  },
  {
    id: 2,
    title: "Tesla Cybertruck-inspired camper trailer...",
    description:
      "New range of formal shirts are designed keeping you in mind...",
    time: "2 years",
    image: "/assets/images/cover/cover-2.webp",
  },
  {
    id: 3,
    title: "Designify Agency Landing Page Design",
    description: "Andy shoes are designed to keeping in mind...",
    time: "3 years",
    image: "/assets/images/cover/cover-3.webp",
  },
  {
    id: 4,
    title: "✨ What is Done is Done ✨",
    description: "The Football Is Good For Training And Recreational Purposes",
    time: "3 years",
    image: "/assets/images/cover/cover-4.webp",
  },
  {
    id: 5,
    title: "Fresh Prince",
    description: "Fresh Prince New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U...",
    time: "2 years",
    image: "/assets/images/cover/cover-5.webp",
  },
];

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "1983, orders, $4220",
    date: "08 Nov 2023 12:00 am",
    colorClass: "bg-bright-blue",
  },
  {
    id: 2,
    title: "12 Invoices have been paid",
    date: "09 Apr 2024 12:00 am",
    colorClass: "bg-success",
  },
  {
    id: 3,
    title: "Order #37745 from September",
    date: "12 Sep 2023 12:00 am",
    colorClass: "bg-bright-cyan",
  },
  {
    id: 4,
    title: "New order placed #XF-2356",
    date: "01 Jan 2024 12:00 am",
    colorClass: "bg-[#eab308]",
  },
  {
    id: 5,
    title: "New order placed #XF-2346",
    date: "23 Apr 2024 12:00 am",
    colorClass: "bg-danger",
  },
];

export const initialTasksData: TaskItem[] = [
  { id: 1, title: "Prepare Monthly Financial Report", completed: false },
  { id: 2, title: "Design New Marketing Campaign", completed: false },
  { id: 3, title: "Analyze Customer Feedback", completed: false },
  { id: 4, title: "Update Website Content", completed: false },
  { id: 5, title: "Conduct Market Research", completed: false },
];

export const trafficSitesData: TrafficSiteItem[] = [
  { id: 1, name: "Facebook", value: "19.5k", iconName: "facebook" },
  { id: 2, name: "Google", value: "91.2k", iconName: "google" },
  { id: 3, name: "Linkedin", value: "69.8k", iconName: "linkedin" },
  { id: 4, name: "Twitter", value: "84.9k", iconName: "twitter" },
];

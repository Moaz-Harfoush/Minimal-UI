import {
  ConversionDataItem,
  SubjectDataItem,
  VisitDataItem,
  WebsiteVisitItem,
  StatCardProps,
} from "@/app/(dashboard)/_types/analyses.types";

export const conversionData: ConversionDataItem[] = [
  { country: "Italy", 2022: 44, 2023: 53 },
  { country: "Japan", 2022: 55, 2023: 32 },
  { country: "China", 2022: 41, 2023: 33 },
  { country: "Canada", 2022: 64, 2023: 52 },
  { country: "France", 2022: 22, 2023: 13 },
];

export const subjectsData: SubjectDataItem[] = [
  { subject: "English", Series1: 80, Series2: 20, Series3: 40 },
  { subject: "History", Series1: 50, Series2: 30, Series3: 80 },
  { subject: "Physics", Series1: 40, Series2: 40, Series3: 80 },
  { subject: "Geography", Series1: 40, Series2: 80, Series3: 10 },
  { subject: "Chinese", Series1: 100, Series2: 20, Series3: 40 },
  { subject: "Math", Series1: 20, Series2: 80, Series3: 10 },
];

export const regionVisitsData: VisitDataItem[] = [
  { name: "Africa", value: 500, color: "#FF4842" },
  { name: "America", value: 3500, color: "#0066FF" },
  { name: "Asia", value: 2500, color: "#FFC107" },
  { name: "Europe", value: 1500, color: "#006B99" },
];

export const websiteVisitsData: WebsiteVisitItem[] = [
  { month: "Jan", "Team A": 43, "Team B": 51 },
  { month: "Feb", "Team A": 33, "Team B": 69 },
  { month: "Mar", "Team A": 22, "Team B": 47 },
  { month: "Apr", "Team A": 37, "Team B": 67 },
  { month: "May", "Team A": 67, "Team B": 40 },
  { month: "Jun", "Team A": 68, "Team B": 37 },
  { month: "Jul", "Team A": 37, "Team B": 24 },
  { month: "Aug", "Team A": 24, "Team B": 70 },
  { month: "Sep", "Team A": 55, "Team B": 24 },
];

export const statsCardsData: StatCardProps[] = [
  {
    title: "Weekly sales",
    value: "714k",
    percentage: "+2.6%",
    isPositive: true,
    icon: "/assets/icons/glass/ic-glass-bag.svg",
    bgGradient: "bg-gradient-to-br from-blue-50/80 to-blue-100/40",
    textColor: "text-blue-900",
  },
  {
    title: "New users",
    value: "1.35m",
    percentage: "-0.1%",
    isPositive: false,
    icon: "/assets/icons/glass/ic-glass-users.svg",
    bgGradient: "bg-gradient-to-br from-purple-50/80 to-purple-100/40",
    textColor: "text-purple-900",
  },
  {
    title: "Purchase orders",
    value: "1.72m",
    percentage: "+2.8%",
    isPositive: true,
    icon: "/assets/icons/glass/ic-glass-buy.svg",
    bgGradient: "bg-gradient-to-br from-amber-50/80 to-amber-100/40",
    textColor: "text-amber-900",
  },
  {
    title: "Messages",
    value: "234",
    percentage: "+3.6%",
    isPositive: true,
    icon: "/assets/icons/glass/ic-glass-message.svg",
    bgGradient: "bg-gradient-to-br from-rose-50/80 to-rose-100/40",
    textColor: "text-rose-900",
  },
];

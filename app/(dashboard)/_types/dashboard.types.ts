export interface NewsItem {
  id: number;
  title: string;
  description: string;
  time: string;
  image: string;
}

export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  colorClass: string;
}

export interface TaskItem {
  id: number;
  title: string;
  completed: boolean;
}

export interface TrafficSiteItem {
  id: number;
  name: string;
  value: string;
  iconName: "facebook" | "google" | "linkedin" | "twitter";
}

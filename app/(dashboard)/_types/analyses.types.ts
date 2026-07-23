export interface ConversionDataItem {
  country: string;
  2022: number;
  2023: number;
}

export interface SubjectDataItem {
  subject: string;
  Series1: number;
  Series2: number;
  Series3: number;
}

export interface VisitDataItem {
  name: string;
  value: number;
  color: string;
}

export interface WebsiteVisitItem {
  month: string;
  "Team A": number;
  "Team B": number;
}

export interface StatCardProps {
  title: string;
  value: string;
  percentage: string;
  isPositive?: boolean;
  icon: string;
  bgGradient: string;
  textColor: string;
}

export interface RechartsCustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number | string;
    color: string;
    payload: VisitDataItem;
  }>;
  label?: string | number;
}

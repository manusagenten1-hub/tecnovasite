import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description?: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BenefitItem {
  title: string;
}

export interface AudienceItem {
  label: string;
  icon: LucideIcon;
}

export interface StrategyItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PortfolioItem {
  tag: string;
  name: string;
  description: string;
  services: string[];
  imageUrl: string;
  link: string;
}
import { Users, FileText, Truck, Briefcase, type LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  detail: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "talent-sourcing",
    icon: Users,
    title: "Talent Sourcing",
    summary: "We identify and vet skilled candidates matched to your exact requirements.",
    detail:
      "Our sourcing team works directly with employers to understand role requirements, then draws on an established network of pre-screened candidates across construction, logistics, hospitality, and skilled trades. Every candidate is interviewed and reference-checked before we put a name in front of you.",
    image: "/images/service-sourcing.jpg",
  },
  {
    slug: "visa-documentation",
    icon: FileText,
    title: "Visa & Documentation",
    summary: "End-to-end support for work permits, visas, and compliance paperwork.",
    detail:
      "We manage the documentation process from application to approval, keeping employers and candidates informed at every stage. That means fewer delays, fewer rejected applications, and less administrative load on your HR team.",
    image: "/images/elite-process.jpg",
  },
  {
    slug: "logistics-relocation",
    icon: Truck,
    title: "Logistics & Relocation",
    summary: "Travel, housing, and onboarding logistics handled from offer to arrival.",
    detail:
      "From flights to housing arrangements, we coordinate the practical details of relocation so new hires arrive ready to work. Our team stays in contact through the first weeks on the ground to resolve anything that comes up.",
    image: "/images/elite-arrival.jpg",
  },
  {
    slug: "hr-consultancy",
    icon: Briefcase,
    title: "HR Consultancy",
    summary: "Workforce planning and HR guidance for growing teams.",
    detail:
      "We advise on workforce structure, retention, and compliance, drawing on patterns from 3,200+ placements across construction, hospitality, and healthcare. Engagements range from a single planning session to an ongoing retainer.",
    image: "/images/service-hr.jpg",
  },
];

export const stats = [
  { value: "15+", label: "Years of experience" },
  { value: "3,200+", label: "Placements made" },
  { value: "180+", label: "Clients served" },
  { value: "22", label: "Countries covered" },
];

export const clientNames = [
  "Apex Group",
  "Northbridge",
  "Cascade Logistics",
  "Harbor & Co",
  "Velum Industries",
  "Stonefield Resorts",
  "Coral Bay Hospitality",
  "Redline Construction",
  "Atoll Beverages",
  "Meridian Airways",
  "Bluewater Marine",
  "Summit Contracting",
];

export const checklistItems = [
  "A dedicated account manager for every client",
  "Candidates vetted and reference-checked before introduction",
  "Documentation handled in-house, not outsourced",
  "Transparent pricing with no hidden placement fees",
];

export const processSteps = [
  {
    step: "01",
    title: "Brief",
    description: "We sit down with your team to understand the role, the timeline, and the budget.",
  },
  {
    step: "02",
    title: "Source & Vet",
    description: "We shortlist candidates from our network and run interviews and reference checks.",
  },
  {
    step: "03",
    title: "Document",
    description: "Work permits, visas, and compliance paperwork move through our in-house process.",
  },
  {
    step: "04",
    title: "Arrive & Onboard",
    description: "We coordinate travel and housing, and stay in touch through the first weeks on the job.",
  },
];

export const sourceCountries = [
  "Sri Lanka",
  "India",
  "Bangladesh",
  "Nepal",
  "Philippines",
  "Indonesia",
];

export const testimonials = [
  {
    quote:
      "MES filled twelve housekeeping roles for our peak season in eleven days. That turnaround is why we keep coming back.",
    name: "Operations Director",
    company: "Cascade Logistics",
  },
  {
    quote:
      "The documentation process used to be our biggest bottleneck. Since MES took it over, it isn't a conversation we have to have anymore.",
    name: "HR Manager",
    company: "Harbor & Co",
  },
  {
    quote:
      "Every housekeeping and maintenance hire we've made since 2019 has come through MES. We stopped posting jobs ourselves.",
    name: "General Manager",
    company: "Stonefield Resorts",
  },
];

import {
  Users,
  Truck,
  FileText,
  Briefcase,
  CalendarClock,
  Building2,
  Layers,
  ClipboardList,
  Route,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

export const contact = {
  phones: ["(+960) 400 8080", "(+960) 331 0404"],
  hotlines: ["(+960) 777 8525", "(+960) 777 7775"],
  emails: ["info@mes.mv", "marketing@mes.mv", "sales@mes.mv"],
  address: ["Niyandhurumaage, 9th floor", "Alimas Magu, Male, 20260"],
};

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  detail: string;
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "recruitment",
    icon: Users,
    title: "Recruitment & Manpower",
    summary: "Skilled, semi-skilled, and professional recruitment for the roles you need filled.",
    detail:
      "We recruit and supply skilled, semi-skilled, and professional workers for employers in the Maldives, and help local Maldivians find suitable jobs. You tell us the role; we coordinate candidates through to selection.",
    image: "/images/service-sourcing.jpg",
    imageAlt: "Employer and candidate shaking hands after an interview",
  },
  {
    slug: "logistics",
    icon: Truck,
    title: "Logistical Services",
    summary: "Getting your new hires from the hiring decision to arrival on site.",
    detail:
      "Once a hire is confirmed, we coordinate travel and arrival so the worker reaches the job ready to start. One team handles it, so you are not chasing separate agents.",
    image: "/images/elite-arrival.jpg",
    imageAlt: "MES officer welcoming arriving workers at an airport concourse",
  },
  {
    slug: "documents",
    icon: FileText,
    title: "Document & Passport Handling",
    summary: "Work permits, visas, passports, and statutory paperwork in one place.",
    detail:
      "We handle statutory and legal documentation, visas, work permits, passports, and qualification and testing support. It sits with the same team that runs the recruitment, so nothing falls between two offices.",
    image: "/images/elite-process.jpg",
    imageAlt: "MES specialist reviewing a passport and employment documents",
  },
  {
    slug: "hr-consultancy",
    icon: Briefcase,
    title: "HR Consultancy",
    summary: "Practical HR guidance for employers planning their workforce.",
    detail:
      "Guidance for employers making workforce decisions, drawing on the same team that runs recruitment, documentation, and logistics day to day.",
    image: "/images/service-hr.jpg",
    imageAlt: "Two people reviewing staffing documents at a desk",
  },
];

export const sectors = [
  "Hospitality",
  "Health",
  "Retail",
  "Real estate",
  "Construction",
  "Engineering",
  "Infrastructure",
];

export const clientNames = [
  "Coco Palm Bodu Hithi",
  "Tree Top Hospital",
  "SIMDI",
  "Asters",
  "SJ Construction",
  "DAMAS Real Estate",
  "HAZA",
  "KAIMOO Group",
  "iNOCA",
  "Happy Market",
  "ROtime Engineering and Technology",
  "Island Expert",
  "Reefside",
  "MEGA Maldives",
  "Varindera Construction",
  "Renaatus",
  "SMC Infrastructures",
  "Mohan Mutha Infrastructures",
  "Hunan No. 6 Engineering",
  "Beijing Urban Construction",
  "Dongfang Electric International Corporation",
  "China Machinery Engineering Corporation",
  "China State Construction Engineering",
  "Sinohydro Corporation",
];

export const stats: { value: string; label: string; icon: LucideIcon }[] = [
  { value: "20+", label: "Years of experience", icon: CalendarClock },
  { value: `${clientNames.length}`, label: "Named clients", icon: Building2 },
  { value: `${sectors.length}`, label: "Sectors served", icon: Layers },
  { value: `${services.length}`, label: "Service lines", icon: Briefcase },
];

export const checklistItems = [
  "Over 20 years of experience with businesses of all sizes",
  "Recruitment managed end to end, from brief to arrival",
  "Visa, work-permit, and passport handling in-house",
  "One team and one point of contact for the whole process",
];

export const processSteps: { step: string; title: string; description: string; icon: LucideIcon }[] = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Understand the requirement",
    description: "The role, the number of people, the skill level, and when you need them.",
  },
  {
    step: "02",
    icon: Route,
    title: "Coordinate the route",
    description: "Candidate selection, visas, work permits, and travel, run by one team.",
  },
  {
    step: "03",
    icon: BadgeCheck,
    title: "Support readiness",
    description: "Arrival and on-the-ground coordination until the worker starts.",
  },
];

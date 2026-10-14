import React from "react";
import {
  IconBuilding,
  IconSchool,
  IconFlask,
  IconUsers,
  IconAward,
  IconCalendar,
  IconBook,
  IconShieldCheck,
  IconBriefcase,
  IconChartBar,
  IconCompass,
  IconFileText,
  IconPhoneCall,
} from "@tabler/icons-react";

export interface SubNavItem {
  title: string;
  href: string;
  description?: string;
  external?: boolean;
  icon: React.ReactNode;
}

export interface NavSection {
  title: string;
  items: SubNavItem[];
  featuredLink?: {
    label: string;
    href: string;
  };
}

export const NAV_SECTIONS: NavSection[] = [
  {
    title: "About IITK",
    items: [
      {
        title: "About IITK",
        href: "/about",
        description: "Heritage, mission, and legacy of excellence.",
        icon: <IconBuilding size={16} />,
      },
      {
        title: "Academics",
        href: "/about#academics",
        description: "Flexible curriculum and distinguished faculty.",
        icon: <IconSchool size={16} />,
      },
      {
        title: "Research & Development",
        href: "/about#research",
        description: "Cutting-edge breakthroughs and national labs.",
        icon: <IconFlask size={16} />,
      },
      {
        title: "Alumni Network",
        href: "/about#alumni",
        description: "Global leaders across technology and academia.",
        icon: <IconUsers size={16} />,
      },
      {
        title: "Faculty Mentors",
        href: "/about#faculty",
        description: "Pioneering educators and researchers.",
        icon: <IconAward size={16} />,
      },
      {
        title: "Campus Life & Fests",
        href: "/about#activities",
        description: "Leadership, cultural fests, and student clubs.",
        icon: <IconCalendar size={16} />,
      },
    ],
    featuredLink: {
      label: "Explore Academic Programs →",
      href: "/about#academics",
    },
  },
  {
    title: "For Students",
    items: [
      {
        title: "Placement Preparation",
        href: "/students/preparation",
        description: "Resume guides, interview prep, and workshops.",
        icon: <IconBook size={16} />,
      },
      {
        title: "Placement Policies",
        href: "/students/policies",
        description: "Official guidelines, rules, and code of conduct.",
        icon: <IconShieldCheck size={16} />,
      },
      {
        title: "Internship Insights",
        href: "/students/internships",
        description: "Summer training and internship drives.",
        icon: <IconBriefcase size={16} />,
      },
      {
        title: "Past Statistics",
        href: "/students/stats",
        description: "Year-wise reports, trends, and department stats.",
        icon: <IconChartBar size={16} />,
      },
      {
        title: "Career Development Service",
        href: "https://www.iitk.ac.in/cds/",
        description: "Soft skills, guidance, and counseling sessions.",
        external: true,
        icon: <IconCompass size={16} />,
      },
    ],
    featuredLink: {
      label: "Read Placement Policy Guidelines →",
      href: "/students/policies",
    },
  },
  {
    title: "For Recruiters",
    items: [
      {
        title: "Why Recruit IITK",
        href: "/recruiters/why-iitk",
        description: "World-class talent, rigor, and innovation.",
        icon: <IconAward size={16} />,
      },
      {
        title: "Placement Calendar & Process",
        href: "/recruiters/procedure",
        description: "Step-by-step procedure and recruitment timeline.",
        icon: <IconCalendar size={16} />,
      },
      {
        title: "Job Announcement Form (JAF)",
        href: "/recruiters/jaf",
        description: "Submit recruitment openings and requirements.",
        icon: <IconFileText size={16} />,
      },
      {
        title: "Recruiter Brochure",
        href: "/brochure",
        description: "Comprehensive information and institute highlights.",
        icon: <IconBuilding size={16} />,
      },
      {
        title: "Recruiting Facilities",
        href: "/recruiters/facilities",
        description: "Interview rooms, online proctoring, and logistics.",
        icon: <IconBriefcase size={16} />,
      },
    ],
    featuredLink: {
      label: "Download Placement Brochure →",
      href: "/brochure",
    },
  },
  {
    title: "Contact Us",
    items: [
      {
        title: "Placement Coordinators",
        href: "/placement-coordinators",
        description: "Connect with the overall student coordinators team.",
        icon: <IconUsers size={16} />,
      },
      {
        title: "SPO Office Staff",
        href: "/contact/office",
        description: "Administrative staff and official office contacts.",
        icon: <IconPhoneCall size={16} />,
      },
      {
        title: "Reach IIT Kanpur",
        href: "/contact/reach-us",
        description: "Campus location, transport, and travel advisory.",
        icon: <IconCompass size={16} />,
      },
    ],
    featuredLink: {
      label: "Connect with Placement Team →",
      href: "/contact",
    },
  },
];

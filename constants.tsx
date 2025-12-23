
import React from 'react';
import { ProjectExample, TeamMember, BudgetItem } from './types';

export const PROJECTS: ProjectExample[] = [
  {
    title: "Vertical Garden Automation",
    description: "Students design and construct a vertical garden with automated watering systems and interactive data dashboards, fostering ecological stewardship.",
    curriculum: ["Technology", "Mathematics", "Science"],
    skills: ["Design thinking", "Automation", "Sustainability"],
    image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Kapa Haka Neopixel Costumes",
    description: "Blending traditional Māori performance with modern tech, students create costumes with coded LED light shows, honoring cultural identity through innovation.",
    curriculum: ["Technology", "Arts", "Te Reo Māori"],
    skills: ["Electrical engineering", "Coding", "Cultural integrity"],
    image: "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Pacific Instruments Re-imagined",
    description: "Researching and building traditional instruments using modern acoustic engineering, empowering Pasifika youth through sound.",
    curriculum: ["Technology", "Arts", "Social Sciences"],
    skills: ["Acoustical engineering", "Craftsmanship", "Heritage"],
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Motion Capture Sports Analysis",
    description: "Using high-end tech to analyze biomechanics in local sports clubs, bridging the gap between physical education and high-tech careers.",
    curriculum: ["Technology", "PE", "Mathematics"],
    skills: ["Biomechanical engineering", "Sports science", "Analytics"],
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop"
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Clark Williams",
    role: "Founder & Project Lead",
    bio: "Visionary educator with 10 years in STEAM, focused on disrupting educational inequity through mobile innovation.",
    image: "public/images/Clark.png"
  },
  {
    name: "Irihāpeti Mahuika",
    role: "Governance Advisor",
    bio: "Advocate for Kaupapa Māori and equity, ensuring our projects remain grounded in local community needs.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Pania Watson",
    role: "Education Specialist",
    bio: "Leadership expert dedicated to empowering youth through hands-on, curriculum-aligned project work.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Lex Davis",
    role: "Strategic Operations",
    bio: "Senior educator specializing in complex project management and scaling social impact across Aotearoa.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
  }
];

// Added BUDGET_DATA to support the BudgetDashboard component and resolve the missing export error
export const BUDGET_DATA: BudgetItem[] = [
  {
    category: "Infrastructure",
    item: "Custom Mobile Lab Trailer",
    year1: 450000,
    annual: 15000
  },
  {
    category: "Equipment",
    item: "STEAM & Engineering Gear",
    year1: 300000,
    annual: 25000
  },
  {
    category: "Salaries",
    item: "Specialist Educators (MOE)",
    year1: 350000,
    annual: 350000
  },
  {
    category: "Curriculum",
    item: "Resource Development",
    year1: 90000,
    annual: 30000
  },
  {
    category: "Operations",
    item: "Logistics & Maintenance",
    year1: 60000,
    annual: 45000
  },
  {
    category: "Governance",
    item: "Strategy & Reporting",
    year1: 50000,
    annual: 20000
  }
];

export const SYSTEM_INSTRUCTION = `
You are the Inertia Education Assistant. Your goal is to help potential partners and donors understand the social impact and vision of the project.
Key Details:
- Name: Inertia Education.
- Mission: A mobile innovation hub (expandable trailer) that brings high-end STEAM education to underserved communities.
- Focus: Social change, equity, and closing the digital divide in Aotearoa (New Zealand).
- Method: Year-long residencies in schools, not short workshops.
- Partnership: Partnered with The Kind Foundation.
Prioritize talking about social change, student empowerment, and community impact. Use Te Reo Māori greetings.
`;

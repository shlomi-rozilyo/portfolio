export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  type: "featured" | "grid";
  image: string;
  caseStudy: {
    overview: string;
    role: string;
    duration: string;
    tools: string[];
    sections: {
      title: string;
      content: string;
    }[];
  };
}

export const projects: Project[] = [
  {
    id: "snyk-dashboard",
    title: "Snyk Security Dashboard",
    subtitle: "Redesigning developer-first security for enterprise scale",
    description:
      "Led the complete redesign of Snyk's main dashboard, creating an intuitive security overview that reduced time-to-insight by 40%.",
    category: "Product Design",
    type: "featured",
    image: "/images/project-1.jpg",
    caseStudy: {
      overview:
        "The Snyk Security Dashboard was a ground-up redesign aimed at making complex vulnerability data accessible and actionable for developers and security teams alike.",
      role: "Lead Product Designer",
      duration: "6 months",
      tools: ["Figma", "Maze", "FullStory", "Jira"],
      sections: [
        {
          title: "The Challenge",
          content:
            "Enterprise customers needed a unified view of their security posture across thousands of projects. The existing dashboard was data-heavy but lacked clear hierarchy and actionable insights.",
        },
        {
          title: "Research & Discovery",
          content:
            "Conducted 24 user interviews across 8 enterprise accounts. Mapped existing workflows and identified key pain points around prioritization and context-switching.",
        },
        {
          title: "Design Process",
          content:
            "Explored multiple layout paradigms from kanban-style boards to metric-heavy dashboards. The winning concept centered around a risk-score hierarchy with drill-down capabilities.",
        },
        {
          title: "Outcome",
          content:
            "40% reduction in time-to-insight. 28% increase in daily active users. Adopted as a template pattern for 3 other product areas.",
        },
      ],
    },
  },
  {
    id: "ai-code-assistant",
    title: "AI-Powered Code Assistant",
    subtitle: "Designing trust into AI-generated security fixes",
    description:
      "Designed the UX for an AI assistant that suggests security fixes directly in the developer workflow.",
    category: "AI / UX",
    type: "featured",
    image: "/images/project-2.jpg",
    caseStudy: {
      overview:
        "Building trust in AI-generated code suggestions required a completely new interaction paradigm that balanced automation with developer control.",
      role: "Senior Product Designer",
      duration: "4 months",
      tools: ["Figma", "Protopie", "GitHub", "Linear"],
      sections: [
        {
          title: "The Challenge",
          content:
            "Developers are skeptical of AI-generated code changes. The design needed to build confidence while maintaining speed and flow.",
        },
        {
          title: "Key Insight",
          content:
            "Through user research, we discovered that transparency was more important than accuracy. Developers wanted to understand WHY a fix was suggested, not just WHAT the fix was.",
        },
        {
          title: "Design Solution",
          content:
            "Created a diff-view interface with inline explanations, confidence scores, and one-click rollback. The design emphasized reversibility at every step.",
        },
        {
          title: "Results",
          content:
            "72% acceptance rate for AI suggestions (up from 31%). Featured in Snyk's annual keynote presentation.",
        },
      ],
    },
  },
  {
    id: "design-system",
    title: "Enterprise Design System",
    subtitle: "Scaling design consistency across 12 product teams",
    description:
      "Built and maintained a comprehensive design system that unified Snyk's product experience across all platforms.",
    category: "Design Systems",
    type: "featured",
    image: "/images/project-3.jpg",
    caseStudy: {
      overview:
        "A design system built to scale — from component libraries to documentation, governance, and adoption strategy.",
      role: "Design System Lead",
      duration: "Ongoing",
      tools: ["Figma", "Storybook", "Chromatic", "ZeroHeight"],
      sections: [
        {
          title: "The Challenge",
          content:
            "12 product teams working independently led to inconsistent patterns, duplicated effort, and a fragmented user experience.",
        },
        {
          title: "Approach",
          content:
            "Started with an audit of existing components across all products. Identified 340+ unique component variations that could be consolidated into 85 canonical components.",
        },
        {
          title: "Governance Model",
          content:
            "Established a contribution model where any team could propose additions. Created a review board with rotating members from different product areas.",
        },
        {
          title: "Impact",
          content:
            "60% reduction in design-to-dev handoff time. 95% adoption rate across all product teams within 8 months.",
        },
      ],
    },
  },
  {
    id: "mobile-scanner",
    title: "Mobile Vulnerability Scanner",
    subtitle: "Security scanning on-the-go for DevOps teams",
    description:
      "Designed a mobile companion app for quick security scans and real-time alerts.",
    category: "Mobile",
    type: "grid",
    image: "/images/project-4.jpg",
    caseStudy: {
      overview:
        "A native mobile experience that brought Snyk's core scanning capabilities to developers' pockets.",
      role: "Product Designer",
      duration: "3 months",
      tools: ["Figma", "Principle", "TestFlight"],
      sections: [
        {
          title: "The Challenge",
          content:
            "DevOps engineers needed quick access to security alerts while on-call. The full web experience was too complex for mobile triage.",
        },
        {
          title: "Solution",
          content:
            "Designed a focused mobile experience centered around notifications, quick triage actions, and camera-based scanning for packages.",
        },
        {
          title: "Outcome",
          content:
            "Reduced alert response time by 55% for on-call engineers.",
        },
      ],
    },
  },
  {
    id: "onboarding-flow",
    title: "Developer Onboarding",
    subtitle: "From signup to first scan in under 3 minutes",
    description:
      "Redesigned the onboarding experience to dramatically reduce time-to-value.",
    category: "Growth",
    type: "grid",
    image: "/images/project-5.jpg",
    caseStudy: {
      overview:
        "A progressive onboarding flow that met developers where they were — in their IDE, CLI, or browser.",
      role: "Product Designer",
      duration: "2 months",
      tools: ["Figma", "Amplitude", "Maze"],
      sections: [
        {
          title: "Problem",
          content:
            "67% of new users dropped off before completing their first scan. The setup process required too many steps and too much context.",
        },
        {
          title: "Solution",
          content:
            "Reduced the onboarding flow from 12 steps to 4. Introduced smart defaults and auto-detection of project types.",
        },
        {
          title: "Impact",
          content:
            "Time-to-first-scan reduced from 12 minutes to 2.5 minutes. Activation rate increased by 85%.",
        },
      ],
    },
  },
  {
    id: "reporting-analytics",
    title: "Security Reporting & Analytics",
    subtitle: "Executive-ready security posture reports",
    description:
      "Created a reporting suite that translates technical security data into business metrics.",
    category: "Data Visualization",
    type: "grid",
    image: "/images/project-6.jpg",
    caseStudy: {
      overview:
        "Bridging the gap between technical vulnerability data and executive-level security reporting.",
      role: "Senior Product Designer",
      duration: "3 months",
      tools: ["Figma", "D3.js concepts", "Looker"],
      sections: [
        {
          title: "Challenge",
          content:
            "CISOs needed to communicate security posture to boards. Existing reports were too technical and lacked business context.",
        },
        {
          title: "Approach",
          content:
            "Worked closely with 6 CISOs to understand their reporting needs. Designed customizable dashboards with exportable executive summaries.",
        },
        {
          title: "Result",
          content:
            "Became the #1 requested feature by enterprise accounts. Contributed to 23% increase in enterprise plan upgrades.",
        },
      ],
    },
  },
  {
    id: "cli-experience",
    title: "CLI Developer Experience",
    subtitle: "Beautiful terminal interfaces for security tools",
    description:
      "Designed the visual language for Snyk's CLI output, making terminal interactions informative and delightful.",
    category: "Developer Tools",
    type: "grid",
    image: "/images/project-7.jpg",
    caseStudy: {
      overview:
        "Applying design thinking to the command line — where most developers actually spend their time.",
      role: "Product Designer",
      duration: "2 months",
      tools: ["Figma", "Terminal", "Ink (React for CLI)"],
      sections: [
        {
          title: "Challenge",
          content:
            "CLI output was a wall of text with no visual hierarchy. Developers couldn't quickly parse results or understand severity.",
        },
        {
          title: "Solution",
          content:
            "Designed a structured output format with color-coded severity, ASCII-art progress indicators, and collapsible detail levels.",
        },
        {
          title: "Impact",
          content:
            "CLI user satisfaction increased from 3.2 to 4.6 (out of 5). CLI became the fastest-growing integration channel.",
        },
      ],
    },
  },
];

export const featuredProjects = projects.filter((p) => p.type === "featured");
export const gridProjects = projects.filter((p) => p.type === "grid");

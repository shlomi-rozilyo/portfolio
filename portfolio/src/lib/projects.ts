export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  type: "featured" | "grid";
  image: string;
  headerImage?: string;
  caseStudy: {
    overview: string;
    role: string;
    duration: string;
    tools: string[];
    sections: {
      title: string;
      content: string;
      image?: string;
    }[];
    meta?: { label: string; value: string }[];
  };
}

export const projects: Project[] = [
  {
    id: "ai-design-systems",
    title: "AI-Driven Design Systems & Automated Prototyping",
    subtitle: "Bridging the gap between Figma, Notion, and Production Code",
    description:
      "Pioneered an AI-powered workflow that connects design tokens in Figma to living documentation in Notion and production-ready code — turning weeks of manual sync into real-time automation.",
    category: "AI",
    type: "featured",
    image: "/images/project-1.png",
    headerImage: "/images/project-1_header.png",
    caseStudy: {
      overview:
        "Empowering Designers and Product Managers to generate high-fidelity, functional prototypes directly in code — and enabling designers to handle minor UI adjustments independently via Pull Requests.",
      role: "Senior Design Engineer / Product Designer",
      duration: "2.5 months",
      tools: ["Figma", "Claude AI", "React", "Tailwind", "Notion"],
      sections: [
        {
          title: "The Challenge: Reducing Design-to-Dev Friction",
          content:
            "The goal was to empower Designers and Product Managers to generate high-fidelity, functional prototypes directly in code and enable designers to handle minor UI adjustments independently via Pull Requests (PRs).",
        },
        {
          title: "The Infrastructure: Component & Token Parity",
          content:
            "To achieve this, we established a comprehensive Design System in Figma with strict 1:1 parity between Figma components/tokens and our frontend library. By aligning naming conventions across both environments, we ensured that any design intent could be programmatically mapped to its coded counterpart.",
          image: "/images/project-1_inside image 1.png",
        },
        {
          title: "The Solution: LLM Integration & Workflow Automation",
          content:
            "Working closely with the engineering team, we integrated our proprietary frontend library with Claude (LLM) and connected the stack to Notion.\n\n• Autonomous Prototyping: By feeding product requirements directly from Notion into Claude, the system generates functional prototypes that strictly adhere to our Design System constraints.\n\n• Conversational UI Iteration: Designers can interact with Claude to perform real-time UI adjustments. Since the LLM is aware of the Design System's logic, it can suggest and implement changes that remain consistent with the brand's visual language.\n\n• Direct Implementation: This workflow allows designers to initiate PRs for minor visual changes, significantly reducing the engineering overhead for styling tasks.",
        },
        {
          title: "The Outcome",
          content:
            "• Design Autonomy: Designers and PMs can now validate ideas using production-grade code without manual intervention from frontend developers.\n\n• Accelerated Delivery: The time from PRD (Product Requirement Document) to a functional, clickable prototype was reduced from days to minutes.\n\n• System Integrity: High consistency across the product lifecycle by ensuring the LLM acts as a gatekeeper for the Design System's rules.",
          image: "/images/project-1_inside image2.gif",
        },
      ],
    },
  },
  {
    id: "nagomi-vulnerabilities",
    title: "Nagomi Vulnerabilities: From Data Noise to Risk-Based Action",
    subtitle: "Consolidating multi-scanner data into a prioritized remediation funnel.",
    description:
      "Consolidating multi-scanner data into a prioritized remediation funnel.",
    category: "UI/UX",
    type: "featured",
    image: "/images/project-2.png",
    headerImage: "/images/project-2_header.png",
    caseStudy: {
      overview:
        "Security analysts are often overwhelmed by thousands of vulnerabilities (CVEs) across hundreds of assets. The main challenge was to consolidate data from multiple scanners, normalize it, and provide a clear prioritization path without the user losing their \"mental state\" while diving deep into technical details.",
      role: "",
      duration: "",
      tools: [],
      meta: [
        { label: "Type", value: "UI/UX" },
        { label: "Complexity", value: "High-density Data Visualization & Multi-layer Navigation" },
      ],
      sections: [
        {
          title: "The Challenge: The Context-Switching Tax",
          content:
            "Security analysts are often overwhelmed by thousands of vulnerabilities (CVEs) across hundreds of assets. The main challenge was to consolidate data from multiple scanners, normalize it, and provide a clear prioritization path without the user losing their \"mental state\" while diving deep into technical details.",
        },
        {
          title: "The Solution: Multi-Layered, Context-Aware Navigation",
          content:
            "To solve the friction of deep-diving into data, I implemented a Stacked Drawer Architecture. This allows users to drill down from a high-level dashboard into specific technical layers without ever leaving their initial starting point.\n\n• Stacked Interaction Model: Users can navigate from a Dashboard Widget → Exposure Finding (Drawer 1) → Vulnerability List (Drawer 2) → Individual CVE Details (Drawer 3). Each layer slides over the previous one, maintaining a visible breadcrumb of the investigation path.\n\n• The CVE Risk Breakdown (Funnel): I redesigned the core funnel to shift focus from raw asset counts to CVE-centric risk factors. By correlating CVSS scores with mitigating factors (like missing EDR coverage) and threat intelligence (CISA KEV), we created a prescriptive path for remediation.\n\n• Dynamic Inventory: A high-density data table that supports complex filtering and saved views, allowing teams to isolate critical business risks, such as \"CVEs exploited in known campaigns\" or \"CISA catalog vulnerabilities.\"",
          image: "/images/project-2_inside image 1.gif",
        },
        {
          title: "Technical Deep Dive: Normalization & Prioritization",
          content:
            "Working closely with the PM and Engineering, we defined the logic for the \"Top Vulnerability Exposure Findings\". This required a deep understanding of how different scanners (Tenable, Rapid7, etc.) report data and how to normalize these disparate sources into a single, cohesive severity scale.",
        },
        {
          title: "Outcome",
          content:
            "• Reduced Cognitive Load: The layered drawer system eliminated the need for browser tabs/back-button navigation, keeping analysts focused on the task.\n\n• Actionable Visibility: Successfully transformed a \"data dump\" of vulnerabilities into a prioritized remediation plan, directly tied to business assets and active threat campaigns.",
          image: "/images/project-2_inside image2.png",
        },
      ],
    },
  },
  {
    id: "snyk-code",
    title: "Snyk Code: Integrating Static Analysis into the Developer Workflow",
    subtitle: "Bridging the gap between the DeepCode acquisition and Snyk's core ecosystem.",
    description:
      "Bridging the gap between the DeepCode acquisition and Snyk's core ecosystem.",
    category: "UI/UX",
    type: "featured",
    image: "/images/project-3_header.png",
    headerImage: "/images/project-3_header.png",
    caseStudy: {
      overview:
        "Following the acquisition of DeepCode (a SAST engine), the goal was to integrate its advanced static analysis capabilities into the Snyk platform — translating complex, AI-generated security findings into a UI that felt native to the developer's existing workflow.",
      role: "",
      duration: "",
      tools: [],
      sections: [
        {
          title: "The Challenge: Normalizing Complexity",
          content:
            "Following the acquisition of DeepCode (a SAST engine), the goal was to integrate its advanced static analysis capabilities into the Snyk platform. The primary challenge was to translate complex, AI-generated security findings into a UI that felt native to the developer's existing workflow, while maintaining the \"Developer-First\" brand promise.",
        },
        {
          title: "The Strategic Pivot: Architecture Overhaul",
          content:
            "During the initial research, we identified a significant friction point: the existing model created a separate project for every file containing a vulnerability, leading to a cluttered and unmanageable dashboard.\n\n• Structural Consolidation: I led the redesign of the project architecture, consolidating findings into a unified view. This shift allowed developers to understand the full context of their codebase's security posture in a single glance.\n\n• Vulnerability Snapshots: Redesigned how code-level issues are presented by creating a \"snapshot\" view that highlights the exact line of code, the data flow, and the recommended fix, reducing the cognitive load required to perform a remediation.",
        },
        {
          title: "The Process: Evidence-Based Iteration",
          content:
            "• Cross-Functional Sprints: Conducted design sprints with the original DeepCode founding team and Snyk's product leads to define the core UX principles for Snyk Code.\n\n• Technical Validation: Worked closely with engineering to ensure that the visualization of \"Taint Analysis\" and data flows was technically accurate yet intuitive for non-security experts.",
        },
        {
          title: "The Outcome",
          content:
            "• Scalable Adoption: The new architecture successfully supported Snyk's expansion into the SAST market, becoming a core revenue driver.\n\n• Systemic Impact: The vulnerability snapshot patterns established in this project were eventually adopted across other Snyk product lines (Container, IaC), ensuring a consistent UX across the entire platform.",
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

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
      imageSmall?: boolean;
      imagePair?: [string, string];
    }[];
    meta?: { label: string; value: string }[];
    stats?: { value: string; label: string }[];
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
    headerImage: "/images/project-3_inside image1.png",
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
          image: "/images/project-3_inside image2.png",
          imageSmall: true,
        },
        {
          title: "The Strategic Pivot: Architecture Overhaul",
          content:
            "During the initial research, we identified a significant friction point: the existing model created a separate project for every file containing a vulnerability, leading to a cluttered and unmanageable dashboard.\n\n• Structural Consolidation: I led the redesign of the project architecture, consolidating findings into a unified view. This shift allowed developers to understand the full context of their codebase's security posture in a single glance.\n\n• Vulnerability Snapshots: Redesigned how code-level issues are presented by creating a \"snapshot\" view that highlights the exact line of code, the data flow, and the recommended fix, reducing the cognitive load required to perform a remediation.",
          image: "/images/project-3_inside image3.png",
          imageSmall: true,
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
    id: "dynamic-metrics-dashboards",
    title: "Dynamic Metrics & Custom Dashboards",
    subtitle: "Designing a modular framework for security posture tracking and executive reporting.",
    description:
      "Designing a modular framework for security posture tracking and executive reporting.",
    category: "UI/UX",
    type: "grid",
    image: "/images/project-4_header.png",
    headerImage: "/images/project-4_inside image1.png",
    caseStudy: {
      overview:
        "Security leaders (CISOs) and program managers often face \"data silos\" — multiple security tools generating vast amounts of raw data without a centralized, actionable view. The manual process of gathering, correlating, and analyzing this data to report on risk and operational efficiency was a significant friction point.",
      role: "",
      duration: "2.5 months (MVP to v1)",
      tools: ["Figma", "Miro"],
      sections: [
        {
          title: "The Challenge: Data Fragmentation",
          content:
            "Security leaders (CISOs) and program managers often face \"data silos\" — multiple security tools generating vast amounts of raw data without a centralized, actionable view. The manual process of gathering, correlating, and analyzing this data to report on risk and operational efficiency was a significant friction point.",
          imagePair: ["/images/project-4_inside image4.png", "/images/project-4_inside image5.png"],
        },
        {
          title: "The Solution: A Modular Metric Ecosystem",
          content:
            "I designed a scalable dashboard system that allows users to move from high-level summaries to deep-dive technical analysis within a single environment.\n\n• OOTB Metrics Library: Developed a sidebar interface where users can browse and search a library of pre-built (Out-of-the-Box) metrics, categorized by tool and security domain.\n\n• Dynamic Customization: Implemented a workflow allowing users to drag-and-drop metrics into personal dashboards, edit titles/descriptions, and choose from a set of optimized visualizations (Bar, Line, Pie).\n\n• Closing the Operational Loop: Every metric is designed with \"Contextual Navigation\" — clicking a data point takes the user directly to the relevant filtered asset or vulnerability page, bridging the gap between reporting and remediation.\n\n• Executive Readiness: The system supports on-demand PDF exports, enabling CISOs to communicate security trends and SLA status to boards and peers effectively.",
          image: "/images/project-4_inside image2.gif",
        },
        {
          title: "The Outcome",
          content:
            "• Reduced Reporting Overhead: Replaced manual data correlation with an automated, live-updating dashboard system.\n\n• Improved Strategic Alignment: Enabled security teams to prioritize efforts based on real-time effectiveness and efficiency metrics rather than static, point-in-time reports.\n\n• Design Consistency: Established a unified visualization language that remains consistent across complex telemetry types, from MFA coverage to vulnerability remediation trends.",
          image: "/images/project-4_inside image3.gif",
          imageSmall: true,
        },
      ],
    },
  },
  {
    id: "asset-querying-filtering",
    title: "Advanced Asset Querying & Filtering",
    subtitle: "Building a logical, human-friendly interface for complex Boolean operations at scale.",
    description:
      "Building a logical, human-friendly interface for complex Boolean operations at scale.",
    category: "UI/UX",
    type: "grid",
    image: "/images/project-5_header.png",
    headerImage: "/images/project-5_inside image 1.png",
    caseStudy: {
      overview:
        "Asset inventories in enterprise environments often contain thousands of items, each with dozens of unique attributes. The challenge was to design a filtering mechanism that could handle highly specific, multi-layered security queries without overwhelming the user or requiring a steep learning curve.",
      role: "Senior Product Designer",
      duration: "",
      tools: ["Figma", "React"],
      meta: [
        { label: "Focus", value: "Information Architecture & Complex Logic" },
      ],
      sections: [
        {
          title: "The Challenge: Navigating Scale and Complexity",
          content:
            "Asset inventories in enterprise environments often contain thousands of items, each with dozens of unique attributes. The challenge was to design a filtering mechanism that could handle highly specific, multi-layered security queries without overwhelming the user or requiring a steep learning curve.",
          image: "/images/project-5_inside image 2.gif",
          imageSmall: true,
        },
        {
          title: "The Solution: Modular & Nested Boolean Logic",
          content:
            "I developed a scalable filtering system that balances technical power with visual clarity, allowing users to build complex queries through an intuitive, pill-based interface.\n\n• Layered Boolean Logic: Implemented a robust \"AND/OR\" mechanism that supports nested filter groups. This allows power users to create sophisticated logical relationships between different asset attributes while keeping the UI clean and readable.\n\n• Context-Aware Dropdowns: To manage filters with hundreds of potential results (like \"Business Units\"), I designed dropdowns with internal search and categorization. This ensures that even the densest data sets remain easy to navigate.\n\n• Operator Precision: Each filter pill includes specific operators (Is Any, Contains, etc.), providing the necessary granularity for technical workflows without cluttering the main inventory view.\n\n• Visual Hierarchy: By using a consistent layout for filter rows and groups, I ensured that users can instantly understand the structure of their current search, no matter how complex the logic becomes.",
        },
        {
          title: "The Outcome",
          content:
            "• Simplified Power-User Workflows: Transformed a complex technical requirement into a \"light\" interface that feels second nature to analysts.\n\n• System Scalability: The modular design of the filter pills and groups allows the system to support new asset types and attributes as the product evolves, without requiring a redesign of the filtering logic.\n\n• Reduced Time-to-Action: Security teams can now isolate specific risks and assets in seconds, significantly improving operational efficiency.",
          image: "/images/project-5_inside image 3.png",
          imageSmall: true,
        },
      ],
    },
  },
  {
    id: "research-strategy-operations",
    title: "Research Strategy & Operations",
    subtitle: "Scaling user research and evidence-based decision making at Snyk.",
    description:
      "Scaling user research and evidence-based decision making at Snyk.",
    category: "Research",
    type: "grid",
    image: "/images/project-6_header.png",
    headerImage: "/images/project-6_inside image1.png",
    caseStudy: {
      overview:
        "As Snyk grew rapidly, user research often became siloed within individual product teams. The challenge was to democratize research while maintaining high quality and consistency.",
      role: "Design Research Lead",
      duration: "",
      tools: [],
      meta: [
        { label: "Role", value: "Design Research Lead" },
        { label: "Scope", value: "Cross-product (Snyk Code, Container, Open Source)" },
        { label: "Methods", value: "The Mom Test, Continuous Discovery, User Interviews" },
      ],
      sections: [
        {
          title: "The Challenge: Scaling Insights in a Fast-Paced Org",
          content:
            "As Snyk grew rapidly, user research often became siloed within individual product teams. There was a lack of a centralized repository for insights, and product teams struggled to conduct unbiased user interviews that yielded actionable data. The challenge was to democratize research while maintaining high quality and consistency.",
        },
        {
          title: "The Solution: Building a Research Ecosystem",
          content:
            "I led the initiative to transform how Snyk learns from its users by establishing a systematic approach to discovery and documentation.\n\n• The Research Hub: Designed and implemented a centralized Research Hub in Notion. This database allowed designers and PMs to tag, categorize, and search through hundreds of interview notes and user feedback loops, making historical data accessible to anyone in the company.\n\n• \"The Mom Test\" Workshops: Facilitated hands-on workshops for designers and engineers based on \"The Mom Test\" methodology. The goal was to train teams on how to ask the right questions and avoid confirmation bias during customer conversations.\n\n• Tagging & Taxonomy: Developed a unified tagging system for research findings. This enabled us to identify cross-product pain points and inform the high-level product roadmap with evidence-based themes.",
          image: "/images/project-6_inside image2.png",
          imageSmall: true,
        },
        {
          title: "The Outcome",
          content:
            "• Democratized Discovery: Shifted the culture from \"guessing\" to \"validating,\" with more non-researchers (PMs/Engineers) conducting effective, unbiased interviews.\n\n• Knowledge Retention: The Research Hub became a core asset, preventing \"research debt\" and ensuring that new team members could quickly catch up on past learnings.\n\n• Strategic Alignment: Provided a clear connection between raw user feedback and strategic product initiatives, ensuring the design team focused on the most impactful problems.",
          image: "/images/project-6_inside image3.png",
          imageSmall: true,
        },
      ],
    },
  },
  {
    id: "portfolio-with-ai",
    title: "Building This Portfolio with Claude AI",
    subtitle: "A designer-AI collaboration from Figma to deployment",
    description:
      "A meta case study on how this very portfolio was designed in Figma and built collaboratively with Claude AI — from pixel-perfect components to a live Next.js site, shipped in days instead of weeks.",
    category: "AI",
    type: "grid",
    image: "/images/project-7_header.png",
    headerImage: "/images/project-7_inside image1.png",
    caseStudy: {
      overview:
        "This portfolio itself is a case study in AI-assisted design-to-code. Starting from a polished Figma file, I partnered with Claude AI to translate every component, interaction, and visual detail into a production-ready Next.js application — iterating in real time through conversation.",
      role: "Designer & Creative Director",
      duration: "1 week",
      tools: ["Figma", "Claude AI", "Next.js", "Tailwind CSS", "Framer Motion", "GitHub"],
      sections: [
        {
          title: "The Challenge: From Design to Live Site, Fast",
          content:
            "I had a fully designed portfolio in Figma — layout, typography, color system, interactions — but limited time and bandwidth to hand-code it from scratch. Traditional workflows would mean weeks of development, or compromising on fidelity by using a no-code builder. I wanted pixel-perfect output, real interactivity (animated drawers, lightboxes, dark/light mode), and full control over the code — without writing every line myself.",
        },
        {
          title: "The Process: Designing with AI as a Partner",
          content:
            "The workflow was surprisingly natural. I shared my Figma designs with Claude and described the structure — component by component, section by section. Claude generated the Next.js code using Tailwind CSS and Framer Motion, matching the design system I'd defined. From there, it became a tight feedback loop: I'd review the output, flag misalignments or missing details, upload screenshots, and Claude would iterate instantly. We refined hover states, scroll behaviors, responsive breakpoints, image placements, and even subtle touches like gradient animations and tooltip micro-interactions. Every case study you see on this site — the images, the side-by-side layouts, the GIF embeds — was placed and tuned through this conversational process.",
        },
        {
          title: "The Outcome: Shipped in Days, Not Weeks",
          content:
            "The result is the site you're browsing right now — a fully responsive, dark/light themed portfolio with animated case study drawers, image lightboxes, and smooth transitions. It was pushed to GitHub and deployed in a fraction of the time a traditional build would take. More importantly, the process proved something I believe deeply: AI doesn't replace design thinking — it amplifies it. I stayed in creative control the entire time, making every visual and UX decision, while Claude handled the translation to code. It's the kind of workflow I think more designers will adopt — and one I'm excited to keep pushing forward.",
        },
      ],
      meta: [
        { label: "Stack", value: "Next.js, Tailwind CSS, Framer Motion" },
        { label: "Deployment", value: "GitHub → Vercel" },
        { label: "Design-to-Code", value: "Figma → Claude AI → Production" },
      ],
      stats: [
        { value: "1,875", label: "Lines of Code" },
        { value: "9", label: "Source Files" },
        { value: "5", label: "React Components" },
        { value: "26", label: "Images & GIFs" },
        { value: "40+", label: "Animations" },
        { value: "7", label: "Case Studies" },
      ],
    },
  },
];

export const featuredProjects = projects.filter((p) => p.type === "featured");
export const gridProjects = projects.filter((p) => p.type === "grid");

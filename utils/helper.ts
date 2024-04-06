import Dashboard from "../components/icons/Dashboard.vue";
import Repositories from "../components/icons/Repositories.vue";
import Findings from "../components/icons/Finding.vue";
import Conector from "../components/icons/Conector.vue";

// type NavLink;
// add optional key subLinks : NavLink[]

// SIDEBAR ICONS TYPES
interface DropdownItem {
  title: string;
  content?: { subLink: string; link: string }[];
  svg: any;
  href: string;
}

// SideBar Dropdown Values
export const dropdownSidebarList: DropdownItem[] = [
  {
    title: "Dashboards",
    href: "/",
    content: [
      { subLink: "Reports", link: "#report" },
      { subLink: "SLSA", link: "#slsa" },
      { subLink: "Software Supply Chain", link: "#software" },
      { subLink: "OWASP ", link: "#owsap" },
    ],
    svg: Dashboard,
  },
  {
    title: "Repositories",
    href: "/repositories",
    svg: Repositories,
  },
  {
    title: "Findings",
    href: "/findings",
    svg: Findings,
  },
  {
    title: "Conector Page",
    href: "/",
    svg: Conector,
  },
];

// Footer icon data
export const socialLinks = [
  { href: "https://www.linkedin.com/", icon: "/assets/Icons/linkedin.svg" },
  { href: "https://www.twitter.com/", icon: "/assets/Icons/twitter.svg" },
];

// Top rank data
export const topRank = [
  {
    title: "A01",
    description: "Broken Access Control",
    rank: 56,
  },
  {
    title: "A02",
    description: "Cryptographic Failures",
    rank: 32,
  },
  {
    title: "A03",
    description: "Injection",
    rank: 78,
  },
  {
    title: "A04",
    description: "Insecure Design",
    rank: 85,
  },
  {
    title: "A05",
    description: "Security Misconfiguration",
    rank: 45,
  },
  {
    title: "A06",
    description: "Vulnerable and Outdated Components",
    rank: 56,
  },
  {
    title: "A07",
    description: "Identification and Authentication Failures",
    rank: 64,
  },
  {
    title: "A08",
    description: "Software and Data Integrity Failures",
    rank: 23,
  },
  {
    title: "A09",
    description: "Security Logging and Monitoring Failures",
    rank: 87,
  },
  {
    title: "A10",
    description: "Server Side Request Forgery (SSRF)",
    rank: 50,
  },
];

// Radial chart data
export const supplyChainChart = [
  {
    value: "100",
    title: "SAST",
  },
  {
    value: "90",
    title: "Secrets / PII",
  },
  {
    value: "100",
    title: "IaC security",
  },
  {
    value: "100",
    title: "OpenSource Security (SCA)",
  },
  {
    value: "100",
    title: "License compliance",
  },
  {
    value: "75",
    title: "SBOM",
  },
  {
    value: "20",
    title: "Cloud Security Posture Management (CSPM)",
  },
];

// Build Threats cards
export const buildThreats = [
  {
    title: "Compromise build process",
    count: 43,
    growth: 31,
  },
  {
    title: "Upload modified package",
    count: 81,
    growth: 35,
  },
  {
    title: "Compromise package registry",
    count: 7,
    growth: 35,
  },
  {
    title: "Use compromised package",
    count: 65,
    growth: 35,
  },
];

// Dependencies Threats cards
export const dependenciesThreats = [
  {
    title: "Use compromised package",
    count: 15,
    growth: 35,
  },
];

// Source Threats cards
export const sourceThreats = [
  {
    title: "Submit  unauthorized change",
    count: 31,
    growth: 35,
  },
  {
    title: "Compromise  source repo",
    count: 75,
    growth: 20,
  },
  {
    title: "Build from  modified source",
    count: 40,
    growth: 1,
  },
];

// Chart progress bar data
export const chartProgressBar = [
  {
    title: "Findings",
    rank: 26,
    rankPercentage: (26 * 100) / 31,
  },
  {
    title: "Ready to remediate",
    rank: 5,
    rankPercentage: 100 - 83.87,
  },
  {
    title: "Total Findings",
    rank: 31,
    rankPercentage: 0,
  },
];

// Chart progress bar data
export const dashboardChartProgressBar = [
  {
    title: "Findings Without action plan",
    rank: 26,
    rankPercentage: (26 * 100) / 31,
  },
  {
    title: "Findings With action plan",
    rank: 5,
    rankPercentage: 100 - 83.87,
  },
  {
    title: "Total Findings",
    rank: 31,
    rankPercentage: 0,
  },
];
// FINDINGS REPORT LINE CHART  DATA
export const dashboardLineChartList = [
  {
    series: [
      {
        name: "Findings",
        data: [6000, 4400, 6200, 4000, 6400, 3500, 4500, 6000, 5500, 7000],
      },
      {
        name: "Ready to remediate",
        data: [1500, 4000, 5000, 9000, 6000, 4000, 6000],
      },
    ],
    categories: [
      "Jan 4",
      "Jan 5",
      "Jan 6",
      "Jan 7",
      "Jan 8",
      "Jan 9",
      "Jan 10",
      "Jan 11",
      "Jan 12",
    ],
    optionsData: {
      min: 0,
      max: 10000,
    },
  },
];

//FINDINGS CIRCULAR CHART DATA
export const findingCircularChartData = {
  series: [120, 110, 100, 90],
  labels: [
    "Vulnerabilities Priorizated",
    "Vulnerabilities Aggregated",
    "Total Findings",
    "--",
  ],
  colors: ["#8220FF", "#05CB0C", "#FD9B3D", "#E6D2FF"],
};

export const findingChartData = [
  {
    labels: "Total Findings",
    value: "17k",
    percentage: "100%",
  },
  {
    labels: "Vulnerabilities Aggregated",
    value: "13k",
    percentage: "35%",
  },
  {
    labels: "Vulnerabilities Priorizated",
    value: "4.0k",
    percentage: "14%",
  },
];
export const findingPieChartData = {
  labels: "Total",
  value: "6.4587",
};

// FINDINGS REPORT LINE CHART  DATA
export const findingsLineChartList = [
  {
    series: [
      {
        name: "Findings Without action plan",
        data: [6000, 4400, 6200, 4000, 6400, 3500, 4500, 6000, 5500, 7000],
      },
      {
        name: "Findings With acction plan",
        data: [1500, 3900, 4800, 9000, 6000, 4000, 6000],
      },
    ],
    categories: [
      "Jun 4",
      "Jun 5",
      "Jun 6",
      "Jun 7",
      "Jun 8",
      "Jun 9",
      "Jun 10",
      "Jun 11",
      "Jun 12",
    ],
    optionsData: {
      min: 0,
      max: 10000,
    },
  },
];
export interface ContextData {
  headers: string[];
  data: {
    id: number;
    sourceControl: string;
    repo: string;
    priority: number;
    tags: string;
    branch: string;
  }[];
}

export const contextData: ContextData = {
  headers: [
    "REPOSITORY ID",
    "SOURCE CONTROL",
    "REPO",
    "PRIORITY",
    "TAGS",
    "BRANCH",
  ],
  data: [
    {
      id: 56,
      sourceControl: "Github",
      repo: "iPlexicus/-OWASPWebGoatPHP",
      priority: 75,
      tags: "Financial",
      branch: "Master",
    },
    {
      id: 54,
      sourceControl: "Github",
      repo: "plexicus/AltoroJ",
      priority: 30,
      tags: "Insurance",
      branch: "Master",
    },
    {
      id: 51,
      sourceControl: "Github",
      repo: "plexicus/-simple-vulnerable",
      priority: 95,
      tags: "Energy",
      branch: "Main",
    },
  ],
};

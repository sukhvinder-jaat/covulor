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

export const supplyChainChartData = {
  "Cloud Security Posture Management (CSPM)": 48,
  "IaC Security": 63,
  "License Compliance": 69,
  "OpenSource Security (SCA)": 59,
  SAST: 82,
  SBOM: 1,
  "Secrets / PII": 98,
};
// Radial chart data
export const supplyChainChart = [
  {
    value: "82",
    title: "SAST",
  },
  {
    value: "98",
    title: "Secrets / PII",
  },
  {
    value: "63",
    title: "IaC security",
  },
  {
    value: "59",
    title: "OpenSource Security (SCA)",
  },
  {
    value: "69",
    title: "License compliance",
  },
  {
    value: "1",
    title: "SBOM",
  },
  {
    value: "48",
    title: "Cloud Security Posture Management (CSPM)",
  },
];
// Build Threats cards
export const buildThreats = [
  {
    findings: [
      {
        count: 98,
        growth: 40,
        title: "Compromise build process",
      },
      {
        count: 38,
        growth: 92,
        title: "Upload modified package",
      },
      {
        count: 66,
        growth: 47,
        title: "Compromise package registry",
      },
      {
        count: 55,
        growth: 36,
        title: "Use compromised package",
      },
    ],
    type: "build",
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
    dates: [
      "2023-06-06",
      "2023-07-13",
      "2023-08-19",
      "2023-09-25",
      "2023-11-01",
      "2023-12-08",
      "2024-01-14",
      "2024-02-20",
      "2024-03-28",
      "2024-05-04",
    ],
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
    dates: [
      "2023-06-06",
      "2023-07-13",
      "2023-08-19",
      "2023-09-25",
      "2023-11-01",
      "2023-12-08",
      "2024-01-14",
      "2024-02-20",
      "2024-03-28",
      "2024-05-04",
    ],
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
export const commonFindingDetails = [
  {
    title: "Command Injection - lastrss.php: 71",
    tagfirst: { text: "Code_weakness", bgColor: "bg-lawnGreen" },
    tagsecond: { text: "Done", bgColor: "bg-lightBlue" },
    hideText: "",
    remediationTitle: "AI Remedation",
    remediationDescription:
      "I wrapped the content of the file with base64 encoding/decoding to prevent injection through unserialize. This operation will ensure that, even if an attacker somehow manages to inject malicious code into the cache file, it will not be executed when the cache file is read back into the program. Instead, any injected code will merely be treated as base64 encoded string, not executable code.",
    link: { title: "More Details", textColor: "text-purple" },
    buttonText: "Create AI Remedation",
    remediationDetails: "LLM Generated Remediations",
  },
  {
    title: "Plexicus/-OWASPWebGoatPHP",
    tagfirst: { text: "Active", bgColor: "bg-lightGreen" },
    tagsecond: { text: "Git Repository", bgColor: "bg-purple" },
    hideText: "!hidden",
    remediationTitle: "Observations",
    remediationDescription:
      "The repository is primarily created for educational purposes aimed at learning web application security. The project uses PHP as its main language and does not deal with any confidential data as per the available structure. However, files like .gitignore, .htaccess, Vagrantfile, webgoat.sql etc. require special attention from a security standpoint. The application, however, being deliberately vulnerable poses potential risks, and it's necessary for the users to be aware of insecurities and potential harm they could bring in a production environment.",
    link: {
      title: "No Confidential Data Treated",
      textColor: "text-lightGreen",
    },
    buttonText: "Link",
    remediationDetails:
      "A deliberately vulnerable web application for learning web application security.",
  },
];

export const dataImpoterList = [
  { title: "Title:", content: "Command Injection - lastrss.php: 71" },
  { title: "CWE:", content: '["CWE-77","CWE-78"]' },
  { title: "Impact Original line:", content: "71" },
  { title: "File path:", content: "app/plugin/lastrss.php" },
  { title: "Type:", content: "code_weakness" },
];
// finding detai software supply chain
export const findingSupplyChainChart = [
  {
    value: "100",
    color: "#05CB0C",
    title: "SAST",
  },
  {
    value: "100",
    color: "#05CB0C",
    title: "Secrets / PII",
  },
  {
    value: "100",
    color: "#05CB0C",
    title: "IaC security",
  },
  {
    value: "100",
    color: "#05CB0C",
    title: "OpenSource Security (SCA)",
  },
  {
    value: "100",
    color: "#05CB0C",
    title: "License compliance",
  },
  {
    value: "100",
    color: "#F91212",
    title: "SBOM",
  },
  {
    value: "100",
    color: "#F91212",
    title: "Cloud Security Posture Management (CSPM)",
  },
];

export const findingDetailSourceThreats = [
  {
    title: "Submit  unauthorized change",
    type: "green",
  },
  {
    title: "Compromise  source repo",
    type: "red",
  },
  {
    title: "Build from  modified source",
    type: "green",
  },
];

//finding detail Build Threats cards
export const findingDetailbuildThreats = [
  {
    title: "Compromise build process",
    type: "green",
  },
  {
    title: "Upload modified package",
    type: "green",
  },
  {
    title: "Compromise package registry",
    type: "red",
  },
  {
    title: "Use compromised package",
    type: "red",
  },
];

// Dependencies Threats cards
export const findingDetailDependenciesThreats = [
  {
    title: "Use compromised package",
    type: "red",
  },
];

export const columnChartData = [
  {
    "findings": [
      {
        "findings": 333,
        "repo": "plexicus/whom-tell"
      },
      {
        "findings": 134,
        "repo": "plexicus/owner-yes"
      },
      {
        "findings": 257,
        "repo": "plexicus/alone-traditional"
      },
      {
        "findings": 230,
        "repo": "plexicus/card-true"
      },
      {
        "findings": 197,
        "repo": "plexicus/herself-tonight"
      },
      {
        "findings": 223,
        "repo": "plexicus/hard-policy"
      },
      {
        "findings": 432,
        "repo": "plexicus/magazine-be"
      },
      {
        "findings": 23,
        "repo": "plexicus/civil-rather"
      },
      {
        "findings": 490,
        "repo": "plexicus/a-should"
      },
      {
        "findings": 408,
        "repo": "plexicus/simply-carry"
      },
      {
        "findings": 179,
        "repo": "plexicus/town-education"
      },
      {
        "findings": 205,
        "repo": "plexicus/point-challenge"
      },
      {
        "findings": 412,
        "repo": "plexicus/through-strategy"
      },
      {
        "findings": 39,
        "repo": "plexicus/finally-democratic"
      },
      {
        "findings": 416,
        "repo": "plexicus/tough-series"
      },
      {
        "findings": 425,
        "repo": "plexicus/upon-still"
      },
      {
        "findings": 420,
        "repo": "plexicus/pull-staff"
      },
      {
        "findings": 6,
        "repo": "plexicus/long-man"
      },
      {
        "findings": 344,
        "repo": "plexicus/mother-hour"
      },
      {
        "findings": 198,
        "repo": "plexicus/wide-west"
      },
      {
        "findings": 178,
        "repo": "plexicus/call-development"
      },
      {
        "findings": 305,
        "repo": "plexicus/notice-seek"
      },
      {
        "findings": 362,
        "repo": "plexicus/item-lawyer"
      },
      {
        "findings": 145,
        "repo": "plexicus/know-me"
      },
      {
        "findings": 432,
        "repo": "plexicus/eat-start"
      }
    ]
  }
]
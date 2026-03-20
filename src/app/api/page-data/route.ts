import { NextResponse } from "next/server";

const experienceData = [
    {
        icon: "/images/icon/tailwind-icon.svg",
        role: "Web Developer & Network Engineer, Tailwind & Next.js ",
        location: "Remote",
        startYear: "2025",
        endYear: "Present",
        bulletPoints: [
            "Built responsive web applications using React and Next.js.",
            "Developed backend APIs with Node.js and integrated databases for scalable solutions.",
            "Designed and configured network infrastructures including VLAN setups, VPN solutions, and server monitoring.",
            "Improved system security and efficiency by implementing best practices in networking and backend development.",
            "Styled modern and responsive user interfaces using Tailwind CSS."

        ]
    },
    {
        icon: "/images/icon/asana-icon.svg",
        role: "E-Learning System",
        location: "Remote",
        startYear: "2024",
        endYear: "2025",
        bulletPoints: [
            "Developed an e-learning platform with features for admin and student login, content management, and assessments.",
            "Built using Django and SQLite as the core technologies.",
            "Outcome: Successfully utilized as a classroom learning simulation tool."
        ]
    },
]

const educationData = [
   {
        date: "Aug 2024 - Present",
        title: "Computer System",
        subtitle: "Sriwijaya University — Palembang, IND"
    }

];


const projectOverview = {
    caseStudies: [
        { name: "E-commerce web ", url: "#" },
        { name: "E-learning", url: "#" },
    ],
    sideProjects: [
        { name: "Bioface", url: "#https://github.com/dreaminthesky967/deepface" },
        { name: "AgriScan", comingSoon: true },
        { name: "PayPoint Mobile App", comingSoon: true },
        { name: "NetScope", comingSoon: true },
    ]
};


export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        projectOverview
    });
};
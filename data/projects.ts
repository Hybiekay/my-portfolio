export type Project = {
    slug: string;
    title: string;
    description: string;
    link: string;
    tags: string[];
    images: string[];
    github?: string;
    download?: string;
};

const projects: Project[] = [
    {
        slug: "clipzy",
        title: "ClipZy",
        description:
            "A TikTok-inspired mobile app with a cleaner UI, built as a teaching example to guide students in building better social video apps.",
        link: "#",
        tags: ["Flutter", "UI Design", "Firebase", "Teaching"],
        images: [
            "/images/ClipZy.png",
            "/images/1.png",
            "/images/2.png",
            "/images/3.png",
            "/images/4.png",
            "/images/5.png",
            "/images/6.png",
        ],
        github: "https://github.com/Hybiekay/Clipzy",
        download: "/clipzy.apk"
    },
    {
        slug: "schoolhq",
        title: "SchoolHQ.ng",
        description:
            "A full-stack school management system. Built the web platform using Laravel (complete), and currently building the mobile version with Flutter.",
        link: "#",
        tags: ["Laravel", "Flutter", "Full-Stack"],
        images: [
            "/images/projects/schoolhq.ng1.png",
            "/images/projects/admin.png",
            "/images/projects/exam.png",
            "/images/projects/attendance.png",
            "/images/projects/schoolhq.ng.png",


        ],
        github: "https://schoolhq.ng/",
        download: undefined // Still in development
    },
    {
        slug: "globees-ex",
        title: "Globees Ex",
        description:
            "I built the entire frontend of Globees Ex using React Native. The app offers secure financial services, including currency exchange, crypto sales, and instant international payments. My work focused on creating a fast, user-friendly mobile experience. Backend development was handled by Peter Thomas using Node.js.",
        link: "#",
        tags: ["React Native", "FinTech", "Currency Exchange", "Frontend"],
        images: [
            "/images/projects/globees1.webp",
            "/images/projects/globees2.webp",
            "/images/projects/globees3.webp",
        ],
        github: undefined,
        download: "https://play.google.com/store/apps/details?id=com.globeesex.GlobeesEx"
    },
    {
        slug: "gate-africa",
        title: "Gate Africa",
        description:
            "I developed the entire frontend of Gate Africa using Flutter. The app is revolutionizing community banking by allowing users to become financial service providers. My work involved building a secure, scalable, and visually appealing mobile interface that transforms traditional banking into a community-driven experience.",
        link: "#",
        tags: ["Flutter", "Team Project"],
        images: [
            "/images/projects/gate1.webp",
            "/images/projects/gate2.webp",
            "/images/projects/gate3.webp",
            "/images/projects/gate4.webp",
        ],
        github: undefined,
        download: "https://play.google.com/store/apps/details?id=com.getgate.africa"
    },
    {
        slug: "euvate",
        title: "Euvate",
        description:
            "An edtech platform offering online courses with automated email flows. Designed to simplify tech learning at scale.",
        link: "#",
        tags: ["EdTech", "Email Automation"],
        images: ["/images/projects/euvate.png"],
        github: undefined,
        download: "https://euvate.eulogia.net/app-download"
    },
    {
        slug: "ping-post",
        title: "Ping Post",
        description:
            "A hybrid tech academy based in Ibadan, offering both on-site and online learning options.",
        link: "#",
        tags: ["Education", "Hybrid Learning"],
        images: ["/images/safe-drop.jpg"],
        github: undefined,
        download: "https://eulogia.academy/download"
    }
];

export default projects;

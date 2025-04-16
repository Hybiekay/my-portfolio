import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image"

export function Projects() {
    const projects = [
        {
            title: "Expense Manager App",
            description: "A mobile app to manage daily expenses, built with Flutter and Firebase.",
            link: "#",
            tags: ["Flutter", "Firebase"],
            image: "/images/expense-manager.jpg" // Update with your image path
        },
        {
            title: "SchoolHQ.ng",
            description: "School management platform using Laravel and Plesk hosting integration.",
            link: "#",
            tags: ["Laravel", "Plesk"],
            image: "/images/projects/euvate.png"
        },
        {
            title: "Safe Drop",
            description: "React Native + Express.js based app for secure item delivery and tracking.",
            link: "#",
            tags: ["React Native", "Express.js"],
            image: "/images/projects/euvate.png"
        },
        {
            title: "GLT Platform",
            description: "A JWT-authenticated platform using Flutter frontend and Node.js backend.",
            link: "#",
            tags: ["Flutter", "Node.js", "JWT"],
            image: "/images/projects/euvate.png"
        },
        {
            title: "Euforia SVG Manager",
            description: "An SVG-based design element manager with storage and JSON integration.",
            link: "#",
            tags: ["SVG", "JSON"],
            image: "/images/projects/euforia.png"
        },
        {
            title: "EuCloudHost",
            description: "Custom hosting solution with Plesk automation and Git deployment.",
            link: "#",
            tags: ["Plesk", "Git", "Automation"],
            image: "/images/projects/eucloudhost.png"
        },
        {
            title: "Euvate",
            description: "Online course platform for tech education with email automation.",
            link: "#",
            tags: ["EdTech", "Email Automation"],
            image: "/images/projects/euvate.png"
        },
        {
            title: "Eulogia Academy",
            description: "On-site and online hybrid tech academy initiative started in Ibadan.",
            link: "#",
            tags: ["Education", "Hybrid Learning"],
            image: "/images/safe-drop.jpg"
        }
    ];

    return (
        <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
            <div className="mb-12 flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                    Featured Projects
                </h2>
                <p className="mt-2 text-muted-foreground">A selection of my recent work and initiatives</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden rounded-xl"
                    >
                        {/* Gradient border effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                        <Card className="h-full bg-background/90 border border-gray-800 group-hover:border-transparent transition-all">
                            {/* Project image */}
                            {project.image && (
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            )}


                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 ">{project.title}</h3>
                                <p className="text-muted-foreground mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 bg-secondary rounded-full text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <Button variant="outline" className="w-full mt-auto" asChild>
                                    <a href={project.link} className="flex items-center justify-center gap-2 text-amber-50 ">
                                        View Project <ArrowUpRight className="h-4 w-4" />
                                    </a>
                                </Button>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
}


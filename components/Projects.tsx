import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image"
import projects from "@/data/projects";
import Link from "next/link"; // Make sure it's at the top

export function Projects() {



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
                            {project.images && (
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={project.images[0]}
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
                                    <Link href={`/projects/${project.slug}`} className="flex items-center justify-center gap-2 text-amber-50">
                                        View Project <ArrowUpRight className="h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
}


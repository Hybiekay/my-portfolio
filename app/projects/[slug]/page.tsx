// app/projects/[slug]/page.tsx
import projects from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectClientView from "./project-client-view";
import { PageProps } from "next";



export default async function ProjectDetail({
    params
}: PageProps) {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) return notFound();
    return <ProjectClientView project={project} />;
}
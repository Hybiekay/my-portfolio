import projects from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectClientView from "./project-client-view";


export default function ProjectDetail({ params }: { params: { slug: string } }) {
    const project = projects.find(p => p.slug === params.slug);
    if (!project) return notFound();

    return <ProjectClientView project={project} />;
}

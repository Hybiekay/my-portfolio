import { Metadata } from 'next';
import projects from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectClientView from "./project-client-view";

type PageProps = {
    params: { slug: string };
};

export default async function ProjectDetail({ params }: PageProps) {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) return notFound();

    return <ProjectClientView project={project} />;
}

// Optional: If you have generateMetadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const project = projects.find((p) => p.slug === params.slug);
    return {
        title: project?.title || 'Project Not Found',
    };
}
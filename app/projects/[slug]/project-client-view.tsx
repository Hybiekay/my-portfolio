'use client';
import { Project } from "@/data/projects";
import { GitBranch, DownloadCloud, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectClientView({ project }: { project: Project }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full min-h-screen p-4 md:p-6 bg-background"
        >
            <Link href="/" className="inline-flex items-center mb-6 text-sm text-gray-500 hover:text-blue-600">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Home
            </Link>

            <div className="rounded-xl border border-gray-800 bg-background/90 shadow-xl overflow-hidden flex flex-col md:flex-row h-[calc(100vh-100px)]">
                {/* Left Side: Image */}
                <div className="md:w-1/2 w-full border-b md:border-b-0 md:border-r border-gray-700 relative">
                    <Image
                        src={project.images[0]}
                        alt={`${project.title} screenshot`}
                        fill
                        className="object-contain object-center"
                        priority
                    />
                </div>

                {/* Right Side: Description */}
                <div className="md:w-1/2 w-full p-6 overflow-y-auto">
                    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 mb-4">
                        {project.title}
                    </h1>

                    <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="bg-secondary text-xs font-medium text-secondary-foreground px-3 py-1 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-col gap-3">
                        {project.github && (
                            <Link
                                href={project.github}
                                target="_blank"
                                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
                            >
                                <GitBranch className="w-4 h-4" />
                                View on GitHub
                            </Link>
                        )}
                        {project.download && (
                            <Link
                                href={project.download}
                                target="_blank"
                                className="inline-flex items-center gap-2 text-sm text-green-600 hover:underline"
                            >
                                <DownloadCloud className="w-4 h-4" />
                                Download App
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

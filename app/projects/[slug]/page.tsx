'use client';

import projects, { Project } from "@/data/projects";
import { GitBranchIcon, DownloadCloud, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { useState } from "react";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
    const project: Project | undefined = projects.find(p => p.slug === params.slug);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!project) return notFound();

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === project.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? project.images.length - 1 : prev - 1
        );
    };

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
                {/* Left Side: Image Viewer */}
                <div className="md:w-1/2 w-full border-b md:border-b-0 md:border-r border-gray-700 relative">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                            src={project.images[currentImageIndex]}
                            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                            fill
                            className="object-contain object-center"
                            priority
                        />

                        {/* Navigation Arrows */}
                        {project.images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="w-6 h-6 text-white" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="w-6 h-6 text-white" />
                                </button>
                            </>
                        )}

                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                            {currentImageIndex + 1} / {project.images.length}
                        </div>
                    </div>
                </div>

                {/* Right Side: Text and Buttons */}
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
                                <GitBranchIcon className="w-4 h-4" />
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
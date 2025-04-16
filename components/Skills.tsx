import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export function Skills() {
    const skills = [
        {
            name: "Flutter",
            description: "Cross-platform mobile development with Dart",
            icon: "📱",
        },
        {
            name: "Node.js",
            description: "Server-side JavaScript runtime for backend development",
            icon: "⚙️",
        },
        {
            name: "JavaScript",
            description: "Core web technology for interactive frontends",
            icon: "🟨",
        },
        {
            name: "TypeScript",
            description: "Typed JavaScript superset for scalable applications",
            icon: "🟦",
        },
        {
            name: "React",
            description: "Declarative component-based UI library",
            icon: "⚛️",
        },
        {
            name: "Next.js",
            description: "React framework for production-grade applications",
            icon: "⏭️",
        },
        {
            name: "HTML",
            description: "Markup language for structuring web content",
            icon: "📄",
        },
        {
            name: "CSS",
            description: "Styling language for beautiful web interfaces",
            icon: "🎨",
        },
        {
            name: "Firebase",
            description: "Google's platform for app development and hosting",
            icon: "🔥",
        },
        {
            name: "MongoDB",
            description: "NoSQL document database for flexible data storage",
            icon: "🍃",
        },
        {
            name: "Laravel",
            description: "PHP framework for elegant web applications",
            icon: "🪄",
        },
    ]

    return (
        <section id="skills" className="py-20">
            <div className="relative max-w-4xl mx-auto  p-[2px] rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500">

                <Card className="max-w-4xl mx-auto p-8 bg-background/80">
                    <h2 className="text-3xl font-bold tracking-tight text-transparent text-center mb-10 bg-clip-text bg-gradient-to-tr from-purple-400 to-blue-500">
                        My Skills
                    </h2>

                    <div className="flex flex-wrap justify-center gap-3">
                        <TooltipProvider delayDuration={100}>
                            {skills.map((skill, index) => (
                                <Tooltip key={index}>
                                    <TooltipTrigger asChild>
                                        <Badge
                                            variant="outline"
                                            className="px-4 py-2 text-sm cursor-default hover:bg-primary/10  text-amber-100 transition-colors flex items-center gap-2"
                                        >
                                            <span>{skill.icon}</span>
                                            {skill.name}
                                        </Badge>
                                    </TooltipTrigger>
                                    <TooltipContent side="top" align="center" className="max-w-[200px]">
                                        <p className="text-sm text-center">
                                            {skill.description}
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            ))}
                        </TooltipProvider>
                    </div>
                </Card>
            </div>
        </section>
    )
}
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function About() {
    return (
        <section id="about" className="relative py-20">
            {/* Gradient background */}
            <div className="absolute inset-0 -z-10 opacity-20 blur-2xl bg-gradient-to-r from-purple-700 via-blue-600 to-indigo-500" />

            {/* Main content container */}
            <div className="mx-auto max-w-6xl px-4">
                {/* Gradient border wrapper */}
                <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500">
                    <Card className="relative overflow-hidden rounded-xl backdrop-blur-sm bg-background/80">
                        <div className="grid md:grid-cols-3 gap-8 p-8">
                            {/* Image container - left side */}
                            <div className="md:col-span-1 flex justify-center">
                                <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full border-4 border-primary/20 overflow-hidden">
                                    <Image
                                        src="/path-to-your-image.jpg" // Update with your image path
                                        alt="Ademola Ibukunoluwa"
                                        fill
                                        className="object-cover"
                                        quality={100}
                                    />
                                </div>
                            </div>

                            {/* Text content - right side */}
                            <div className="md:col-span-2">
                                <h2 className="scroll-m-20 text-3xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                                    About Me
                                </h2>

                                <div className="space-y-4 text-muted-foreground">
                                    <p>
                                        I'm Ademola Ibukunoluwa, a passionate fullstack Engineer and the CEO of Eulogia Technologies.
                                        I specialize in building cutting-edge digital solutions for the web and mobile space.
                                    </p>

                                    <p>
                                        With deep expertise in <span className="font-semibold text-primary">Flutter</span>, <span className="font-semibold text-primary">Node.js</span>, <span className="font-semibold text-primary">React Native</span>, <span className="font-semibold text-primary">Laravel/PHP</span>, <span className="font-semibold text-primary">Java</span>, and <span className="font-semibold text-primary">Next.js</span>,
                                        I enjoy crafting seamless user experiences and powerful backend systems.
                                    </p>

                                    <p>
                                        I'm also a Computer Science student, constantly sharpening my problem-solving skills and pushing the boundaries of what's possible with code.
                                    </p>

                                    <p>
                                        I take pride in leading visionary projects like <span className="italic text-primary">SchoolHQ.ng</span>, <span className="italic text-primary">EuCloudHost</span>, and <span className="italic text-primary">Euforia</span>, with a focus on innovation and impact.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}
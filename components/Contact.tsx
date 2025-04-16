import { Card } from "@/components/ui/card";
import { Mail, Github, Twitter, Linkedin, Instagram, Globe } from "lucide-react";

export function Contact() {
    const socialLinks = [
        {
            name: "Email",
            url: "mailto:ibukun@ademola.ng",
            icon: <Mail className="w-5 h-5" />,
            color: "text-blue-400"
        },
        {
            name: "GitHub",
            url: "https://github.com/Hybiekay",
            icon: <Github className="w-5 h-5" />,
            color: "text-gray-300"
        },
        {
            name: "Twitter",
            url: "https://x.com/ademolaibukuno8",
            icon: <Twitter className="w-5 h-5" />,
            color: "text-blue-400"
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/ademola-ibukunoluwa-572b77253",
            icon: <Linkedin className="w-5 h-5" />,
            color: "text-blue-500"
        },
        {
            name: "Instagram",
            url: "https://instagram.com/yourusername",
            icon: <Instagram className="w-5 h-5" />,
            color: "text-pink-500"
        },
        {
            name: "Website",
            url: "https://Ibukunoluwa.ademola.ng",
            icon: <Globe className="w-5 h-5" />,
            color: "text-green-400"
        }
    ];

    return (
        <section id="contact" className="py-20 px-4">
            <Card className="max-w-3xl mx-auto p-8 backdrop-blur-sm bg-background/80">
                <h2 className="text-3xl font-bold tracking-tight mb-6 text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                    Let's Connect
                </h2>

                <p className="text-muted-foreground mb-8 text-center">
                    Feel free to reach out via email or connect with me on social media.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all hover:bg-gray-800 ${social.color}`}
                        >
                            {social.icon}
                            <span>{social.name}</span>
                        </a>
                    ))}
                </div>

                <div className="text-center">
                    <a
                        href="mailto:ibukun@ademola.ng"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity"
                    >
                        <Mail className="w-5 h-5" />
                        ibukun@ademola.ng
                    </a>
                </div>
            </Card>
        </section>
    );
}
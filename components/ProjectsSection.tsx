import { projects } from "@/data/projects"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { useState } from "react"

export default function ProjectsSection({ showAllProjects, setShowAllProjects, itemsToShow, itemVariants }: { showAllProjects: boolean, setShowAllProjects: (showAllProjects: boolean) => void, itemsToShow: number, itemVariants: any }) {
    const displayedProjects = showAllProjects ? projects : projects.slice(0, itemsToShow);

    return (
        <motion.section
            variants={itemVariants}
            className="max-w-6xl mx-auto mt-16"
        >
            <h2 className="text-2xl font-semibold mb-8">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayedProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="overflow-hidden h-full">
                            <CardHeader>
                                <div className="relative h-48 -mt-6 -mx-6 mb-4 overflow-hidden">
                                    {project.image && (
                                        <motion.img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </div>
                                <CardTitle className="flex items-center justify-between">
                                    <span>{project.title}</span>
                                    <div className="flex gap-2">
                                        {project.githubUrl && (
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => window.open(project.githubUrl, '_blank')}
                                            >
                                                <Github className="h-5 w-5" />
                                            </Button>
                                        )}
                                        {project.liveUrl && (
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => window.open(project.liveUrl, '_blank')}
                                            >
                                                <ExternalLink className="h-5 w-5" />
                                            </Button>
                                        )}
                                    </div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    {project.description}
                                </p>
                                <div className="space-y-2">
                                    <h4 className="font-medium">Key Features:</h4>
                                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                        {project.highlights.map((highlight, i) => (
                                            <li key={i}>{highlight}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex flex-wrap gap-2 pt-4">
                                    {project.technologies.map((tech, i) => (
                                        <Button
                                            key={i}
                                            className="px-2 py-1 rounded-full text-sm"
                                        >
                                            {tech}
                                        </Button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
            {projects.length > itemsToShow && (
                <div className="text-center mt-8">
                    <Button
                        variant="outline"
                        onClick={() => setShowAllProjects(!showAllProjects)}
                    >
                        {showAllProjects ? 'Show Less' : 'Load More'}
                    </Button>
                </div>
            )}
        </motion.section>
    )
}
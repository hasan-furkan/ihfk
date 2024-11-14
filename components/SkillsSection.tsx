import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";
export default function SkillsSection({ itemVariants }: { itemVariants: any }) {
    return (
        <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-6">Skills & Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Frontend Skills */}
                <Card>
                    <CardHeader>
                        <CardTitle>Frontend</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Next.js", "React Native", "Redux", "Tailwind CSS", "JavaScript"].map((skill) => (
                                <span key={skill} className="px-2 py-1 bg-primary/10 rounded-full text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Backend Skills */}
                <Card>
                    <CardHeader>
                        <CardTitle>Backend</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {["Python", "Django", "Node.js", "Express", "REST API", "PostgreSQL"].map((skill) => (
                                <span key={skill} className="px-2 py-1 bg-primary/10 rounded-full text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Tools */}
                <Card>
                    <CardHeader>
                        <CardTitle>Tools</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {["Docker", "Git", "Redis", "Elasticsearch", "Nginx", "Jest"].map((skill) => (
                                <span key={skill} className="px-2 py-1 bg-primary/10 rounded-full text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </motion.section>
    )
}
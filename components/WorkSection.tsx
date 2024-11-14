import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { workExperience } from "@/data/work-experience"

export default function WorkSection({ itemVariants, showAllExperience, setShowAllExperience }: { itemVariants: any, showAllExperience: boolean, setShowAllExperience: (showAllExperience: boolean) => void }) {
    return (
        <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
            <div className="space-y-6">
                {workExperience.slice(0, showAllExperience ? workExperience.length : 2).map((work, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="border rounded-lg p-6"
                    >
                        <h3 className="text-xl font-semibold">{work.name}</h3>
                        <p className="text-muted-foreground">{work.position}</p>
                        <p className="text-sm text-muted-foreground">{work.startDate} - {work.endDate}</p>
                        <p className="mt-2">{work.summary}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                            {work.highlights.map((t, i) => (
                                <span key={i} className="px-2 py-1 bg-primary/10 rounded-full text-sm">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
                {workExperience.length > 2 && (
                    <div className="text-center">
                        <Button
                            variant="outline"
                            onClick={() => setShowAllExperience(!showAllExperience)}
                        >
                            {showAllExperience ? 'Show Less' : 'Load More'}
                        </Button>
                    </div>
                )}
            </div>
        </motion.section>
    )
}
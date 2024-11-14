"use client"
import { motion } from "framer-motion"
import { IconCloudDemo } from "@/components/IconCloud";
import { ThemeToggle } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ContactForm } from '@/components/ContactForm'
import { Github, ExternalLink } from "lucide-react"
import { BlogCard } from '@/components/BlogCard'
import { workExperience } from "@/data/work-experience"
import { projects } from "@/data/projects"
import { useEffect, useState } from "react";
import ProjectsSection from "@/components/ProjectsSection";
import WorkSection from "@/components/WorkSection";
import SkillsSection from "@/components/SkillsSection";
import { getMediumPosts } from "@/service/medium";
import type { MediumPost } from "@/types/medium";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const [showAllExperience, setShowAllExperience] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const itemsToShow = 2;

  const [mediumPosts, setMediumPosts] = useState<MediumPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getMediumPosts();
      setMediumPosts(data.items.slice(0, 3)); // Show only first 3 posts
    };
    fetchPosts();
  }, []);

  return (
    <motion.main
      className="min-h-screen bg-background p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <div className="flex gap-4 p-3 items-center justify-between max-w-6xl mx-auto">
        <motion.div className="flex items-center gap-4" variants={itemVariants}>
          <Avatar>
            <AvatarImage className="rounded-full" width={64} height={64} src="/logo.jpeg" />
            <AvatarFallback>HFK</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold">Hasan Furkan Koprulu</h1>
            <p className="text-muted-foreground">Full Stack Developer</p>
          </div>
        </motion.div>
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <motion.div
        className="max-w-6xl mx-auto mt-12 space-y-12"
        variants={containerVariants}
      >
        {/* About Section */}
        <motion.section variants={itemVariants} className="text-center max-w-3xl mx-auto flex gap-4 p-1 items-center justify-center">
          <p className="text-lg text-muted-foreground">
            {`Hello, I'm Hasan Furkan, I'm interested in working on new projects and meeting new people. I can help you with backend development using backend frameworks such as Django, Expressjs, frontend development using frameworks such as Nextjs, React and mobile application development using React Native.`}
          </p>
          <IconCloudDemo />
        </motion.section>

        {/* Skills Section */}
        <SkillsSection itemVariants={itemVariants} />

        {/* Work Experience Section */}
        <WorkSection itemVariants={itemVariants} showAllExperience={showAllExperience} setShowAllExperience={setShowAllExperience} />

        {/* Projects Section */}
        <ProjectsSection showAllProjects={showAllProjects} setShowAllProjects={setShowAllProjects} itemsToShow={itemsToShow} itemVariants={itemVariants} />

        {/* Blog Section */}
        <motion.section
          variants={itemVariants}
          className="max-w-6xl mx-auto mt-16"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">Latest Articles</h2>
            <Button variant="outline" onClick={() => window.open('/blog', '_blank')}>
              View All Posts
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediumPosts.map((post, index) => (
              <BlogCard
                key={index}
                post={{
                  title: post.title,
                  date: new Date(post.pubDate).toLocaleDateString(),
                  content: post.description,
                  tags: post.categories,
                  readTime: "5 min read",
                  slug: post.guid.split('/').pop() ?? '',
                  thumbnail: post.thumbnail
                }}
              />
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          variants={itemVariants}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold mb-6">Let's Connect</h2>

          {/* Social Links */}
          <div className="flex gap-4 justify-center mt-8">
            <Button
              variant="outline"
              onClick={() => window.open('https://github.com/hasan-furkan', '_blank')}
            >
              GitHub
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open('https://www.linkedin.com/in/hasan-furkan-koprulu/', '_blank')}
            >
              LinkedIn
            </Button>
            <Button
              onClick={() => window.location.href = 'mailto:hsnfrkn32@gmail.com'}
            >
              Email Me
            </Button>
          </div>
        </motion.section>

        {/* Contact Form */}
        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-6 text-center">Contact Me</h2>
          <div className="mb-8">
            <ContactForm />
          </div>
        </motion.section>
      </motion.div>
    </motion.main>
  )
}

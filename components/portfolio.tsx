'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-switcher"

export function PortfolioComponent() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            className="text-xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Your Name
          </motion.h1>
          
          <div className="flex items-center gap-4">
            {/* Navigation links */}
            <motion.div 
              className="hidden md:flex space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <a href="#about" className="hover:text-primary">About</a>
              <a href="#projects" className="hover:text-primary">Projects</a>
              <a href="#skills" className="hover:text-primary">Skills</a>
              <a href="#contact" className="hover:text-primary">Contact</a>
            </motion.div>
            
            {/* Theme Toggle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* About Section */}
        <motion.section 
          id="about" 
          className="mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Avatar className="w-32 h-32">
                <AvatarImage src="/placeholder.svg?height=128&width=128" alt="John Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </motion.div>
            <div>
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-xl text-muted-foreground">
                I'm a passionate web developer with expertise in React, Next.js, and modern web technologies. 
                I love creating beautiful, responsive, and user-friendly websites.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          id="projects" 
          className="mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-8">
            My Projects
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
          >
            {[
              { title: "E-commerce Platform", description: "A full-stack e-commerce solution built with Next.js and Stripe" },
              { title: "Task Management App", description: "A React-based task manager with drag-and-drop functionality" },
              { title: "Portfolio Website", description: "A responsive portfolio website showcasing my projects and skills" },
              { title: "Weather Dashboard", description: "A weather app integrating multiple APIs for accurate forecasts" }
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline">View Project</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          id="skills" 
          className="mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-8">
            Skills
          </motion.h2>
          <motion.div 
            className="flex flex-wrap gap-2"
            variants={staggerContainer}
          >
            {["React", "Next.js", "TypeScript", "Node.js", "CSS", "Tailwind CSS", "Git", "RESTful APIs", "GraphQL", "Responsive Design"].map((skill) => (
              <motion.div
                key={skill}
                variants={fadeIn}
                whileHover={{ scale: 1.1 }}
              >
                <Badge variant="secondary" className="text-sm">{skill}</Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-8">
            Get in Touch
          </motion.h2>
          <motion.div 
            className="flex space-x-4"
            variants={staggerContainer}
          >
            <motion.div whileHover={{ scale: 1.1 }}>
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </motion.div>
            <Button variant="outline" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </motion.div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-muted mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p>&copy; 2023 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
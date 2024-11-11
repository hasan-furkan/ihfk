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
            Hasan Furkan Koprulu
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
        <motion.section>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div>
              <Avatar className="w-32 h-32">
                <AvatarImage src="/logo.jpeg" alt="Hasan Furkan Koprulu" />
                <AvatarFallback>HFK</AvatarFallback>
              </Avatar>
            </motion.div>
            <div>
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-xl text-muted-foreground">
                Hello, I&apos;m Hasan Furkan, I&apos;m interested in working on new projects and meeting new people. 
                I can help you with backend development using backend frameworks such as Django, Expressjs, 
                frontend development using frameworks such as Nextjs, React and mobile application development 
                using React Native.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Work Experience Section */}
        <motion.section 
          id="experience" 
          className="mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-8 mt-3">
            Work Experience
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 gap-6"
            variants={staggerContainer}
          >
            {[
              {
                title: "Junius Tech",
                role: "Full Stack Developer (Freelance)",
                date: "Feb 2024 - Present",
                description: "Developing Restful APIs using Django, Django Rest Framework, and creating mobile applications with React Native."
              },
              {
                title: "Double Check",
                role: "Full Stack Developer (Freelance)",
                date: "Jan 2024 - Jul 2024",
                description: "Developed full-stack applications using Django, React Native, and NextJS."
              },
              {
                title: "Kintshop",
                role: "Jr. Backend Developer",
                date: "Mar 2023 - Jul 2023",
                description: "Built and maintained e-commerce platform using Django REST Framework, Redis, and Elasticsearch."
              }
            ].map((job, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription className="font-semibold">{job.role}</CardDescription>
                    <CardDescription>{job.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{job.description}</p>
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
          <div className="space-y-6">
            {[
              {
                category: "Front-End",
                skills: ["HTML5", "CSS3", "JavaScript", "Reactjs", "React Native", "Redux", "Reduxjs Toolkit", "Zustand", "Nextjs", "Tailwindcss", "Bootstrap5", "Ant Design"]
              },
              {
                category: "Back-End",
                skills: ["Nodejs", "Express", "Redis", "Python", "Django", "Django Rest Framework", "SOAP API", "REST API"]
              },
              {
                category: "Tools",
                skills: ["Git", "Github", "Docker", "Docker Compose", "Swagger", "Postman", "Bitbucket", "Jira", "SSH Connection", "Nginx", "Jest", "Cypress", "Redis", "Elasticsearch", "PostgresSQL", "MongoDB"]
              }
            ].map((category, index) => (
              <motion.div key={index} className="space-y-2">
                <h3 className="text-xl font-semibold mb-2">{category.category}</h3>
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={staggerContainer}
                >
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={fadeIn}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge variant="secondary" className="text-sm">{skill}</Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
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
            <motion.a 
              href="mailto:hsnfrkn32@gmail.com"
              whileHover={{ scale: 1.1 }}
            >
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </motion.a>
            <motion.a 
              href="https://github.com/hasan-furkan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/hasan-furkan-koprulu/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </motion.a>
          </motion.div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-muted mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p>&copy; {new Date().getFullYear()} Hasan Furkan Koprulu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
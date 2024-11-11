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

  const workExperience = [
    {
      company: "Junius Tech",
      position: "Full Stack Developer (Freelance)",
      period: "Feb 2024 - Present",
      description: "Full-stack development with Django, React Native, and NextJS. Implementing RESTful APIs, database optimization, and mobile development.",
      tech: ["Python", "Django", "React Native", "NextJS", "PostgreSQL", "Redis"]
    },
    {
      company: "Double Check",
      position: "Full Stack Developer (Freelance)",
      period: "Jan 2024 - Jul 2024",
      description: "Developed RESTful APIs, mobile applications, and web interfaces using Django, React Native, and NextJS.",
      tech: ["Python", "Django", "React Native", "NextJS", "Docker"]
    },
  ]

  const projects = [
    {
      title: "Double Check Mobile App",
      description: "A comprehensive mobile application built with React Native and Django backend. Features include user authentication, real-time notifications, and data synchronization.",
      image: "/projects/doublecheck.png",
      technologies: ["React Native", "Django", "PostgreSQL", "Redis"],
      liveUrl: "https://doublecheck.com.tr/",
      githubUrl: "https://github.com/yourusername/project",
      highlights: [
        "Implemented RESTful APIs using Django Rest Framework",
        "Built responsive mobile UI with React Native",
        "Integrated real-time notifications",
        "Implemented caching with Redis"
      ]
    },
    {
      title: "Kintshop E-commerce Platform",
      description: "An e-commerce platform built with Django and Next.js, featuring advanced search capabilities and real-time inventory management.",
      image: "/projects/kintshop.png",
      technologies: ["Python", "Django", "Next.js", "Elasticsearch", "Redis"],
      liveUrl: "https://kintshop.com/",
      githubUrl: "https://github.com/yourusername/project",
      highlights: [
        "Implemented Elasticsearch for advanced search features",
        "Built responsive UI with Next.js",
        "Integrated payment gateway",
        "Implemented caching system"
      ]
    },
    {
      title: "Kintshop E-commerce Platform",
      description: "An e-commerce platform built with Django and Next.js, featuring advanced search capabilities and real-time inventory management.",
      image: "/projects/kintshop.png",
      technologies: ["Python", "Django", "Next.js", "Elasticsearch", "Redis"],
      liveUrl: "https://kintshop.com/",
      githubUrl: "https://github.com/yourusername/project",
      highlights: [
        "Implemented Elasticsearch for advanced search features",
        "Built responsive UI with Next.js",
        "Integrated payment gateway",
        "Implemented caching system"
      ]
    },
    {
      title: "Kintshop E-commerce Platform",
      description: "An e-commerce platform built with Django and Next.js, featuring advanced search capabilities and real-time inventory management.",
      image: "/projects/kintshop.png",
      technologies: ["Python", "Django", "Next.js", "Elasticsearch", "Redis"],
      liveUrl: "https://kintshop.com/",
      githubUrl: "https://github.com/yourusername/project",
      highlights: [
        "Implemented Elasticsearch for advanced search features",
        "Built responsive UI with Next.js",
        "Integrated payment gateway",
        "Implemented caching system"
      ]
    },
  ]

  const blogPosts = [
    {
      title: "Understanding Django REST Framework",
      date: "2024-03-15",
      content: `
        <h2>Introduction to DRF</h2>
        <p>Django REST framework (DRF) is a powerful and flexible toolkit for building Web APIs...</p>
        <h3>Key Features:</h3>
        <ul>
          <li>Web browsable API</li>
          <li>Authentication policies</li>
          <li>Serialization</li>
        </ul>
      `,
      tags: ["Django", "API", "Backend"],
      readTime: "5 min read",
      slug: "understanding-django-rest-framework"
    },
    {
      title: "React Native Best Practices",
      date: "2024-03-10",
      content: `
        <h2>React Native Development</h2>
        <p>When building mobile applications with React Native, following best practices is crucial...</p>
        <h3>Performance Tips:</h3>
        <ul>
          <li>Use memo wisely</li>
          <li>Optimize images</li>
          <li>Implement lazy loading</li>
        </ul>
      `,
      tags: ["React Native", "Mobile", "JavaScript"],
      readTime: "7 min read",
      slug: "react-native-best-practices"
    },
    // Add more blog posts...
  ]

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

        {/* Work Experience Section */}
        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
          <div className="space-y-6">
            {workExperience.map((work, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="border rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold">{work.company}</h3>
                <p className="text-muted-foreground">{work.position}</p>
                <p className="text-sm text-muted-foreground">{work.period}</p>
                <p className="mt-2">{work.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {work.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 bg-primary/10 rounded-full text-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

         {/* Projects Section */}
         <motion.section 
          variants={itemVariants}
          className="max-w-6xl mx-auto mt-16"
        >
          <h2 className="text-2xl font-semibold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
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
        </motion.section>

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
            {blogPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
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

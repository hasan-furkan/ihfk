const username = "hasan-furkan"

export const projects = [
    {
        title: "Portfolio",
        description: "A personal portfolio website built with Next.js and Tailwind CSS.",
        image: "/projects/portfolio.png",
        technologies: ["Next.js", "Tailwind CSS"],
        liveUrl: `https://ihfk.me`,
        githubUrl: `https://github.com/${username}/ihfk`,
        highlights: [
            "Implemented responsive design with Tailwind CSS",
            "Integrated Framer Motion for animations",
            "Optimized for performance and SEO",
            "Deployed on Vercel"
        ]
    },
    {
        title: "Django Logging Easy",
        description: "A simple and flexible Django app for logging model actions and changes. This package allows developers to easily add logging capabilities to their Django models using decorators.",
        image: "/projects/django-logging-easy.png",
        technologies: ["Django", "Python"],
        liveUrl: `https://pypi.org/project/django-logging-easy/`,
        githubUrl: `https://github.com/${username}/django-model-logger`,
        highlights: [
            "Easily add logging capabilities to Django models",
            "Customizable logging levels and messages",
            "Supports both synchronous and asynchronous logging"
        ]
    },
    {
        title: "Website to PDF",
        description: "A simple and flexible for converting websites to PDF.",
        image: "/projects/website-to-pdf.png",
        technologies: ["Python"],
        liveUrl: `https://github.com/${username}/website-to-pdf`,
        githubUrl: `https://github.com/${username}/website-to-pdf`,
        highlights: [
            "Simple and flexible for converting websites to PDF",
            "Supports both synchronous and asynchronous logging"
        ]
    },
    {
        title: "Admin Panel Starter",
        description: "Nextjs Admin Panel Starter with Tailwind CSS and Shadcn UI with i18n support.",
        image: "/projects/admin-panel-starter.png",
        technologies: ["Next.js", "Tailwind CSS", "Shadcn UI"],
        liveUrl: `https://admin-start.ihfk.me/dashboard/crm`,
        githubUrl: `https://github.com/${username}/hfk-admin-starter-kit`,
        highlights: [
            "Nextjs Admin Panel Starter with Tailwind CSS and Shadcn UI",
            "CRM Dashboard",
            "E-Commerce Dashboard",
            "i18n Support"
        ]
    }
]
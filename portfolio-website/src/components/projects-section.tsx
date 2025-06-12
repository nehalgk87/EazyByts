"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { Skeleton } from "@/components/ui/skeleton"

interface Project {
  _id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real application, this would fetch from your MongoDB API
    // For now, we'll use mock data
    const mockProjects = [
      {
        _id: "1",
        title: "Nataraj Paper Industries",
        description:
          "Developed a responsive front-end advertising website for a client using HTML, CSS, and JavaScript, ensuring an engaging user experience across all devices. The site was hosted on 000webhost, focusing on fast loading times and optimized performance to enhance the client's online presence.",
        image: "/placeholder.svg?height=400&width=600",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://example.com",
      },
      {
        _id: "2",
        title: "Smart Task Scheduler",
        description:
          "Built a Smart Task Scheduler web application using React for the frontend and AWS for cloud services. The application helps users organize and prioritize their daily tasks, leveraging machine learning algorithms to predict the optimal task completion times based on the user's past behavior and time availability.",
        image: "/placeholder.svg?height=400&width=600",
        technologies: ["React", "AWS", "Machine Learning"],
        githubUrl: "https://github.com",
      },
    ]

    setTimeout(() => {
      setProjects(mockProjects)
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <section id="projects" className="py-16 bg-muted/50 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Projects</h2>
          <p className="max-w-[700px] text-muted-foreground">Explore my latest projects and see my skills in action.</p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-[200px] w-full" />
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full mt-2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6 mt-2" />
                  <Skeleton className="h-4 w-4/6 mt-2" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-10 w-24" />
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project._id} className="overflow-hidden">
                <div className="relative h-[200px] w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-foreground/80">{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex gap-2">
                  {project.liveUrl && (
                    <Button asChild size="sm" variant="default">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild size="sm" variant="outline">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

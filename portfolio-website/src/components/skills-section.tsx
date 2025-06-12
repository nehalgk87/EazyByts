import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code, Server, Database, Cloud, Smartphone, Shield } from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Java", level: 85 },
        { name: "Python", level: 80 },
        { name: "C", level: 75 },
        { name: "JavaScript", level: 90 },
      ],
    },
    {
      title: "Web Development",
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 85 },
        { name: "React", level: 80 },
        { name: "Node.js", level: 75 },
      ],
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: [
        { name: "SQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Firebase", level: 70 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6 text-primary" />,
      skills: [
        { name: "AWS", level: 75 },
        { name: "Git", level: 85 },
        { name: "Docker", level: 65 },
      ],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Android", level: 70 },
        { name: "Flutter", level: 65 },
      ],
    },
    {
      title: "Networking & Security",
      icon: <Shield className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Cybersecurity", level: 60 },
        { name: "Network Protocols", level: 55 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Skills</h2>
          <p className="max-w-[700px] text-muted-foreground">
            My technical expertise and proficiencies across various domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center gap-2">
                {category.icon}
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <CardDescription className="font-medium text-foreground">{skill.name}</CardDescription>
                      <CardDescription>{skill.level}%</CardDescription>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

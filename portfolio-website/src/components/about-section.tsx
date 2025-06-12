import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, Award, Languages } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
          <p className="max-w-[700px] text-muted-foreground">
            Driven and technically proficient computer science graduate with a strong foundation in software
            development, algorithms, and cloud technologies. Skilled in Java, Python, web development, and database
            management, I bring problem-solving expertise and a passion for innovation to every project.
          </p>
        </div>

        <Tabs defaultValue="education" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="languages">Languages</TabsTrigger>
          </TabsList>
          <TabsContent value="education" className="space-y-4 mt-6">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <GraduationCap className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Master of Computer Application</CardTitle>
                  <CardDescription>SRM Institute of Science and Technology • Chennai, Tamil Nadu</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>Expected Graduation: June 2026</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <GraduationCap className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Bachelor of Computer Application</CardTitle>
                  <CardDescription>
                    J S S Shri Manjunatheshwara Institute Of UG. & PG • Dharwad, Karnataka
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>Graduated: June 2024</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="certificates" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• Certificate of Accomplishment Python (Basic) by HackerRank</p>
                <p>• Certified Python and Artificial Intelligence By DevTown</p>
                <p>• Certified JavaScript and React Developer By DevTown</p>
                <p>• Certified Backend Web Development using Node.js, Express & JS</p>
                <p>• Certified Data Structures & Algorithms using C++ By DevTown</p>
                <p>• Certificate of Appreciation & Completion (devtown.in)</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="languages" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Languages className="h-5 w-5 text-primary" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="font-medium">Kannada</p>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">English</p>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">Hindi</p>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">Tamil</p>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "60%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

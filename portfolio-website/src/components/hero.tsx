import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-20 md:py-32 flex flex-col items-center text-center">
      <div className="container px-4 md:px-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Hi, I'm <span className="text-primary">Nehal Ganesh Kulloli</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px] mx-auto">
            Computer Science Graduate specializing in Full-Stack Development, Cloud Technologies, and Software
            Engineering
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button asChild size="lg">
              <Link href="#contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

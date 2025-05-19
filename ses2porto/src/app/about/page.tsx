import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Portfolio
          </Link>
          <nav className="flex gap-4">
            <Link href="/" className="text-sm font-medium underline-offset-4 hover:underline">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium underline-offset-4 hover:underline">
              About
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="w-fit">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Learn more about my background, experience, and what drives me.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Education</h2>
                <div className="space-y-6">
                  <div className="rounded-lg border bg-background p-6">
                    <h3 className="text-xl font-bold">Bachelor of Computer Science</h3>
                    <p className="text-muted-foreground">Bina Nusantara University</p>
                    <p className="text-sm text-muted-foreground">2023 - 2027</p>
                    <p className="mt-2">
                      adsd
                    </p>
                  </div>
                  <div className="rounded-lg border bg-background p-6">
                    <h3 className="text-xl font-bold">High School Graduate</h3>
                    <p className="text-muted-foreground">Immanuel Bilingual Class</p>
                    <p className="text-sm text-muted-foreground">2020 - 2023</p>
                    <p className="mt-2">
                      Focused on science and technologies.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6">Skills</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border bg-background p-4">
                    <h3 className="font-medium">Frontend Development</h3>
                    <p className="text-sm text-muted-foreground">Next.js, HTML, CSS, JavaScript, Flutter</p>
                  </div>
                  <div className="rounded-lg border bg-background p-4">
                    <h3 className="font-medium">Backend Development</h3>
                    <p className="text-sm text-muted-foreground">Node.js, Python, SQL</p>
                  </div>
                  <div className="rounded-lg border bg-background p-4">
                    <h3 className="font-medium">UI/UX Design</h3>
                    <p className="text-sm text-muted-foreground">Figma and User Research</p>
                  </div>
                  <div className="rounded-lg border bg-background p-4">
                    <h3 className="font-medium">Hmm</h3>
                    <p className="text-sm text-muted-foreground">mikir dl bisa apa lagi hehe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter">Work Experience</h2>
              <p className="text-muted-foreground md:text-xl">
                My professional journey and the companies I've worked with.
              </p>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="group relative overflow-hidden rounded-lg border">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="pic"
                      width={600}
                      height={400}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">Professional Daughter</h3>
                    <p className="text-sm text-muted-foreground">Mommy and Daddy UvU</p>
                    <p className="text-sm text-muted-foreground">2005 - present</p>
                    <p className="mt-2">
                      desc 1
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</h2>
              <p className="text-muted-foreground md:text-xl">
                Interested in working together? Feel free to reach out to me.
              </p>
              <div className="mx-auto flex max-w-sm flex-col gap-2 min-[400px]:flex-row">
                <Link href="mailto:contact@example.com" className="w-full">
                  <Button size="lg" className="w-full">
                    Contact Me
                  </Button>
                </Link>
                <Link href="/resume.pdf" className="w-full">
                  <Button variant="outline" size="lg" className="w-full">
                    Download Resume
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Twitter
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              GitHub
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

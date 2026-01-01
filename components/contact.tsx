import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Twitter } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8 italic">Let's scale together.</h2>
          <p className="text-lg opacity-80 mb-12 text-balance leading-relaxed">
            I'm currently seeking junior DevOps opportunities where I can contribute to complex infrastructure and learn
            from industry leaders.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full w-full sm:w-auto px-10 h-14 text-primary font-bold"
            >
              <Mail className="mr-2 w-4 h-4" />
              nivethaadevops@gmail.com
            </Button>
            <div className="flex items-center gap-4">
              <a
                href="http://linkedin.com/in/nivetha-sr"
                className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -z-10"></div>
    </section>
  )
}

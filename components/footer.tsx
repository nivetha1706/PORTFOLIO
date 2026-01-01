import { Github, Linkedin, Mail, Twitter, Terminal, Cpu, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="pt-24 pb-12 border-t bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-2 font-black text-xl tracking-tighter">
              <Terminal className="w-6 h-6 text-primary" />
              NIVETHA.DEV
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Engineering reliable infrastructure and automated delivery pipelines. Always curious about cloud-native
              technologies and the future of platform engineering.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Nivetha1723"
                className="p-2 rounded-lg bg-background border hover:border-primary transition-colors text-muted-foreground hover:text-primary"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="http://linkedin.com/in/nivetha-sr"
                className="p-2 rounded-lg bg-background border hover:border-primary transition-colors text-muted-foreground hover:text-primary"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:nivethaadevops@gmail.com"
                className="p-2 rounded-lg bg-background border hover:border-primary transition-colors text-muted-foreground hover:text-primary"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-mono uppercase tracking-widest font-bold">Quick Navigation</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#hero" className="hover:text-primary transition-colors italic">
                  01. Root
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary transition-colors italic">
                  02. Stack
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors italic">
                  03. Pipeline
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors italic">
                  04. Callback
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-mono uppercase tracking-widest font-bold">System Status</h4>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-background border border-green-500/20 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase">Status</span>
                  <span className="text-xs font-bold text-green-600 dark:text-green-400">All Systems Operational</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground italic">
                <Globe className="w-3 h-3" />
                <span>Uptime: 99.9% (Mental Capacity)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] text-muted-foreground font-mono uppercase tracking-[0.2em]">
          <p>© 2025 Nivetha R - Engineered in Hosur, India</p>
        </div>
      </div>
    </footer>
  )
}

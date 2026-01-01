"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Server, ShieldCheck, Cpu, Terminal, Cloud } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08)_0%,transparent_50%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border text-xs font-mono mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                SYSTEM OPERATIONAL
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-balance leading-[0.9]"
            >
              Automating <span className="text-primary italic">Success</span>.
              <br />
              Scaling <span className="text-foreground">Impact</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed text-pretty"
            >
              Hi, I am <span className="text-foreground font-bold border-b-2 border-primary/40 pb-0.5">Nivetha R</span>,
              a Junior DevOps Engineer crafting high-performance delivery pipelines and secure cloud-native ecosystems.
            </motion.p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects">
                <Button size="lg" className="rounded-full px-8 group">
                  View My Pipeline
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="/nivetha_resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
                  Download CV
                </Button>
              </a>
            </div>
          </div>

          <div className="relative flex-shrink-0">
            <img
              src="/nivetha.PNG"
              alt="Nivetha R"
              className="w-72 md:w-80 h-auto object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="p-10 rounded-3xl bg-background border hover:border-primary transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Terminal className="w-24 h-24 rotate-12" />
            </div>
            <Code2 className="w-12 h-12 mb-6 text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform" />
            <h3 className="text-xl font-bold mb-3">Automation Engineering</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mastering IaC with Terraform and Ansible to ensure immutable infrastructure and zero-manual-intervention
              deployments.
            </p>
          </div>
          <div className="p-10 rounded-3xl bg-background border hover:border-primary transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Cloud className="w-24 h-24 -rotate-12" />
            </div>
            <Server className="w-12 h-12 mb-6 text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform" />
            <h3 className="text-xl font-bold mb-3">Cloud Orchestration</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Architecting resilient systems on AWS and Kubernetes, focusing on high availability, scalability, and cost
              optimization.
            </p>
          </div>
          <div className="p-10 rounded-3xl bg-background border hover:border-primary transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Cpu className="w-24 h-24 rotate-6" />
            </div>
            <ShieldCheck className="w-12 h-12 mb-6 text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform" />
            <h3 className="text-xl font-bold mb-3">Pipeline Security</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Implementing Shift-Left security practices and robust monitoring with Prometheus/Grafana for full stack
              visibility.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative background grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    </section>
  )
}

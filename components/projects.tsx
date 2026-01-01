import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Terminal, GitBranch, Server, Activity } from "lucide-react"

const projects = [
  {
    title: "CI/CD Pipeline for Microservices",
    description:
      "A robust automation suite utilizing Jenkins and Docker for seamless container orchestration and EKS deployment.",
    tags: ["Jenkins", "Docker", "AWS EKS", "SonarQube"],
    repo: "#",
    demo: "#",
    icon: <GitBranch className="w-5 h-5" />,
    stats: { build: "Success", duration: "4m 12s", status: "Healthy" },
    color: "blue",
  },
  {
    title: "Infrastructure as Code: AWS Setup",
    description:
      "Multi-region VPC architecture fully defined and managed via Terraform for scalable and repeatable environments.",
    tags: ["Terraform", "AWS", "Networking"],
    repo: "#",
    demo: "#",
    icon: <Server className="w-5 h-5" />,
    stats: { coverage: "98%", regions: "3", status: "Active" },
    color: "teal",
  },
  {
    title: "Cluster Monitoring Stack",
    description:
      "End-to-end observability implementation for Kubernetes using Prometheus and Grafana for real-time traffic analysis.",
    tags: ["Prometheus", "Grafana", "K8s"],
    repo: "#",
    demo: "#",
    icon: <Activity className="w-5 h-5" />,
    stats: { uptime: "99.9%", alerts: "Enabled", status: "Live" },
    color: "purple",
  },
]

const colorMap: Record<string, string> = {
  blue: "text-blue-400 border-blue-500/30 bg-blue-950/20 hover:border-blue-400 shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)] hover:shadow-blue-500/20",
  teal: "text-teal-400 border-teal-500/30 bg-teal-950/20 hover:border-teal-400 shadow-[0_0_30px_-10px_rgba(20,184,166,0.3)] hover:shadow-teal-500/20",
  purple:
    "text-purple-400 border-purple-500/30 bg-purple-950/20 hover:border-purple-400 shadow-[0_0_30px_-10px_rgba(168,85,247,0.3)] hover:shadow-purple-500/20",
}

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 uppercase">
              Project <span className="text-primary">Pipeline</span>
            </h2>
            <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">
              {"//"} Executing deployment workflows
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-primary animate-pulse">
            <Terminal className="w-4 h-4" />
            LIVE_DEPLOYMENTS_ACTIVE
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative flex flex-col p-8 rounded-3xl border transition-all duration-500 ${colorMap[project.color]}`}
            >
              <div className="flex justify-between items-start mb-8">
                <div
                  className={`p-3 rounded-xl bg-black border border-current/20 group-hover:border-current transition-all`}
                >
                  {project.icon}
                </div>
                <div className="flex flex-wrap justify-end gap-1.5 max-w-[150px]">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-[9px] font-mono border-current/20 text-current/60 group-hover:text-current"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:translate-x-1 transition-transform text-white">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-8">{project.description}</p>

              <div className="grid grid-cols-3 gap-2 py-4 mb-8 border-y border-current/10 font-mono text-[10px] uppercase">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div key={key}>
                    <div className="text-zinc-500 mb-1">{key}</div>
                    <div className={`font-bold text-zinc-100 group-hover:text-current transition-colors`}>{value}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6 mt-auto">
                <a
                  href={project.repo}
                  className="group/link flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-current transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Source
                </a>
                <a
                  href={project.demo}
                  className="group/link flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-current transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Artifacts
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

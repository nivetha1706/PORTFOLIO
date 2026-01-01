const skills = [
  { name: "AWS", category: "Cloud", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", category: "Containers", logo: "https://simpleicons.org/icons/docker.svg" },
  { name: "Kubernetes", category: "Orchestration", logo: "https://simpleicons.org/icons/kubernetes.svg" },
  { name: "Terraform", category: "IaC", logo: "https://simpleicons.org/icons/terraform.svg" },
  { name: "Jenkins", category: "CI/CD", logo: "https://simpleicons.org/icons/jenkins.svg" },
  { name: "GitHub Actions", category: "CI/CD", logo: "https://simpleicons.org/icons/githubactions.svg" },
  { name: "Ansible", category: "Config Mgmt", logo: "https://simpleicons.org/icons/ansible.svg" },
  { name: "Linux", category: "OS", logo: "https://simpleicons.org/icons/linux.svg" },
  { name: "Python", category: "Scripting", logo: "https://simpleicons.org/icons/python.svg" },
  { name: "Prometheus", category: "Monitoring", logo: "https://simpleicons.org/icons/prometheus.svg" },
  { name: "Grafana", category: "Visualization", logo: "https://simpleicons.org/icons/grafana.svg" },
  { name: "Bash", category: "Scripting", logo: "https://simpleicons.org/icons/gnubash.svg" },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Technical Stack</h2>
            <p className="text-muted-foreground">
              My toolkit for building and maintaining robust delivery pipelines and infrastructure.
            </p>
          </div>
          <div className="text-sm font-mono text-primary bg-primary/10 px-4 py-2 rounded-lg border border-primary/20">
            $ ls -R /stack/tools
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group p-6 rounded-xl bg-background border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center gap-4"
            >
              <div className="w-12 h-12 flex items-center justify-center relative bg-muted/20 rounded-lg p-2">
                <img
                  src={skill.logo || "/placeholder.svg"}
                  alt={`${skill.name} logo`}
                  className="w-full h-full object-contain brightness-0 dark:brightness-200 group-hover:brightness-100 transition-all duration-300"
                />
              </div>
              <div className="space-y-1">
                <span className="text-sm font-bold block">{skill.name}</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

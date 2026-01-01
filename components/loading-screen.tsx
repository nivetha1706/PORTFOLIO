"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [logs, setLogs] = useState<string[]>([])

  useEffect(() => {
    const logMessages = [
      "git checkout main",
      "npm install --frozen-lockfile",
      "docker build -t nivetha-portfolio:latest .",
      "vulnerability scan: 0 critical, 0 high",
      "terraform plan -out=tfplan",
      "terraform apply tfplan",
      "provisioning AWS EKS cluster...",
      "deploying k8s manifests",
      "configuring route53 records",
      "system healthy: all services operational",
    ]

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer)
          setTimeout(() => setLoading(false), 800)
          return 100
        }
        const diff = Math.random() * 15
        const next = Math.min(oldProgress + diff, 100)

        // Add logs based on progress
        const logIndex = Math.floor((next / 100) * logMessages.length)
        if (logMessages[logIndex] && !logs.includes(logMessages[logIndex])) {
          setLogs((prev) => [...prev, logMessages[logIndex]].slice(-4))
        }

        return next
      })
    }, 200)

    return () => clearInterval(timer)
  }, [logs])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-950 font-mono text-zinc-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

          <div className="relative w-80 space-y-6">
            <div className="flex items-center justify-between text-[10px] tracking-[0.2em] font-bold text-blue-500">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                INIT_SEQUENCE
              </div>
              <span>{Math.round(progress)}%</span>
            </div>

            <div className="h-[2px] w-full bg-zinc-900 overflow-hidden">
              <motion.div
                className="h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>

            <div className="bg-black/40 border border-zinc-800/50 p-4 rounded-lg backdrop-blur-sm">
              <div className="space-y-1.5">
                {logs.map((log, i) => (
                  <motion.p
                    key={log + i}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-[10px] text-zinc-500 flex items-start gap-2"
                  >
                    <span className="text-blue-900 shrink-0">
                      [{new Date().toLocaleTimeString([], { hour12: false })}]
                    </span>
                    <span className={i === logs.length - 1 ? "text-zinc-300" : ""}>
                      {i === logs.length - 1 && "› "}
                      {log}
                    </span>
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

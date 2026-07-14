import { ArrowRight, Bot, Boxes, Code2, Database, FileText, GitBranch, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import { PlannerCard } from "@/components/PlannerCard";
import { demoArtifacts, plannerSections, stack } from "@/lib/planner";

const engines = [
  { icon: FileText, label: "PRD/TRD Generator" },
  { icon: Database, label: "Database Designer" },
  { icon: Code2, label: "API Designer" },
  { icon: ShieldCheck, label: "Security Planner" },
  { icon: Rocket, label: "DevOps Planner" },
  { icon: Boxes, label: "Cost Estimator" }
];

const timeline = [
  ["0–20 sec", "Introduce the messy engineering planning problem"],
  ["20–50 sec", "Enter a startup idea like “Airbnb for parking spaces”"],
  ["50–90 sec", "BuildPilot generates product and planning artifacts"],
  ["90–140 sec", "Review database, APIs, architecture, and security"],
  ["140–170 sec", "Click Generate with Codex"],
  ["170–180 sec", "Codex starts the production-ready repository"]
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative isolate px-6 py-8 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-10 grid-mask opacity-30" />
        <div className="absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/30 blur-3xl" />

        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
          <div className="flex items-center gap-3 font-semibold">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-500 shadow-glow"><Bot className="h-5 w-5" /></span>
            BuildPilot AI
          </div>
          <a className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 sm:block" href="#demo">View demo flow</a>
        </nav>

        <div className="mx-auto grid max-w-7xl items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-100">
              <Sparkles className="h-4 w-4" /> AI Product Engineer for founders and developers
            </div>
            <h1 className="mt-7 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Turn any software idea into a production-ready project.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              BuildPilot AI replaces scattered ChatGPT chats, Notion docs, Draw.io diagrams, Jira boards, and handoff documents with one automated engineering planning workflow.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#planner" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-4 font-semibold shadow-glow transition hover:bg-blue-400">
                Generate planning system <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#codex" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 font-semibold text-slate-200 hover:bg-white/10">
                Generate with Codex
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-4 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-slate-950 p-5">
              <p className="text-sm text-slate-400">Idea prompt</p>
              <div className="mt-3 rounded-2xl border border-blue-400/30 bg-blue-400/10 p-5 text-lg">I want to build an Uber for electric tractors.</div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {demoArtifacts.map((artifact) => (
                  <div key={artifact} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-200">✓ {artifact}</div>
                ))}
              </div>
              <button className="mt-5 w-full rounded-2xl bg-emerald-400 px-5 py-4 font-bold text-emerald-950">Generate with Codex</button>
            </div>
          </div>
        </div>
      </section>

      <section id="planner" className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="max-w-3xl">
          <p className="font-semibold text-blue-300">One platform, full workflow</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight">From product thought to engineering handoff in seconds.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {plannerSections.map((section) => <PlannerCard key={section.title} section={section} />)}
        </div>
      </section>

      <section id="codex" className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-3xl font-bold">Architecture</h2>
            <div className="mt-8 grid gap-4 text-slate-200">
              {["User", "Frontend", "Nest API", "Planner AI", "Output Engine", "Database", "Codex Generator", "GitHub Repository"].map((node) => (
                <div key={node} className="flex items-center gap-4 rounded-2xl bg-slate-900 p-4"><GitBranch className="h-5 w-5 text-blue-300" />{node}</div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-3xl font-bold">Core engines</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {engines.map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-2xl border border-white/10 p-5">
                  <Icon className="mb-4 h-6 w-6 text-emerald-300" />
                  <p>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="rounded-[2rem] border border-blue-400/20 bg-blue-500/10 p-8">
          <h2 className="text-3xl font-bold">Recommended stack</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {stack.map((item) => <span key={item} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950">{item}</span>)}
          </div>
        </div>
      </section>

      <section id="demo" className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        <h2 className="text-3xl font-bold">180-second demo script</h2>
        <div className="mt-8 grid gap-4">
          {timeline.map(([time, event]) => <div key={time} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"><span className="font-bold text-blue-300">{time}</span><p className="mt-2 text-slate-300">{event}</p></div>)}
        </div>
      </section>
    </main>
  );
}

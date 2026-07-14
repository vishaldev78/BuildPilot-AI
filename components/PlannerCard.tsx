import { CheckCircle2 } from "lucide-react";
import type { PlannerSection } from "@/lib/planner";

type PlannerCardProps = {
  section: PlannerSection;
};

export function PlannerCard({ section }: PlannerCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur">
      <h3 className="text-xl font-semibold text-white">{section.title}</h3>
      <ul className="mt-5 space-y-3">
        {section.items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
            <CheckCircle2 className="h-4 w-4 flex-none text-emerald-400" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

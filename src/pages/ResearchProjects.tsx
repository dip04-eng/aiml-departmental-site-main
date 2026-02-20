import { useState } from "react";
import { fundedProjects } from "@/data/departmentData";

const ResearchProjects = () => {
  const [statusFilter, setStatusFilter] = useState<"all" | "ongoing" | "completed">("all");
  const filtered = statusFilter === "all" ? fundedProjects : fundedProjects.filter(p => p.status === statusFilter);

  return (
    <div>
      <section className="bg-primary py-16">
        <div className="container">
          <p className="text-accent text-[11px] font-bold uppercase tracking-[2px] mb-2 font-body">Research</p>
          <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">Funded Projects</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="flex gap-2 mb-8">
            {(["all", "ongoing", "completed"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-4 py-2 rounded-md text-sm font-semibold font-body capitalize transition-colors ${
                  statusFilter === s ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {s === "all" ? "All" : s}
              </button>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="py-3 pr-4 font-semibold text-foreground">#</th>
                  <th className="py-3 pr-4 font-semibold text-foreground">Project Title</th>
                  <th className="py-3 pr-4 font-semibold text-foreground">PI</th>
                  <th className="py-3 pr-4 font-semibold text-foreground">Agency</th>
                  <th className="py-3 pr-4 font-semibold text-foreground">Amount</th>
                  <th className="py-3 pr-4 font-semibold text-foreground">Duration</th>
                  <th className="py-3 font-semibold text-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p, i) => (
                  <tr key={p.id} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                    <td className="py-3 pr-4 text-muted-foreground">{i + 1}</td>
                    <td className="py-3 pr-4 text-foreground font-medium max-w-xs">{p.title}</td>
                    <td className="py-3 pr-4 text-muted-foreground whitespace-nowrap">{p.pi}</td>
                    <td className="py-3 pr-4 text-muted-foreground">{p.agency}</td>
                    <td className="py-3 pr-4 font-mono text-foreground">{p.amount}</td>
                    <td className="py-3 pr-4 text-muted-foreground">{p.duration}</td>
                    <td className="py-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        p.status === "ongoing" ? "bg-green-100 text-green-800" : "bg-secondary text-muted-foreground"
                      }`}>
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchProjects;

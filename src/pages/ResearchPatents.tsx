import { patents } from "@/data/departmentData";

const statusColors: Record<string, string> = {
  Filed: "bg-blue-100 text-blue-800",
  Published: "bg-amber-100 text-amber-800",
  Granted: "bg-green-100 text-green-800",
};

const ResearchPatents = () => (
  <div>
    <section className="bg-primary py-16">
      <div className="container">
        <p className="text-accent text-[11px] font-bold uppercase tracking-[2px] mb-2 font-body">Research</p>
        <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">Patents</h1>
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        <div className="overflow-x-auto">
          <table className="w-full text-sm font-body">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-3 pr-4 font-semibold text-foreground">#</th>
                <th className="py-3 pr-4 font-semibold text-foreground">Patent Title</th>
                <th className="py-3 pr-4 font-semibold text-foreground">Inventors</th>
                <th className="py-3 pr-4 font-semibold text-foreground">Application No.</th>
                <th className="py-3 pr-4 font-semibold text-foreground">Year</th>
                <th className="py-3 font-semibold text-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {patents.map((p, i) => (
                <tr key={p.id} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                  <td className="py-3 pr-4 text-muted-foreground">{i + 1}</td>
                  <td className="py-3 pr-4 text-foreground font-medium max-w-sm">{p.title}</td>
                  <td className="py-3 pr-4 text-muted-foreground">{p.inventors}</td>
                  <td className="py-3 pr-4 font-mono text-xs text-muted-foreground">{p.applicationNo}</td>
                  <td className="py-3 pr-4 text-muted-foreground">{p.year}</td>
                  <td className="py-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[p.status] || "bg-secondary text-muted-foreground"}`}>
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

export default ResearchPatents;

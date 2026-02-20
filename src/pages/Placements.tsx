import { TrendingUp, Quote } from "lucide-react";
import { placementStats, placementTestimonials, recruiters, industryMous } from "@/data/departmentData";

const Placements = () => (
  <div>
    <section className="bg-primary py-16">
      <div className="container">
        <p className="text-accent text-[11px] font-bold uppercase tracking-[2px] mb-2 font-body">Careers</p>
        <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">Placements & Industry</h1>
      </div>
    </section>

    {/* Hero Stat */}
    <section className="py-12 bg-secondary">
      <div className="container text-center">
        <div className="inline-flex items-center gap-3 bg-card border border-border rounded-lg px-8 py-6">
          <TrendingUp className="w-10 h-10 text-accent" />
          <div className="text-left">
            <p className="font-mono font-bold text-4xl text-primary">{placementStats[0].highestPackage}</p>
            <p className="text-sm text-muted-foreground font-body">Highest Package ({placementStats[0].year})</p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        {/* Year-wise Stats */}
        <div className="section-header">
          <p className="section-label">Track Record</p>
          <h2 className="section-title">Year-wise Placement Statistics</h2>
        </div>
        <div className="overflow-x-auto mb-16">
          <table className="w-full text-sm font-body">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-3 pr-4 font-semibold text-foreground">Year</th>
                <th className="py-3 pr-4 font-semibold text-foreground">Students Placed</th>
                <th className="py-3 pr-4 font-semibold text-foreground">Avg Package</th>
                <th className="py-3 pr-4 font-semibold text-foreground">Highest Package</th>
                <th className="py-3 font-semibold text-foreground">Companies Visited</th>
              </tr>
            </thead>
            <tbody>
              {placementStats.map(s => (
                <tr key={s.year} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                  <td className="py-3 pr-4 font-medium text-foreground">{s.year}</td>
                  <td className="py-3 pr-4 text-muted-foreground">{s.studentsPlaced}</td>
                  <td className="py-3 pr-4 font-mono text-foreground">{s.avgPackage}</td>
                  <td className="py-3 pr-4 font-mono text-foreground">{s.highestPackage}</td>
                  <td className="py-3 text-muted-foreground">{s.companiesVisited}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Top Recruiters */}
        <div className="section-header">
          <p className="section-label">Our Partners</p>
          <h2 className="section-title">Top Recruiters</h2>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-16">
          {recruiters.map(r => (
            <div key={r} className="bg-card border border-border rounded-lg p-4 text-center card-hover">
              <span className="font-body font-semibold text-sm text-foreground">{r}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="section-header">
          <p className="section-label">Student Stories</p>
          <h2 className="section-title">Testimonials</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {placementTestimonials.map(t => (
            <div key={t.name} className="bg-card border border-border rounded-lg p-6">
              <Quote className="w-6 h-6 text-accent/40 mb-3" />
              <p className="text-sm text-muted-foreground font-body italic leading-relaxed mb-4">"{t.quote}"</p>
              <div>
                <p className="font-display font-bold text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground font-body">{t.role}, {t.company} · Batch {t.batch}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Industry MoUs */}
        <div className="section-header">
          <p className="section-label">Collaborations</p>
          <h2 className="section-title">Industry MoUs</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm font-body">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-3 pr-4 font-semibold text-foreground">Company</th>
                <th className="py-3 pr-4 font-semibold text-foreground">Year</th>
                <th className="py-3 font-semibold text-foreground">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {industryMous.map(m => (
                <tr key={m.company} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                  <td className="py-3 pr-4 font-medium text-foreground">{m.company}</td>
                  <td className="py-3 pr-4 text-muted-foreground">{m.date}</td>
                  <td className="py-3 text-muted-foreground">{m.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
);

export default Placements;

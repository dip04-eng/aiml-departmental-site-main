import { Trophy, Award, Star, TrendingUp } from "lucide-react";
import { achievements, fundedProjects } from "@/data/departmentData";

const Achievements = () => (
  <div>
    <section className="bg-primary py-16">
      <div className="container">
        <p className="text-accent text-[11px] font-bold uppercase tracking-[2px] mb-2 font-body">Excellence</p>
        <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">Achievements & Awards</h1>
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        {/* Rankings */}
        <div className="section-header">
          <p className="section-label">Recognition</p>
          <h2 className="section-title">Rankings & Accreditations</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {achievements.rankings.map(r => (
            <div key={r.body} className="bg-primary rounded-lg p-6 text-center">
              <p className="font-mono font-bold text-3xl text-primary-foreground mb-1">{r.rank}</p>
              <p className="text-sm text-primary-foreground/80 font-body">{r.metric}</p>
              <p className="text-xs text-primary-foreground/60 font-body mt-1">{r.body}</p>
            </div>
          ))}
        </div>

        {/* Faculty Awards */}
        <div className="section-header">
          <p className="section-label">Faculty</p>
          <h2 className="section-title">Faculty Awards</h2>
        </div>
        <div className="overflow-x-auto mb-16">
          <table className="w-full text-sm font-body">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-3 pr-4 font-semibold text-foreground">Award</th>
                <th className="py-3 pr-4 font-semibold text-foreground">Recipient</th>
                <th className="py-3 pr-4 font-semibold text-foreground">Awarding Body</th>
                <th className="py-3 font-semibold text-foreground">Year</th>
              </tr>
            </thead>
            <tbody>
              {achievements.facultyAwards.map((a, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                  <td className="py-3 pr-4 text-foreground font-medium flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-accent shrink-0" /> {a.award}
                  </td>
                  <td className="py-3 pr-4 text-muted-foreground">{a.recipient}</td>
                  <td className="py-3 pr-4 text-muted-foreground">{a.body}</td>
                  <td className="py-3 text-muted-foreground">{a.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Student Achievements */}
        <div className="section-header">
          <p className="section-label">Students</p>
          <h2 className="section-title">Student Achievements</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.studentAchievements.map((a, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-5 card-hover">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-sm text-foreground mb-1">{a.student}</h3>
                  <p className="text-sm text-muted-foreground font-body mb-1">{a.achievement}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded-full font-body font-medium">{a.rank}</span>
                    <span className="text-xs text-muted-foreground font-body">{a.event} · {a.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Top Funded Projects */}
        <div className="section-header">
          <p className="section-label">Research Impact</p>
          <h2 className="section-title">Top Funded Projects</h2>
        </div>
        <div className="space-y-4">
          {fundedProjects.slice(0, 5).map((p, i) => (
            <div key={p.id} className="flex items-center gap-4 bg-card border border-border rounded-lg p-5">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="font-mono font-bold text-primary">{i + 1}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-display font-bold text-sm text-foreground">{p.title}</h4>
                <p className="text-xs text-muted-foreground font-body">{p.pi} · {p.agency}</p>
              </div>
              <span className="font-mono font-bold text-sm text-primary shrink-0">{p.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Achievements;

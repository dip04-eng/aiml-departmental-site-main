import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowRight, Search } from "lucide-react";
import { faculty } from "@/data/departmentData";

const designations = ["All", "Professor & Head", "Professor", "Associate Professor", "Assistant Professor"];

const Faculty = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = faculty.filter(m => {
    if (filter !== "All" && m.designation !== filter) return false;
    if (search && !m.name.toLowerCase().includes(search.toLowerCase()) && !m.specialization.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div>
      <section className="bg-primary py-16">
        <div className="container">
          <p className="text-accent text-[11px] font-bold uppercase tracking-[2px] mb-2 font-body">Our Team</p>
          <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">
            Our Faculty
            <span className="ml-3 bg-accent/20 text-accent text-sm px-3 py-1 rounded-full font-body align-middle">
              {faculty.length}
            </span>
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          {/* Filter & Search */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="flex gap-1 flex-wrap">
              {designations.map(d => (
                <button
                  key={d}
                  onClick={() => setFilter(d)}
                  className={`px-3 py-2 rounded-md text-xs font-semibold font-body transition-colors ${
                    filter === d ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by name or specialization..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-md border border-border bg-card text-sm font-body text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((member) => (
              <Link
                key={member.id}
                to={`/faculty/${member.id}`}
                className="bg-card border border-border rounded-lg p-6 card-hover group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0 overflow-hidden">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="font-display font-bold text-primary text-xl">
                        {member.name.split(" ").slice(-1)[0][0]}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-base text-foreground mb-0.5">{member.name}</h3>
                    <p className="text-sm text-muted-foreground font-body mb-1">{member.designation}</p>
                    <p className="text-xs text-muted-foreground font-body mb-2">{member.publications} publications</p>
                    <div className="flex flex-wrap gap-1">
                      {member.specialization.split(", ").map((tag) => (
                        <span key={tag} className="text-[10px] bg-primary/5 text-primary px-2 py-0.5 rounded-full font-body font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email" onClick={e => e.stopPropagation()}>
                    <Mail className="w-4 h-4" />
                  </a>
                  <span className="text-xs text-primary font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity font-body">
                    View Profile <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground font-body py-12">No faculty found matching your criteria.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Faculty;

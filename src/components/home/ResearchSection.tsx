import { Link } from "react-router-dom";
import { ArrowRight, FlaskConical, Calendar } from "lucide-react";
import { researchHighlights } from "@/data/departmentData";

const ResearchSection = () => (
  <section className="py-16 bg-secondary">
    <div className="container">
      <div className="section-header">
        <p className="section-label">Innovation & Discovery</p>
        <h2 className="section-title">Research Highlights</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {researchHighlights.map((project) => (
          <div
            key={project.title}
            className="bg-card border border-border rounded-lg p-6 card-hover"
          >
            <div className="flex items-center gap-2 mb-3">
              <FlaskConical className="w-5 h-5 text-accent" />
              <span className="text-xs font-bold uppercase tracking-wider text-accent font-body">
                {project.agency}
              </span>
            </div>
            <h3 className="font-display font-bold text-base text-foreground mb-3 leading-snug">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-3 font-body">
              PI: {project.pi}
            </p>
            <div className="inline-flex items-center gap-1 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold font-mono">
              <Calendar className="w-3 h-3" />
              {project.date}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/research"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors font-body"
        >
          View All Research <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default ResearchSection;

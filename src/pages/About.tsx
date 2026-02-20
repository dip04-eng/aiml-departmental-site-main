import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { departmentInfo, aboutSnippet } from "@/data/departmentData";

const About = () => (
  <div>
    {/* Hero */}
    <section className="bg-primary py-16">
      <div className="container">
        <p className="text-accent text-[11px] font-bold uppercase tracking-[2px] mb-2 font-body">About Us</p>
        <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">About the Department</h1>
      </div>
    </section>

    <section className="py-16">
      <div className="container max-w-3xl">
        <div className="section-header">
          <p className="section-label">Our Story</p>
          <h2 className="section-title">Department Overview</h2>
        </div>
        <p className="text-[15px] text-muted-foreground leading-relaxed mb-6 font-body">{aboutSnippet}</p>
        <p className="text-[15px] text-muted-foreground leading-relaxed mb-6 font-body">
          Founded in {departmentInfo.established}, the Department of {departmentInfo.name} at {departmentInfo.institution} has grown into a premier center for AI education and research. Our programs are designed to equip students with both theoretical depth and practical skills required to tackle real-world challenges in artificial intelligence and machine learning.
        </p>

        <div className="section-header mt-12">
          <p className="section-label">Our Vision</p>
          <h2 className="section-title">Vision & Mission</h2>
        </div>
        <blockquote className="border-l-4 border-accent pl-6 py-2 text-lg font-display text-foreground/80 italic mb-8">
          "To be a globally recognized center of excellence in AI education and research, producing ethical and innovative leaders."
        </blockquote>

        <h3 className="font-display font-bold text-xl mb-4">Mission</h3>
        <ul className="space-y-3 mb-8">
          {[
            "Provide quality education rooted in fundamentals of AI, ML, and data science.",
            "Foster cutting-edge research that addresses societal and industrial challenges.",
            "Build strong industry-academia partnerships for holistic student development.",
            "Cultivate ethical AI practitioners who lead with responsibility and innovation.",
          ].map((m, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-body">
              <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              {m}
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <Link to="/about/hod-message" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors font-body">
            Message from HoD <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default About;

import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const pageTitles: Record<string, string> = {
  "/about/hod-message": "Message from HoD",
  "/about/vision-mission": "Vision & Mission",
  "/academics": "Academics",
  "/academics/programs": "Programs Offered",
  "/academics/curriculum": "Curriculum & Syllabus",
  "/academics/calendar": "Academic Calendar",
  "/research/projects": "Funded Projects",
  "/research/publications": "Publications",
  "/research/patents": "Patents",
  "/research/phd-scholars": "Ph.D. Scholars",
  "/labs": "Laboratories",
  "/placements": "Placements & Industry",
  "/events": "Events & Activities",
  "/achievements": "Achievements & Awards",
  "/alumni": "Alumni",
  "/gallery": "Gallery",
};

const PlaceholderPage = () => {
  const location = useLocation();
  const title = pageTitles[location.pathname] || "Page";

  return (
    <div>
      <section className="bg-primary py-16">
        <div className="container">
          <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">{title}</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="container text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
            <span className="font-mono font-bold text-primary text-lg">🚧</span>
          </div>
          <h2 className="font-display font-bold text-xl text-foreground mb-2">Coming Soon</h2>
          <p className="text-sm text-muted-foreground font-body mb-6">
            This page is under construction. Check back soon for updates.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors font-body">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PlaceholderPage;

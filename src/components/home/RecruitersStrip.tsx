import { recruiters } from "@/data/departmentData";

const RecruitersStrip = () => (
  <section className="py-14">
    <div className="container">
      <div className="section-header text-center pl-0 before:hidden">
        <p className="section-label text-center">Our Recruiters</p>
        <h2 className="section-title text-center">Industry Partners & Recruiters</h2>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4 -mx-2 px-2 scrollbar-hide">
        {recruiters.map((name) => (
          <div
            key={name}
            className="shrink-0 w-32 h-16 bg-secondary rounded-lg flex items-center justify-center border border-border"
          >
            <span className="text-sm font-medium text-muted-foreground font-body">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RecruitersStrip;

import {
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Rocket,
  UserRound,
} from "lucide-react";

const audiences = [
  { label: "Students", icon: GraduationCap },
  { label: "Professionals", icon: UserRound },
  { label: "Startups", icon: Rocket },
  { label: "Small Businesses", icon: BriefcaseBusiness },
  { label: "Organizations", icon: Building2 },
];

function TrustedBy() {
  return (
    <section className="border-y border-slate-100 bg-white py-9">
      <div className="section-container">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          Digital solutions created for
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {audiences.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 text-sm font-semibold text-slate-400 transition hover:text-blue-600"
            >
              <Icon size={20} />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;
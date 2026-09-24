import { Download, MapPin, Briefcase, Smartphone } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { label: "MY Priority", value: "Client First" },
  { label: "Time Delivery", value: "On Time" },
  { label: "Work Quality", value: "Detail-Oriented" },
  { label: "Service", value: "Reliable & Consistent" },
];

export default function About() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-padding">
      <div
        ref={ref}
        className={`container-max reveal ${visible ? "visible" : ""}`}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Text */}
          <div>
            <span className="badge mb-4">
              <span className="h-2 w-2 rounded-full bg-accent" />
              About Me
            </span>
            <h2 className="section-title mb-6 text-text-primary">
              From <span className="accent-text-gradient">Idea </span>
              to <span className="accent-text-gradient">Impact </span>
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-text-secondary">
              I'm Youssif Shawky, and I help businesses and individuals turn
              their ideas into simple, useful, and professional mobile apps. I
              can help you shape your idea into a clear product, improve the
              customer experience, and create a solution that makes your
              business easier to use and more valuable to your customers.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-text-secondary">
              Turning ideas into real products My goal is not just to deliver an
              app and leave. I care about making your product useful for your
              business, helping you improve it over time, and providing support
              after delivery whenever you need it. From the first idea to what
              comes next, I'm here to help your project grow.
            </p>

            <div className="mb-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-text-secondary">
                <MapPin className="h-5 w-5 text-accent" />
                Egypt
              </div>

              <div className="flex items-center gap-2 text-text-secondary">
                <Briefcase className="h-5 w-5 text-accent" />
                Available for freelance
              </div>

              <div className="flex items-center gap-2 text-text-secondary">
                <Smartphone className="h-5 w-5 text-accent" />
                Mobile App Development
              </div>
            </div>
            <a
              href="CV/Youssif Ahmed Mohamed Sahwky CV Flutter.pdf"
              download
              className="btn-primary inline-flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download My CV
            </a>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="card card-hover flex flex-col items-center justify-center p-8 text-center"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="mb-2 font-display text-3xl font-bold accent-text-gradient">
                  {stat.value}
                </span>

                <span className="text-sm text-text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

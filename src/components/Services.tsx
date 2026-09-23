import { Code, Smartphone, Palette, BarChart3, Cloud, Zap } from 'lucide-react';
import { services } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, typeof Code> = {
  Code,
  Smartphone,
  Palette,
  BarChart3,
  Cloud,
  Zap,
};

export default function Services() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="services" className="section-padding">
      <div ref={ref} className={`container-max reveal ${visible ? 'visible' : ''}`}>
        <div className="mb-12 text-center">
          <span className="badge mb-4">
            <span className="h-2 w-2 rounded-full bg-accent" />
            What I Do
          </span>
          <h2 className="section-title text-text-primary">
            Services I <span className="accent-text-gradient">offer</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            From concept to deployment, I provide end-to-end development services
            tailored to your needs.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Code;
            return (
              <div
                key={service.title}
                className="card card-hover group p-8"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-surface border border-border text-accent transition-all duration-300 group-hover:scale-110 group-hover:border-accent group-hover:glow-box">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-text-primary">
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

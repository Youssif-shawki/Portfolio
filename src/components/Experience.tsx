import { Briefcase, CheckCircle2 } from 'lucide-react';
import { experiences } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Experience() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="experience" className="section-padding">
      <div ref={ref} className={`container-max reveal ${visible ? 'visible' : ''}`}>
        <div className="mb-12 text-center">
          <span className="badge mb-4">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Career
          </span>
          <h2 className="section-title text-text-primary">
            Work <span className="accent-text-gradient">experience</span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2" />

          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`relative mb-12 flex gap-6 ${
                i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full accent-gradient md:left-1/2">
                <span className="h-2 w-2 rounded-full bg-white" />
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div className="card card-hover flex-1 p-6 md:w-1/2">
                <div className="mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface border border-border text-accent">
                    <Briefcase className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-accent">{exp.period}</span>
                </div>
                <h3 className="mb-1 font-display text-lg font-bold text-text-primary">
                  {exp.role}
                </h3>
                <p className="mb-3 text-sm font-medium text-text-secondary">{exp.company}</p>
                <p className="mb-4 text-sm text-text-secondary leading-relaxed">
                  {exp.description}
                </p>
                <ul className="space-y-2">
                  {exp.achievements.map((ach, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-text-secondary">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

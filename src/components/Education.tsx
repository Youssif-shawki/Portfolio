import { GraduationCap, Award } from 'lucide-react';
import { education, certificates } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Education() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="education" className="section-padding">
      <div ref={ref} className={`container-max reveal ${visible ? 'visible' : ''}`}>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Education */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface border border-border text-accent">
                <GraduationCap className="h-5 w-5" />
              </span>
              <h2 className="font-display text-2xl font-bold text-text-primary">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i} className="card card-hover p-6">
                  <span className="text-sm font-medium text-accent">{edu.period}</span>
                  <h3 className="mt-2 mb-1 font-display text-lg font-bold text-text-primary">
                    {edu.degree}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-text-secondary">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface border border-border text-accent">
                <Award className="h-5 w-5" />
              </span>
              <h2 className="font-display text-2xl font-bold text-text-primary">Certificates</h2>
            </div>
            <div className="space-y-4">
              {certificates.map((cert, i) => (
                <div key={i} className="card card-hover flex items-start gap-4 p-5">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-surface border border-border text-accent">
                    <Award className="h-6 w-6" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-base font-bold text-text-primary">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-text-secondary">{cert.issuer}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-text-muted">
                      <span>{cert.date}</span>
                      <span className="rounded-md bg-surface px-2 py-0.5 font-mono">
                        {cert.credentialId}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

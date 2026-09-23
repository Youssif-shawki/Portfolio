import { timeline } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Timeline() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="timeline" className="section-padding">
      <div ref={ref} className={`container-max reveal ${visible ? 'visible' : ''}`}>
        <div className="mb-12 text-center">
          <span className="badge mb-4">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Journey
          </span>
          <h2 className="section-title text-text-primary">
            My <span className="accent-text-gradient">timeline</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            Key milestones and achievements throughout my career.
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:left-1/2" />

          {timeline.map((event, i) => (
            <div
              key={i}
              className={`relative mb-8 flex items-start gap-6 pl-8 md:pl-0 ${
                i % 2 === 0 ? 'md:flex-row-reverse md:pl-0' : ''
              }`}
            >
              {/* Dot */}
              <div className="absolute left-0 z-10 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent bg-background md:left-1/2">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </div>

              {/* Spacer */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div className="card card-hover flex-1 p-5 md:w-1/2">
                <span className="font-display text-2xl font-bold accent-text-gradient">
                  {event.year}
                </span>
                <h3 className="mt-1 mb-1 font-display text-base font-bold text-text-primary">
                  {event.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

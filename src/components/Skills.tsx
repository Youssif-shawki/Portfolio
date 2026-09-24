import { skills } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const categories = Array.from(new Set(skills.map((s) => s.category)));

export default function Skills() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="section-padding">
      <div
        ref={ref}
        className={`container-max reveal ${visible ? 'visible' : ''}`}
      >
        <div className="mb-12 text-center">
          <span className="badge mb-4">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Expertise
          </span>

          <h2 className="section-title text-text-primary">
            Skills &{' '}
            <span className="accent-text-gradient">technologies</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            Technologies and tools I use to build modern and reliable mobile applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="mb-5 font-display text-lg font-bold text-text-primary">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div
                      key={skill.name}
                      className="rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-text-primary transition-all duration-300 hover:border-accent hover:text-accent"
                    >
                      {skill.name}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
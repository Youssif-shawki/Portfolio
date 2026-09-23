import { skills } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const categories = Array.from(new Set(skills.map((s) => s.category)));

export default function Skills() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="section-padding">
      <div ref={ref} className={`container-max reveal ${visible ? 'visible' : ''}`}>
        <div className="mb-12 text-center">
          <span className="badge mb-4">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Expertise
          </span>
          <h2 className="section-title text-text-primary">
            Skills & <span className="accent-text-gradient">technologies</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            The tools and technologies I use to bring projects to life.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="mb-5 font-display text-lg font-bold text-text-primary">
                {category}
              </h3>
              <div className="space-y-4">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm font-medium text-text-primary">
                          {skill.name}
                        </span>
                        <span className="text-sm text-text-muted">{skill.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-surface border border-border">
                        <div
                          className="h-full rounded-full accent-gradient transition-all duration-1000 ease-out"
                          style={{ width: visible ? `${skill.level}%` : '0%' }}
                        />
                      </div>
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

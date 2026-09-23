import { Download, MapPin, Briefcase, Coffee } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Completed', value: '50+' },
  { label: 'Happy Clients', value: '30+' },
  { label: 'Open Source Stars', value: '500+' },
];

export default function About() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-padding">
      <div ref={ref} className={`container-max reveal ${visible ? 'visible' : ''}`}>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: text */}
          <div>
            <span className="badge mb-4">
              <span className="h-2 w-2 rounded-full bg-accent" />
              About Me
            </span>
            <h2 className="section-title mb-6 text-text-primary">
              Turning ideas into <span className="accent-text-gradient">digital reality</span>
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-text-secondary">
              I'm a passionate full-stack developer with 5+ years of experience building
              web and mobile applications. I love solving complex problems and creating
              interfaces that feel effortless to use.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-text-secondary">
              My approach combines technical excellence with thoughtful design —
              every pixel and every line of code serves a purpose. When I'm not coding,
              you'll find me contributing to open source, mentoring junior devs, or
              exploring the latest in web technology.
            </p>

            <div className="mb-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-text-secondary">
                <MapPin className="h-5 w-5 text-accent" />
                San Francisco, CA
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <Briefcase className="h-5 w-5 text-accent" />
                Available for freelance
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <Coffee className="h-5 w-5 text-accent" />
                Coffee enthusiast
              </div>
            </div>

            <a href="#" className="btn-primary inline-flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="card card-hover flex flex-col items-center justify-center p-8 text-center"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="mb-2 font-display text-4xl font-bold accent-text-gradient">
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

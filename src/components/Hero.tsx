import { ArrowDown, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="container-max relative z-10 px-6 text-center">
        <div className="mb-6 inline-flex animate-fade-in-down items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-text-secondary">
          <Sparkles className="h-4 w-4 text-accent" />
          <span>Available for new projects</span>
        </div>

        <h1 className="mb-6 animate-fade-in-up font-display text-5xl font-bold leading-[1.1] tracking-tight text-text-primary sm:text-6xl md:text-7xl lg:text-8xl">
          Hi, I'm <span className="accent-text-gradient glow-text">Alex Carter</span>
          <br />
          <span className="text-text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Full-Stack Developer
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl animate-fade-in-up text-lg text-text-secondary sm:text-xl" style={{ animationDelay: '0.1s' }}>
          I craft fast, accessible, and beautiful web experiences. Specializing in
          React, TypeScript, and modern cloud architecture to bring ideas to life.
        </p>

        <div className="flex animate-fade-in-up flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: '0.2s' }}>
          <a href="#projects" className="btn-primary inline-flex items-center gap-2">
            View My Work
            <ArrowDown className="h-4 w-4" />
          </a>
          <a href="#contact" className="btn-ghost inline-flex items-center gap-2">
            Get in Touch
          </a>
        </div>

        <div className="mt-12 flex animate-fade-in items-center justify-center gap-6" style={{ animationDelay: '0.4s' }}>
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Twitter, href: '#', label: 'Twitter' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-text-secondary transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-1"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-border p-1.5">
          <div className="h-2 w-1 rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
}

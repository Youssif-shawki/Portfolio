import { Code2, Github, Linkedin, Twitter, Heart } from 'lucide-react';

const footerLinks = {
  Navigation: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  Services: [
    { label: 'Web Development', href: '#services' },
    { label: 'Mobile Development', href: '#services' },
    { label: 'UI/UX Design', href: '#services' },
    { label: 'Cloud Architecture', href: '#services' },
  ],
  Resources: [
    { label: 'Resume', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Open Source', href: '#' },
    { label: 'Uses', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-alt">
      <div className="container-max px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg accent-gradient text-white">
                <Code2 className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-bold text-text-primary">
                Alex<span className="accent-text-gradient">.dev</span>
              </span>
            </a>
            <p className="mb-4 text-sm text-text-secondary leading-relaxed">
              Full-stack developer building fast, accessible, and beautiful web experiences.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-text-secondary transition-all hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-text-primary">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Alex Carter. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-text-muted">
            Built with <Heart className="h-4 w-4 text-accent" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}

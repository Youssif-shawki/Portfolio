import { Code2, Github, Linkedin } from "lucide-react";

const footerLinks = {
  Navigation: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
  ],
//   Services: [
//     { label: "Flutter App Development", href: "#services" },
//     { label: "UI to Flutter", href: "#services" },
//     { label: "API Integration", href: "#services" },
//     { label: "Firebase Integration", href: "#services" },
//     { label: "App Improvement", href: "#services" },
//   ],
//   Connect: [
//     { label: "GitHub", href: "https://github.com/Youssif-shawki" },
//     { label: "LinkedIn", href: "https://linkedin.com/in/youssifshawky" },
//     { label: "Contact Me", href: "#contact" },
  // ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-alt">
      <div className="container-max px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#hero" className="mb-4 flex items-center gap-2">
              <span className="accent-gradient flex h-9 w-9 items-center justify-center rounded-lg text-white">
                <Code2 className="h-5 w-5" />
              </span>

              <span className="font-display text-lg font-bold text-text-primary">
                Youssif<span className="accent-text-gradient">.dev</span>
              </span>
            </a>

            <p className="mb-4 text-sm leading-relaxed text-text-secondary">
              Cross-Platform Mobile Developer focused on building modern,
              responsive, and reliable Flutter applications.
            </p>

            <div className="flex gap-3">
              {[
                {
                  icon: Github,
                  href: "https://github.com/Youssif-shawki",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/youssifshawky",
                  label: "LinkedIn",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
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
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
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

        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Youssif Shawky. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

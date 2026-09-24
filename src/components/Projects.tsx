import { useState } from "react";
import { X, ExternalLink, Github, Star } from "lucide-react";
import { projects } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Projects() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [selected, setSelected] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding">
      <div
        ref={ref}
        className={`container-max reveal ${visible ? "visible" : ""}`}
      >
        <div className="mb-12 text-center">
          <span className="badge mb-4">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Portfolio
          </span>
          <h2 className="section-title text-text-primary">
            Featured <span className="accent-text-gradient">projects</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            A selection of work I'm proud of — from enterprise dashboards to
            consumer apps.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "accent-gradient text-background shadow-lg"
                  : "border border-border bg-surface text-text-secondary hover:border-accent hover:text-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <article
              key={project.id}
              onClick={() => setSelected(project)}
              className="card card-hover group cursor-pointer overflow-hidden"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ borderBottom: "1px solid var(--image-border)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
                {project.featured && (
                  <span className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/50 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-md">
                    <Star className="h-3 w-3 text-accent-light" />
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  {project.category}
                </span>
                <h3 className="mt-2 mb-2 font-display text-lg font-bold text-text-primary transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-text-secondary line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-surface px-2 py-1 text-xs text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-background-alt shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              aria-label="Close project details"
              className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-text-secondary transition-all hover:border-accent hover:text-accent"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Image */}
            <div className="relative h-64 overflow-hidden rounded-t-2xl">
              <img
                src={selected.image}
                alt={selected.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-alt via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-8">
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                {selected.category}
              </span>
              <h3 className="mt-2 mb-4 font-display text-2xl font-bold text-text-primary">
                {selected.title}
              </h3>
              <p className="mb-6 text-text-secondary leading-relaxed">
                {selected.longDescription}
              </p>

              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold text-text-primary">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={selected.liveUrl}
                  className="btn-primary inline-flex items-center gap-2 text-sm"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
                <a
                  href={selected.githubUrl}
                  className="btn-ghost inline-flex items-center gap-2 text-sm"
                >
                  <Github className="h-4 w-4" />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

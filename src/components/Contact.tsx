import { useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  Send,
  Github,
  Linkedin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [state, handleSubmit] = useForm("xwlpbzlz");
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form after successful submission
  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        formRef.current?.reset();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "youssifshakwi49@gmail.com",
      href: "mailto:youssifshakwi49@gmail.com",
    },
    {
      icon: Phone,
      label: "Call",
      value: "+20 155 820 6333",
      href: "tel:+201558206333",
    },
  ];

  const socials = [
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
  ];

  return (
    <section id="contact" className="section-padding">
      <div
        ref={ref}
        className={`container-max reveal ${visible ? "visible" : ""}`}
      >
        <div className="mb-12 text-center">
          <span className="badge mb-4">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Contact
          </span>

          <h2 className="section-title text-text-primary">
            Let's <span className="accent-text-gradient">work together</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            Have an app idea or a project in mind? Let's discuss how I can help
            turn it into a real product.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="card card-hover flex items-center gap-4 p-5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface border border-border text-accent">
                  <Icon className="h-6 w-6" />
                </span>

                <div>
                  <p className="text-xs text-text-muted">{label}</p>
                  <p className="font-medium text-text-primary">{value}</p>
                </div>
              </a>
            ))}

            <div className="card p-5">
              <p className="mb-3 text-sm text-text-secondary">Find me online</p>

              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-text-secondary transition-all hover:border-accent hover:text-accent hover:-translate-y-1"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="card space-y-5 p-8"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-text-primary"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="input-field"
              />

              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-text-primary"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="YourGmail@gmail.com"
                className="input-field"
              />

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-text-primary"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project and how I can help"
                className="input-field resize-none"
              />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            {/* Success Message */}
            {state.succeeded && (
              <div className="flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-green-500">
                <CheckCircle className="h-5 w-5 shrink-0" />

                <div>
                  <p className="text-sm font-medium">
                    Message sent successfully!
                  </p>

                  <p className="mt-0.5 text-xs opacity-80">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {state.errors && !state.succeeded && (
              <div className="flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-red-500">
                <AlertCircle className="h-5 w-5 shrink-0" />

                <div>
                  <p className="text-sm font-medium">Something went wrong.</p>

                  <p className="mt-0.5 text-xs opacity-80">
                    Please check your information and try again.
                  </p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={state.submitting || state.succeeded}
              className="btn-primary w-full inline-flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {state.submitting ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Sending...
                </>
              ) : state.succeeded ? (
                <>
                  <CheckCircle className="h-4 w-4" />
                  Message Sent
                </>
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'alex@carter.dev', href: 'mailto:alex@carter.dev' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA', href: '#' },
  ];

  const socials = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="section-padding">
      <div ref={ref} className={`container-max reveal ${visible ? 'visible' : ''}`}>
        <div className="mb-12 text-center">
          <span className="badge mb-4">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Contact
          </span>
          <h2 className="section-title text-text-primary">
            Let's <span className="accent-text-gradient">talk</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: contact info */}
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
              <p className="mb-3 text-sm text-text-secondary">Follow me on social media</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-text-secondary transition-all hover:border-accent hover:text-accent hover:-translate-y-1"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="card space-y-5 p-8">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-primary">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="input-field"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-primary">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="input-field"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-text-primary">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="input-field resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="btn-primary w-full inline-flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {sent ? (
                'Message sent!'
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

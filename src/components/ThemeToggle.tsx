import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
  showTooltip?: boolean;
}

export default function ThemeToggle({ theme, onToggle, showTooltip = true }: ThemeToggleProps) {
  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';

  return (
    <button
      onClick={onToggle}
      aria-label="Toggle dark and light mode"
      aria-pressed={!isDark}
      title={showTooltip ? label : undefined}
      data-tooltip={showTooltip ? label : undefined}
      className="tooltip relative flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-text-secondary transition-all duration-300 hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span className="relative flex h-5 w-5 items-center justify-center">
        <Sun
          className={`absolute h-5 w-5 transition-all duration-500 ${
            isDark
              ? 'rotate-90 scale-0 opacity-0'
              : 'rotate-0 scale-100 opacity-100'
          }`}
        />
        <Moon
          className={`absolute h-5 w-5 transition-all duration-500 ${
            isDark
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </span>
    </button>
  );
}

import { useState, useEffect } from "react";
import { Eclipse } from "lucide-react";

const themes = [
  { name: "Latte ☀️", value: "latte" },
  { name: "Mocha 🌑", value: "mocha" },
  { name: "Frappe", value: "frappe" },
  { name: "Macchiato", value: "macchiato" },
];

export default function ThemeSwitch() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("latte");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      applyTheme(saved);
      setActive(saved);
    }
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".theme-dropdown")) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const applyTheme = (theme: string) => {
    const root = document.getElementById("theme");
    if (!root) return;

    root.classList.remove(...themes.map((t) => t.value));
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  };

  const change = (theme: string) => {
    applyTheme(theme);
    setActive(theme);
    setOpen(false);
  };

  return (
    <div className="relative inline-block theme-dropdown">
      <button
        onClick={() => setOpen(!open)}
        className="text-ctp-rosewater-100 hover:cursor-pointer hover:text-ctp-rosewater-300 transition duration-300"
      >
        <Eclipse size={24} strokeWidth={2} />
      </button>

      <div
        className={`
          absolute right-0 mt-2 w-44
          bg-ctp-crust rounded-lg shadow-lg
          transition-all duration-200 ease-out origin-top
          ${
            open
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
          }
        `}
      >
        <div className="py-2">
          {themes.map((theme) => {
            const selected = active === theme.value;

            return (
              <button
                key={theme.value}
                onClick={() => change(theme.value)}
                className={`
                  w-full text-left px-4 py-2 text-sm rounded-md
                  transition-all duration-200 hover:cursor-pointer
                  ${
                    selected
                      ? "bg-ctp-surface0 text-ctp-rosewater"
                      : "text-ctp-subtext0 hover:bg-ctp-surface0"
                  }
                `}
              >
                {theme.name}
              </button>
            );
          })}

          <p className="text-xs text-ctp-surface2 px-4 pt-2">
            Theme is saved locally
          </p>
        </div>
      </div>
    </div>
  );
}

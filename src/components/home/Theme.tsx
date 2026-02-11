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

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".theme-dropdown")) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const [active, setActive] = useState("latte");

  const change = (theme: string) => {
    const root = document.getElementById("theme");
    if (!root) return;

    root.classList.remove(...themes.map((t) => t.value));
    root.classList.add(theme);

    setActive(theme);

    setOpen(false);
  };

  return (
    <div id="theme-button" className="relative inline-block theme-dropdown">
      <button
        onClick={() => setOpen(!open)}
        className="text-ctp-rosewater-100 hover:cursor-pointer hover:text-ctp-rosewater-300 transition ease-in-out duration-400"
      >
        <Eclipse size={24} strokeWidth={2} />
      </button>

      <div
        className={`
            absolute mt-2 px-2 py-1.5 w-40 bg-ctp-crust rounded-lg shadow-lg -translate-x-35 z-2
            transition-all duration-200 ease-in-out origin
            ${
              open
                ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
            }
        `}
      >
        {themes.map((theme) => (
          <button
            key={theme.value}
            onClick={() => change(theme.value)}
            className={`block w-[80] text-left px-2 py-1 mx-2 my-1 
              hover:bg-ctp-surface0 rounded-lg ease-in-out duration-400 transition hover:cursor-pointer
              ${active === theme.value ? "text-ctp-rosewater" : "text-ctp-subtext0"}`}
          >
            {theme.name}
          </button>
        ))}

        <p className="text-xs text-ctp-surface2 pl-2">
          Your option will not be saved
        </p>
      </div>
    </div>
  );
}

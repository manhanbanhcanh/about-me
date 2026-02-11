import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type TooltipState = {
  visible: boolean;
  text: string;
  x: number;
  y: number;
};

type TooltipContextType = {
  show: (text: string, x: number, y: number) => void;
  hide: () => void;
};

const TooltipContext = createContext<TooltipContextType | null>(null);

export function useTooltip() {
  const context = useContext(TooltipContext);
  if (!context)
    throw new Error("useTooltip must be used inside TooltipProvider");
  return context;
}

export function TooltipProvider({ children }: { children: ReactNode }) {
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    text: "",
    x: 0,
    y: 0,
  });

  const show = (text: string, x: number, y: number) => {
    setTooltip({
      visible: true,
      text,
      x,
      y,
    });
  };

  const hide = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  return (
    <TooltipContext.Provider value={{ show, hide }}>
      {children}

      <div
        className={`
          fixed pointer-events-none z-50
          transition-all duration-150 ease-out
          ${tooltip.visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
        style={{
          left: tooltip.x + 12,
          top: tooltip.y + 18,
        }}
      >
        <div className="bg-ctp-surface0 text-ctp-rosewater text-xs px-3 py-1 rounded-md shadow-lg">
          {tooltip.text}
        </div>
      </div>
    </TooltipContext.Provider>
  );
}

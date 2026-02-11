import type { ReactNode } from "react";
import { useTooltip } from "./Provider";

export default function Tooltip({
  text,
  children,
}: {
  text: string;
  children: ReactNode;
}) {
  const { show, hide } = useTooltip();

  return (
    <div
      onMouseMove={(e) => show(text, e.clientX, e.clientY)}
      onMouseLeave={hide}
      className="inline-block"
    >
      {children}
    </div>
  );
}

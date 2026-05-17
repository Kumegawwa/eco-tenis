import { ReactNode } from "react";

export function PageShell({ children, overlayHeader }: { children: ReactNode; overlayHeader?: boolean }) {
  return (
    <div className="flex-1 w-full flex flex-col">
      {children}
    </div>
  );
}
import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";

export function PageShell({
  children,
  overlayHeader = false,
}: {
  children: ReactNode;
  overlayHeader?: boolean;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header overlay={overlayHeader} />
      <main>{children}</main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsappFloat } from "./WhatsappFloat";

// Marco común de todas las páginas públicas: mismo menú, mismo pie y botón de WhatsApp.
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-full overflow-x-hidden bg-fondo text-tinta">
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}

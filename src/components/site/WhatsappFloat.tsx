import { contacto } from "@/lib/site-config";

export function WhatsappFloat() {
  return (
    <a
      href={contacto.whatsappHref}
      target="_blank"
      rel="noopener"
      className="fixed right-6 bottom-6 z-[60] rounded-full bg-whatsapp px-5 py-[15px] font-mono text-[12.5px] font-medium tracking-[.06em] text-verde-footer uppercase shadow-[0_10px_28px_rgba(7,28,16,.28)] transition-colors hover:bg-whatsapp-hover"
    >
      WhatsApp
    </a>
  );
}

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Nosotros } from "@/components/site/Nosotros";
import { ServiciosIntro } from "@/components/site/ServiciosIntro";
import { ServicioIngenieria } from "@/components/site/ServicioIngenieria";
import { ServicioGestion } from "@/components/site/ServicioGestion";
import { ServicioSuministros } from "@/components/site/ServicioSuministros";
import { Actualidad } from "@/components/site/Actualidad";
import { Clientes } from "@/components/site/Clientes";
import { Testimonios } from "@/components/site/Testimonios";
import { Contactenos } from "@/components/site/Contactenos";
import { Footer } from "@/components/site/Footer";
import { WhatsappFloat } from "@/components/site/WhatsappFloat";
import { showActualidad, showClientes, showTestimonios } from "@/lib/site-config";

export default function Home() {
  return (
    <div className="max-w-full overflow-x-hidden bg-fondo text-tinta">
      <Header />
      <Hero />
      <Nosotros />
      <ServiciosIntro />
      <ServicioIngenieria />
      <ServicioGestion />
      <ServicioSuministros />
      {showActualidad && <Actualidad />}
      {showClientes && <Clientes />}
      {showTestimonios && <Testimonios />}
      <Contactenos />
      <Footer />
      <WhatsappFloat />
    </div>
  );
}

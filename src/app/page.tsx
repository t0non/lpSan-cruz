"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { businessConfig, getWhatsAppLink } from "@/config/business";
import { services } from "@/data/services";
import { faqData } from "@/data/faq";
import { 
  Menu, X, Phone, CheckCircle2, ChevronDown, ChevronRight, 
  MapPin, Clock, Mail, Building, Building2, Briefcase, Ruler, ShieldCheck, Wrench
} from "lucide-react";

export default function Home() {
  const [showMobileCta, setShowMobileCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Find the gallery section
      const galleryElement = document.getElementById("trabalhos");
      if (galleryElement) {
        const rect = galleryElement.getBoundingClientRect();
        // Show CTA if the top of the gallery section is above the bottom of the viewport
        if (rect.top < window.innerHeight) {
          setShowMobileCta(true);
        } else {
          setShowMobileCta(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ANNOUNCEMENT BAR */}
      <div className="bg-red-600 text-white text-center py-2.5 px-4 text-sm font-medium tracking-wide shadow-sm relative z-[60]">
        SEM TAXA DE VISITA EM BH + 10% OFF NO PRIMEIRO SERVIÇO!
      </div>
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="#inicio" className="flex items-center py-2">
            <Image src="/images/logo.png" alt="San'cruz Climatização" width={220} height={74} className="object-contain h-16 w-auto" priority />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#inicio" className="text-sm font-medium text-slate-600 hover:text-corporate-800 transition-colors">Início</Link>
            <Link href="#servicos" className="text-sm font-medium text-slate-600 hover:text-corporate-800 transition-colors">Serviços</Link>
            <Link href="#empresas" className="text-sm font-medium text-corporate-800 hover:text-corporate-900 transition-colors">Para Empresas</Link>
            <Link href="#trabalhos" className="text-sm font-medium text-slate-600 hover:text-corporate-800 transition-colors">Trabalhos</Link>
            <Link href="#sobre" className="text-sm font-medium text-slate-600 hover:text-corporate-800 transition-colors">Sobre</Link>
            <a 
              href={getWhatsAppLink("Olá! Gostaria de solicitar um orçamento.")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-corporate-800 text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-corporate-900 transition-colors"
            >
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section id="inicio" className="relative bg-white pt-16 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* LEFT — Copy */}
              <div className="max-w-xl">

                {/* Badge — azul, estilo referência */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-corporate-800 text-white text-xs font-bold tracking-widest uppercase mb-6">
                  Atendimento Hoje em BH
                </div>

                {/* Headline — grande, palavras-chave em azul */}
                <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
                  Instalação e{" "}
                  <span className="text-corporate-800">Manutenção</span>{" "}
                  de Ar-Condicionado{" "}
                  <span className="text-corporate-800">em BH.</span>
                </h1>

                {/* Sub-headline — benefícios inline em negrito colorido */}
                <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                  Não cobramos{" "}
                  <strong className="text-corporate-800">TAXA DE VISITA</strong>{" "}
                  em Belo Horizonte. Chegamos em{" "}
                  <strong className="text-corporate-800">30 minutos</strong>{" "}
                  e você só paga se fechar o orçamento. Agendamento rápido pelo WhatsApp com{" "}
                  <strong className="text-green-600">10% de DESCONTO.</strong>
                </p>

                {/* CTA — grande, maiúsculo, cheio */}
                <a
                  href={getWhatsAppLink("Olá! Encontrei a San'Cruz pelo site e gostaria de solicitar atendimento para meu ar-condicionado.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => { if (typeof window !== 'undefined' && (window as any).dataLayer) { (window as any).dataLayer.push({ event: 'hero_whatsapp_click' }); } }}
                  className="flex w-full sm:w-auto items-center justify-center gap-3 bg-whatsapp-500 text-white px-8 py-5 rounded-xl text-base font-extrabold tracking-wide uppercase hover:bg-whatsapp-600 transition-all hover:shadow-xl hover:shadow-whatsapp-500/30 hover:scale-[1.02]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Pedir uma visita técnica agora
                </a>

              </div>

              {/* RIGHT — Image */}
              <div className="flex items-center justify-center lg:justify-end">
                <Image
                  src="/images/arcondicionado.png"
                  alt="Ar-Condicionado"
                  width={700}
                  height={500}
                  className="w-full max-w-[600px] object-contain drop-shadow-2xl"
                  priority
                />
              </div>

            </div>
          </div>
        </section>
        {/* BRANDS SECTION */}
        <section className="py-12 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-8">
              Especialistas nas melhores marcas
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 transition-all duration-300">
              {/* Text-based / Long logos -> h-6 md:h-7 */}
              <Image src="/images/logo_samsung.svg" alt="Samsung" width={140} height={40} className="object-contain h-6 md:h-7 w-auto" />
              <Image src="/images/logo_panasonic.svg" alt="Panasonic" width={120} height={40} className="object-contain h-6 md:h-7 w-auto" />
              <Image src="/images/logo_consul.svg" alt="Consul" width={90} height={40} className="object-contain h-6 md:h-7 w-auto" />
              <Image src="/images/logo_electrolux.svg" alt="Electrolux" width={120} height={40} className="object-contain h-6 md:h-7 w-auto" />
              <Image src="/images/logo_brastemp.svg" alt="Brastemp" width={120} height={40} className="object-contain h-6 md:h-7 w-auto" />
              <Image src="/images/logo_esmaltec.svg" alt="Esmaltec" width={120} height={40} className="object-contain h-6 md:h-7 w-auto" />
              <Image src="/images/logo_Daikin.webp" alt="Daikin" width={90} height={40} className="object-contain h-6 md:h-7 w-auto" />
              
              {/* Bulky / Boxy logos -> h-4 md:h-5 or h-5 md:h-6 to optical match */}
              <Image src="/images/logo_lg.svg" alt="LG" width={80} height={40} className="object-contain h-5 md:h-6 w-auto" />
              <Image src="/images/logo_midea.svg" alt="Midea" width={80} height={40} className="object-contain h-5 md:h-6 w-auto" />
              <Image src="/images/logo_elgin.webp" alt="Elgin" width={80} height={40} className="object-contain h-5 md:h-6 w-auto" />
              <Image src="/images/logo_hitachi.webp" alt="Hitachi" width={80} height={40} className="object-contain h-4 md:h-5 w-auto" />
              <Image src="/images/Philco-logo.png" alt="Philco" width={80} height={40} className="object-contain h-4 md:h-5 w-auto" />
              <Image src="/images/logo_Fujitsu.webp" alt="Fujitsu" width={80} height={40} className="object-contain h-5 md:h-6 w-auto" />
            </div>
          </div>
        </section>

        {/* TRUST CARDS SECTION */}
        <section id="servicos" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

              {/* Card 1 — Garantia Total */}
              <div className="bg-white border border-slate-200 rounded-2xl p-10 flex flex-col gap-5 items-center text-center md:items-start md:text-left">
                <div className="w-32 h-32 mb-2 flex items-center justify-center">
                  <Image src="/images/garantiatotal.webp" alt="Garantia Total" width={128} height={128} className="w-32 h-32 object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Garantia Total</h3>
                  <p className="text-base text-slate-500 leading-relaxed">
                    Não corra riscos com amadores. Seu equipamento protegido com{" "}
                    <span className="text-corporate-800 font-semibold">garantia total por escrito.</span>
                  </p>
                </div>
              </div>

              {/* Card 2 — Atendimento Rápido */}
              <div className="bg-white border border-slate-200 rounded-2xl p-10 flex flex-col gap-5 items-center text-center md:items-start md:text-left">
                <div className="w-32 h-32 mb-2 flex items-center justify-center">
                  <Image src="/images/atendimentorapido.webp" alt="Atendimento Rápido" width={128} height={128} className="w-32 h-32 object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Atendimento Rápido</h3>
                  <p className="text-base text-slate-500 leading-relaxed">
                    Seu ar parou?{" "}
                    <span className="text-corporate-800 font-semibold">Chegamos em 30 minutos.</span>{" "}
                    Técnicos de prontidão em toda BH e região.
                  </p>
                </div>
              </div>

              {/* Card 3 — Preço Justo */}
              <div className="bg-white border border-slate-200 rounded-2xl p-10 flex flex-col gap-5 items-center text-center md:items-start md:text-left">
                <div className="w-32 h-32 mb-2 flex items-center justify-center">
                  <Image src="/images/preçojusto.png" alt="Preço Justo" width={128} height={128} className="w-32 h-32 object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Preço Justo</h3>
                  <p className="text-base text-slate-500 leading-relaxed">
                    <span className="text-corporate-800 font-semibold">Zero taxa de visita em BH.</span>{" "}
                    Diagnóstico honesto e{" "}
                    <span className="text-green-600 font-bold">10% de desconto</span>{" "}
                    para você fechar na hora.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <a
                href={getWhatsAppLink("Olá! Gostaria de agendar um orçamento para meu ar-condicionado.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { if (typeof window !== 'undefined' && (window as any).dataLayer) { (window as any).dataLayer.push({ event: 'trust_cta_click' }); } }}
                className="flex items-center justify-center gap-3 bg-whatsapp-500 text-white px-10 py-5 rounded-xl text-base font-extrabold tracking-wide uppercase hover:bg-whatsapp-600 transition-all hover:shadow-xl hover:shadow-whatsapp-500/30 hover:scale-[1.02]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Agendar um Orçamento Agora
              </a>
            </div>

          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="empresas" className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="flex flex-col items-center text-center mb-14">
              <Image 
                src="/images/arcondicionado.png" 
                alt="Ar-Condicionado" 
                width={400} 
                height={200} 
                className="w-full max-w-[320px] object-contain mb-8 drop-shadow-xl" 
              />
              <span className="inline-block text-xs font-bold tracking-[0.2em] text-corporate-800 uppercase mb-3">Nossos Serviços em BH</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                Instalação, Manutenção e Higienização.
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto text-lg">
                Atendemos casas, apartamentos, clínicas, escritórios e empresas em Belo Horizonte e região.
              </p>
            </div>

            <style dangerouslySetInnerHTML={{__html: `
              @keyframes heartbeat {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.04); }
              }
              .animate-heartbeat {
                animation: heartbeat 2s ease-in-out infinite;
              }
            `}} />
            {/* 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

              {/* Card 1 — Instalação */}
              <a
                href={getWhatsAppLink("Olá! Comprei um ar-condicionado e gostaria de solicitar um orçamento para instalação.")}
                target="_blank" rel="noopener noreferrer"
                onClick={() => { if (typeof window !== 'undefined' && (window as any).dataLayer) { (window as any).dataLayer.push({ event: 'installation_quote_click' }); } }}
                className="group bg-white border border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center md:items-start md:text-left gap-5 hover:border-corporate-800 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-28 h-28 mb-4 flex items-center justify-center">
                  <Image src="/images/instalação.png" alt="Instalação" width={112} height={112} className="object-contain w-full h-full drop-shadow-sm" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Instalação</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Instalamos seu ar-condicionado com cuidado, bom acabamento e atenção ao correto funcionamento do equipamento.</p>
                </div>
                <div className="mt-auto pt-6 flex justify-center w-full">
                  <span className="flex items-center justify-center gap-2 w-full bg-whatsapp-500 text-white py-3.5 px-4 rounded-full font-bold text-xs sm:text-sm md:text-[11px] lg:text-sm whitespace-nowrap uppercase tracking-wide hover:bg-whatsapp-600 transition-all hover:scale-105 animate-heartbeat hover:animate-none">
                    <Image src="/images/icone do whatsapp.png" alt="WhatsApp" width={18} height={18} className="brightness-0 invert object-contain" />
                    Quero Instalação Profissional
                  </span>
                </div>
              </a>

              {/* Card 2 — Manutenção */}
              <a
                href={getWhatsAppLink("Olá! Meu ar-condicionado está com problema e gostaria de solicitar uma manutenção.")}
                target="_blank" rel="noopener noreferrer"
                onClick={() => { if (typeof window !== 'undefined' && (window as any).dataLayer) { (window as any).dataLayer.push({ event: 'maintenance_quote_click' }); } }}
                className="group bg-white border border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center md:items-start md:text-left gap-5 hover:border-corporate-800 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-28 h-28 mb-4 flex items-center justify-center">
                  <Image src="/images/manutenção.png" alt="Manutenção" width={112} height={112} className="object-contain w-full h-full drop-shadow-sm" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Manutenção</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Não está gelando, está pingando ou fazendo barulho? Diagnóstico claro, orçamento antes do serviço e sem taxa de visita em BH.</p>
                </div>
                <div className="mt-auto pt-6 flex justify-center w-full">
                  <span className="flex items-center justify-center gap-2 w-full bg-whatsapp-500 text-white py-3.5 px-4 rounded-full font-bold text-xs sm:text-sm md:text-[11px] lg:text-sm whitespace-nowrap uppercase tracking-wide hover:bg-whatsapp-600 transition-all hover:scale-105 animate-heartbeat hover:animate-none">
                    <Image src="/images/icone do whatsapp.png" alt="WhatsApp" width={18} height={18} className="brightness-0 invert object-contain" />
                    Quero Garantir Manutenção
                  </span>
                </div>
              </a>

              {/* Card 3 — Higienização */}
              <a
                href={getWhatsAppLink("Olá! Gostaria de solicitar um orçamento para higienização do meu ar-condicionado.")}
                target="_blank" rel="noopener noreferrer"
                onClick={() => { if (typeof window !== 'undefined' && (window as any).dataLayer) { (window as any).dataLayer.push({ event: 'cleaning_quote_click' }); } }}
                className="group bg-white border border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center md:items-start md:text-left gap-5 hover:border-corporate-800 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-28 h-28 mb-4 flex items-center justify-center">
                  <Image src="/images/higienização.png" alt="Higienização" width={112} height={112} className="object-contain w-full h-full drop-shadow-sm" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Higienização</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Limpeza e higienização profunda para melhorar o funcionamento e a qualidade do ar do seu ambiente.</p>
                </div>
                <div className="mt-auto pt-6 flex justify-center w-full">
                  <span className="flex items-center justify-center gap-2 w-full bg-whatsapp-500 text-white py-3.5 px-4 rounded-full font-bold text-xs sm:text-sm md:text-[11px] lg:text-sm whitespace-nowrap uppercase tracking-wide hover:bg-whatsapp-600 transition-all hover:scale-105 animate-heartbeat hover:animate-none">
                    <Image src="/images/icone do whatsapp.png" alt="WhatsApp" width={18} height={18} className="brightness-0 invert object-contain" />
                    Quero Higienizar Meu Ar
                  </span>
                </div>
              </a>

            </div>

          </div>
        </section>


        {/* HOW IT WORKS */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                Como funciona o atendimento em BH?
              </h2>
              <p className="text-slate-500 text-lg">
                É simples, rápido e sem complicação. Resolva seu ar-condicionado em 3 passos:
              </p>
            </div>

            {/* 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

              {/* Step 1 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center gap-5">
                <div className="w-20 h-20 flex items-center justify-center mb-2">
                  <Image 
                    src="/images/icone do whatsapp.png" 
                    alt="Chame no WhatsApp" 
                    width={58} 
                    height={58} 
                    className="object-contain" 
                    style={{ filter: 'brightness(0) saturate(100%) invert(35%) sepia(85%) saturate(3025%) hue-rotate(213deg) brightness(98%) contrast(94%)' }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Chame no WhatsApp</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Clique no botão verde e fale com um técnico agora mesmo.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center gap-5">
                <div className="w-20 h-20 flex items-center justify-center mb-2">
                  <Image src="/images/receba o tecnico.png" alt="Receba o Técnico" width={80} height={80} className="object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Receba o Técnico</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Agendamos a visita no mesmo dia. Sem taxa de visita em BH!</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center gap-5">
                <div className="w-20 h-20 flex items-center justify-center mb-2">
                  <Image src="/images/problemaresolvido.png" alt="Problema Resolvido" width={80} height={80} className="object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Problema Resolvido</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Serviço com diagnóstico claro, orçamento aprovado e garantia total.</p>
                </div>
              </div>

            </div>

            {/* CTA */}
            <div className="flex justify-center">
              <a
                href={getWhatsAppLink("Olá! Encontrei a San'Cruz pelo site e gostaria de solicitar um atendimento.")}
                target="_blank" rel="noopener noreferrer"
                className="flex w-full sm:w-auto items-center justify-center gap-3 bg-whatsapp-500 text-white px-10 py-5 rounded-xl text-base font-extrabold tracking-wide uppercase hover:bg-whatsapp-600 transition-all hover:shadow-xl hover:shadow-whatsapp-500/30 hover:scale-[1.02]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Quero Solicitar Agora
              </a>
            </div>

          </div>
        </section>


        {/* GALLERY */}
        <section id="trabalhos" className="py-24 bg-slate-900 text-white overflow-hidden">
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes marquee-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes marquee-right {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            .marquee-left {
              animation: marquee-left 30s linear infinite;
              display: flex;
              width: max-content;
            }
            .marquee-right {
              animation: marquee-right 30s linear infinite;
              display: flex;
              width: max-content;
            }
            .marquee-left:hover, .marquee-right:hover {
              animation-play-state: paused;
            }
          `}} />

          {/* Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos chame e resolvemos!</h2>
                <p className="text-slate-400">Instalações, manutenções e higienizações reais realizadas pela nossa equipe.</p>
              </div>
            </div>
          </div>

          {/* Row 1 — scroll LEFT */}
          <div className="mb-4 relative">
            <div className="marquee-left gap-4" style={{gap: '12px'}}>
              {[
                "/images/img01.jfif",
                "/images/img02.jfif",
                "/images/img03.jfif",
                "/images/img04.jfif",
                "/images/img06.jfif",
                "/images/img07.jfif",
                // duplicate for seamless loop
                "/images/img01.jfif",
                "/images/img02.jfif",
                "/images/img03.jfif",
                "/images/img04.jfif",
                "/images/img06.jfif",
                "/images/img07.jfif",
              ].map((src, i) => (
                <div key={i} className="relative flex-shrink-0 rounded-xl overflow-hidden bg-slate-800" style={{width: '280px', height: '210px', marginRight: '12px'}}>
                  <Image
                    src={src}
                    alt={`Trabalho San'cruz ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="280px"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — scroll RIGHT */}
          <div className="relative">
            <div className="marquee-right" style={{gap: '12px'}}>
              {[
                "/images/img08.jfif",
                "/images/img09.jfif",
                "/images/img222.jfif",
                "/images/img888.jfif",
                "/images/img101010.jfif",
                "/images/img01201010.jfif",
                // duplicate for seamless loop
                "/images/img08.jfif",
                "/images/img09.jfif",
                "/images/img222.jfif",
                "/images/img888.jfif",
                "/images/img101010.jfif",
                "/images/img01201010.jfif",
              ].map((src, i) => (
                <div key={i} className="relative flex-shrink-0 rounded-xl overflow-hidden bg-slate-800" style={{width: '280px', height: '210px', marginRight: '12px'}}>
                  <Image
                    src={src}
                    alt={`Trabalho San'cruz ${i + 7}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="280px"
                  />
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* ABOUT */}
        <section id="sobre" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl bg-slate-200">
                  <Image src="/images/about_tech.jpg" alt="Profissional técnico de climatização com prancheta de atendimento" fill className="object-cover" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Atenção ao ambiente, ao equipamento e à sua necessidade.</h2>
                <p className="text-lg text-slate-600 mb-6">
                  A San'cruz Climatização nasceu do entendimento de que o mercado precisa de mais do que apenas "instalação". Precisamos de profissionais que respeitem a infraestrutura do cliente, entreguem acabamento técnico impecável e sejam parceiros na manutenção.
                </p>
                <p className="text-lg text-slate-600 mb-8">
                  Liderada por {businessConfig.ownerName}, nossa equipe atua focada na resolução, para que você não precise se preocupar com retrabalhos ou sujeira pós-obra.
                </p>
                <div className="flex items-center gap-4">
                  <div className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center font-bold text-corporate-800">
                    W
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">{businessConfig.ownerName}</h5>
                    <p className="text-sm text-slate-500">Fundador, San'cruz Climatização</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Perguntas Frequentes</h2>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <details key={index} className="group bg-white rounded-lg border border-slate-200 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-slate-900 group-open:text-corporate-800">
                    {faq.question}
                    <ChevronDown size={20} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-slate-600">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 bg-corporate-800 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[url('/images/hero_ac_tech.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              Belo Horizonte, MG e Região Metropolitana
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">O seu ar-condicionado em mãos de especialistas.</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Chame nossa equipe no WhatsApp agora e aproveite a nossa <strong>Isenção de Taxa de Visita em BH</strong> para ter um diagnóstico transparente.
            </p>
            <a 
              href={getWhatsAppLink("Olá! Gostaria de aproveitar a taxa de visita grátis e solicitar um orçamento.")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-whatsapp-500 text-white px-10 py-5 rounded-md text-xl font-extrabold hover:bg-whatsapp-600 transition-transform hover:scale-105 shadow-2xl shadow-whatsapp-500/40"
            >
              Falar no WhatsApp Agora
            </a>
            <p className="mt-6 text-sm text-blue-200 flex items-center justify-center gap-2">
              <Phone size={16}/> Plantão: {businessConfig.phone}
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 pt-20 pb-28 md:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="mb-6 inline-block">
                <Image src="/images/logo.png" alt="San'cruz Climatização" width={260} height={86} className="object-contain h-20 w-auto" />
              </div>
              <p className="text-sm text-slate-400 mb-6">
                Climatização técnica, inteligente e responsável. Atendimento para residências e empresas.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6">Serviços</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="#servicos" className="hover:text-white transition-colors">Instalação</Link></li>
                <li><Link href="#servicos" className="hover:text-white transition-colors">Manutenção Preventiva</Link></li>
                <li><Link href="#servicos" className="hover:text-white transition-colors">Higienização</Link></li>
                <li><Link href="#empresas" className="hover:text-white transition-colors">Climatização Comercial</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6">Empresa</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="#sobre" className="hover:text-white transition-colors">Sobre</Link></li>
                <li><Link href="#trabalhos" className="hover:text-white transition-colors">Trabalhos</Link></li>
                <li><Link href="#inicio" className="hover:text-white transition-colors">Início</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6">Contato</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-slate-500 shrink-0 mt-0.5"/>
                  <span>{businessConfig.phone}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-slate-500 shrink-0 mt-0.5"/>
                  <span>{businessConfig.email}</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-slate-500 shrink-0 mt-0.5"/>
                  <span>Atendimento em {businessConfig.city}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} {businessConfig.businessName}. Todos os direitos reservados.</p>
            <p>Criado com alto padrão técnico.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP - DESKTOP */}
      <a 
        href={getWhatsAppLink("Olá! Acessei o site e gostaria de tirar uma dúvida.")}
        target="_blank" rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 hover:scale-110 transition-transform z-50"
        aria-label="Falar no WhatsApp"
      >
        <Image src="/images/widget_whatsapp.png" alt="WhatsApp" width={64} height={64} className="w-16 h-16 drop-shadow-2xl" />
      </a>

      {/* MOBILE STICKY CTA */}
      <div className={`md:hidden fixed bottom-4 left-4 right-4 z-50 transition-all duration-500 transform ${showMobileCta ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}`}>
        <a 
          href={getWhatsAppLink("Olá! Gostaria de aproveitar a taxa de visita grátis e solicitar um orçamento.")}
          target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full bg-whatsapp-500 text-white py-4 rounded-full font-extrabold text-lg shadow-[0_8px_30px_rgb(34,197,94,0.4)] hover:bg-whatsapp-600 transition-colors animate-heartbeat"
        >
          <Image src="/images/icone do whatsapp.png" alt="WhatsApp" width={26} height={26} className="brightness-0 invert object-contain" />
          ORÇAMENTO AGORA!
        </a>
      </div>
    </div>
  );
}

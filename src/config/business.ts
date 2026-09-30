export const businessConfig = {
  businessName: "San'cruz Climatização",
  ownerName: "Wanderson Santos",
  phone: "+55 31 9164-7343",
  whatsapp: "553191647343", // Somente números para link
  instagram: "https://www.instagram.com/sancruz.climatizacao/",
  email: "contato@sancruzclimatizacao.com.br",
  websiteUrl: "https://lp-san-cruz.vercel.app",
  city: "Belo Horizonte e Região",
  serviceAreas: ["Belo Horizonte", "Contagem", "Betim", "Nova Lima", "Região Metropolitana"],
  address: "Atendimento em domicílio e empresas",
  openingHours: "Segunda a Sábado, 08h às 18h",
};

export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(message)}`;
};

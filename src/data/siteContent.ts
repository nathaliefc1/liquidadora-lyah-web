// src/data/siteContent.ts
export const site = {
  brand: {
    name: "Liquidadora Lyah",
    legal: "Liquidadora Lyah Ltda",
    rut: "78.186.108-1",
    phone: "+56 9 5972 1475",
    email: "liquidadoralyah@gmail.com",
    instagram: "@Liquidadora_de_Lyah",
    address: "Av. Manuel Antonio Matta 1766, Placeres, Valparaíso",
  },
  nav: [
    { id: "inicio", label: "Inicio" },
    { id: "productos", label: "Productos" },
    { id: "ofertas", label: "Ofertas" },
    { id: "contacto", label: "Contacto" },
  ],
  hero: {
    title: "Liquidadora Lyah",
    subtitle: "Tu minimarket de confianza en Valparaíso a precios increíbles",
    cta: "Ver ofertas",
    images: [
      "/images/fachada-1.jpg",
      "/images/fachada-2.jpg",
      "/images/fachada-3.jpg",
    ],
  },
  categories: {
    title: "Nuestras categorías",
    subtitle: "Encuentra todo lo que necesitas para tu día a día",
    list: [
      { label: "Venta de abarrotes", slug: "abarrotes" },
      { label: "Cereales", slug: "cereales" },
      { label: "Congelados", slug: "congelados" },
      { label: "Lácteos", slug: "lacteos" },
      { label: "Bebidas", slug: "bebidas" },
      { label: "Golosinas y comestibles", slug: "golosinas" },
      { label: "Comida para mascotas", slug: "mascotas" },
      { label: "Higiene", slug: "higiene" },
      { label: "Limpieza", slug: "limpieza" },
      { label: "Salsas", slug: "salsas" },
    ],
  },
  featuredOffers: {
    title: "Ofertas destacadas del mes",
    items: [
      {
        id: "confort-noble",
        title: "Pack Confort Noble a Luca",
        oldPrice: "9.000",
        price: "8.500",
        currency: "CLP",
        image: "/images/promo_noble.jpg",
        cta: "Ver oferta",
      },
      {
        id: "4-huevos",
        title: "4 Huevos a Luca",
        oldPrice: "7.000",
        price: "6.500",
        currency: "CLP",
        image: "/images/promo_huevo.jpg",
        cta: "Ver oferta",
      },
    ],
  },

  whyChooseUs: {
    title: "¿Por qué elegirnos?",
    subtitle:
      "Ofrecemos una alternativa de productos de primera necesidad a precios muy bajos.",
    bullets: [
      "Precios bajos en artículos esenciales",
      "Atención cercana y confiable",
      "Ubicación accesible en Valparaíso",
      "Productos seleccionados por calidad",
    ],
  },
  schedule: {
    title: "Horario de atención",
    subtitle: "Ven a visitarnos o llama para confirmar disponibilidad",
    hours: [
      { label: "Lunes a viernes", from: "08:00", to: "21:00" },
      { label: "Sábados", from: "09:00", to: "21:00" },
      { label: "Domingos", from: "09:00", to: "17:00" },
    ],
  },
  contact: {
    title: "Contacto y ubicación",
    mapUrl:
      "https://maps.google.com/?q=Av.+Manuel+Antonio+Matta+1766+Valparaiso",
  },
  footer: {
    motto: '"Precios económicos, precios de locos"',
    copyright: "© 2025 Liquidadora Lyah Ltda. Todos los derechos reservados.",
    privacyLabel: "Política de privacidad",
    legalNotice:
      "Aviso Legal: El contenido de este sitio web tiene carácter exclusivamente informativo. Liquidadora Lyah Ltda. no realiza ventas ni transacciones en línea por este medio. Todos los precios, promociones y productos publicados están sujetos a disponibilidad en nuestra tienda física ubicada en Av. Matta 1766, Placeres, Valparaíso.",
    extraNotice:
      "Los precios y ofertas pueden variar sin previo aviso y son válidos únicamente en el punto de venta físico.",
    copyrightNotice:
      "Derechos de propiedas y uso de contenido: Todos los logotipos, imágenes y materiales contenidos en este sitio pertenecen a Liquidadora de Lyah o a sus respectivos titulares. Queda prohibida su reproducción total o parcial sin autorización.",
  },
  credits: {
    text: "Web creada con consciencia por",
    company: "Zorrobyte",
    url: "https://zorrobyte.io/",
  },
  legal: {
    notice:
      "Aviso Legal: El contenido de este sitio web tiene carácter exclusivamente informativo. Liquidadora Lyah Ltda. no realiza ventas ni transacciones en línea por este medio. Todos los precios, promociones y productos publicados están sujetos a disponibilidad en nuestra tienda física ubicada en Av. Matta 1766, Placeres, Valparaíso.",
  },
};

export default site;

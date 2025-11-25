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
      "Venta de abarrotes",
      "Cereales",
      "Congelados",
      "Lácteos",
      "Bebidas",
      "Golosinas y comestibles",
      "Comida para mascotas",
      "Higiene",
      "Limpieza",
    ],
  },
  featuredOffers: {
    title: "Ofertas destacadas del mes",
    items: [
      {
        title: "Manga de Noble",
        price: "8.500 CLP",
        note: "efectivo",
        image: "/images/oferta-manga-noble.jpg",
      },
      {
        title: "Bandeja de huevos",
        price: "6.500 CLP",
        note: "",
        image: "/images/oferta-huevos.jpg",
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
    hours: [
      "Lunes a viernes: 08:00 - 21:00",
      "Sábados: 09:00 - 21:00",
      "Domingos: 09:00 - 17:00",
    ],
  },
  contact: {
    title: "Contacto y ubicación",
    mapUrl:
      "https://maps.google.com/?q=Av.+Manuel+Antonio+Matta+1766+Valparaiso",
  },
  legal: {
    copyright: "© 2025 Liquidadora Lyah Ltda. Todos los derechos reservados.",
    privacy: "Política de privacidad",
    notice:
      "Aviso Legal: El contenido de este sitio web tiene carácter exclusivamente informativo. Liquidadora Lyah Ltda. no realiza ventas ni transacciones en línea por este medio. Todos los precios, promociones y productos publicados están sujetos a disponibilidad en nuestra tienda física ubicada en Av. Matta 1766, Placeres, Valparaíso.",
    notice2:
      "Los precios y ofertas pueden variar sin previo aviso y son válidos únicamente en el punto de venta físico.",
    notice3:
      "Derechos de propiedas y uso de contenido: Todos los logotipos, imágenes y materiales contenidos en este sitio pertenecen a Liquidadora de Lyah o a sus respectivos titulares. Queda prohibida su reproducción total o parcial sin autorización.",
  },
};

export default site;

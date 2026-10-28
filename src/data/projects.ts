export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  excerpt: string;
  sourceLinks: ProjectLink[];
  featured: boolean;
  anchor?: string;
}

// Full case-study copy and original external destinations are maintained here.
export const projects: Project[] = [
  {
    "slug": "fisiopilates",
    "title": "Fisiopilates",
    "image": "/assets/img/projects/4.jpg",
    "imageAlt": "",
    "paragraphs": [
      "Gracias a una estrategia integral de contenido, pauta publicitaria y automatización, Fisiopilates abrió <strong> 5 nuevas sedes </strong> y sigue en plena expansión.",
      "Cuando la estrategia está bien pensada y alineada con los objetivos del negocio, el crecimiento no se hace esperar. ¡Vamos por más!"
    ],
    "excerpt": "Contenido, pauta y automatización acompañaron la expansión de Fisiopilates, que abrió cinco nuevas sedes y sigue creciendo.",
    "sourceLinks": [
      {
        "label": "Visitar sitio web",
        "href": "https://pilatesfisiopilates.com/"
      }
    ],
    "featured": true,
    "anchor": "proyectos-web"
  },
  {
    "slug": "aicoll",
    "title": "Aicoll",
    "image": "/assets/img/projects/5.jpg",
    "imageAlt": "",
    "paragraphs": [
      "Con Aicoll trabajamos una estrategia enfocada en su naturaleza B2B: Posicionamiento de marca en LinkedIn, el canal ideal para conectar con otras empresas. Producción audiovisual profesional para mostrar su propuesta de valor con claridad y potencia.",
      "Una marca técnica no tiene por qué ser aburrida. Con una estrategia bien pensada, también se vuelve atractiva y relevante."
    ],
    "excerpt": "Posicionamiento B2B en LinkedIn y producción audiovisual profesional para comunicar su propuesta de valor y conectar con empresas.",
    "sourceLinks": [
      {
        "label": "Ver en LinkedIn",
        "href": "https://www.linkedin.com/company/aicoll/posts/?feedView=all"
      }
    ],
    "featured": false
  },
  {
    "slug": "beautyland",
    "title": "Beautyland",
    "image": "/assets/img/projects/6.jpg",
    "imageAlt": "",
    "paragraphs": [
      "En Beautyland Spa, donde cada detalle cuenta para crear experiencias mágicas para niñas, implementamos una estrategia que potenció su atención digital: Pauta publicitaria efectiva para atraer más clientas y agendar más celebraciones. Automatización y marketing conversacional para mejorar la atención en WhatsApp y acelerar el cierre de citas.",
      "El resultado: menos tiempo respondiendo y más tiempo consintiendo"
    ],
    "excerpt": "Pauta publicitaria y automatización de WhatsApp para atraer clientas, mejorar la atención y agilizar las reservas de celebraciones.",
    "sourceLinks": [
      {
        "label": "Visitar sitio web",
        "href": "https://beautyland.com.co/"
      }
    ],
    "featured": false
  },
  {
    "slug": "energia-de-pereira",
    "title": "Energía de Pereira",
    "image": "/assets/img/projects/7.jpg",
    "imageAlt": "",
    "paragraphs": [
      "Con Energía de Pereira encendimos la creatividad apostándole a una producción audiovisual de alto impacto: cortometrajes con narrativa poderosa; entrevistas que conectan con la comunidad; videos dinámicos para redes sociales.",
      "Creamos contenidos que no solo informan, sino que inspiran y elevan la percepción de marca. Porque cuando la energía se cuenta bien, se siente más fuerte"
    ],
    "excerpt": "Producción de cortometrajes, entrevistas y videos para redes que conectan con la comunidad y elevan la percepción de marca.",
    "sourceLinks": [
      {
        "label": "Ver en Instagram",
        "href": "https://www.instagram.com/energiapereira/"
      },
      {
        "label": "Ver proyectos",
        "href": "https://www.behance.net/gallery/220772225/Mini-serie-documental-Mujeres-cultivando-suenos"
      }
    ],
    "featured": true,
    "anchor": "proyectos-audiovisuales"
  },
  {
    "slug": "lina-rengifo",
    "title": "Lina Rengifo",
    "image": "/assets/img/projects/4.jpg",
    "imageAlt": "",
    "paragraphs": [
      "Así fue como sacamos una marca personal de Shadowban (Baneo) de Instagram y triplicamos los seguidores: Con Lina logramos salir del temido shadowban, mantener un engagement superior al promedio de su sector y, lo mejor de todo, <strong> triplicar su comunidad en Instagram </strong> con contenido estratégico y constante.",
      "Cuando el algoritmo se pone difícil, la estrategia hace la diferencia."
    ],
    "excerpt": "Contenido estratégico para salir del shadowban y triplicar la comunidad en Instagram, con engagement sobre el promedio del sector.",
    "sourceLinks": [
      {
        "label": "Ver en Instagram",
        "href": "https://www.instagram.com/linanutricion/"
      }
    ],
    "featured": false
  },
  {
    "slug": "ladrillera-arcillas",
    "title": "Ladrillera Arcillas",
    "image": "/assets/img/projects/5.jpg",
    "imageAlt": "",
    "paragraphs": [
      "Con Ladrillera Arcillas construimos más que ladrillos… construimos una historia. Desarrollamos su video institucional desde cero: reunión de entendimiento; guion original; preproducción detallada; 4 días de rodaje; postproducción con narrativa sólida.",
      "Un video que refleja la esencia, trayectoria y compromiso de la marca con calidad y tradición. Porque cada empresa tiene una historia que merece contarse bien."
    ],
    "excerpt": "Video institucional desarrollado desde el guion y la preproducción hasta cuatro días de rodaje y una postproducción con narrativa sólida.",
    "sourceLinks": [
      {
        "label": "Ver video",
        "href": "https://drive.google.com/file/d/1cnVe2uIY0kHKzcO2_1Ejer-iPXbKodMp/view?usp=sharing"
      }
    ],
    "featured": false
  },
  {
    "slug": "rothar",
    "title": "Rothar",
    "image": "/assets/img/projects/6.jpg",
    "imageAlt": "",
    "paragraphs": [
      "¿Quién dijo que la publicidad digital no acelera? Con Rothar, ajustamos bien el casco y salimos a toda velocidad. Desarrollamos una estrategia de pauta centrada en performance. Creamos videos para anuncios que captaron la atención desde el primer segundo.",
      "Resultado: <strong> ROAS de +20 en ventas por la web </strong> . Sí, ¡leíste bien! Ventas que se dispararon como moto en bajada. Publicidad que no solo se ve bien, ¡sino que vende como nunca!"
    ],
    "excerpt": "Pauta enfocada en performance y videos para anuncios que captaron la atención, con un ROAS de +20 en ventas por la web.",
    "sourceLinks": [],
    "featured": true
  },
  {
    "slug": "muii",
    "title": "MUII: Créditos digitales",
    "image": "/assets/img/projects/7.jpg",
    "imageAlt": "",
    "paragraphs": [
      "Con Muii pusimos la estrategia en modo efectivo. Diseñamos y ejecutamos una pauta publicitaria enfocada en la colocación real de créditos. Complementamos con producción audiovisual que conecta, educa y convierte.",
      "Resultado: una estrategia 100% alineada al negocio, generando leads de calidad y aumentando los créditos colocados. Publicidad con propósito, contenido con impacto. Así es como lo hacemos en Conectamos."
    ],
    "excerpt": "Pauta publicitaria y producción audiovisual enfocadas en generar leads de calidad y aumentar la colocación de créditos digitales.",
    "sourceLinks": [
      {
        "label": "Visitar sitio web",
        "href": "https://credito.muii.com.co/"
      }
    ],
    "featured": false
  },
  {
    "slug": "grupo-101",
    "title": "GRUPO 101",
    "image": "/assets/img/projects/4.jpg",
    "imageAlt": "",
    "paragraphs": [
      "En Grupo 101 somos aliados estratégicos en proyectos de alto impacto. Acompañamos su participación en Colombia Productiva como consultores en marketing digital, brindando: diagnósticos personalizados; acompañamiento estratégico; capacitación en pauta, contenido y automatización.",
      "Todo con un enfoque claro: mejorar los resultados comerciales de empresas reales en procesos de crecimiento."
    ],
    "excerpt": "Diagnósticos, consultoría y capacitación en pauta, contenido y automatización para mejorar los resultados comerciales de las empresas.",
    "sourceLinks": [
      {
        "label": "Visitar sitio web",
        "href": "https://grupo101.co/"
      }
    ],
    "featured": false
  }
];

export const featuredProjects = projects.filter((project) => project.featured);
export const projectHref = (slug: string) => `/proyectos/${slug}/`;

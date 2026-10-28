export const site = {
  name: 'Conectamos Growth Marketing',
  contactHref: '/contact-us/',
  projectsHref: '/project/',
  description: 'Conectamos Growth Marketing: Más que una agencia, tu equipo de estrategia digital.',
  whatsapp: {
    label: '+573103091140',
    href: `https://wa.me/573103091140?text=${encodeURIComponent('Hola, quiero conocer más sobre sus servicios de marketing digital.')}`,
  },
  logos: {
    light: '/assets/img/logo.png',
    dark: '/assets/img/logo-light.png',
    footer: '/assets/img/logo-light.png',
  },
} as const;

export const navigation = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: '¿Por qué nosotros?' },
  { href: site.projectsHref, label: 'Proyectos' },
  { href: '#equipo', label: 'Equipo' },
  { href: site.contactHref, label: 'Contacto' },
] as const;

export const addresses = [
  { city: 'Neiva', address: 'Calle 14 # 8B-15 Chapinero' },
  { city: 'Pereira', address: 'Cra. 15 #138-25 Centro de negocios cerritos' },
] as const;

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/conectamos-growth-marketing/?viewAsMember=true', icon: 'linkedin-in' },
  { label: 'Facebook', href: 'https://www.facebook.com/Conectamosco', icon: 'facebook-f' },
  { label: 'Instagram', href: 'https://www.instagram.com/conectamos.co/', icon: 'instagram' },
  { label: 'Tik tok', href: 'https://www.tiktok.com/@conectamos.co?_t=ZS-8vHeezDoJGr&_r=1', icon: 'tiktok' },
] as const;

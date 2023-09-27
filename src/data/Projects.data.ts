import { Project } from '@/types/project.types';
import { mdiYoutube, mdiGithub, mdiWeb } from '@mdi/js';

export const projects: Project[] = [
  {
    id: 0,
    image: `/images/projects/clone-idealista.webp`,
    // image: `/images/logo.png`,
    slug: 'clon-idealista',
    title: 'Clon Idealista',
    description:
      'Para practicar mis habilidades tecnicas he creado una replica completamente funcional de la plataforma idealista. Esta es una empresa del sector inmobiliario en Europa',
    link: [
      {
        icon: mdiWeb,
        text: 'ver Demo',
        link: 'https://clone-idealista.vercel.app/',
      },
      {
        icon: mdiGithub,
        text: 'ver GitHub',
        link: 'https://github.com/daniellopezj/clone-idealista',
      },
    ],
    skills: [
      'React',
      'Next.js',
      'git',
      'TypeScript',
      'Responsive Design',
      'Html/css',
      'tailwind css',
    ],
    achievements: [
      '• Mejorar mis habilidades en <span class="highlight-word">React</span> y trabajar con todo el entorno que ofrece <span class="highlight-word">Next.js</span>.',
      '• Dado que tengo más experiencia en <span class="highlight-word">Vue</span> y <span class="highlight-word">Angular</span>, quería crear un proyecto en React para conocer las diferencias entre cada Framework y cuál es mejor para cada tipo de proyecto.',
      '• Desplegar una aplicación en <span class="highlight-word">Vercel</span> es muy sencillo.',
      '• Aprender a manejar <span class="highlight-word">Tailwind</span>, dado que es el framework css más utilizado actualmente.',
    ],
  },
  {
    id: 1,
    image: `/images/projects/rick-morty.webp`,
    slug: 'rick-and-morty',
    title: 'Rick and Morty',
    description:
      'Este proyecto consume la API pública de <a href="https://rickandmortyapi.com/" target="_blank" class="link">Rick and Morty</a>. Además, implementa programación orientada a objetos con TypeScript, lo cual es fácil de aplicar en proyectos mucho más grandes y con mayor complejidad.',
    link: [
      {
        icon: mdiWeb,
        text: 'ver Demo',
        link: 'https://vue3-rick-and-morty.vercel.app/',
      },
      {
        icon: mdiGithub,
        text: 'ver GitHub',
        link: 'https://github.com/daniellopezj/rick-and-morty-vue3',
      },
    ],
    skills: [
      'Vue 3',
      'Pinia',
      'git',
      'TypeScript',
      'Responsive Design',
      'Html/css',
      'Vuetify',
    ],
    achievements: [
      '• Utilizar la libreria  <span class="highlight-word">vuetify</span> la cual proporciona una lista de componentes para utilizar en vue y no crear cada componente de cero.',
      '• Conocer el funcionamiento de <span class="highlight-word">vite</span> y como sacarle su maximo provecho.',
      '• Manejar programación orientada a objetos en <span class="highlight-word">TypeScript</span>.',
      '• Obtuve un 100% en todos los ítems que evalúa <span class="highlight-word">Lighthouse</span> (rendimiento, accesibilidad, buenas prácticas, SEO).',
    ],
  },
  {
    id: 2,
    slug: 'portafolio-open-source',
    image: `/images/projects/portafolio.webp`,
    title: 'Portafolio Open Source',
    description:
      'Portafolio Open Source es un proyecto desarrollado para la comunidad, donde cualquier desarrollador con conocimientos básicos en <span class="highlight-word">Angular</span> puede tener un sitio web para compartir toda su información. Este portafolio está diseñado para manejar <span class="highlight-word">múltiples idiomas</span> y permitir el <span class="highlight-word">envío de correos</span> para que tus clientes puedan contactarte. Además, cuenta con un diseño completamente adaptativo a cualquier dispositivo.',
    link: [
      {
        icon: mdiWeb,
        text: 'ver Demo',
        link: 'https://daniellopezj-portafolio.netlify.app/',
      },
      {
        icon: mdiGithub,
        text: 'ver GitHub',
        link: 'https://github.com/daniellopezj/public-personalPage',
      },
    ],
    skills: [
      'Angular',
      'Netlify',
      'git',
      'TypeScript',
      'Responsive Design',
      'Html/css',
    ],
    achievements: [
      '• Mejorar mis habilidades en <span class="highlight-word">Angular</span>.',
      '• Aprender a utilizar <span class="highlight-word">Netlify</span> para el despliegue del proyecto y conocer las diferencias que tiene con <span class="highlight-word">Vercel</span>.',
      '• Utilizar <span class="highlight-word">ngx-translate</span> para el manejo de múltiples idiomas, esto permite llegar a más personas.',
      '• Poder contribuir a la comunidad me ha generado una gran satisfacción, saber que tu trabajo le ha solucionado algún problema específico a alguien más.',
    ],
  },
  {
    id: 2,
    slug: 'portafolio',
    image: `/images/projects/personalPage.webp`,
    title: 'Portafolio Open Source 2',
    description:
      'Portafolio Open Source 2 es un proyecto desarrollado para la comunidad, donde cualquier desarrollador con conocimientos básicos en <span class="highlight-word">Angular</span> puede tener un sitio web para compartir toda su información. Este portafolio está diseñado para manejar <span class="highlight-word">múltiples idiomas</span> y permitir el <span class="highlight-word">envío de correos</span> para que tus clientes puedan contactarte. Además, cuenta con un diseño completamente adaptativo a cualquier dispositivo.',
    link: [
      {
        icon: mdiWeb,
        text: 'ver Demo',
        link: 'https://daniellopezj.netlify.app/',
      },
      {
        icon: mdiGithub,
        text: 'ver GitHub',
        link: 'https://github.com/daniellopezj/personalPage',
      },
    ],
    skills: [
      'Angular',
      'Netlify',
      'git',
      'TypeScript',
      'Responsive Design',
      'Html/css',
    ],
    achievements: [
      '• Mejorar mis habilidades en <span class="highlight-word">Angular</span> diseñando nuevos templates.',
      '• Aprender a utilizar <span class="highlight-word">Netlify</span> para el despliegue del proyecto y conocer las diferencias que tiene con <span class="highlight-word">Vercel</span>.',
      '• Utilizar <span class="highlight-word">ngx-translate</span> para el manejo de múltiples idiomas, esto permite llegar a más personas.',
      '• Poder contribuir a la comunidad me ha generado una gran satisfacción, saber que tu trabajo le ha solucionado algún problema específico a alguien más.',
    ],
  },
  {
    id: 4,
    image: `/images/projects/MEAN.webp`,
    slug: 'mochileros',
    title: 'Mochileros',
    description:
      'La empresa Mexicana, Mochileros. Dedicada a la comercialización de tours a nivel mundial. Requería desarrollar una plataforma web en la cual publicar sus servicios, la cual debía contar con sistemas de geolocalización e integración con pasarelas de pagos. Además, un panel de control en el cual se gestionara la información publicada en la plataforma web.',
    link: [
      {
        icon: mdiYoutube,
        text: 'ver Funcionamiento',
        link:
          'https://www.youtube.com/watch?v=gh2jDNJ1vkU&t=5s&ab_channel=daniell%C3%B3pez',
      },
    ],
    skills: [
      'Angular',
      'Node js',
      'Express',
      'Mongo db',
      'Jest',
      'AWS',
      'git',
      'TypeScript',
      'Responsive Design',
      'Html/css',
    ],
    achievements: [
      '• Implementar una pasarela de pagos con <span class="highlight-word">stripe</span> y agregar referidos mediante <span class="highlight-word">stripe connect</span>.',
      '• Trabajar en todo el ciclo de desarrollo de software, desde el diseño de vistas hasta el despliegue continuo en <span class="highlight-word">AWS</span>.',
      '• Trabajar en un proyecto internacional con un equipo multidisciplinario.',
      '• Utilizar sistemas de geolocalización con <span class="highlight-word">Angular</span>.',
      '• Mejorar mis <span class="highlight-word">Soft Skills</span>, dado que se tenía contacto con todos los stakeholders del proyecto.',
    ],
  },
  {
    id: 3,
    image: `/images/projects/MEAN.webp`,
    slug: 'gds-sabre',
    title: 'GDS Sabre',
    description:
      'Integración del GDS (sistema de distribución global) Sabre. Esta plataforma proporciona diferentes APIs necesarias para la comercialización de vuelos a nivel mundial, proporcionando precios, horarios, escalas, aeropuertos y demás.',
    link: [
      {
        icon: mdiYoutube,
        text: 'ver Funcionamiento',
        link:
          'https://www.youtube.com/watch?v=xaXoLalub88&ab_channel=daniell%C3%B3pez',
      },
    ],
    skills: [
      'Angular',
      'Node js',
      'Express',
      'Mongo db',
      'Jest',
      'AWS',
      'git',
      'TypeScript',
      'Responsive Design',
      'Html/css',
    ],
    achievements: [
      '• Implementar una pasarela de pagos con <span class="highlight-word">stripe</span>',
      '• Trabajar el ciclo de desarrollo de software, desde el diseño de vistas hasta el despliegue continuo en <span class="highlight-word">AWS</span>.',
      '• Utilizar sistemas de geolocalización con <span class="highlight-word">Angular</span>.',
    ],
  },
];

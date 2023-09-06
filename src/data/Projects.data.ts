import { Project } from '@/types/project.types';
import { mdiYoutube, mdiGithub, mdiWeb } from '@mdi/js';

export const projects: Project[] = [
  {
    id: 0,
    image: `/images/projects/clone-idealista.webp`,
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
      'Este proyecto utiliza la API pública de <a href="https://rickandmortyapi.com/" target="_blank" class="link">Rick and Morty</a>. Utiliza programación orientada a objetos con TypeScript, lo cual es fácil de aplicar en proyectos mucho más grandes y con mayor complejidad',
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
      "Proyecto Open source desarrollado con angular 14 el cual le proporciona a desarrolladores una plantilla para crear su portafolio web. Es totalmente gratis!!. <a class='link-github' target='_blank' href='https://github.com/daniellopezj/public-personalPage'>Ver github</a>",
    link: [
      {
        icon: mdiGithub,
        text: 'ver Demo',
        link: 'https://clone-idealista.vercel.app/',
      },
      {
        icon: mdiGithub,
        text: 'ver GitHub',
        link: 'https://clone-idealista.vercel.app/',
      },
    ],
    skills: [
      'React',
      'Next.js',
      'git',
      'TypeScript',
      'Responsive Design',
      'Html/css',
    ],
  },
  {
    id: 2,
    slug: 'portafolio',
    image: `/images/projects/portafolio.webp`,
    title: 'Portafolio Open Source',
    description:
      "Proyecto Open source desarrollado con angular 14 el cual le proporciona a desarrolladores una plantilla para crear su portafolio web. Es totalmente gratis!!. <a class='link-github' target='_blank' href='https://github.com/daniellopezj/public-personalPage'>Ver github</a>",
    link: [
      {
        icon: mdiGithub,
        text: 'ver Demo',
        link: 'https://clone-idealista.vercel.app/',
      },
      {
        icon: mdiGithub,
        text: 'ver GitHub',
        link: 'https://clone-idealista.vercel.app/',
      },
    ],
    skills: [
      'React',
      'Next.js',
      'git',
      'TypeScript',
      'Responsive Design',
      'Html/css',
    ],
  },
  {
    id: 4,
    image: `/images/projects/MEAN.webp`,
    slug: 'mochileros',
    title: 'Mochileros',
    description:
      'La empresa Mexicana, Mochileros. Dedicada a la comercialización de tours a nivel mundial. Requería desarrollar una plataforma web en la cual publicar sus servicios, la cual debía contar con sistemas de geolocalización e integración con pasarelas de pagos . Además, un panel de control en el cual se gestionara la información publicada en la plataforma web.    ',
    link: [
      {
        icon: mdiGithub,
        text: 'ver Demo',
        link: 'https://clone-idealista.vercel.app/',
      },
      {
        icon: mdiGithub,
        text: 'ver GitHub',
        link: 'https://clone-idealista.vercel.app/',
      },
    ],
    skills: [
      'React',
      'Next.js',
      'git',
      'TypeScript',
      'Responsive Design',
      'Html/css',
    ],
  },
  {
    id: 3,
    image: `/images/projects/MEAN.webp`,
    slug: 'gds-sabre',
    title: 'GDS Sabre',
    description:
      "Replica completamente funcional de la principal Empresa del sector inmobiliario en Europa.   <a class='link-github' target='_blank' href='https://github.com/daniellopezj/clone-idealista'>Ver github</a>",
    link: [
      {
        icon: mdiGithub,
        text: 'ver Demo',
        link: 'https://clone-idealista.vercel.app/',
      },
      {
        icon: mdiGithub,
        text: 'ver GitHub',
        link: 'https://clone-idealista.vercel.app/',
      },
      {
        icon: mdiYoutube,
        text: 'ver Funcionamiento',
        link: 'https://clone-idealista.vercel.app/',
      },
    ],

    skills: [
      'React',
      'Next.js',
      'git',
      'TypeScript',
      'Responsive Design',
      'Html/css',
    ],
    achievements: ['• Aprender a integrar servicios '],
  },
];

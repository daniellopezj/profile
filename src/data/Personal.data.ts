import { Education, Experience } from '~/types/personal.types';

export const Technologies: string[] = [
  'Angular',
  'React',
  'Vue',
  'Nuxt.js',
  'TypeScript',
  'JavaScript',
  'Cypress',
  'Jest',
  'Git',
  'Node.js',
  'Express',
  'AWS',
  'MongoDB',
  'Redux',
  'RxJS',
  'HTML/CSS',
  'Responsive design',
];

export const Skills: string[] = [
  '• Desarrollo con buenas practicas enfocado en <span class="highlight-word">escalabilidad</span> y <span class="highlight-word">usabilidad</span',
  '• Desarrollo centrado en <span class="highlight-word">experiencia de usuario</span',
  '• Comunicación asertiva',
  '• Trabajo en equipo y desarrollo colaborativo',
  '• <span class="highlight-word">Pair Programming</span',
  '• Aprendizaje continuo y creatividad',
  '• Productividad y <span class="highlight-word">gestion del tiempo</span',
  '• <span class="highlight-word">Innovacion</span y mentalidad de crecimiento',
  '• Liderazgo',
];

export const Experiences: Experience[] = [
  {
    title: 'Senior Frontend Enginner',
    company: 'Kiteris',
    description: 'Consultora Española',
    startDate: 'Marzo 2023',
    endDate: 'Actualidad',
    task: [
      'Plantear soluciones eficientes a los diferentes desafíos de los clientes, eligiendo la mejor tecnología.',
      'Brindar apoyo a desarrolladores en tecnologías Front-end Angular, React, vue.',
      'Optimizar el rendimiento de las diferentes aplicaciones.',
      'Desarrollar pruebas con diferentes tecnologías Cypress, Jest, Vitest',
    ],
  },
  {
    title: 'Frontend Developer ',
    company: 'Kiteris',
    description: 'Consultora Española',
    startDate: 'Febrero 2022',
    endDate: 'Marzo 2023',
    task: [
      'Contribuí en proyectos de diferentes clientes como lo fue Visyon y Asitur. Brindando soluciones que mejoraron la calidad y usabilidad en cada proyecto. Implementando diferentes tecnologias frontend como angular, react y vue.',
      'Colaboré con un equipo multicultural en el desarrollo del Metaverso para la empresa Visyon y en el mantenimiento de su pagina Principal utilizando vue 3 con TypeScript.',
      'Participé en el desarrollo de una plataforma web para la empresa Asitur donde realicé la integración con Cypress para el manejo de pruebas y además brindé soporte a un equipo de más de 8 personas en tecnologías web: Vue 3, Cypress y TypeScript.',
    ],
  },
  {
    title: 'Software Engineer ',
    company: 'Leanga Software SL',
    description: 'Consultora Española',
    startDate: 'Enero 2020',
    endDate: 'Febrero 2022',
    task: [
      'Participé en varios proyectos para diferentes clientes, principalmente en el desarrollo de una plataforma web PWA(progressive web App) para la gestión de tareas del sector Hotelero.',
    ],
  },
  {
    title: 'Software Engineer ',
    company: 'Mochileros Mexico',
    description:
      'Empresa mexicana dedicada al comercio de tours a nivel mundial',
    startDate: 'Enero 2020',
    endDate: 'Febrero 2022',
    task: [
      'Trabajé en el desarrollo de una plataforma web para la comercialización de tours y un panel de control para el manejo de la información utilizando Angular 12, NodeJS, Swagger, MongoDB, AWS (Amazon Web Services) para el despliegue en la nube y Jest para el desarrollo de pruebas unitarias donde se logro una cobertura superior al 80% del codigo.',
      'Se integró una pasarela de pagos con Stripe y un GDS (sistema de distribución global) para la comercialización de vuelos a nivel mundial.',
    ],
  },
];

export const Educations: Education[] = [
  {
    title: 'Ingeniería de Sistemas y Computación',
    institute: 'Universidad Pedagógica y Tecnológica de Colombia',
    date: 'Junio 2020',
  },
  {
    title: 'Desarrollo de Apss con React Native',
    institute: 'Platzi',
    date: 'Enero 2021',
  },
];

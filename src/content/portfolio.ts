export type Language = 'es' | 'en';

export const defaultLanguage: Language = 'es';

export const navItems = [
	{ href: '#about', labelKey: 'navAbout' },
	{ href: '#specialties', labelKey: 'navSpecialties' },
	{ href: '#projects', labelKey: 'navProjects' },
	{ href: '#experience', labelKey: 'navExperience' },
	{ href: '#contact', labelKey: 'navContact' },
];

export const uiCopy = {
	es: {
		pageTitle: 'Miguel Gonzalez | Desarrollador Full Stack',
		themeLight: 'Claro',
		themeDark: 'Oscuro',
		navLabel: 'Navegacion principal',
		preferencesLabel: 'Preferencias de visualizacion',
		languageLabel: 'Selector de idioma',
		themeToggleLabel: 'Cambiar tema',
		navAbout: 'Sobre mi',
		navSpecialties: 'Especialidades',
		navProjects: 'Proyectos',
		navExperience: 'Experiencia',
		navContact: 'Contacto',
		brandLabel: 'Inicio del portafolio de Miguel Gonzalez',
		heroBadge: 'Ingeniero en Informatica - Full Stack Developer',
		heroName: 'Miguel Gonzalez',
		heroRole: 'Desarrollador Full Stack orientado a sistemas empresariales',
		heroTitle: 'Construyo soluciones web para procesos que necesitan orden, datos confiables y crecimiento real.',
		heroSummary:
			'Desarrollo plataformas internas, APIs, modulos administrativos e integraciones que conectan operacion, negocio y tecnologia sin depender de parches fragiles.',
		heroPrimary: 'Ver proyectos',
		heroCv: 'Descargar CV',
		heroContact: 'Contacto',
		heroMetricSystems: 'Sistemas web',
		heroMetricSystemsText: 'SaaS, on-premise y plataformas internas.',
		heroMetricFocus: 'Enfoque backend',
		heroMetricFocusText: 'APIs, datos, procesos y modulos administrativos.',
		heroMetricTools: 'Stack practico',
		heroMetricToolsText: 'PHP, Laravel, CodeIgniter, JavaScript, SQL y Docker.',
		aboutEyebrow: 'Sobre mi',
		aboutTitle: 'Desarrollo software que entiende como trabaja una organizacion.',
		aboutBody:
			'Soy Ingeniero en Informatica y desarrollador Full Stack. Mi trabajo se concentra en backend, sistemas empresariales, APIs, bases de datos y herramientas internas que ayudan a equipos a operar con menos friccion. Me interesa traducir procesos reales en software mantenible: flujos claros, informacion trazable y modulos que puedan crecer sin volverse una carga.',
		aboutQuote: 'Menos parches, mas soluciones sostenibles.',
		specialtiesEyebrow: 'Especialidades',
		specialtiesTitle: 'Capacidades organizadas por el tipo de problema que resuelven.',
		projectsEyebrow: 'Proyectos destacados',
		projectsTitle: 'Sistemas construidos para operaciones reales, no solo para verse bien en una demo.',
		projectProblem: 'Problema',
		projectSolution: 'Solucion',
		projectValue: 'Valor aportado',
		projectTech: 'Tecnologias',
		projectAction: 'Ver mas detalles',
		experienceEyebrow: 'Experiencia profesional',
		experienceTitle: 'Full Stack Developer en productos internos y plataformas de negocio.',
		experienceBody:
			'He trabajado en el desarrollo y mantenimiento de sistemas web, creacion de modulos administrativos, diseno de APIs, modelado de bases de datos e interfaces para operacion diaria. Mi participacion suele estar cerca del proceso: entender necesidades, convertirlas en componentes funcionales y dejar bases que otros puedan mantener.',
		stackEyebrow: 'Stack tecnologico',
		stackTitle: 'Herramientas agrupadas por uso, sin porcentajes decorativos.',
		workflowEyebrow: 'Forma de trabajo',
		workflowTitle: 'Codigo mantenible, procesos claros y sistemas que no se rompen un lunes en produccion.',
		contactEyebrow: 'Contacto',
		contactTitle: 'Hablemos si necesitas backend, APIs, sistemas internos o integraciones.',
		contactBody:
			'Puedo ayudarte a convertir procesos manuales en plataformas mas claras, seguras y medibles. Si el problema vive entre operacion, datos y software, probablemente vale la pena conversarlo.',
		contactEmail: 'Enviar correo',
		contactGithub: 'GitHub',
		contactLinkedin: 'LinkedIn',
	},
	en: {
		pageTitle: 'Miguel Gonzalez | Full Stack Developer',
		themeLight: 'Light',
		themeDark: 'Dark',
		navLabel: 'Main navigation',
		preferencesLabel: 'Display preferences',
		languageLabel: 'Language selector',
		themeToggleLabel: 'Change theme',
		navAbout: 'About',
		navSpecialties: 'Specialties',
		navProjects: 'Projects',
		navExperience: 'Experience',
		navContact: 'Contact',
		brandLabel: 'Miguel Gonzalez portfolio home',
		heroBadge: 'Computer Science Engineer - Full Stack Developer',
		heroName: 'Miguel Gonzalez',
		heroRole: 'Full Stack Developer focused on business systems',
		heroTitle: 'I build web solutions for processes that need order, reliable data, and real growth.',
		heroSummary:
			'I develop internal platforms, APIs, administrative modules, and integrations that connect operations, business, and technology without relying on fragile patches.',
		heroPrimary: 'View projects',
		heroCv: 'Download CV',
		heroContact: 'Contact',
		heroMetricSystems: 'Web systems',
		heroMetricSystemsText: 'SaaS, on-premise, and internal platforms.',
		heroMetricFocus: 'Backend focus',
		heroMetricFocusText: 'APIs, data, processes, and administrative modules.',
		heroMetricTools: 'Practical stack',
		heroMetricToolsText: 'PHP, Laravel, CodeIgniter, JavaScript, SQL, and Docker.',
		aboutEyebrow: 'About',
		aboutTitle: 'I build software that understands how an organization works.',
		aboutBody:
			'I am a Computer Science Engineer and Full Stack Developer. My work focuses on backend development, business systems, APIs, databases, and internal tools that help teams operate with less friction. I translate real processes into maintainable software: clear flows, traceable information, and modules that can grow without becoming a burden.',
		aboutQuote: 'Fewer patches, more sustainable solutions.',
		specialtiesEyebrow: 'Specialties',
		specialtiesTitle: 'Capabilities grouped by the type of problem they solve.',
		projectsEyebrow: 'Featured projects',
		projectsTitle: 'Systems built for real operations, not just for a good-looking demo.',
		projectProblem: 'Problem',
		projectSolution: 'Solution',
		projectValue: 'Business value',
		projectTech: 'Technologies',
		projectAction: 'View details',
		experienceEyebrow: 'Professional experience',
		experienceTitle: 'Full Stack Developer for internal products and business platforms.',
		experienceBody:
			'I have worked on the development and maintenance of web systems, administrative modules, APIs, database models, and interfaces for day-to-day operations. My role usually stays close to the process: understand the need, turn it into functional components, and leave foundations other people can maintain.',
		stackEyebrow: 'Technology stack',
		stackTitle: 'Tools grouped by use, without decorative percentages.',
		workflowEyebrow: 'How I work',
		workflowTitle: 'Maintainable code, clear processes, and systems that do not break on a Monday in production.',
		contactEyebrow: 'Contact',
		contactTitle: 'Let\'s talk if you need backend, APIs, internal systems, or integrations.',
		contactBody:
			'I can help turn manual processes into clearer, safer, and more measurable platforms. If the problem lives between operations, data, and software, it is probably worth a conversation.',
		contactEmail: 'Email me',
		contactGithub: 'GitHub',
		contactLinkedin: 'LinkedIn',
	},
} as const;

export const specialties = [
	{
		title: { es: 'Backend Development', en: 'Backend Development' },
		description: {
			es: 'Diseno modulos, reglas de negocio y flujos del lado servidor con foco en estabilidad y mantenimiento.',
			en: 'I design server-side modules, business rules, and workflows with stability and maintenance in mind.',
		},
		technologies: ['PHP', 'Laravel', 'CodeIgniter', 'REST', 'MVC'],
	},
	{
		title: { es: 'APIs e integraciones', en: 'APIs and integrations' },
		description: {
			es: 'Conecto plataformas, aplicaciones moviles y sistemas externos mediante contratos claros y datos consistentes.',
			en: 'I connect platforms, mobile apps, and external systems through clear contracts and consistent data.',
		},
		technologies: ['REST APIs', 'JSON', 'Postman', 'Auth', 'Web services'],
	},
	{
		title: { es: 'Bases de datos', en: 'Databases' },
		description: {
			es: 'Modelo estructuras SQL para operacion diaria, reportes y trazabilidad de informacion critica.',
			en: 'I model SQL structures for daily operations, reports, and traceability of critical information.',
		},
		technologies: ['SQL', 'MySQL', 'Queries', 'Relaciones', 'Reportes'],
	},
	{
		title: { es: 'Frontend funcional', en: 'Functional frontend' },
		description: {
			es: 'Construyo interfaces administrativas claras, rapidas de usar y conectadas con necesidades reales de operacion.',
			en: 'I build administrative interfaces that are clear, efficient, and connected to real operational needs.',
		},
		technologies: ['JavaScript', 'HTML', 'CSS', 'Astro', 'UI administrativa'],
	},
	{
		title: { es: 'Sistemas empresariales', en: 'Business systems' },
		description: {
			es: 'Desarrollo plataformas para ventas, clientes, pagos, inventario, reportes y gestion interna.',
			en: 'I develop platforms for sales, customers, payments, inventory, reports, and internal management.',
		},
		technologies: ['SaaS', 'On-premise', 'ERP-like modules', 'Dashboards', 'Workflows'],
	},
];

export const projects = [
	{
		name: 'Sky Fitness Center Software / SkyWeb',
		problem: {
			es: 'La operacion de gimnasio necesitaba centralizar clientes, ventas, inventario, caja y suscripciones.',
			en: 'Gym operations needed to centralize customers, sales, inventory, cash register, and subscriptions.',
		},
		solution: {
			es: 'Sistema web SaaS para gestion administrativa, staff, facturacion, reportes y control operativo.',
			en: 'SaaS web system for administrative management, staff, billing, reporting, and operational control.',
		},
		value: {
			es: 'Redujo trabajo manual y dio visibilidad a areas clave del negocio.',
			en: 'Reduced manual work and gave visibility into key business areas.',
		},
		technologies: ['PHP', 'Laravel', 'JavaScript', 'SQL', 'SaaS'],
	},
	{
		name: 'Albra System',
		problem: {
			es: 'Una empresa financiera requeria controlar prestamos, pagos, rutas y distribucion de clientes.',
			en: 'A financial company needed control over loans, payments, routes, and customer distribution.',
		},
		solution: {
			es: 'Sistema on-premise con API y app movil para usuarios, clientes, amortizaciones, pagos y cobradores.',
			en: 'On-premise system with API and mobile app for users, customers, amortizations, payments, and collectors.',
		},
		value: {
			es: 'Mejoro el seguimiento de cartera y la coordinacion de cobranza en campo.',
			en: 'Improved loan portfolio tracking and field collection coordination.',
		},
		technologies: ['CodeIgniter', 'PHP', 'REST API', 'SQL', 'Mobile app'],
	},
	{
		name: 'Service Tracker Sipref',
		problem: {
			es: 'El seguimiento de servicios funerarios necesitaba visibilidad interna y comunicacion clara con clientes.',
			en: 'Funeral service tracking needed internal visibility and clear communication with customers.',
		},
		solution: {
			es: 'Gestor de tareas internas y visualizacion de avance para controlar estados, responsables y progreso.',
			en: 'Internal task manager and progress view to control statuses, owners, and service progress.',
		},
		value: {
			es: 'Aporto orden operativo y una experiencia de seguimiento mas transparente.',
			en: 'Brought operational order and a more transparent tracking experience.',
		},
		technologies: ['PHP', 'JavaScript', 'SQL', 'Admin modules', 'Tracking'],
	},
	{
		name: 'REDi One',
		problem: {
			es: 'Una red de innovacion requeria un acceso unificado y modulos para contenido, reportes y administracion.',
			en: 'An innovation network needed unified access plus modules for content, reports, and administration.',
		},
		solution: {
			es: 'Plataforma con login unificado, home feed, reportes administrativos, API y modulos internos.',
			en: 'Platform with unified login, home feed, administrative reports, API, and internal modules.',
		},
		value: {
			es: 'Centralizo interaccion, gestion y datos para una comunidad institucional.',
			en: 'Centralized interaction, management, and data for an institutional community.',
		},
		technologies: ['Laravel', 'API', 'JavaScript', 'SQL', 'Reports'],
	},
];

export const stackGroups = [
	{ label: { es: 'Lenguajes', en: 'Languages' }, items: ['PHP', 'JavaScript', 'HTML', 'CSS', 'SQL'] },
	{ label: { es: 'Frameworks', en: 'Frameworks' }, items: ['Laravel', 'CodeIgniter', 'Astro'] },
	{ label: { es: 'Bases de datos', en: 'Databases' }, items: ['MySQL', 'SQL queries', 'Relational models'] },
	{ label: { es: 'Herramientas', en: 'Tools' }, items: ['Git', 'GitHub', 'Bitbucket', 'Docker', 'Postman'] },
	{ label: { es: 'Integraciones', en: 'Integrations' }, items: ['REST APIs', 'Authentication', 'Billing flows', 'Mobile app backends'] },
];

export const workflow = [
	{ es: 'Entiendo el proceso antes de programar.', en: 'I understand the process before writing code.' },
	{ es: 'Priorizo codigo mantenible y facil de revisar.', en: 'I prioritize maintainable code that is easy to review.' },
	{ es: 'Diseno soluciones que puedan escalar sin perder claridad.', en: 'I design solutions that can scale without losing clarity.' },
	{ es: 'Busco reducir trabajo manual y errores repetitivos.', en: 'I look for ways to reduce manual work and repetitive errors.' },
	{ es: 'Documento lo necesario para que el sistema siga siendo entendible.', en: 'I document what is needed so the system remains understandable.' },
	{ es: 'Pienso en sistemas que puedan crecer con el negocio.', en: 'I think in systems that can grow with the business.' },
];

export const contactLinks = [
	{ key: 'contactEmail', href: 'mailto:miguelglezedu@gmail.com' },
	{ key: 'contactGithub', href: 'https://github.com/G1ez' },
	{ key: 'contactLinkedin', href: 'https://www.linkedin.com/in/miguel-%C3%A1ngel-gonzalez-santillan-3197b0279/' },
];
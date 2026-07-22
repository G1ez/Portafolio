export type Language = 'es' | 'en';

export const defaultLanguage: Language = 'es';

export const navItems = [
	{ href: '#about', labelKey: 'navAbout' },
	{ href: '#education', labelKey: 'navEducation' },
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
		navEducation: 'Educación',
		navSpecialties: 'Especialidades',
		navProjects: 'Proyectos',
		navExperience: 'Experiencia',
		navContact: 'Contáctame',
		brandLabel: 'Inicio del portafolio de Miguel Gonzalez',
		heroBadge: 'Ingeniero en Informatica - Full Stack Developer',
		heroName: 'Miguel Gonzalez',
		heroRole: 'Desarrollador Full Stack orientado a sistemas empresariales',
		heroTitle: '+5 años desarrollando soluciones de impacto real.',
		heroSummary:
			'La pasión y satisfacción de crear me ha llevado a amar el desarrollo de software.',
		heroPrimary: 'Ver proyectos',
		heroCv: 'Descargar CV',
		heroContact: 'Contáctame',
		heroMetricFocus: 'Enfoque backend',
		heroMetricFocusText: 'Me gusta crear sistemas robustos y APIs, cuidando las buenas practicas y la mantenibilidad.',
		heroMetricTools: 'Mi stack práctico',
		heroMetricToolsText: 'Me gusta trabajar con stack LAMP y WAMP, C# y Python. :)',
		aboutEyebrow: 'Sobre mi',
		aboutTitle: '¿Cómo llegué aquí?',
		aboutBody:
			'Para responder a la pregunta de cómo soy Ingeniero en Informatica es necesario hablar de dos palabras: crear y aprender. Desde los 15 años me interesé por el como se hacian las cosas con las que interactuaba día con día, esto me llevo a descubrir la programacion la cual se volvió mi herramienta perfecta para crear y aprender constantemente.',
		aboutQuote: '"Crea cosas que te hagan aprender"',
		educationEyebrow: 'Me encanta aprender',
		educationTitle: 'EDUCACIÓN Y CERTIFICACIONES.',
		educationStudiesLabel: 'Estudios',
		educationCertificationsLabel: 'Certificaciones',
		educationFocusLabel: 'Áreas clave',
		educationSkillsLabel: 'Habilidades',
		specialtiesEyebrow: 'Especialidades',
		specialtiesTitle: 'Cómo aplico mis habilidades.',
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
		contactEyebrow: 'Contáctame ;)',
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
		navEducation: 'Education',
		navSpecialties: 'Specialties',
		navProjects: 'Projects',
		navExperience: 'Experience',
		navContact: 'Contact me',
		brandLabel: 'Miguel Gonzalez portfolio home',
		heroBadge: 'Computer Science Engineer - Full Stack Developer',
		heroName: 'Miguel Gonzalez',
		heroRole: 'Full Stack Developer focused on business systems',
		heroTitle: 'More than 5 years of experience building impactful solutions.',
		heroSummary:
			'My passion for creating and the satisfaction it brings have led me to love software development.',
		heroPrimary: 'View projects',
		heroCv: 'Download CV',
		heroContact: 'Contact me',
		heroMetricFocus: 'Backend focus',
		heroMetricFocusText: 'I like designing robust systems, APis REST using good practices, making sure they are maintainables and scalables.',
		heroMetricTools: 'My stack <3',
		heroMetricToolsText: 'I like using LAMP and WAMP stack, C# and Python.',
		aboutEyebrow: 'About',
		aboutTitle: 'How did I get here?',
		aboutBody:
			"To answer the question of why I am a Software Engineer, I have to talk about two things: creating and learning. Since I was 15, I've always been curious about how the things I used every day worked. That curiosity led me to programming, which became the perfect way for me to create new things while learning something new every day.",
		aboutQuote: '"Build things that make you learn."',
		educationEyebrow: 'Cause I care about learning',
		educationTitle: 'EDUCATION AND CERTIFICATIONS.',
		educationStudiesLabel: 'Studies',
		educationCertificationsLabel: 'Certifications',
		educationFocusLabel: 'Key areas',
		educationSkillsLabel: 'Skills',
		specialtiesEyebrow: 'Specialties',
		specialtiesTitle: 'How I apply my skills.',
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
		contactEyebrow: 'Contact me ;)',
		contactTitle: 'Let\'s talk if you need backend, APIs, internal systems, or integrations.',
		contactBody:
			'I can help turn manual processes into clearer, safer, and more measurable platforms. If the problem lives between operations, data, and software, it is probably worth a conversation.',
		contactEmail: 'Email me',
		contactGithub: 'GitHub',
		contactLinkedin: 'LinkedIn',
	},
} as const;

export const education = [
	{
		institution: {
			es: 'UNIR',
			en: 'UNIR',
		},
		degree: {
			es: 'Maestría en Ingeniería de Software y Sistemas Informáticos con PSU en IA para el Desarrollo de Software y DevOps',
			en: 'Master\'s Degree in Software Engineering and Computer Systems with a PSU in AI for Software Development and DevOps',
		},
		period: {
			es: 'Agosto 2026 - Enero 2028',
			en: 'August 2026 - January 2028',
		},
		focus: {
			es: 'Ingeniería de software, sistemas informáticos, inteligencia artificial aplicada al desarrollo y prácticas DevOps.',
			en: 'Software engineering, computer systems, AI applied to software development, and DevOps practices.',
		},
	},
	{
		institution: {
			es: 'Universidad de Guadalajara',
			en: 'University of Guadalajara',
		},
		degree: {
			es: 'Ingeniería en Informática',
			en: 'Computer Science Engineering',
		},
		period: {
			es: 'Agosto 2021 - Julio 2025',
			en: 'August 2021 - July 2025',
		},
		focus: {
			es: 'Desarrollo de software, aplicaciones web, POO, estructuras de datos, algoritmos, bases de datos relacionales y no relacionales, modelado de información, arquitectura de computadoras, sistemas operativos, redes, máquinas virtuales, minería y análisis de datos, aplicaciones móviles, C# avanzado y Python. Graduado mediante examen CENEVAL EGEL+.',
			en: 'Software development, web applications, OOP, data structures, algorithms, relational and non-relational databases, information modeling, computer architecture, operating systems, networking, virtual machines, data mining and analysis, mobile applications, advanced C#, and Python. Graduated through the CENEVAL EGEL+ exam.',
		},
	},
	{
		institution: {
			es: 'Centro de Bachillerato Tecnológico Industrial y de Servicios',
			en: 'Industrial and Services Technological High School Center',
		},
		degree: {
			es: 'Técnico en Programación',
			en: 'Programming Technician',
		},
		period: {
			es: 'Agosto 2017 - Julio 2020',
			en: 'August 2017 - July 2020',
		},
		focus: {
			es: 'Algoritmos, lógica de programación, desarrollo de software básico e intermedio, POO, bases de datos y manejo de arreglos.',
			en: 'Algorithms, programming logic, basic and intermediate software development, OOP, databases, and array handling.',
		},
	},
];

export const certifications = [
	{
		name: {
			es: 'PDU, PC - Certificación en inglés',
			en: 'PDU, PC - English Certification',
		},
		issuer: 'Proulex',
		period: {
			es: 'Julio 2019 - Mayo 2022',
			en: 'July 2019 - May 2022',
		},
		skills: {
			es: 'Inglés B2 certificado, comunicación profesional, lectura técnica, documentación de software y conversaciones técnicas en inglés.',
			en: 'Certified B2 English, professional communication, technical reading, software documentation, and technical conversations in English.',
		},
	},
	{
		name: {
			es: 'CCNA: Introduction to Networks',
			en: 'CCNA: Introduction to Networks',
		},
		issuer: 'Cisco',
		period: {
			es: 'Diciembre 2023',
			en: 'December 2023',
		},
		skills: {
			es: 'Fundamentos de redes, fundamentos de seguridad de redes, subnetting, Ethernet, troubleshooting, IPv4 e IPv6.',
			en: 'Networking fundamentals, network security fundamentals, subnetting, Ethernet, troubleshooting, IPv4, and IPv6.',
		},
	},
	{
		name: {
			es: 'Python 101 for Data Science',
			en: 'Python 101 for Data Science',
		},
		issuer: 'IBM',
		period: {
			es: 'Mayo 2023',
			en: 'May 2023',
		},
		skills: {
			es: 'Python, estructuras de datos, ciclos, funciones, diccionarios, fundamentos de multithreading y bases de análisis de datos.',
			en: 'Python, data structures, loops, functions, dictionaries, multithreading basics, and data analysis foundations.',
		},
	},
	{
		name: {
			es: 'Machine Learning with Python',
			en: 'Machine Learning with Python',
		},
		issuer: 'IBM',
		period: {
			es: 'Junio 2023',
			en: 'June 2023',
		},
		skills: {
			es: 'Machine learning, clasificación, regresión, clustering, reglas de asociación y modelado de datos.',
			en: 'Machine learning, classification, regression, clustering, association rules, and data modeling.',
		},
	},
];

export const professionalExperience = [
	{
		role: { es: 'Desarrollador de Sistemas', en: 'Systems Developer' },
		company: { es: 'Gobierno de Zapopan - Administración e Innovación Gubernamental', en: 'Zapopan Government - Government Administration and Innovation' },
		location: { es: 'Zapopan, Jal.', en: 'Zapopan, Jalisco' },
		period: { es: 'Mayo 2026 - Presente', en: 'May 2026 - Present' },
		summary: { es: 'Desarrollo y modernización de plataformas públicas para agilizar la operación administrativa y la atención ciudadana.', en: 'Development and modernization of public platforms to streamline administrative operations and citizen services.' },
		contributions: [
			{ es: 'Optimización y digitalización de trámites.', en: 'Optimization and digitization of public services.' },
			{ es: 'Reestructuración de servicios de mensajería, con un ahorro del 85% en costos.', en: 'Restructuring of messaging services, achieving 85% cost savings.' },
			{ es: 'Modernización de plataformas de consulta, agilizando el flujo administrativo en 30%.', en: 'Modernization of inquiry platforms, accelerating administrative workflows by 30%.' },
		],
	},
	{
		role: { es: 'Semi-Senior Backend Web Developer', en: 'Semi-Senior Backend Web Developer' },
		company: { es: 'Fraguala - startup', en: 'Fraguala - startup' },
		location: { es: 'Ocotlán, Jal.', en: 'Ocotlán, Jalisco' },
		period: { es: 'Diciembre 2023 - Julio 2026', en: 'December 2023 - July 2026' },
		summary: { es: 'Planeación, diseño, desarrollo e implementación en producción de sistemas web empresariales para empresas privadas y entidades gubernamentales.', en: 'Planning, design, development, and production implementation of enterprise web systems for private companies and government entities.' },
		contributions: [
			{ es: 'Desarrollo de soluciones on-premise y SaaS adaptadas a los requerimientos de clientes.', en: 'Development of on-premise and SaaS solutions tailored to client requirements.' },
			{ es: 'Optimización de flujos administrativos para reducir errores operativos y tiempos de gestión.', en: 'Optimization of administrative workflows to reduce operational errors and management time.' },
			{ es: 'Levantamiento de requerimientos, análisis funcional y entrega de soluciones de extremo a extremo.', en: 'Requirements gathering, functional analysis, and end-to-end solution delivery.' },
			{ es: 'Estandarización del uso de contenedores para mejorar la consistencia del equipo y los despliegues.', en: 'Container standardization to improve team consistency and deployment stability.' },
		],
	},
	{
		role: { es: 'Desarrollador Freelance', en: 'Freelance Developer' },
		company: { es: 'Freelance', en: 'Freelance' },
		location: { es: 'Guadalajara, Jal.', en: 'Guadalajara, Jalisco' },
		period: { es: 'Julio 2021 - Noviembre 2023', en: 'July 2021 - November 2023' },
		summary: { es: 'Diseño y desarrollo de software a medida y plataformas web para pequeñas empresas y profesionales independientes.', en: 'Design and development of custom software and web platforms for small businesses and independent professionals.' },
		contributions: [
			{ es: 'Plataforma de reservación de mobiliario para eventos con Django y SQLite.', en: 'Event-furniture booking platform built with Django and SQLite.' },
			{ es: 'Sistema de gestión para taller automotriz con Visual Basic y Microsoft Access.', en: 'Workshop management system built with Visual Basic and Microsoft Access.' },
			{ es: 'Landing pages para negocios de belleza, bienestar, entrenamiento y nutrición.', en: 'Landing pages for beauty, wellness, training, and nutrition businesses.' },
			{ es: 'Sistema de Punto de Venta (POS) con Spring Boot, Angular y MySQL.', en: 'Point-of-sale system built with Spring Boot, Angular, and MySQL.' },
		],
	},
];
export const specialties = [
	{
		title: { es: 'Backend y APIs', en: 'Backend & APIs' },
		description: {
			es: 'Arquitectura, patrones e integraciones para crear sistemas robustos, mantenibles y conectados.',
			en: 'Architecture, patterns, and integrations to create robust, maintainable, connected systems.',
		},
		technologies: [
			{ label: 'LAMP', src: 'https://img.shields.io/badge/LAMP-FF6C37?style=for-the-badge&logo=lamp&logoColor=white' },
			{ label: 'SOLID', src: 'https://img.shields.io/badge/SOLID-555555?style=for-the-badge' },
			{ label: 'Design patterns', src: 'https://img.shields.io/badge/Design_Patterns-555555?style=for-the-badge' },
			{ label: 'Background jobs', src: 'https://img.shields.io/badge/Background_Jobs-555555?style=for-the-badge' },
			{ label: 'REST API', src: 'https://img.shields.io/badge/REST-02569B?style=for-the-badge&logo=fastapi&logoColor=white' },
			{ label: 'CLEAN', src: 'https://img.shields.io/badge/CLEAN-555555?style=for-the-badge' },
			{ label: 'Swagger', src: 'https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=white' },
			{ label: 'OAuth', src: 'https://img.shields.io/badge/OAuth-555555?style=for-the-badge' },
			{ label: 'JWT', src: 'https://img.shields.io/badge/JWT-555555?style=for-the-badge' },
			{ label: 'Rate limiting', src: 'https://img.shields.io/badge/Rate_Limiting-555555?style=for-the-badge' },
			{ label: 'Webhooks', src: 'https://img.shields.io/badge/Webhooks-555555?style=for-the-badge' },
		],
	},
	{
		title: { es: 'Bases de datos', en: 'Databases' },
		description: {
			es: 'Modelo estructuras SQL para operacion diaria, reportes y trazabilidad de informacion critica.',
			en: 'I model SQL structures for daily operations, reports, and traceability of critical information.',
		},
		technologies: [
			{ label: 'PostgreSQL', src: 'https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white' },
			{ label: 'SQL Server', src: 'https://img.shields.io/badge/SQL_Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white' },
			{ label: 'MySQL', src: 'https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white' },
			{ label: 'Database design', src: 'https://img.shields.io/badge/Database_Design-555555?style=for-the-badge' },
			{ label: 'Stored procedures', src: 'https://img.shields.io/badge/Stored_Procedures-555555?style=for-the-badge' },
			{ label: 'Triggers', src: 'https://img.shields.io/badge/Triggers-555555?style=for-the-badge' },
			{ label: 'Query optimization', src: 'https://img.shields.io/badge/Query_Optimization-555555?style=for-the-badge' },
		],
	},
	{
		title: { es: 'Frontend funcional', en: 'Functional frontend' },
		description: {
			es: 'Una buena interfaz es clave para una experiencia de usuario exitosa.',
			en: 'A good interface is key to a successful user experience.',
		},
		technologies: [
			{ label: 'Responsive UI', src: 'https://img.shields.io/badge/Responsive_UI-555555?style=for-the-badge' },
			{ label: 'Tailwind CSS', src: 'https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white' },
			{ label: 'Astro', src: 'https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white' },
			{ label: 'Alpine.js', src: 'https://img.shields.io/badge/Alpine.js-8BC0D0?style=for-the-badge&logo=alpinejs&logoColor=white' },
			{ label: 'React', src: 'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white' },
			{ label: 'Flutter', src: 'https://img.shields.io/badge/flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white' },
		],
	},
	{
		title: { es: 'Sistemas empresariales', en: 'Business systems' },
		description: {
			es: 'Comprender las necesidades y funciones de los usuarios nos permite crear soluciones que realmente solucionen.',
			en: 'Understanding the needs and functions of users allows us to create solutions that truly add value.',
		},
		technologies: [
			{ label: 'SaaS', src: 'https://img.shields.io/badge/SaaS-0A66C2?style=for-the-badge' },
			{ label: 'On-premise', src: 'https://img.shields.io/badge/On--premise-455A64?style=for-the-badge' },
			{ label: 'ERP-like modules', src: 'https://img.shields.io/badge/ERP_Modules-00897B?style=for-the-badge' },
			{ label: 'Dashboards', src: 'https://img.shields.io/badge/Dashboards-F57C00?style=for-the-badge' },
			{ label: 'Workflows', src: 'https://img.shields.io/badge/Workflows-7B1FA2?style=for-the-badge' },
			{ label: 'Digitalization', src: 'https://img.shields.io/badge/Digitalization-0288D1?style=for-the-badge' },
			{ label: 'Audit Logs', src: 'https://img.shields.io/badge/Audit_Logs-6D4C41?style=for-the-badge' },
			{ label: 'Internal tools', src: 'https://img.shields.io/badge/Internal_Tools-455A64?style=for-the-badge' },
		],
	},
	{
		title: { es: 'Integración con IA', en: 'AI Integration' },
		description: {
			es: 'Integro modelos de inteligencia artificial en aplicaciones para automatizar procesos, mejorar la experiencia de usuario y potenciar funcionalidades mediante LLMs.',
			en: 'I integrate artificial intelligence models into applications to automate processes, improve user experience, and enhance features using LLMs.',
		},
		technologies: [
			{ label: 'OpenAI API', src: 'https://img.shields.io/badge/OpenAI_API-412991?style=for-the-badge&logo=openai&logoColor=white' },
			{ label: 'Prompt Engineering', src: 'https://img.shields.io/badge/Prompt_Engineering-555555?style=for-the-badge' },
			{ label: 'LLM Integration', src: 'https://img.shields.io/badge/LLM_Integration-0F766E?style=for-the-badge' },
			{ label: 'AI Automation', src: 'https://img.shields.io/badge/AI_Automation-7C3AED?style=for-the-badge' },
			{ label: 'RAG', src: 'https://img.shields.io/badge/RAG-0284C7?style=for-the-badge' },
			{ label: 'Chatbots', src: 'https://img.shields.io/badge/Chatbots-F59E0B?style=for-the-badge' },
		],
	},
	{
		title: { es: 'Más habilidades', en: 'More skills' },
		description: {
			es: 'Habilidades adicionales que me permiten adaptarme a diferentes entornos y necesidades.',
			en: 'Additional skills that allow me to adapt to different environments and needs.',
		},
		technologies: [
			{ label: 'Git', src: 'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white' },
			{ label: 'Docker', src: 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white' },
			{ label: 'Postman', src: 'https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white' },
			{ label: 'Linux', src: 'https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black' },
			{ label: 'CI/CD', src: 'https://img.shields.io/badge/CI/CD-555555?style=for-the-badge' },
			{ label: 'AWS', src: 'https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white' },
			{ label: 'Azure', src: 'https://img.shields.io/badge/Azure-0078D4?style=for-the-badge&logo=microsoft-azure&logoColor=white' },
			{ label: 'Agile', src: 'https://img.shields.io/badge/Agile-555555?style=for-the-badge' },
			{ label: 'Scrum', src: 'https://img.shields.io/badge/Scrum-555555?style=for-the-badge' },
			{ label: 'Kanban', src: 'https://img.shields.io/badge/Kanban-555555?style=for-the-badge' },

		],
	}
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

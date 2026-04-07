export const personalInfo = {
  name: 'Harshal Mehta',
  roles: [
    'Software Developer',
    'AI Engineer',
    'Data Engineer',
    'Cloud Architect',
  ],
  tagline: 'I build scalable data pipelines, cloud infrastructure, and full-stack applications.',
  bio: "Software Developer with 4+ years of experience building secure, large-scale systems across cybersecurity, cloud, and AI. I architect distributed applications, advise on and design compliance-driven infrastructure, and deliver full-stack solutions — from real-time data pipelines to production-grade AI platforms.",
  email: 'harshalmehta1998@gmail.com',
};

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/harshalmehtaprofile/',
  devpost: 'https://dev.to/harshal_mehta',
  github: 'https://github.com/hrshlmeht',
};

export const experiences = [
  {
    company: 'TrendAI',
    role: 'Software Developer',
    period: 'May 2024 — Present',
    description: [
      'Engineered real-time data streaming pipelines using Amazon MSK (Kafka) and Apache Spark, orchestrated with Apache Airflow',
      'Built scalable AWS pipeline to process cybersecurity telemetry using IAM, S3, SQS, Redis, and Aurora DB',
      'Designed high-scale applications using KEDA for event-driven auto-scaling with Prometheus/Grafana, reducing downtime by 30%',
      'Led cross-functional collaboration on automatic server security updates using Python, NGINX, and Kubernetes',
    ],
  },
  {
    company: 'Ericsson',
    role: 'Data Services Intern',
    period: 'Sept 2023 — Apr 2024',
    description: [
      'Automated purchase order reporting using Power Automate with Azure Form Recognizer and Azure ML, reducing manual efforts by 40%',
      'Applied time series forecasting (ARIMA, Prophet) to detect anomalies in procurement patterns',
      'Integrated Microsoft Azure functions and Graph APIs for secure inter-application communication',
    ],
  },
  {
    company: 'Canada Post Corporation',
    role: 'Software Technology Intern',
    period: 'May 2023 — Aug 2023',
    description: [
      'Developed automated data flows using Azure Computer Vision services',
      'Increased operational efficiency by 40% through automated data cleaning and structuring solutions',
      'Utilized Python, SQL, and VBScript for data scraping and analysis, enhancing data quality by 90%',
    ],
  },
  {
    company: 'Cognizant Technology Solutions',
    role: 'Software Engineer 1 (Data Specialist)',
    period: 'Nov 2020 — Jul 2022',
    description: [
      'Collaborated with North American Banking and Insurance providers on web application features',
      'Optimized real-time monitoring processes, reducing workload by a factor of 3',
      'Developed secured backend microservices with JWT-based authentication',
    ],
  },
];

export const projects = [
  {
    title: 'Hunger Games',
    description:
      'An automated AI penetration testing platform that simulates adversarial attacks against LLMs, evaluates model vulnerabilities, and generates comprehensive security reports.',
    tech: ['Python', 'FastAPI', 'Next.js', 'Celery', 'Redis', 'PostgreSQL', 'OpenAI', 'Anthropic'],
    github: 'https://github.com/hrshlmeht',
    live: '#',
    image: '/images/hunger-games.png',
  },
  {
    title: 'LLMGuard',
    description:
      'A compliance and security evaluation platform that assesses how safe and compliant AI models are, with 7 eval scorers, 50+ attack templates, and multi-provider LLM support.',
    tech: ['Python', 'FastAPI', 'Next.js', 'SQLAlchemy', 'Cloudflare R2', 'LiteLLM', 'Docker'],
    github: 'https://github.com/hrshlmeht',
    live: '#',
    image: '/images/llm-guard.png',
  },
];

export const education = [
  {
    degree: 'Master of Engineering',
    field: 'Electrical and Computer Engineering',
    school: 'University of Ottawa',
    period: 'Sep 2022 — Apr 2024',
  },
  {
    degree: 'Bachelor of Engineering',
    field: 'Information Technology',
    school: 'Savitribai Phule Pune University',
    period: 'Aug 2016 — May 2020',
  },
];

export const about = {
  bio: "I thrive at the intersection of engineering and strategy — turning complex, high-stakes problems into systems that scale under pressure and pass the toughest compliance audits. Across banking, telecom, logistics, and cybersecurity, I've partnered with cross-functional teams to architect event-driven platforms, build AI security tooling, and advise stakeholders on risk-aware infrastructure — always with deep domain understanding and full ownership.",
  interests:
    "Beyond the terminal, I enjoy mentoring early-career developers, staying hands-on with emerging cloud-native and AI tooling, and occasionally writing about lessons learned from building systems at scale.",
};

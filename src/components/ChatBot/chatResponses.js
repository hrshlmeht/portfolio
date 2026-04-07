import { personalInfo, socialLinks, experiences, projects, about, education } from '../../data/content';

const responses = [
  {
    // Slash commands
    commands: ['/experience'],
    answer: () =>
      experiences
        .map((e) => `**${e.role}** at ${e.company} (${e.period})\n${e.description.map((d) => `  - ${d}`).join('\n')}`)
        .join('\n\n') + '\n\n*Click on **Experience** in the sidebar to scroll to the full section.*',
  },
  {
    commands: ['/projects'],
    answer: () =>
      projects
        .map((p) => `**${p.title}** — ${p.description}\nTech: ${p.tech.join(', ')}`)
        .join('\n\n') + '\n\n*Click on **Projects** in the sidebar to scroll to the full section.*',
  },
  {
    commands: ['/skills'],
    answer: () => {
      const allTech = [...new Set(projects.flatMap((p) => p.tech))];
      return `Here are some technologies I work with: **${allTech.join(', ')}**. Always exploring new tools and frameworks.`;
    },
  },
  {
    commands: ['/contact'],
    answer: () =>
      `You can reach out via:\n- Email: **${personalInfo.email}**\n- LinkedIn: ${socialLinks.linkedin}\n- GitHub: ${socialLinks.github}\n- DEV: ${socialLinks.devpost}\n\n*Click on **Contact** in the sidebar to scroll to the full section.*`,
  },
  {
    commands: ['/about'],
    answer: () =>
      `${personalInfo.name} is a ${personalInfo.roles[0]} with 4+ years of experience. ${about.bio}\n\n${about.interests}\n\n*Click on **About** in the sidebar to scroll to the full section.*`,
  },
  {
    commands: ['/resume'],
    answer: () =>
      `You can view the resume by clicking **/resume** in the sidebar, or it opens directly as a PDF.`,
  },
  {
    commands: ['/help'],
    answer: () =>
      `Available commands:\n**/experience** — Work history\n**/projects** — Things I've built\n**/skills** — Tech stack\n**/contact** — Get in touch\n**/about** — More about me\n**/resume** — View resume\n\nOr just type a question naturally!`,
  },
  // Natural language fallbacks
  {
    keywords: ['who', 'about', 'yourself', 'introduce', 'tell me about'],
    answer: () =>
      `${personalInfo.name} is a ${personalInfo.roles[0]} with 4+ years of experience. ${about.bio} ${about.interests}`,
  },
  {
    keywords: ['role', 'what do you do', 'job', 'position', 'work as', 'title'],
    answer: () =>
      `Currently working as a **${experiences[0].role}** at ${experiences[0].company}. Previously held roles like ${experiences.slice(1).map((e) => e.role).join(', ')}.`,
  },
  {
    keywords: ['experience', 'work history', 'career', 'companies', 'worked'],
    answer: () =>
      experiences
        .map((e) => `**${e.role}** at ${e.company} (${e.period})\n${e.description.map((d) => `  - ${d}`).join('\n')}`)
        .join('\n\n'),
  },
  {
    keywords: ['project', 'built', 'side project', 'what have you built'],
    answer: () =>
      projects
        .map((p) => `**${p.title}** — ${p.description}\nTech: ${p.tech.join(', ')}`)
        .join('\n\n'),
  },
  {
    keywords: ['skill', 'tech', 'stack', 'language', 'framework', 'tools', 'technologies'],
    answer: () => {
      const allTech = [...new Set(projects.flatMap((p) => p.tech))];
      return `Here are some technologies I work with: **${allTech.join(', ')}**. Always exploring new tools and frameworks.`;
    },
  },
  {
    keywords: ['contact', 'email', 'reach', 'hire', 'connect', 'get in touch'],
    answer: () =>
      `You can reach out via:\n- Email: **${personalInfo.email}**\n- LinkedIn: ${socialLinks.linkedin}\n- GitHub: ${socialLinks.github}\n- DEV: ${socialLinks.devpost}`,
  },
  {
    keywords: ['linkedin'],
    answer: () => `Here's the LinkedIn profile: ${socialLinks.linkedin}`,
  },
  {
    keywords: ['github', 'code', 'repos', 'open source'],
    answer: () => `Check out the GitHub profile: ${socialLinks.github}`,
  },
  {
    keywords: ['resume', 'cv'],
    answer: () =>
      `You can view the resume by clicking **/resume** in the sidebar, or it opens directly as a PDF.`,
  },
  {
    keywords: ['education', 'degree', 'university', 'college', 'school'],
    answer: () =>
      education
        .map((e) => `**${e.degree}** in ${e.field}\n${e.school} (${e.period})`)
        .join('\n\n') + '\n\n*Click on **About** in the sidebar to see the full section.*',
  },
  {
    keywords: ['hobby', 'hobbies', 'interest', 'free time', 'fun'],
    answer: () => about.interests,
  },
  {
    keywords: ['hello', 'hi', 'hey', 'sup', 'yo', 'good morning', 'good evening'],
    answer: () =>
      `Hey there! I'm Harshal's portfolio assistant. Try **/experience**, **/projects**, **/skills**, or **/contact** to explore.`,
  },
  {
    keywords: ['thanks', 'thank', 'cool', 'great', 'awesome', 'nice'],
    answer: () =>
      `Glad I could help! Feel free to ask anything else or reach out via **/contact**.`,
  },
  {
    keywords: ['help', 'commands', 'what can'],
    answer: () =>
      `Available commands:\n**/experience** — Work history\n**/projects** — Things I've built\n**/skills** — Tech stack\n**/contact** — Get in touch\n**/about** — More about me\n**/resume** — View resume\n\nOr just type a question naturally!`,
  },
];

export function getResponse(input) {
  const lower = input.toLowerCase().trim();

  if (!lower) return "Try a command like **/experience** or **/projects** to explore.";

  // Check slash commands first
  for (const r of responses) {
    if (r.commands && r.commands.some((cmd) => lower === cmd || lower === cmd.slice(1))) {
      return r.answer();
    }
  }

  // Then keyword matching
  for (const r of responses) {
    if (r.keywords && r.keywords.some((kw) => lower.includes(kw))) {
      return r.answer();
    }
  }

  return `I'm not sure about that one. Try **/help** to see available commands, or ask about **experience**, **projects**, **skills**, or **contact info**.`;
}

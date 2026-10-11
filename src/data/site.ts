// All site copy lives here so updates don't require touching markup.

export const person = {
  name: 'Abass Sesay',
  role: 'Staff Software Engineer',
  location: 'Philadelphia area',
  email: 'bassco10@gmail.com',
  intro:
    'I build the systems that keep financial platforms safe and compliant — screening, investigations tooling, and the infrastructure underneath them. Currently a Staff Engineer at Block.',
};

export const links = [
  { label: 'GitHub', href: 'https://github.com/bascoe10' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abass-sesay-73046b70/' },
  { label: 'Writing', href: 'https://blog.abass.dev' },
  { label: 'X / Twitter', href: 'https://twitter.com/bascoe10' },
];

export type Role = {
  company: string;
  title: string;
  start: string;
  end: string;
  points: string[];
};

export const experience: Role[] = [
  {
    company: 'Block',
    title: 'Staff Software Engineer',
    start: '2022',
    end: 'Present',
    points: [
      'Tech lead for the migration of Block’s compliance screening platform, integrating external screening networks into a shared entity-screening service.',
      'Built tooling that supports financial-crime investigations, including regulatory filings such as Suspicious Activity Reports.',
      'Led a cross-team migration of multiple business units onto a new case-management platform.',
      'Ran the working group that drove adoption of generative-AI developer tools across the organization.',
    ],
  },
  {
    company: 'Microsoft',
    title: 'Software Engineer II',
    start: '2019',
    end: '2022',
    points: [
      'Built tools to monitor and track Windows servicing and delivery.',
      'Designed build-ETA forecasting from historical build data, and components that auto-approved stages of the build pipeline.',
      'Brought the team in line with security KPIs through upgrade, patching and secure-development policies.',
    ],
  },
  {
    company: 'Comcast',
    title: 'Software Engineer II · co-op to full time',
    start: '2016',
    end: '2019',
    points: [
      'Maintained a Rails application that put an approachable UI over the Nagios monitoring platform.',
      'Migrated infrastructure from OpenStack to AWS and brought CircleCI into deployment, cutting deploy time by more than half.',
      'Led development of monitoring tools for internal applications and mentored junior engineers.',
    ],
  },
];

export type Project = {
  name: string;
  summary: string;
  stack?: string;
  year?: string;
  image?: string;
  links: { label: string; href: string }[];
};

// Newer projects go at the top of this list.
export const projects: Project[] = [
  {
    name: 'Session Saver',
    summary: 'Chrome extension that saves every tab in a window so the whole session can be restored later.',
    stack: 'Chrome extension · JavaScript',
    image: '/img/session-saver.png',
    links: [
      {
        label: 'Chrome Web Store',
        href: 'https://chrome.google.com/webstore/detail/session-saver/lkiecnoahphgdbddphhhhhcihekccggo',
      },
      { label: 'Source', href: 'https://github.com/bascoe10/SessionSaver' },
    ],
  },
  {
    name: 'FootPrint',
    summary: 'Command-line tool that measures how many lines of a git repository each author has contributed.',
    stack: 'Python',
    image: '/img/footprint.png',
    links: [{ label: 'Source', href: 'https://github.com/bascoe10/footprint' }],
  },
  {
    name: 'Beljom',
    // TODO(Abass): confirm this one-line description.
    summary: 'Web platform.',
    image: '/img/beljom.png',
    links: [{ label: 'Visit', href: 'https://www.beljom.com/' }],
  },
];

export const education = [
  { school: 'Drexel University', degree: 'MS, Cybersecurity', year: '2019' },
  { school: 'Drexel University', degree: 'BSc, Computer Science · minor in Business', year: '2017' },
];

export const skills = [
  'Go',
  'Python',
  'TypeScript',
  'Java',
  'C#',
  'Ruby',
  'AWS',
  'Azure',
  'Distributed systems',
  'Compliance & risk platforms',
];

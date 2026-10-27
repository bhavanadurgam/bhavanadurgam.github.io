// ─────────────────────────────────────────────────────────────
//  Edit this file to update the site.
//  Every item still waiting on you is marked  TODO(Bhavana):
//  Search for "TODO(Bhavana)" to find them all.
// ─────────────────────────────────────────────────────────────

export type FolderId = 'work' | 'education' | 'projects' | 'accomplishments' | 'hobbies' | 'contact';

export interface Folder {
  id: FolderId;
  no: string;
  label: string;
  title: string;
  href: string;
  color: string;      // CSS variable name
  ink: string;        // text colour on the folder
  peek: string;       // what's inside (typewriter line)
  teaser: string;     // short hook on the right
  tabX: number;       // tab position across the folder, in %
}

export const site = {
  name: 'Bhavana Durgam',
  url: 'https://bhavanadurgam.github.io',
  role: 'Product Marketing Manager & aspiring PM',
  location: 'Chicago, IL',
  email: 'bhavanadurgam.work@gmail.com',
  tagline: 'Product marketer & aspiring PM who likes building things people *actually* love, then telling the world about them.',
  meta: "Chicago, IL · Northwestern MEM '25 · Open to PM & PMM roles",
  description:
    "Bhavana Durgam is a Product Marketing Manager and aspiring Product Manager in Chicago, Northwestern MEM '25. Work, projects, and the things she loves.",
  socials: {
    linkedin: 'https://www.linkedin.com/in/bhavanadurgam/',
    instagram: 'https://www.instagram.com/bhavanadurgam/',
    instagramHandle: '@bhavanadurgam',
  },
  // TODO(Bhavana): drop your PDFs into public/resumes/ with these exact names,
  // then set ready: true. Until then the buttons say "coming soon".
  resumes: {
    ready: false,
    pm: '/resumes/DurgamBhavana_PM_Resume.pdf',
    pmm: '/resumes/DurgamBhavana_PMM_Resume.pdf',
  },
};

export const folders: Folder[] = [
  { id: 'work', no: '01', label: 'Work', title: 'Work Experience', href: '/work/', color: '--red', ink: '--sheet', peek: 'Salmalita · PatientXpress · Capgemini · Raman Research', teaser: '$100K launch, year one', tabX: 4 },
  { id: 'education', no: '02', label: 'Education', title: 'Education', href: '/education/', color: '--blue', ink: '--sheet', peek: 'Northwestern MEM · BMS College of Engineering', teaser: 'Engineer, then strategist', tabX: 22 },
  { id: 'projects', no: '03', label: 'Projects', title: 'Projects', href: '/projects/', color: '--brown', ink: '--sheet', peek: 'Launches, positioning, research, this very site', teaser: 'Problem → approach → outcome', tabX: 40 },
  { id: 'accomplishments', no: '04', label: 'Accomplishments', title: 'Accomplishments', href: '/accomplishments/', color: '--pink', ink: '--ink', peek: 'Miss India Karnataka 2018 · a 125K community', teaser: 'The proud moments', tabX: 58 },
  { id: 'hobbies', no: '05', label: 'Hobbies', title: 'Hobbies', href: '/hobbies/', color: '--orange', ink: '--ink', peek: 'My bookshelf · painting · singing · content', teaser: 'The fun folder', tabX: 74 },
  { id: 'contact', no: '06', label: 'Contact', title: 'Contact', href: '/contact/', color: '--plum', ink: '--sheet', peek: 'LinkedIn · Instagram · email', teaser: "Let's talk", tabX: 6 },
];

export const marquee = [
  'Product Marketing', 'Positioning', 'Go-to-Market', 'Launches', 'Creator Partnerships', 'Storytelling',
  'Product Strategy', 'User Research', 'Northwestern MEM', 'Medical Electronics', 'Chicago',
];

// "A few things to know about me…" sticky notes. Keep each one short.
export const notes = [
  { icon: '✎', text: 'I read around 50 books a year' },
  { icon: '⌂', text: 'Grew up in Bangalore, India' },
  { icon: '✐', text: 'Volunteer teacher for kids in underserved communities across Bangalore' },
  { icon: '♛', text: 'Miss India title holder' },
  { icon: '✧', text: 'Modelling since I was six' },
  { icon: '♡', text: 'Animal lover and proud dog mom to Nora' },
  { icon: '∞', text: 'A polymath: always learning something new' },
];

export const philosophy = {
  quote: 'I lead my life with empathy and compassion. When you take the time to truly understand someone, you can show up for them in the way they actually need.',
  by: 'How I live',
};

// The "Currently" sticky note on the home page. Add, remove or rename rows freely.
export const currently = [
  { label: 'Reading', value: '“The Party in the Woods” by Fiona McPhillips (ARC) & “When Things Don’t Go Your Way” by Haemin Sunim' },
  { label: 'Obsessed with', value: 'Tate McRae, “Housewife”' },
];

export interface Job {
  role: string;
  company: string;
  place: string;
  dates: string;
  initial: string;
  color: string;
  bullets: string[];
}

export const experience: Job[] = [
  {
    role: 'Product Marketing Manager',
    company: 'Salmalita Cosmetics',
    place: 'Chicago, IL',
    dates: 'Sep 2025 – Present',
    initial: 'S',
    color: '--red',
    bullets: [
      'Took Skin Perfecting Formula, a skincare-powered makeup product, from zero to over $100K in first-year revenue (2,000 units; 100 sales in the first 4 weeks) by defining its positioning, messaging and go-to-market.',
      'Built and managed a creator and affiliate program of 200 partners, expanding reach through Oscar-featured celebrity placements and national campaigns.',
      'Built a base of 100 repeat customers through post-launch engagement, and set up AI marketing workflows for story content, newsletters and trend research.',
    ],
  },
  {
    role: 'Product Management Intern',
    company: 'PatientXpress',
    place: 'Evanston, IL',
    dates: 'Jul 2025 – Aug 2025',
    initial: 'P',
    color: '--blue',
    bullets: [
      'Positioned an AI voice assistant used by 250 dental clinics, each handling 10–50 patient calls a day, through customer interviews and analysis of 3 competing solutions.',
      'Cut customer confusion by 30% by turning research into new messaging and a full website redesign.',
      'Helped onboard 7–8 new clients in 3 months by redesigning onboarding flows with the CEO, CTO and engineers.',
    ],
  },
  {
    role: 'Teaching Assistant',
    company: 'Kellogg School of Management, Northwestern',
    place: 'Evanston, IL',
    dates: '2024 – 2025', // TODO(Bhavana): confirm dates and add the course name
    initial: 'K',
    color: '--plum',
    bullets: ['Supported students in the Master of Engineering Management program.'],
  },
  {
    role: 'Product Quality Lead',
    company: 'Capgemini Technology Services',
    place: 'Bengaluru, India',
    dates: 'Jan 2021 – Jun 2024',
    initial: 'C',
    color: '--brown',
    bullets: [
      "Owned product quality for Meijer's billing, inventory and workforce platforms, including a Starbucks billing integration, leading a 5–7 person team.",
      'Raised test automation coverage from 10% to 90% in one sprint and cut release cycles by 40% with Python, Selenium, Robot Framework and CI/CD.',
      'Identified a $2M healthcare-imaging opportunity, adopted by leadership for go-to-market planning.',
    ],
  },
  {
    role: 'Product Research Intern',
    company: 'Raman Research Institute',
    place: 'Bengaluru, India',
    dates: 'Jan 2019 – Jun 2019',
    initial: 'R',
    color: '--orange',
    bullets: [
      'Improved model accuracy by 31% for a brain-computer interface by turning end-user research into product specifications.',
      'Aligned leadership on next-stage priorities by synthesising user-behaviour data and test results.',
    ],
  },
];

export const education = [
  {
    school: 'Northwestern University',
    degree: 'Master of Engineering Management',
    place: 'Evanston, IL',
    dates: 'Dec 2025',
    initial: 'NU',
    color: '--plum',
    bullets: [
      'Albert H. Rubenstein Memorial Scholarship: merit award, top 3 of 60 admits.',
      'Teaching Assistant, Kellogg School of Management.',
      'President, Lead@NUMEM: designed career programming for 100+ MEM students, including bootcamps and mock interviews.',
      'Voices of Impact storytelling series.', // TODO(Bhavana): one line on your role
    ],
  },
  {
    school: 'BMS College of Engineering',
    degree: 'B.E., Medical Electronics',
    place: 'Bengaluru, India',
    dates: 'Jun 2019',
    initial: 'BMS',
    color: '--red',
    bullets: [
      'Brain-computer interface research at the Raman Research Institute.',
      'Campus Recruitment Lead: drove an 85% placement rate for 60 students and lifted engagement 30%.',
    ],
  },
];

// TODO(Bhavana): add graduation photos to src/assets/photos/ and list them here.
export const gradPolaroids = [
  { caption: 'Northwestern, 2025', tone: '--sky' },
  { caption: 'BMSCE, 2019', tone: '--butter' },
];

export interface Project {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  icon: string;
  color: string;
  problem: string;
  approach: string;
  outcome: string;
  link?: { label: string; href: string };
}

export const projects: Project[] = [
  {
    slug: 'skin-perfecting-formula',
    title: 'Launching Skin Perfecting Formula',
    summary: 'Positioning and go-to-market for a skincare-powered makeup product at Salmalita Cosmetics.',
    tags: ['Launch', 'Positioning', 'GTM'],
    icon: '✦',
    color: '--pink',
    problem: 'A new product in a crowded category, with no audience yet and a small team.',
    approach: 'Defined the positioning and messaging, then ran a creator and affiliate program of 200 partners alongside national campaigns.',
    outcome: 'Over $100K in first-year revenue: 2,000 units, 100 sales in the first 4 weeks, and 100 repeat customers.',
  },
  {
    slug: 'patientxpress',
    title: 'Positioning an AI voice assistant',
    summary: 'Customer research and messaging for an AI receptionist used by 250 dental clinics.',
    tags: ['Research', 'Messaging', 'B2B'],
    icon: '☏',
    color: '--blue',
    problem: 'Clinics were confused about what the product did and why it beat the alternatives.',
    approach: 'Led customer interviews and a competitive analysis of 3 solutions, then rewrote the messaging and redesigned the website.',
    outcome: '30% less customer confusion, and 7–8 new clients onboarded in 3 months.',
  },
  {
    slug: 'amgen-blincyto',
    title: 'Amgen BLINCYTO: go or no-go?',
    summary: 'Northwestern project: US market sizing, competitor analysis and a risk-adjusted NPV.',
    tags: ['Strategy', 'Market sizing', 'Finance'],
    icon: '◎',
    color: '--red',
    problem: 'Should the product push for deeper US market penetration?',
    approach: 'Sized the US market, mapped competitors, and built a scope, cost, schedule and risk analysis.',
    outcome: 'A risk-adjusted NPV that rolled every finding into one GO/NO-GO recommendation.',
  },
  {
    slug: 'zero-footprint-viewer',
    title: 'A $2M go-to-market finding',
    summary: 'Market research on web-based medical image viewers for hospitals, at Capgemini.',
    tags: ['Healthcare', 'GTM', 'Research'],
    icon: '✚',
    color: '--brown',
    problem: 'Hospitals needed medical images without installing heavy viewing software.',
    approach: 'Compared PACS with zero-footprint viewers, mapped competitors, and defined a go-to-market for hospitals.',
    outcome: 'Identified a $2M revenue opportunity that leadership adopted for go-to-market planning.',
  },
  {
    slug: 'brain-computer-interface',
    title: 'Brain–computer interface research',
    summary: 'Turning brain signals into computer commands at the Raman Research Institute.',
    tags: ['Research', 'Engineering'],
    icon: '☊',
    color: '--orange',
    problem: 'A motor-imagery BCI was not accurate enough to be usable.',
    approach: 'Ran structured user sessions and turned end-user research into product specifications.',
    outcome: 'Model accuracy improved by 31%, and leadership aligned on next-stage priorities.',
  },
  {
    slug: 'this-portfolio',
    title: 'This portfolio',
    summary: 'PRD → Figma wireframes → a fast, folder-themed website.',
    tags: ['Product', 'Design', 'Web'],
    icon: '❒',
    color: '--plum',
    problem: 'Most PM portfolios read like a résumé in a different font.',
    approach: 'Wrote a PRD, wireframed it, and built it with Astro: real pages for Google, folders that open, a bookshelf you can pull books from.',
    outcome: 'A portfolio that is also a work sample: requirements, design and a shipped product.',
    link: { label: 'You are here ✦', href: '/' },
  },
];

export const accomplishments = [
  {
    no: '01',
    title: 'Femina Miss India Karnataka 2018',
    org: 'Femina Miss India · 2018 · Top 10 nationally, Miss Beauty with a Purpose',
    summary:
      'Raised $11K in 3 weeks and hosted awareness camps in underserved communities on education, hygiene, breast cancer and menstrual health, reaching 5,000 people.',
    photos: ['Crowning', 'Awareness camp', 'Finale'], // TODO(Bhavana): add photos
  },
  {
    no: '02',
    title: 'Content creator, model & actor',
    org: 'Instagram · YouTube · TikTok · 2018 – present',
    summary:
      'Grew a cross-platform community from 40K to 125K through data-driven content experiments and audience research, alongside modelling and acting work.',
    photos: ['On set', 'Campaign', 'Reel'], // TODO(Bhavana): add photos or video thumbnails
  },
];

export const hobbies = [
  { no: '01', title: 'My Bookshelf', href: '/hobbies/bookshelf/', copy: 'Top 3, the year’s reads, and a shelf you can pull books from.', color: '--red', peek: '--butter', icon: '📚' },
  { no: '02', title: 'Painting', href: '/hobbies/painting/', copy: 'Acrylics, watercolour and a lot of happy accidents.', color: '--blue', peek: '--pink', icon: '🎨' },
  { no: '03', title: 'Singing', href: '/hobbies/singing/', copy: 'A few recordings, pressed onto imaginary cassettes.', color: '--plum', peek: '--sky', icon: '🎙' },
  { no: '04', title: 'Content Creation', href: '/hobbies/content/', copy: 'Reels, stories and a 125K community.', color: '--brown', peek: '--orange', icon: '🎬' },
];

export interface Book {
  title: string;
  author: string;
  color: string;      // spine colour (hex)
  textColor: string;
  rating: number;     // 1–5
  review: string;
  year: number;
  top3?: 1 | 2 | 3;
  style?: 'serif' | 'sans' | 'type';
  w?: number;         // spine width px
  h?: number;         // spine height px
  lean?: number;      // degrees
}

// TODO(Bhavana): replace with your real list, ratings and one-line reviews.
export const books: Book[] = [
  { title: 'Obviously Awesome', author: 'April Dunford', color: '#C8202F', textColor: '#FBF8F2', rating: 5, review: 'Positioning finally made clear.', year: 2026, top3: 1, style: 'sans', w: 52, h: 262 },
  { title: 'The Mom Test', author: 'Rob Fitzpatrick', color: '#F3D35B', textColor: '#3A1E12', rating: 5, review: 'Read before every customer interview.', year: 2026, top3: 2, style: 'type', w: 38, h: 228 },
  { title: 'Tomorrow, and Tomorrow, and Tomorrow', author: 'Gabrielle Zevin', color: '#3D78BC', textColor: '#FBF8F2', rating: 5, review: 'A love letter to making things together.', year: 2026, top3: 3, style: 'serif', w: 58, h: 280 },
  { title: 'Inspired', author: 'Marty Cagan', color: '#4A2516', textColor: '#F3D35B', rating: 4, review: 'How strong product teams actually work.', year: 2026, style: 'sans', w: 44, h: 250 },
  { title: 'Building a StoryBrand', author: 'Donald Miller', color: '#E9849F', textColor: '#3A1E12', rating: 4, review: 'Make the customer the hero.', year: 2026, style: 'serif', w: 46, h: 238, lean: -6 },
  { title: 'Atomic Habits', author: 'James Clear', color: '#FBF8F2', textColor: '#3A1E12', rating: 4, review: 'Small systems over big goals.', year: 2026, style: 'type', w: 40, h: 214 },
  { title: 'Crossing the Chasm', author: 'Geoffrey Moore', color: '#5B2A86', textColor: '#FBF8F2', rating: 4, review: 'Why early adopters aren’t the mainstream.', year: 2026, style: 'serif', w: 50, h: 270 },
  { title: 'Contagious', author: 'Jonah Berger', color: '#E8622A', textColor: '#FBF8F2', rating: 4, review: 'A checklist before any campaign.', year: 2026, style: 'sans', w: 66, h: 222 },
  { title: 'The Midnight Library', author: 'Matt Haig', color: '#1F3A5F', textColor: '#CFE0F5', rating: 4, review: 'Gentle and hopeful.', year: 2026, style: 'serif', w: 36, h: 244 },
  { title: 'Shape Up', author: 'Ryan Singer', color: '#CFE0F5', textColor: '#3A1E12', rating: 4, review: 'Appetite over estimates.', year: 2026, style: 'type', w: 34, h: 206 },
  { title: 'Range', author: 'David Epstein', color: '#F3D35B', textColor: '#C8202F', rating: 5, review: 'For every generalist who switched fields.', year: 2026, style: 'sans', w: 56, h: 258, lean: 5 },
  { title: 'Never Split the Difference', author: 'Chris Voss', color: '#3A1E12', textColor: '#E9849F', rating: 4, review: 'Tactical empathy, surprisingly useful.', year: 2026, style: 'sans', w: 48, h: 236 },
];

// TODO(Bhavana): add painting photos to src/assets/photos/ and list them here.
export const paintings = [
  { title: 'Monsoon Study', medium: 'Acrylic on canvas', year: 2024, art: 'linear-gradient(160deg,#3D78BC,#CFE0F5 55%,#5B8A7E)' },
  { title: 'Marigold', medium: 'Watercolour', year: 2023, art: 'radial-gradient(circle at 45% 45%,#F3D35B,#E8622A 55%,#4A2516)' },
  { title: 'Lake Michigan, Dusk', medium: 'Acrylic on canvas', year: 2025, art: 'linear-gradient(180deg,#E9849F 0 40%,#5B2A86 40% 42%,#1F3A5F 42%)' },
  { title: 'Bloom', medium: 'Acrylic on paper', year: 2024, art: 'radial-gradient(circle at 50% 55%,#FBF8F2 0 12%,#E9849F 13% 38%,#C8202F 39%)' },
  { title: 'Rooftops', medium: 'Gouache', year: 2022, art: 'linear-gradient(0deg,#4A2516 0 30%,#E8622A 30% 34%,#F3D35B 34%)' },
];

// TODO(Bhavana): put MP3s in public/audio/ and set `src`, or add a link.
export const songs = [
  { title: 'Cover No. 1', note: 'Recording coming soon', src: '', link: '', color: '--pink' },
  { title: 'Cover No. 2', note: 'Recording coming soon', src: '', link: '', color: '--butter' },
  { title: 'Cover No. 3', note: 'Recording coming soon', src: '', link: '', color: '--sky' },
];

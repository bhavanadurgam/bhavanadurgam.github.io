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
  role: 'Product Manager with product marketing experience',
  location: 'Chicago, IL',
  email: 'bhavanadurgam.work@gmail.com',
  tagline: 'Biomedical engineer turned product manager, with product marketing experience, who builds things people *actually* love.',
  meta: "Chicago, IL · Northwestern MEM (Technical MBA) · Open to PM & PMM opportunities",
  description:
    "Bhavana Durgam is a biomedical engineer turned Product Manager with product marketing experience, based in Chicago. Master of Engineering Management (Technical MBA), Northwestern University. Open to PM and PMM opportunities.",
  socials: {
    linkedin: 'https://www.linkedin.com/in/bhavanadurgam/',
    instagram: 'https://www.instagram.com/bhavana.durgam/',
    instagramHandle: '@bhavana.durgam',
  },
};

// Homepage "Hello, I'm Bhavana!" card. TODO(Bhavana): edit these two paragraphs in your own words.
export const about = [
  "I'm a biomedical engineer turned product manager, based in Chicago. I love figuring out what people actually need, building the product that solves it, and making sure the world hears about it. Along the way I've picked up hands-on product marketing experience too: positioning, go-to-market launches, creator partnerships and the user research underneath it all.",
  "I graduated with a Master of Engineering Management (a technical MBA) from Northwestern University, so I'm happiest where engineering, strategy and storytelling meet. I'm open to PM and PMM opportunities, new collaborations and, always, a good book recommendation.",
];

export const folders: Folder[] = [
  { id: 'work', no: '01', label: 'Work', title: 'Work Experience', href: '/work/', color: '--plum', ink: '--sheet', peek: 'Salmalita · PatientXpress · Capgemini · Raman Research', teaser: '$100K launch, year one', tabX: 4 },
  { id: 'education', no: '02', label: 'Education', title: 'Education', href: '/education/', color: '--rose', ink: '--ink', peek: 'Northwestern MEM (Technical MBA) · BMS College of Engineering', teaser: 'Biomedical engineer → technical MBA', tabX: 22 },
  { id: 'projects', no: '03', label: 'Projects', title: 'Projects', href: '/projects/', color: '--lime', ink: '--ink', peek: 'Launches, positioning, research, this very site', teaser: 'Problem → approach → outcome', tabX: 40 },
  { id: 'accomplishments', no: '04', label: 'Accomplishments', title: 'Accomplishments', href: '/accomplishments/', color: '--plum-deep', ink: '--sheet', peek: 'Miss India Karnataka 2018 · model & actor · 125K creator', teaser: 'Crowns, cameras & content', tabX: 58 },
  { id: 'hobbies', no: '05', label: 'Hobbies', title: 'Hobbies', href: '/hobbies/', color: '--rose', ink: '--ink', peek: 'Reading · painting · music · content', teaser: 'The fun folder', tabX: 74 },
  { id: 'contact', no: '06', label: 'Contact', title: 'Contact', href: '/contact/', color: '--lime', ink: '--ink', peek: 'LinkedIn · Instagram · email', teaser: "Let's talk", tabX: 6 },
];

export const marquee = [
  'Product Strategy', 'Roadmapping', 'User Research', 'A/B Testing', 'Competitive Intelligence', 'Go-to-Market',
  'Positioning', 'Product Launches', 'Product Marketing', 'Messaging', 'Creator Partnerships', 'Storytelling',
];

// "A few things to know about me…" polaroids. Keep each caption short.
// To add a photo: put it in public/photos/notes/ and add  photo: '/photos/notes/your-file.jpg'
export const notes: { icon: string; text: string; photo?: string }[] = [
  { icon: '✎', text: 'Bookworm: I read around 50 books a year', photo: '/photos/notes/books.jpg' },
  { icon: '⌂', text: 'Born and raised in Bangalore, now at home in Chicago', photo: '/photos/notes/bangalore.jpg' },
  { icon: '✐', text: 'Volunteer teacher for kids in underserved schools in Bangalore', photo: '/photos/notes/teaching.jpg' },
  { icon: '♛', text: 'Femina Miss India Karnataka 2018 and Top 10 at Miss India', photo: '/photos/notes/miss-india.jpg' },
  { icon: '✧', text: 'Model and actor since I was six', photo: '/photos/notes/modelling.jpg' },
  { icon: '♡', text: 'Animal lover and proud dog mom to Nora', photo: '/photos/notes/nora.jpg' },
  { icon: '∞', text: 'Polymath: always learning something new', photo: '/photos/notes/polymath.jpg' },
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
  logo: string;       // file name in src/assets/logos/
  color: string;
  tags: string[];     // what the role was about, shown as chips
  bullets: string[];  // Google XYZ: "Accomplished **[X]**, measured by [Y], by doing [Z]". **bold** = the result.
}

// Headline numbers for the Work page, all taken from the bullets below.
export const impact = [
  { value: '$100K+', label: 'first-year revenue from a product I took from 0 to 1', trait: 'Ships 0 → 1' },
  { value: '250', label: 'dental clinics using the AI voice product I shaped', trait: 'Customer-obsessed' },
  { value: '30%', label: 'less customer confusion after my research-led PRDs', trait: 'Data-led' },
  { value: '40%', label: 'faster release cycles from automation I built', trait: 'Technical depth' },
];

export const experience: Job[] = [
  {
    role: 'Product Manager',
    company: 'Salmalita Cosmetics',
    place: 'Chicago, IL',
    dates: 'Sep 2025 – Present',
    logo: 'salmalita',
    color: '--plum',
    tags: ['0 → 1 launch', 'Vision & roadmap', 'KPIs', 'Go-to-market'],
    bullets: [
      'Launched Skin Perfecting Formula from concept to **over $100K in first-year revenue** (2,000 units, 100 sales in the first 4 weeks) by owning the product vision, roadmap and requirements end to end, reporting to the CEO and CMO on a 5-person team.',
      'Validated **product-market fit and a data-backed roadmap**, measured against the acquisition, retention and engagement KPIs I defined, by analysing 200 customer, creator and retail touchpoints and A/B testing messaging and branding.',
      'Grew reach to **a 200+ creator and affiliate network**, including Oscar-featured celebrity placements, and opened talks with med spas across Chicago and its suburbs, by designing the go-to-market, positioning and channel strategy.',
      'Saved the team **15–20 hours a week per automation** by building AI workflows for story content, newsletter production and market-trend research.',
    ],
  },
  {
    role: 'Product Management Intern',
    company: 'PatientXpress',
    place: 'Evanston, IL',
    dates: 'Jul 2025 – Aug 2025',
    logo: 'patientxpress',
    color: '--plum',
    tags: ['AI product', 'Healthcare', 'Discovery', 'PRDs'],
    bullets: [
      'Defined **the product strategy and roadmap for an AI voice assistant used by 250 dental clinics**, each handling 10–50 patient calls a day, by running user interviews and a competitive analysis of 3 solutions.',
      'Reduced **customer confusion by 30%** and helped onboard **7–8 new clients in 3 months** by writing PRDs and redesigning onboarding flows with the CEO, CTO and engineering team.',
      'Improved **product clarity and sales readiness** by turning customer research into positioning that shaped a full website redesign.',
    ],
  },
  {
    role: 'Product Quality Lead',
    company: 'Capgemini Technology Services',
    place: 'Bengaluru, India',
    dates: 'Jan 2021 – Jun 2024',
    logo: 'capgemini',
    color: '--plum-deep',
    tags: ['Enterprise platforms', 'Team lead', 'Automation', 'Healthcare GTM'],
    bullets: [
      'Owned **product quality for Meijer’s billing, inventory and workforce-management platforms** across stores in multiple US states, including a Starbucks billing integration, by leading a 5–7 person QA team and defining the test strategy.',
      'Cut **release cycles by 40%** and raised **test automation coverage from 10% to 90% in one sprint** by building QA frameworks with Python, Selenium, Robot Framework and CI/CD pipelines.',
      'Reduced **post-release defects by 35%** by partnering with product managers and engineers on root-cause analysis and upstream requirement and release decisions.',
      'Identified **a $2M opportunity for a zero-footprint medical imaging viewer**, adopted by leadership for go-to-market planning, by leading the market research, competitive analysis and strategy.',
    ],
  },
  {
    role: 'Product Research Intern',
    company: 'Raman Research Institute',
    place: 'Bengaluru, India',
    dates: 'Jan 2019 – Jun 2019',
    logo: 'raman',
    color: '--plum',
    tags: ['Healthcare tech', 'User research', 'Specs'],
    bullets: [
      'Improved **model accuracy by 31%** for a brain-computer interface (a system that turns brain signals into computer commands) by translating end-user research into product specifications.',
      'Aligned **leadership on next-stage development priorities** for the platform by synthesising user-behaviour data and test results from structured user sessions.',
    ],
  },
];

export const education = [
  {
    school: 'Northwestern University',
    degree: 'Master of Engineering Management (Technical MBA)',
    place: 'Evanston, IL',
    dates: 'Dec 2025',
    logo: 'northwestern',
    color: '--plum',
    tags: ['Technical MBA', 'Rubenstein Scholar', 'Kellogg TA', 'Lead@NUMEM President'],
    photo: { src: 'northwestern', caption: 'Northwestern, 2025', alt: 'Bhavana Durgam in her purple graduation gown under the Northwestern arch' },
    bullets: [
      'Albert H. Rubenstein Memorial Scholarship: **merit award, top 3 of 60 admits**.',
      'Teaching Assistant at the **Kellogg School of Management** (Mar 2026 – present) for MBA courses in Marketing Management, Business Strategy and Negotiations: I run case discussions, keep class participation high, answer student questions and act as the link between students and professors.',
      'President, Lead@NUMEM: designed **career programming for 100+ MEM students**, including bootcamps and mock interviews.',
    ],
  },
  {
    school: 'BMS College of Engineering',
    degree: 'B.E., Medical Electronics',
    place: 'Bengaluru, India',
    dates: 'Jun 2019',
    logo: 'bms',
    color: '--plum-deep',
    tags: ['Biomedical engineering', 'Class President', 'Recruitment Lead'],
    photo: { src: 'bms', caption: 'BMSCE, with my parents', alt: 'Bhavana Durgam holding her Bachelor of Engineering certificate with her parents' },
    bullets: [
      'Department Recruitment Lead: drove **an 85% placement rate for 60 students** and lifted engagement 30%.',
      '**Class President** for the Medical Electronics class.',
    ],
  },
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
    color: '--plum',
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
    color: '--plum-deep',
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
    color: '--plum',
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
    color: '--plum-deep',
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
    color: '--plum',
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
    color: '--plum-deep',
    problem: 'Most PM portfolios read like a résumé in a different font.',
    approach: 'Wrote a PRD, wireframed it, and built it with Astro: real pages for Google, folders that open, a bookshelf you can pull books from.',
    outcome: 'A portfolio that is also a work sample: requirements, design and a shipped product.',
    link: { label: 'You are here ✦', href: '/' },
  },
];

// ── Accomplishments: Miss India, and Model & Actor ──────────
// Images live in src/assets/acc/, src/assets/press/ and src/assets/videos/ (named by YouTube id).

export const missIndia = {
  titles: [
    { title: 'Femina Miss India Karnataka', year: '2018', note: 'Crowned at fbb Colors Femina Miss India South' },
    { title: 'Top 10, Femina Miss India', year: '2018', note: 'Represented Karnataka at the national finale' },
    { title: 'Miss Goodness Ambassador', year: '2018', note: 'For my social and volunteering work' },
    { title: 'Top 10, Beauty with a Purpose', year: '2018', note: 'For my project bringing education to underserved communities' },
  ],
  // **bold** = the result
  work: [
    'Raised **$11K in 3 weeks** to improve schools in underserved communities by running a crowdfunding campaign with Ketto.',
    'Reached **5,000 people** by hosting awareness camps on education, hygiene, breast cancer and menstrual health across Karnataka (mainly Bengaluru) and Andhra Pradesh.',
    'Earned **Miss Goodness Ambassador 2018** and a **Top 10 Beauty with a Purpose** finish for this work.',
    'Celebrated **World Health Day with school children**, covered in the Kannada and Tamil press.',
  ],
  press: [
    { outlet: 'The Hindu', date: 'Apr 2018', title: 'Tirupati-born ‘Miss Karnataka’ now eyes ‘Miss India’ crown', url: 'https://www.thehindu.com/news/national/andhra-pradesh/tirupati-born-miss-karnataka-now-eyes-miss-india-crown/article23437926.ece', img: 'press/hindu' },
    { outlet: 'Femina', date: 'Mar 2018', title: '‘I always wanted to be a beauty queen’', url: 'https://www.femina.in/beauty-pageants/miss-india/i-always-wanted-to-be-a-beauty-queen/articleshow/63285397.cms', img: 'press/femina2' },
    { outlet: 'Femina', date: '2018', title: 'Interesting facts about Bhavana Durgam', url: 'https://www.femina.in/beauty-pageants/miss-india/interesting-facts-about-bhavana-durgam/eventshow/63201192.cms', img: 'acc/missindia/portrait' },
    { outlet: 'The Kaleidoscope of Pageantry', date: 'Feb 2018', title: 'Bhavana Durgam crowned Femina Miss India Karnataka 2018', url: 'https://tkoip.wordpress.com/2018/02/24/bhavana-durgam-crowned-femina-miss-india-karnataka-2018/', img: 'press/tkoip' },
    { outlet: 'Whosthat360', date: 'Oct 2023', title: 'Bhavana Durgam: mastering influencer life, balancing act and positivity', url: 'https://www.whosthat360.com/motivation-and-self-help/bhavana-durgam-mastering-influencer-life-balancing-act-and-positivity-4467768', img: 'acc/missindia/fbb-event' },
    { outlet: 'Times of India photo archive', date: 'Mar 2018', title: 'International Women’s Day feature', url: 'https://timescontent.timesgroup.com/photo/feature/international-women%27s-day/566504', img: 'acc/missindia/crowned' },
  ],
  clippings: [
    { img: 'top-brands', outlet: 'Deccan Chronicle', date: 'Mar 2018', title: 'Top brands queue up for Tirupati girl' },
    { img: 'women-power', outlet: 'Deccan Chronicle', date: 'Mar 2018', title: 'Women power on the right track' },
    { img: 'tirupati-telugu', outlet: 'Telugu daily', date: 'Apr 2018', title: 'Miss Karnataka @ Tirupati' },
    { img: 'mana-tirupati', outlet: 'Telugu daily', date: 'Apr 2018', title: '“Mana Tirupati ammayi”: our Tirupati girl' },
    { img: 'health-day-kannada', outlet: 'Kannada daily', date: 'Apr 2018', title: 'World Health Day with school children' },
    { img: 'health-day-tamil', outlet: 'Tamil daily', date: 'Apr 2018', title: 'World Health Day' },
    { img: 'bangalore-times', outlet: 'Bangalore Times', date: 'Jul 2019', title: 'Bangalore Times feature' },
    { img: 'food-nightlife-awards', outlet: 'Bangalore Times', date: 'Apr 2021', title: 'Presenting at the Times Food & Nightlife Awards' },
  ],
  videos: [
    { id: '8tuPedoNS2M', title: 'Introducing Femina Miss India Karnataka 2018, Bhavana Durgam' },
    { id: 'N32j8HZjhxE', title: 'Miss India South 2018: the crowning moments' },
  ],
  photos: [
    { img: 'crowned', caption: 'Crowned Miss India Karnataka', pos: '50% 30%' },
    { img: 'finale-1', caption: 'Miss India finale', pos: '50% 25%' },
    { img: 'goodness-ambassador', caption: 'Miss Goodness Ambassador', pos: '50% 50%' },
    { img: 'fbb-event', caption: 'Miss India 2018 events', pos: '62% 40%' },
    { img: 'finale-2', caption: 'On the national stage', pos: '50% 25%' },
    { img: 'portrait', caption: 'Official portrait', pos: '50% 20%' },
  ],
};

export const modelling = {
  intro: 'I’ve been in front of the camera since I was six: countless print, TV, billboard and ramp campaigns for brands across jewellery, fashion, tech and food, from Bhima Jewellers, Malabar Gold and Canon to Redmi, Myntra and Ajio. On the ramp, I’ve been a showstopper and a model for many of India’s major designers, including at Bangalore Times Fashion Week. I’ve also acted in a Telugu feature film, The Story of a Beautiful Girl.',
  // One ad per brand (Redmi's three are one campaign).
  ads: [
    { brand: 'Canon', id: 'nwY3eX4oweM', title: 'Capturing the bride on the EOS R5' },
    { brand: 'Redmi × Google Lens', id: '9tcEk3m83VE', title: 'Saving notes made simple' },
    { brand: 'Redmi × Google Lens', id: 'LG5p4rtmF-k', title: 'Translation made simple' },
    { brand: 'Redmi × Google Lens', id: 'wZYo8WxFUgE', title: 'Homework made simple' },
    { brand: 'Crispy Day', id: '3GFa7tzjTOc', title: 'Masalas for a delicious, happy meal' },
  ],
  more: { brand: 'MTR', title: 'MTR digital TVC', url: 'https://www.instagram.com/p/CHcFTnlp9Dr/', where: 'Instagram' },
  campaigns: [
    { img: 'bhima-brilliance', caption: 'Bhima Jewellers', pos: '50% 40%' },
    { img: 'pothys-billboard', caption: 'Pothys', pos: '50% 50%' },
    { img: 'canon-print', caption: 'Canon', pos: '50% 20%' },
    { img: 'bhima-billboard', caption: 'Bhima Jewellers', pos: '50% 50%' },
    { img: 'ramp-1', caption: 'Bangalore Times Fashion Week', pos: '50% 35%' },
    { img: 'ramp-2', caption: 'Bangalore Times Fashion Week', pos: '50% 35%' },
    { img: 'ramp-3', caption: 'Bangalore Times Fashion Week', pos: '50% 35%' },
  ],
};

export const creator = {
  niche: ['Lifestyle', 'Wellness'],
  platforms: [
    { name: 'Instagram', handle: '@bhavana.durgam', url: 'https://www.instagram.com/bhavana.durgam/', count: '122K followers' },
    { name: 'YouTube', handle: '@Bhavana.durgam', url: 'https://www.youtube.com/@Bhavana.durgam' },
    { name: 'TikTok', handle: '@bhavana_durgam', url: 'https://www.tiktok.com/@bhavana_durgam' },
  ],
  story: [
    'I started creating in 2020, during COVID, as a way to cope with my anxiety. I talked openly about how I was handling my mental health, one honest post at a time, and people related. What started as my own coping tool grew into a community.',
    'Today I create lifestyle and wellness content on Instagram, YouTube and TikTok for a community of around 125K, about wellness and the life in between.',
  ],
  // What creating taught me, in product terms. **bold** = the takeaway.
  lessons: [
    'Grew **from about 40K to 125K followers** across Instagram, YouTube and TikTok by treating every post as an experiment: testing hooks, formats and timing, and keeping what worked.',
    'Learned **to understand what an audience actually wants** by reading comments, DMs and analytics as user research, then shaping content around it.',
    'Built **a content strategy, not just posts**: a clear niche, consistent pillars and a plan for what to make next.',
  ],
};

export const hobbies = [
  { no: '01', title: 'Reading', label: 'My bookshelf', href: '/hobbies/bookshelf/' },
  { no: '02', title: 'Painting', label: 'My paintings', href: '/hobbies/painting/' },
  { no: '03', title: 'Music', label: 'On my playlist', href: '/hobbies/singing/' },
  { no: '04', title: 'Content creation', label: 'My creator story', href: '/accomplishments/#creator' },
];

export interface Book {
  title: string;
  author: string;
  cover: string;      // file name (without .jpg) in src/assets/books/
  color: string;      // spine colour, picked from the cover
  textColor: string;  // spine text colour
  rating: number;     // out of 5; halves and quarters are fine (4.5, 3.25)
  review: string;
  style?: 'serif' | 'sans' | 'type';
  w?: number;         // spine width px (30–70)
  h?: number;         // spine height px (200–290)
  lean?: number;      // tilt in degrees
}

export interface FavouriteBook {
  title: string;
  author: string;
  cover: string;
  review: string;
}

// To add a book: put its cover in src/assets/books/ (e.g. my-new-book.jpg) and add a line below.
export const readingYear = 2026;
export const readingGoal = 25;

export const top3: FavouriteBook[] = [
  { title: "Shoe Dog", author: "Phil Knight", cover: "shoe-dog",
    review: "Phil Knight's raw, honest story of building Nike from a borrowed $50 into a global brand. It first opened my eyes to entrepreneurship, brand building and what real grit looks like." },
  { title: "Educated", author: "Tara Westover", cover: "educated",
    review: "A memoir of a girl raised off the grid in rural Idaho who never set foot in a classroom until 17, and went on to earn a PhD from Cambridge. It's close to my heart because it showed me how much of a privilege education truly is." },
  { title: "Harry Potter (series)", author: "J.K. Rowling", cover: "harry-potter-and-the-sorcerers-stone",
    review: "A boy discovers he's a wizard and finds his place in a world of magic, friendship and courage. Everyone needs to read this series at least once." },
];

export const books: Book[] = [
  { title: "Final Girls", author: "Riley Sager", cover: "final-girls", color: '#FB1515', textColor: '#3A1E12', rating: 3, style: 'sans', w: 39, h: 259,
    review: "A massacre survivor is dragged back into her past when another \"final girl\" dies. Gripping, but I called the ending from page one." },
  { title: "Ariadne", author: "Jennifer Saint", cover: "ariadne", color: '#AE3727', textColor: '#FBF8F2', rating: 4.5, style: 'type', w: 44, h: 228, lean: -6,
    review: "A beautiful retelling of the Minotaur myth from the Cretan princess's point of view. The ending made me cry." },
  { title: "This Immortal Heart", author: "Jennifer Saint", cover: "this-immortal-heart", color: '#500233', textColor: '#FBF8F2', rating: 4.5, style: 'serif', w: 49, h: 281,
    review: "Aphrodite finally tells her own story, and it's so refreshing. I loved every page." },
  { title: "The Only One Left", author: "Riley Sager", cover: "the-only-one-left", color: '#111230', textColor: '#FBF8F2', rating: 4, style: 'sans', w: 54, h: 250,
    review: "A caregiver moves in with an elderly woman accused of killing her family decades ago. Addictive, though the ending packs in too much at once." },
  { title: "Lock Every Door", author: "Riley Sager", cover: "lock-every-door", color: '#2E0F0D', textColor: '#FBF8F2', rating: 5, style: 'serif', w: 59, h: 219, lean: 5,
    review: "An apartment sitter learns why an exclusive New York building has such strict rules. I finished it in a day and my mind was blown." },
  { title: "Strangers: A Memoir of Marriage", author: "Belle Burden", cover: "strangers-a-memoir-of-marriage", color: '#F9EFDD', textColor: '#3A1E12', rating: 4, style: 'sans', w: 64, h: 272,
    review: "A heartbreaking memoir of a marriage that ends without warning. A powerful reminder for women to stay financially independent and mentally strong." },
  { title: "Count My Lies", author: "Sophie Stava", cover: "count-my-lies", color: '#050C0D', textColor: '#FBF8F2', rating: 3.25, style: 'type', w: 37, h: 241,
    review: "A compulsive liar becomes a nanny for a wealthy family. An intriguing premise, but the ending didn't land for me." },
  { title: "Home Before Dark", author: "Riley Sager", cover: "home-before-dark", color: '#051605', textColor: '#FBF8F2', rating: 4, style: 'serif', w: 42, h: 210,
    review: "A woman returns to the house her father made famous in a bestselling horror memoir. It gave me goosebumps, and I was scared to be home alone." },
  { title: "Anatomy of an Alibi", author: "Ashley Elston", cover: "anatomy-of-an-alibi", color: '#062B13', textColor: '#FBF8F2', rating: 3, style: 'sans', w: 47, h: 263, lean: -5,
    review: "A twisty thriller about a murder and the alibi that binds two women together. A clever concept, but the execution fell a little short." },
  { title: "Yesteryear", author: "Caro Claire Burke", cover: "yesteryear", color: '#C89751', textColor: '#3A1E12', rating: 4, style: 'serif', w: 52, h: 232,
    review: "A tradwife influencer wakes up actually living in the 1800s. A sharp look at how blurry the line is between real life and the life we perform online." },
  { title: "The Assistants", author: "Camille Perri", cover: "the-assistants", color: '#EF4E60', textColor: '#3A1E12', rating: 2, style: 'sans', w: 57, h: 285,
    review: "An executive assistant gets swept into a scheme to pay off her student loans. This one just wasn't for me." },
  { title: "The Last Time I Lied", author: "Riley Sager", cover: "the-last-time-i-lied", color: '#07142B', textColor: '#FBF8F2', rating: 5, style: 'type', w: 62, h: 254, lean: -6,
    review: "A woman returns to the summer camp where her three friends vanished fifteen years ago. So vivid it felt like watching a movie." },
  { title: "Two Can Play", author: "Ali Hazelwood", cover: "two-can-play", color: '#100CF4', textColor: '#FBF8F2', rating: 4, style: 'serif', w: 35, h: 223,
    review: "A cute, fun enemies-to-lovers romance. I'm a sucker for a good love story." },
  { title: "Hot Girl Murder Club", author: "Ashley Winstead", cover: "hot-girl-murder-club", color: '#30100C', textColor: '#FBF8F2', rating: 5, style: 'sans', w: 40, h: 276,
    review: "Badass women, murder and so much drama. I loved the ending." },
  { title: "Archie Comics Spectacular: School Daze", author: "Archie Comics", cover: "archie-comics-spectacular-school-daze", color: '#8D8D96', textColor: '#3A1E12', rating: 5, style: 'serif', w: 45, h: 245, lean: 5,
    review: "The Riverdale gang's classic school-day adventures. Who doesn't love Archie?" },
  { title: "My Husband's Wife", author: "Alice Feeney", cover: "my-husbands-wife", color: '#033235', textColor: '#FBF8F2', rating: 5, style: 'sans', w: 50, h: 214,
    review: "A twisty thriller about a marriage built on secrets. I was reeling for a week and never guessed who did what, or why." },
  { title: "Not Quite Dead Yet", author: "Holly Jackson", cover: "not-quite-dead-yet", color: '#160B2F', textColor: '#FBF8F2', rating: 5, style: 'type', w: 55, h: 267,
    review: "After a brutal attack, a woman has seven days to live and solve her own murder. What a premise, and I loved every twist." },
  { title: "The Inheritance Games", author: "Jennifer Lynn Barnes", cover: "the-inheritance-games", color: '#326E53', textColor: '#FBF8F2', rating: 5, style: 'serif', w: 60, h: 236,
    review: "A teenager inherits a stranger's billion-dollar fortune and must solve his puzzles to learn why. Mystery and intrigue that kept me hooked." },
  { title: "Beautiful Ugly", author: "Alice Feeney", cover: "beautiful-ugly", color: '#11354D', textColor: '#FBF8F2', rating: 3, style: 'sans', w: 65, h: 289, lean: -5,
    review: "A grieving writer retreats to a remote Scottish island after his wife disappears. Atmospheric, but a pass for me." },
  { title: "Archie Giant Comics Collection", author: "Archie Comics", cover: "archie-giant-comics-collection", color: '#F9941A', textColor: '#3A1E12', rating: 4, style: 'serif', w: 38, h: 258,
    review: "A bumper collection of classic Archie stories. Nothing beats a good old comic book." },
  { title: "The Wedding People", author: "Alison Espach", cover: "the-wedding-people", color: '#E4CAB0', textColor: '#3A1E12', rating: 5, style: 'sans', w: 43, h: 227,
    review: "Two strangers become unlikely best friends during someone else's wedding week. A beautiful, tender story." },
  { title: "Don't Let Him In", author: "Lisa Jewell", cover: "dont-let-him-in", color: '#034F74', textColor: '#FBF8F2', rating: 5, style: 'type', w: 48, h: 280, lean: -6,
    review: "A charming man works his way into a widow's family. Chilling, and I couldn't believe how much he got away with." },
  { title: "Five Survive", author: "Holly Jackson", cover: "five-survive", color: '#0C0C13', textColor: '#FBF8F2', rating: 5, style: 'serif', w: 53, h: 249,
    review: "Six friends on a road trip are trapped in an RV by a sniper. Terrifying and impossible to put down." },
  { title: "The Paradise Problem", author: "Christina Lauren", cover: "the-paradise-problem", color: '#F4CD0C', textColor: '#3A1E12', rating: 3, style: 'sans', w: 58, h: 218,
    review: "A fake-married couple must keep up the act at a lavish island family wedding. Not my favorite Christina Lauren." },
  { title: "Serial Killer Games", author: "Kate Posey", cover: "serial-killer-games", color: '#13D3BA', textColor: '#3A1E12', rating: 4, style: 'serif', w: 63, h: 271, lean: 5,
    review: "A thriller built around a deadly game. A fun, twisty page-turner." },
  { title: "Days at the Morisaki Bookshop", author: "Satoshi Yagisawa", cover: "days-at-the-morisaki-bookshop", color: '#726A53', textColor: '#FBF8F2', rating: 4, style: 'sans', w: 36, h: 240,
    review: "After a heartbreak, a young woman finds comfort living above her uncle's Tokyo bookshop. So cozy, and it made me cry so much." },
  { title: "Finding My Way: A Memoir", author: "Malala Yousafzai", cover: "finding-my-way-a-memoir", color: '#D2D0AE', textColor: '#3A1E12', rating: 5, style: 'type', w: 41, h: 209,
    review: "Malala reflects on finding herself during and after university. As an admirer of everything she stands for, I loved this glimpse into her life." },
];

// Painting page. Cleaned-up photos live in src/assets/paintings/.
export const painting = {
  story: [
    'Painting is how I manage my anxiety. When my mind won’t slow down, picking up a brush gives it one small, simple thing to focus on: this colour, this line, this corner of the canvas. Somewhere in there, the noise fades.',
    'I started painting to cope, and I haven’t stopped since. When I paint, time disappears: I sit down for “just twenty minutes” and look up hours later, paint on my hands and my head finally quiet. Every canvas on my wall holds a little of whatever I was carrying that day, and the lightness I felt when I let it go.',
  ],
  wall: { img: 'gallery-wall' },
  works: [
    { img: 'wildflowers' },
    { img: 'hamsa' },
    { img: 'desert-sun' },
    { img: 'cherries' },
    { img: 'profile' },
    { img: 'you-are-enough' },
    { img: 'sundae' },
    { img: 'keyhole' },
  ],
};

// TODO(Bhavana): put MP3s in public/audio/ and set `src`, or add a link.
// Music page. Previews are Apple's official 30-second clips; art is in src/assets/music/.
export const music = {
  story: [
    'I’m trained in Carnatic classical music, the South Indian tradition of ragas, rhythm and endless patient practice. It taught me discipline and listening long before anything else did.',
    'But music has never felt like homework. Singing and listening are how I heal. On hard days a song does what nothing else can: it slows my breathing, quiets my head and brings me back to myself. Music is my therapy, my reset button and the soundtrack to everything I do.',
  ],
  playlist: [
    { slug: 'roobaroo', title: 'Roobaroo', artist: 'A.R. Rahman & Naresh Iyer', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8b/85/4d/8b854d26-a52a-0f83-4553-28be3647abec/mzaf_9536950054419619173.plus.aac.p.m4a', url: 'https://music.apple.com/us/album/roobaroo/316981871?i=316981894' },
    { slug: 'midnight-sun', title: 'Midnight Sun', artist: 'Zara Larsson', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/59/bb/60/59bb60aa-1a0b-ff4c-3343-d7cb9e7d375a/mzaf_16759827430963483039.plus.aac.p.m4a', url: 'https://music.apple.com/us/album/midnight-sun/1817499239?i=1817499251' },
    { slug: 'housewife', title: 'Housewife', artist: 'Tate McRae', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/05/27/d4/0527d4f3-f6af-1ef8-6a32-25477b7b00ba/mzaf_18270786579537755861.plus.aac.p.m4a', url: 'https://music.apple.com/us/album/housewife/6822497770?i=6822497774' },
  ],
};

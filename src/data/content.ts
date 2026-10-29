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

// Homepage "Hello, I'm Bhavana!" card. TODO(Bhavana): edit these two paragraphs in your own words.
export const about = [
  "I'm a product marketer and aspiring product manager based in Chicago, focused on building things people actually love and then telling the world about them. My work spans positioning, go-to-market launches, creator partnerships and the user research underneath it all.",
  "An engineer by training and a Northwestern MEM grad, I'm happiest where strategy meets storytelling. I love shaping a product's story from scratch, turning messy data into clear decisions, and I'm always up for new collaborations and a good book recommendation.",
];

export const folders: Folder[] = [
  { id: 'work', no: '01', label: 'Work', title: 'Work Experience', href: '/work/', color: '--plum', ink: '--sheet', peek: 'Salmalita · PatientXpress · Capgemini · Raman Research', teaser: '$100K launch, year one', tabX: 4 },
  { id: 'education', no: '02', label: 'Education', title: 'Education', href: '/education/', color: '--rose', ink: '--ink', peek: 'Northwestern MEM · BMS College of Engineering', teaser: 'Engineer, then strategist', tabX: 22 },
  { id: 'projects', no: '03', label: 'Projects', title: 'Projects', href: '/projects/', color: '--lime', ink: '--ink', peek: 'Launches, positioning, research, this very site', teaser: 'Problem → approach → outcome', tabX: 40 },
  { id: 'accomplishments', no: '04', label: 'Accomplishments', title: 'Accomplishments', href: '/accomplishments/', color: '--plum-deep', ink: '--sheet', peek: 'Miss India Karnataka 2018 · a 125K community', teaser: 'The proud moments', tabX: 58 },
  { id: 'hobbies', no: '05', label: 'Hobbies', title: 'Hobbies', href: '/hobbies/', color: '--rose', ink: '--ink', peek: 'My bookshelf · painting · singing · content', teaser: 'The fun folder', tabX: 74 },
  { id: 'contact', no: '06', label: 'Contact', title: 'Contact', href: '/contact/', color: '--lime', ink: '--ink', peek: 'LinkedIn · Instagram · email', teaser: "Let's talk", tabX: 6 },
];

export const marquee = [
  'Product Marketing', 'Positioning', 'Messaging', 'Go-to-Market', 'Product Launches', 'Creator Partnerships',
  'Storytelling', 'Product Strategy', 'Roadmapping', 'User Research', 'Competitive Intelligence', 'A/B Testing',
];

// "A few things to know about me…" polaroids. Keep each caption short.
// To add a photo: put it in public/photos/notes/ and add  photo: '/photos/notes/your-file.jpg'
export const notes: { icon: string; text: string; photo?: string }[] = [
  { icon: '✎', text: 'I read around 50 books a year', photo: '/photos/notes/books.jpg' },
  { icon: '⌂', text: 'Grew up in Bangalore, India', photo: '/photos/notes/bangalore.jpg' },
  { icon: '✐', text: 'Volunteer teacher for kids in underserved communities across Bangalore', photo: '/photos/notes/teaching.jpg' },
  { icon: '♛', text: 'Miss India title holder', photo: '/photos/notes/miss-india.jpg' },
  { icon: '✧', text: 'Modelling since I was six', photo: '/photos/notes/modelling.jpg' },
  { icon: '♡', text: 'Animal lover and proud dog mom to Nora', photo: '/photos/notes/nora.jpg' },
  { icon: '∞', text: 'A polymath: always learning something new', photo: '/photos/notes/polymath.jpg' },
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
    color: '--plum',
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
    color: '--plum-deep',
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
    color: '--plum-deep',
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
    color: '--plum',
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
    color: '--plum-deep',
    bullets: [
      'Brain-computer interface research at the Raman Research Institute.',
      'Campus Recruitment Lead: drove an 85% placement rate for 60 students and lifted engagement 30%.',
    ],
  },
];

// TODO(Bhavana): add graduation photos to src/assets/photos/ and list them here.
export const gradPolaroids = [
  { caption: 'Northwestern, 2025', tone: '--rose-soft' },
  { caption: 'BMSCE, 2019', tone: '--lime' },
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
  { no: '01', title: 'My Bookshelf', href: '/hobbies/bookshelf/', copy: 'Top 3, the year’s reads, and a shelf you can pull books from.', color: '--plum', peek: '--lime', icon: '📚' },
  { no: '02', title: 'Painting', href: '/hobbies/painting/', copy: 'Acrylics, watercolour and a lot of happy accidents.', color: '--plum-deep', peek: '--rose', icon: '🎨' },
  { no: '03', title: 'Singing', href: '/hobbies/singing/', copy: 'A few recordings, pressed onto imaginary cassettes.', color: '--plum', peek: '--rose-soft', icon: '🎙' },
  { no: '04', title: 'Content Creation', href: '/hobbies/content/', copy: 'Reels, stories and a 125K community.', color: '--plum-deep', peek: '--lime', icon: '🎬' },
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

// TODO(Bhavana): add painting photos to src/assets/photos/ and list them here.
export const paintings = [
  { title: 'Monsoon Study', medium: 'Acrylic on canvas', year: 2024, art: 'linear-gradient(160deg,#6E1E3B,#F3D3E0 55%,#C9D863)' },
  { title: 'Marigold', medium: 'Watercolour', year: 2023, art: 'radial-gradient(circle at 45% 45%,#C9D863,#EAB0C8 55%,#4A1229)' },
  { title: 'Lake Michigan, Dusk', medium: 'Acrylic on canvas', year: 2025, art: 'linear-gradient(180deg,#EAB0C8 0 40%,#6E1E3B 40% 42%,#4A1229 42%)' },
  { title: 'Bloom', medium: 'Acrylic on paper', year: 2024, art: 'radial-gradient(circle at 50% 55%,#FDFCEE 0 12%,#EAB0C8 13% 38%,#6E1E3B 39%)' },
  { title: 'Rooftops', medium: 'Gouache', year: 2022, art: 'linear-gradient(0deg,#4A1229 0 30%,#EAB0C8 30% 34%,#C9D863 34%)' },
];

// TODO(Bhavana): put MP3s in public/audio/ and set `src`, or add a link.
export const songs = [
  { title: 'Cover No. 1', note: 'Recording coming soon', src: '', link: '', color: '--rose' },
  { title: 'Cover No. 2', note: 'Recording coming soon', src: '', link: '', color: '--lime' },
  { title: 'Cover No. 3', note: 'Recording coming soon', src: '', link: '', color: '--rose-soft' },
];

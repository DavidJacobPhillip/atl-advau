import heroVideo from '@/assets/hero.mp4';
import heroPoster from '@/assets/hero-poster.jpg';

export type MediaType = 'photo' | 'video';

export type GalleryCategory = 'performances' | 'meetups' | 'workshops';

export interface MediaAsset {
  type: MediaType;
  label: string;
  ratio: string;
  src?: string;
  poster?: string;
  alt: string;
}

export interface GalleryItem extends MediaAsset {
  id: string;
  category: GalleryCategory;
  title: string;
  event: string;
  year: number;
  credit: string;
}

export interface BoardMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  portrait: MediaAsset;
}

export interface CastMember {
  id: string;
  name: string;
  role: string;
  portrait: MediaAsset;
}

export interface TicketTier {
  id: string;
  name: string;
  price: number;
  note?: string;
}

export const site = {
  name: 'Atlanta Adavu',
  tagline: 'Return to the roots.',
  description:
    'Atlanta Adavu is a Bharatanatyam collective in Atlanta, part of a global network of adavu meetups.',
  logo: {
    src: '',
    alt: 'Atlanta Adavu logo',
    label: 'LOGO - light version',
  },
  nonprofitLine: 'Atlanta Adavu is a registered nonprofit organization.',
  copyright: '2026 Atlanta Adavu. All rights reserved.',
};

export const nav = {
  links: [
    { label: 'About', to: '/#about' },
    { label: 'Gallery', to: '/#gallery' },
    { label: 'Board', to: '/#board' },
  ],
  ticketsLabel: 'Tickets: Bhakti Vilochanena',
  ticketsShortLabel: 'Tickets',
  ticketsTo: '/bhakti-vilochanena',
  homeLabel: 'Atlanta Adavu home',
  primaryLabel: 'Primary',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
};

export const ui = {
  skipToContent: 'Skip to content',
  close: 'Close',
  previous: 'Previous',
  next: 'Next',
  viewerLabel: 'Media viewer',
  openItem: 'Open',
  filterLabel: 'Filter gallery',
  swipeHint: 'Use arrow keys or swipe to move between works',
};

export const hero = {
  eyebrow: 'ATLANTA ADAVU',
  line: 'Return to the roots.',
  video: {
    type: 'video',
    label: 'HERO VIDEO - dark-lit dancers',
    ratio: '16/9',
    src: heroVideo,
    poster: heroPoster,
    alt: 'Bharatanatyam dancers performing on a dark-lit stage',
  } satisfies MediaAsset,
  scrollCue: 'Scroll',
};

export const about = {
  statement: 'Every dance is built from a single step.',
  accentWord: 'single',
  intro:
    'Atlanta Adavu is a Bharatanatyam collective founded in 2024 and part of a global network of 15+ adavu meetups. Here, dancers practice adavus, the foundational steps of Bharatanatyam, create new work, and perform.',
  exhibits: [
    {
      id: 'meetups',
      title: 'ADAVU MEETUPS',
      caption: 'Open practice for all levels, several times a month.',
      media: {
        type: 'photo',
        label: 'EXHIBIT PHOTO - adavu meetup practice circle',
        ratio: '4/5',
        src: '',
        alt: 'Dancers practicing adavus together in a circle',
      } satisfies MediaAsset,
    },
    {
      id: 'srishti',
      title: 'SRISHTI',
      caption: 'The performance cohort, choreographing original work.',
      media: {
        type: 'video',
        label: 'EXHIBIT VIDEO - Srishti rehearsal, wide shot',
        ratio: '16/9',
        src: '',
        poster: '',
        alt: 'Srishti performers rehearsing an original piece',
      } satisfies MediaAsset,
    },
    {
      id: 'workshops',
      title: 'GUEST WORKSHOPS',
      caption: 'Visiting artists from across the diaspora.',
      media: {
        type: 'photo',
        label: 'EXHIBIT PHOTO - guest artist workshop',
        ratio: '3/4',
        src: '',
        alt: 'A visiting artist leading a studio workshop',
      } satisfies MediaAsset,
    },
  ],
};

export const galleryIntro = {
  eyebrow: 'GALLERY',
  title: 'Moments from the floor.',
  filters: [
    { id: 'all', label: 'All' },
    { id: 'performances', label: 'Performances' },
    { id: 'meetups', label: 'Meetups' },
    { id: 'workshops', label: 'Workshops' },
  ] as const,
};

export const galleryItems: GalleryItem[] = [
  {
    id: 'g01',
    type: 'photo',
    category: 'performances',
    title: 'Opening Movement',
    event: 'Srishti Showcase',
    year: 2025,
    credit: 'Photo: Atlanta Adavu',
    label: 'PHOTO - Srishti opening movement, full stage',
    ratio: '4/5',
    alt: 'Srishti dancers opening a showcase on a stage',
  },
  {
    id: 'g02',
    type: 'video',
    category: 'performances',
    title: 'Rehearsal Reel',
    event: 'Srishti Showcase',
    year: 2025,
    credit: 'Video: Atlanta Adavu',
    label: 'VIDEO - Srishti rehearsal reel, 30s',
    ratio: '16/9',
    alt: 'Short reel of Srishti dancers rehearsing',
  },
  {
    id: 'g03',
    type: 'photo',
    category: 'meetups',
    title: 'Morning Practice',
    event: 'Adavu Meetup',
    year: 2025,
    credit: 'Photo: Atlanta Adavu',
    label: 'PHOTO - morning adavu practice, side light',
    ratio: '3/4',
    alt: 'Dancers in a morning practice session',
  },
  {
    id: 'g04',
    type: 'photo',
    category: 'workshops',
    title: 'Nritta Lines',
    event: 'Guest Workshop',
    year: 2025,
    credit: 'Photo: Atlanta Adavu',
    label: 'PHOTO - guest workshop, lines of dancers',
    ratio: '1/1',
    alt: 'Lines of dancers during a guest workshop',
  },
  {
    id: 'g05',
    type: 'video',
    category: 'meetups',
    title: 'Warm-up Circle',
    event: 'Adavu Meetup',
    year: 2025,
    credit: 'Video: Atlanta Adavu',
    label: 'VIDEO - meetup warm-up circle, 20s',
    ratio: '4/5',
    alt: 'A circle of dancers warming up together',
  },
  {
    id: 'g06',
    type: 'photo',
    category: 'performances',
    title: 'In Costume',
    event: 'Srishti Showcase',
    year: 2024,
    credit: 'Photo: Atlanta Adavu',
    label: 'PHOTO - performer in costume, backstage',
    ratio: '3/2',
    alt: 'A performer in full costume before going on stage',
  },
  {
    id: 'g07',
    type: 'photo',
    category: 'workshops',
    title: 'Diaspora Session',
    event: 'Guest Workshop',
    year: 2025,
    credit: 'Photo: Atlanta Adavu',
    label: 'PHOTO - visiting artist, studio portrait',
    ratio: '4/5',
    alt: 'A visiting artist during a studio session',
  },
  {
    id: 'g08',
    type: 'photo',
    category: 'meetups',
    title: 'Circle Practice',
    event: 'Adavu Meetup',
    year: 2024,
    credit: 'Photo: Atlanta Adavu',
    label: 'PHOTO - circle practice, overhead',
    ratio: '1/1',
    alt: 'Overhead view of a practice circle',
  },
  {
    id: 'g09',
    type: 'video',
    category: 'workshops',
    title: 'Workshop Excerpt',
    event: 'Guest Workshop',
    year: 2025,
    credit: 'Video: Atlanta Adavu',
    label: 'VIDEO - workshop excerpt, 25s',
    ratio: '16/9',
    alt: 'Excerpt from a guest workshop',
  },
  {
    id: 'g10',
    type: 'photo',
    category: 'performances',
    title: 'Final Bow',
    event: 'Srishti Showcase',
    year: 2024,
    credit: 'Photo: Atlanta Adavu',
    label: 'PHOTO - final bow, stage light',
    ratio: '3/4',
    alt: 'Performers taking a final bow under stage light',
  },
  {
    id: 'g11',
    type: 'photo',
    category: 'meetups',
    title: 'Open Floor',
    event: 'Adavu Meetup',
    year: 2025,
    credit: 'Photo: Atlanta Adavu',
    label: 'PHOTO - open practice floor, wide',
    ratio: '4/3',
    alt: 'An open practice floor with dancers spaced across it',
  },
  {
    id: 'g12',
    type: 'video',
    category: 'meetups',
    title: 'Studio Exercise',
    event: 'Adavu Meetup',
    year: 2024,
    credit: 'Video: Atlanta Adavu',
    label: 'VIDEO - studio exercise, 15s',
    ratio: '4/5',
    alt: 'A short studio exercise from a meetup',
  },
];

export const board = {
  eyebrow: 'BOARD',
  title: 'The people behind the practice.',
  groupPhoto: {
    type: 'photo',
    label: 'BOARD GROUP PHOTO',
    ratio: '21/9',
    src: '',
    alt: 'The Atlanta Adavu board standing together',
  } satisfies MediaAsset,
  members: [
    {
      id: 'rachita',
      name: 'Rachita Iyer',
      role: 'Founder & Executive Director',
      bio: 'Sets the vision and leads the collective, its meetups and partnerships. Keeps the community rooted in the adavu practice while it grows.',
      portrait: {
        type: 'photo',
        label: 'PORTRAIT - Rachita Iyer',
        ratio: '4/5',
        src: '',
        alt: 'Portrait of Rachita Iyer',
      },
    },
    {
      id: 'saidharshana',
      name: 'Saidharshana Dhantu',
      role: 'Performance Cohort Coordinator',
      bio: 'Co-captains Srishti and leads its productions from first rehearsal to final bow. Guides dancers through original choreography.',
      portrait: {
        type: 'photo',
        label: 'PORTRAIT - Saidharshana Dhantu',
        ratio: '4/5',
        src: '',
        alt: 'Portrait of Saidharshana Dhantu',
      },
    },
    {
      id: 'ruth',
      name: 'Ruth Prithika',
      role: 'Media Coordinator',
      bio: 'Runs photography, video and social channels that carry the collective to its audience. Shapes how each performance is seen.',
      portrait: {
        type: 'photo',
        label: 'PORTRAIT - Ruth Prithika',
        ratio: '4/5',
        src: '',
        alt: 'Portrait of Ruth Prithika',
      },
    },
    {
      id: 'neelu',
      name: 'Neelu Konkimalla',
      role: 'Financial Coordinator',
      bio: 'Manages finances and fundraising so the collective can keep its doors open. Co-captains Srishti alongside its production work.',
      portrait: {
        type: 'photo',
        label: 'PORTRAIT - Neelu Konkimalla',
        ratio: '4/5',
        src: '',
        alt: 'Portrait of Neelu Konkimalla',
      },
    },
  ] satisfies BoardMember[],
};

export const footer = {
  joinTitle: 'Join a meetup',
  schedule: {
    label: 'SCHEDULE - meetup dates and times, to be added',
    text: 'Meetups run several times a month. Check the schedule for the next open practice.',
  },
  rsvp: { label: 'RSVP', href: '#' },
  instagram: { label: 'Instagram', handle: '@atl.adavu', href: 'https://www.instagram.com/atl.adavu/' },
  email: { label: 'Contact', address: 'hello@atlantaadavu.org', href: 'mailto:hello@atlantaadavu.org' },
  newsletter: {
    title: 'Newsletter',
    placeholder: 'Your email address',
    button: 'Subscribe',
    label: 'Email address',
  },
  donate: { label: 'Donate', href: '#' },
};

export const event = {
  slug: 'bhakti-vilochanena',
  eyebrow: 'SRISHTI PRESENTS',
  title: 'Bhakti Vilochanena',
  subtitle: 'The Eyes of Devotion',
  isoDate: '2026-12-06',
  utcOffset: '-05:00',
  startTime: '14:30',
  endTime: '16:30',
  dateLine: 'Sunday, December 6, 2026',
  summaryLine: 'Sunday, December 6, 2026 - 2:30 PM - Doors 2:00 PM - West Forsyth High School',
  venue: 'West Forsyth High School',
  hero: {
    type: 'video',
    label: 'PRODUCTION HERO',
    ratio: '16/9',
    src: '',
    poster: '',
    alt: 'Srishti performers on stage for Bhakti Vilochanena',
  } satisfies MediaAsset,
  registerLabel: 'Register',
  thankYou: {
    title: 'Thank you for joining us.',
    text: 'We are grateful for every guest who came to Bhakti Vilochanena. Keep an eye on Atlanta Adavu for what comes next.',
  },
  story: {
    eyebrow: 'THE STORY',
    statement: 'The story of Krishna, told through the eyes of his most devoted followers.',
    synopsis:
      'SYNOPSIS PLACEHOLDER - a paragraph describing the production, its movements, and the devotional world it draws from.',
  },
  tickets: {
    eyebrow: 'TICKETS',
    title: 'Choose your seat.',
    ticketUrl: '#',
    tiers: [
      { id: 'general', name: 'General', price: 17 },
      { id: 'group', name: 'Group of 4', price: 50, note: 'Save $18' },
    ] satisfies TicketTier[],
    calendarLabel: 'Add to calendar',
    calendarFileName: 'bhakti-vilochanena.ics',
  },
  details: {
    eyebrow: 'DETAILS',
    title: 'Plan your evening.',
    items: [
      { label: 'Date', value: 'Sunday, December 6, 2026' },
      { label: 'Start time', value: '2:30 PM' },
      { label: 'Doors open', value: '2:00 PM' },
      { label: 'Venue', value: 'West Forsyth High School' },
    ],
    map: {
      label: 'MAP PLACEHOLDER - venue location',
      ratio: '16/9',
      alt: 'Map showing the location of West Forsyth High School',
    },
    parking: 'PARKING NOTE PLACEHOLDER - parking instructions and accessible entrance details.',
  },
  cast: {
    eyebrow: 'CAST & CHOREOGRAPHERS',
    title: 'The dancers and makers.',
    members: [
      { id: 'c1', name: 'Cast Member Name', role: 'Dancer' },
      { id: 'c2', name: 'Cast Member Name', role: 'Dancer' },
      { id: 'c3', name: 'Cast Member Name', role: 'Dancer' },
      { id: 'c4', name: 'Cast Member Name', role: 'Choreographer' },
      { id: 'c5', name: 'Cast Member Name', role: 'Dancer' },
      { id: 'c6', name: 'Cast Member Name', role: 'Choreographer' },
    ] satisfies Omit<CastMember, 'portrait'>[],
    portraitRatio: '4/5',
  },
  rehearsal: {
    eyebrow: 'FROM REHEARSAL',
    credit: 'Photos by @adicommunityvisuals',
    items: [
      { id: 'r1', type: 'photo', label: 'PHOTO - rehearsal, lifted arms', ratio: '4/5', src: '', alt: 'Dancers in rehearsal with arms lifted' },
      { id: 'r2', type: 'photo', label: 'PHOTO - rehearsal, floor work', ratio: '1/1', src: '', alt: 'Dancers working on the floor during rehearsal' },
      { id: 'r3', type: 'photo', label: 'PHOTO - rehearsal, costume fitting', ratio: '3/4', src: '', alt: 'A costume fitting during rehearsal' },
      { id: 'r4', type: 'photo', label: 'PHOTO - rehearsal, group line', ratio: '3/2', src: '', alt: 'A group line during rehearsal' },
      { id: 'r5', type: 'photo', label: 'PHOTO - rehearsal, close detail', ratio: '4/5', src: '', alt: 'A close detail of hand gestures in rehearsal' },
      { id: 'r6', type: 'photo', label: 'PHOTO - rehearsal, stage light', ratio: '1/1', src: '', alt: 'Dancers lit on a rehearsal stage' },
    ] satisfies (MediaAsset & { id: string })[],
  },
};

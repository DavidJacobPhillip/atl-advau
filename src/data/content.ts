import heroVideo from '@/assets/hero.mp4';
import heroPoster from '@/assets/hero-poster.jpg';
import logo from '@/assets/logo.png';
import meetupsVideo from '@/assets/adavu-meetups.mp4';
import meetupsPoster from '@/assets/adavu-meetups-poster.jpg';
import srishtiPhoto from '@/assets/srishti.jpg';
import workshopsPhoto from '@/assets/guest-workshops.jpg';
import openingPhoto from '@/assets/gallery/01-opening-movement.jpg';
import warmUpVideo from '@/assets/gallery/02-warm-up-circle.mp4';
import warmUpPoster from '@/assets/gallery/02-warm-up-circle-poster.jpg';
import excerptPhoto from '@/assets/gallery/03-workshop-excerpt.jpg';
import gettingReadyVideo from '@/assets/gallery/04-srishti-getting-ready.mp4';
import gettingReadyPoster from '@/assets/gallery/04-srishti-getting-ready-poster.jpg';
import inCostumePhoto from '@/assets/gallery/05-srishti-in-costume.jpg';
import meetupMayVideo from '@/assets/gallery/06-adavu-meetup.mp4';
import meetupMayPoster from '@/assets/gallery/06-adavu-meetup-poster.jpg';
import meetupAprilVideo from '@/assets/gallery/07-adavu-meetup.mp4';
import meetupAprilPoster from '@/assets/gallery/07-adavu-meetup-poster.jpg';
import varnamPhoto from '@/assets/gallery/08-varnam-salon.jpg';
import meetupMarchVideo from '@/assets/gallery/09-adavu-meetup.mp4';
import meetupMarchPoster from '@/assets/gallery/09-adavu-meetup-poster.jpg';
import livingAdavuVideo from '@/assets/gallery/10-living-adavu.mp4';
import livingAdavuPoster from '@/assets/gallery/10-living-adavu-poster.jpg';
import meetSrishtiVideo from '@/assets/gallery/11-meet-srishti.mp4';
import meetSrishtiPoster from '@/assets/gallery/11-meet-srishti-poster.jpg';
import semiclassicalVideo from '@/assets/gallery/12-semiclassical-workshop.mp4';
import semiclassicalPoster from '@/assets/gallery/12-semiclassical-workshop-poster.jpg';
import boardTeam from '@/assets/board-team.jpg';
import boardRachita from '@/assets/board-rachita.jpg';
import boardSaidharshana from '@/assets/board-saidharshana.jpg';
import boardShruti from '@/assets/board-shruti.jpg';
import boardPreethi from '@/assets/board-preethi.jpg';

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
  date: string;
  instagramUrl: string;
}

export interface BoardMember {
  id: string;
  name: string;
  role: string;
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

const VENMO_URL = 'https://venmo.com/u/ATLadavu';

export const site = {
  name: 'Atlanta Adavu',
  tagline: 'Return to the roots.',
  description:
    'Atlanta Adavu is a Bharatanatyam collective in Atlanta, part of a global network of adavu meetups.',
  logo: {
    src: logo,
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
  donateLabel: 'Donate',
  donateHref: VENMO_URL,
  ticketsLabel: 'Tickets: Bhakti Vilochanena',
  ticketsShortLabel: 'Tickets',
  ticketsHref: 'https://www.instagram.com/p/DfGr3-gSViG/',
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
  instagramPost: 'Instagram post',
  filterLabel: 'Filter gallery',
  swipeHint: 'Use arrow keys or swipe to move between works',
};

export const hero = {
  line: 'Every dance begins with an adavu.',
  subline: 'Ours begin in Atlanta.',
  video: {
    type: 'video',
    label: 'HERO VIDEO - dark-lit dancers',
    ratio: '16/9',
    src: heroVideo,
    poster: heroPoster,
    alt: 'Bharatanatyam dancers performing on a dark-lit stage',
  } satisfies MediaAsset,
};

export const about = {
  statement: 'The adavu that unites us.',
  accentWord: 'adavu',
  intro:
    'Atlanta Adavu is a Bharatanatyam collective founded in 2024 and part of a global network of 15+ adavu meetups. Here, dancers practice adavus, the foundational steps of Bharatanatyam, create new work, and perform.',
  exhibits: [
    {
      id: 'meetups',
      title: 'ADAVU MEETUPS',
      caption: 'Open practice for all levels, several times a month.',
      description:
        'Adavus are the first steps every Bharatanatyam dancer learns, and the ones we keep coming back to. Our meetups bring dancers together to practice these steps side by side, at locations across Atlanta. To join one, send us a message on Instagram at @atl.adavu.',
      media: {
        type: 'video',
        label: 'EXHIBIT VIDEO - adavu meetups',
        ratio: '9/16',
        src: meetupsVideo,
        poster: meetupsPoster,
        alt: 'Groups of dancers practicing adavus together in homes and studios',
      } satisfies MediaAsset,
    },
    {
      id: 'srishti',
      title: 'SRISHTI',
      caption: 'The performance cohort, choreographing original work.',
      description:
        'Srishti is our dance company, where the practice of the meetups becomes original choreography for the stage. Our most recent production, Bhakti Vilochanena, tells the story of Krishna through the eyes of his most devoted followers. Follow the company at @srishti_danceco.',
      media: {
        type: 'photo',
        label: 'EXHIBIT PHOTO - Srishti on stage',
        ratio: '3/2',
        src: srishtiPhoto,
        alt: 'Five Srishti dancers in blue and purple saris gathered in a seated pose on stage',
      } satisfies MediaAsset,
    },
    {
      id: 'workshops',
      title: 'GUEST WORKSHOPS',
      caption: 'Visiting artists from across the diaspora.',
      description:
        'Our workshops bring guest artists to Atlanta, giving our dancers the chance to learn from teachers beyond our own community. Each one adds a new perspective to the fundamentals we practice together. See more in the Workshops highlight on our Instagram.',
      media: {
        type: 'photo',
        label: 'EXHIBIT PHOTO - guest artist',
        ratio: '113/100',
        src: workshopsPhoto,
        alt: 'A Bharatanatyam dancer in a maroon and gold sari, arms outstretched, in front of an Atlanta Adavu banner',
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

// In reading order: left to right, then top to bottom.
export const galleryItems: GalleryItem[] = [
  {
    id: 'g01',
    type: 'photo',
    category: 'performances',
    title: 'Opening Movement',
    date: 'January 2026',
    instagramUrl: 'https://www.instagram.com/p/DT03QLciam8/',
    label: 'PHOTO - Opening Movement',
    ratio: '3/4',
    src: openingPhoto,
    alt: 'Srishti dancers in cream and green costumes posing together under a single stage light',
  },
  {
    id: 'g02',
    type: 'video',
    category: 'meetups',
    title: 'Meetup Warm-Up Circle',
    date: 'November 2026',
    instagramUrl: 'https://www.instagram.com/p/DfSb-9RiymA/',
    label: 'VIDEO - Meetup Warm-Up Circle',
    ratio: '9/16',
    src: warmUpVideo,
    poster: warmUpPoster,
    alt: 'Dancers practicing together on a wooden floor in a bright living room',
  },
  {
    id: 'g03',
    type: 'photo',
    category: 'workshops',
    title: 'Workshop Excerpt',
    date: 'July 2026',
    instagramUrl: 'https://www.instagram.com/p/DfRAboSnEGk/?img_index=1',
    label: 'PHOTO - Workshop Excerpt',
    ratio: '3/2',
    src: excerptPhoto,
    alt: 'A dancer in a blue blouse and maroon sari showing hand gestures against a plain wall',
  },
  {
    id: 'g04',
    type: 'video',
    category: 'performances',
    title: 'Srishti Getting Ready',
    date: 'October 2025',
    instagramUrl: 'https://www.instagram.com/reel/DPrCV-vDOse/',
    label: 'VIDEO - Srishti Getting Ready',
    ratio: '9/16',
    src: gettingReadyVideo,
    poster: gettingReadyPoster,
    alt: 'Srishti dancers posing together in colorful costumes',
  },
  {
    id: 'g05',
    type: 'photo',
    category: 'performances',
    title: 'Srishti in Costume',
    date: 'May 2026',
    instagramUrl: 'https://www.instagram.com/p/DYNTkYtCahF/?img_index=4',
    label: 'PHOTO - Srishti in Costume',
    ratio: '3/2',
    src: inCostumePhoto,
    alt: 'Srishti dancers in blue saris performing on stage, one in a deep lunge at the front',
  },
  {
    id: 'g06',
    type: 'video',
    category: 'meetups',
    title: 'Adavu Meetup',
    date: 'May 2026',
    instagramUrl: 'https://www.instagram.com/p/DYdCS2phsDe/',
    label: 'VIDEO - Adavu Meetup',
    ratio: '9/16',
    src: meetupMayVideo,
    poster: meetupMayPoster,
    alt: 'Dancers practicing steps in a line on a wooden floor',
  },
  {
    id: 'g07',
    type: 'video',
    category: 'meetups',
    title: 'Adavu Meetup',
    date: 'April 2026',
    instagramUrl: 'https://www.instagram.com/p/DXU-GNTAbuG/',
    label: 'VIDEO - Adavu Meetup',
    ratio: '9/16',
    src: meetupAprilVideo,
    poster: meetupAprilPoster,
    alt: 'Dancers practicing in formation in a room strung with yellow streamers',
  },
  {
    id: 'g08',
    type: 'photo',
    category: 'workshops',
    title: 'Varnam Salon',
    date: 'July 2026',
    instagramUrl: 'https://www.instagram.com/p/DdcvzEjGKw8/?img_index=3',
    label: 'PHOTO - Varnam Salon',
    ratio: '3/2',
    src: varnamPhoto,
    alt: 'A dancer in a maroon and gold sari with hands pressed together, in front of an Atlanta Adavu banner',
  },
  {
    id: 'g09',
    type: 'video',
    category: 'meetups',
    title: 'Adavu Meetup',
    date: 'March 2026',
    instagramUrl: 'https://www.instagram.com/p/DWKpyf9DE9p/',
    label: 'VIDEO - Adavu Meetup',
    ratio: '15/23',
    src: meetupMarchVideo,
    poster: meetupMarchPoster,
    alt: 'Dancers moving across a hardwood floor in a sunlit room',
  },
  {
    id: 'g10',
    type: 'video',
    category: 'workshops',
    title: 'The Living Adavu',
    date: 'September 2026',
    instagramUrl: 'https://www.instagram.com/p/DdOunRlChbQ/',
    label: 'VIDEO - The Living Adavu',
    ratio: '9/16',
    src: livingAdavuVideo,
    poster: livingAdavuPoster,
    alt: 'Scenes from The Living Adavu, with dancers practicing and sitting together in different studios',
  },
  {
    id: 'g11',
    type: 'video',
    category: 'performances',
    title: 'Meet Srishti',
    date: 'November 2025',
    instagramUrl: 'https://www.instagram.com/p/DQu9VL1DMke/',
    label: 'VIDEO - Meet Srishti',
    ratio: '9/16',
    src: meetSrishtiVideo,
    poster: meetSrishtiPoster,
    alt: 'Srishti members answering questions on camera, with captions',
  },
  {
    id: 'g12',
    type: 'video',
    category: 'workshops',
    title: 'Semiclassical Workshop',
    date: 'June 2025',
    instagramUrl: 'https://www.instagram.com/p/DKW74lJAqWh/',
    label: 'VIDEO - Semiclassical Workshop',
    ratio: '9/16',
    src: semiclassicalVideo,
    poster: semiclassicalPoster,
    alt: 'Dancers working through choreography in a bright studio with mirrors',
  },
];

export const board = {
  eyebrow: 'BOARD',
  title: 'The people behind the practice.',
  groupPhoto: {
    type: 'photo',
    label: 'BOARD GROUP PHOTO',
    ratio: '332/195',
    src: boardTeam,
    alt: 'The Atlanta Adavu board seated on a bench in saris. From left: Saidharshana Dhantu, Preethi Muthappa, Shruti Das and Rachita Iyer',
  } satisfies MediaAsset,
  members: [
    {
      id: 'rachita',
      name: 'Rachita Iyer',
      role: 'Founder & Director',
      portrait: {
        type: 'photo',
        label: 'PORTRAIT - Rachita Iyer',
        ratio: '1080/1356',
        src: boardRachita,
        alt: 'Rachita Iyer in a purple sari, on a graphic showing the name and title',
      },
    },
    {
      id: 'saidharshana',
      name: 'Saidharshana Dhantu',
      role: 'Performance Coordinator',
      portrait: {
        type: 'photo',
        label: 'PORTRAIT - Saidharshana Dhantu',
        ratio: '1080/1356',
        src: boardSaidharshana,
        alt: 'Saidharshana Dhantu in a blue and teal sari, on a graphic showing the name and title',
      },
    },
    {
      id: 'shruti',
      name: 'Shruti Das',
      role: 'Social Media',
      portrait: {
        type: 'photo',
        label: 'PORTRAIT - Shruti Das',
        ratio: '1080/1356',
        src: boardShruti,
        alt: 'Shruti Das in a magenta and gold sari, on a graphic showing the name and title',
      },
    },
    {
      id: 'preethi',
      name: 'Preethi Muthappa',
      role: 'Finance Coordinator',
      portrait: {
        type: 'photo',
        label: 'PORTRAIT - Preethi Muthappa',
        ratio: '1080/1356',
        src: boardPreethi,
        alt: 'Preethi Muthappa in a purple printed sari, on a graphic showing the name and title',
      },
    },
  ] satisfies BoardMember[],
};

export const footer = {
  joinTitle: 'Join our adavu',
  joinText: 'Reach out to us today on Instagram or email to join our next meetup.',
  instagram: { label: 'Instagram', handle: '@atl.adavu', href: 'https://www.instagram.com/atl.adavu/' },
  email: { label: 'Contact', address: 'atlantaadavu@gmail.com', href: 'mailto:atlantaadavu@gmail.com' },
  donate: {
    label: 'Donate',
    text: 'Your gift keeps our meetups open to every dancer and brings guest artists and new productions to Atlanta.',
    linkLabel: 'Venmo @ATLadavu',
    href: VENMO_URL,
  },
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

/** ── EDIT ME ──────────────────────────────────────────────────────────────
 *  Everything personal lives here. The Remotion intro reads this file too. */
export const her = {
  name: 'Fatima',
  nickname: 'Tima',
  age: 20,
  date: '12 October 2026',  // ← PLACEHOLDER: set her real birthday
  from: 'Swaray'
};

export const chapters = [
  { n: '01', id: 'hello',   eyebrow: `${her.nickname} / turning twenty`,
    lines: ['Twenty years of', 'you.'], lead: 'A little corner of the internet, built for one person.' },
  { n: '02', id: 'photos',  eyebrow: 'the photographs',
    lines: ['Every version', 'of you.'], lead: 'Some of these you will want deleted. They are staying.' },
  { n: '03', id: 'wishes', eyebrow: 'from your people',
    lines: ['They all had', 'something to say.'], lead: 'Keep scrolling. They queued up for this.' },
  { n: '04', id: 'footage', eyebrow: 'caught on camera',
    lines: ['Nobody was', 'acting normal.'], lead: 'Press play at your own risk.' },
  { n: '05', id: 'circle',  eyebrow: 'the circle',
    lines: ['You are', 'loved.'], lead: 'The ones who show up. Every single time.' },
  { n: '06', id: 'twenty',  eyebrow: 'and now',
    lines: ['Here is to', 'twenty.'], lead: 'Whatever this year is, it is yours.' }
];

/** Gallery — childhood first, then everyone. */
export const photos = [
  { name: 'young-dress',  ratio: 0.750, caption: 'The original photoshoot',        alt: 'Fatima as a little girl in a party dress' },
  { name: 'young-pink',   ratio: 0.750, caption: 'The pink era',            alt: 'Young Fatima in a pink shirt by a car' },
  { name: 'haja',         ratio: 0.752, caption: 'Haja and you',            alt: 'Haja with young Fatima' },
  { name: 'teen',         ratio: 0.750, caption: 'Chicken Town years',      alt: 'Teenage Fatima on a street' },
  { name: 'zeya-cafe',    ratio: 0.563, caption: 'Fine dining, courtesy of Zeya',             alt: 'Zeya feeding Fatima at a cafe' },
  { name: 'hadii-goofy',  ratio: 0.750, caption: 'Hadii being Hadii',       alt: 'Hadii and Fatima pulling faces' },
  { name: 'foursome',     ratio: 1.427, caption: 'The whole committee',     alt: 'Fatima, Asuma, Zeya and Hadii together' },
  { name: 'wedding',      ratio: 1.251, caption: 'The actually-invited ones',          alt: 'The girls dressed up at a wedding table' },
  { name: 'shoot',        ratio: 0.667, caption: 'The photoshoot',          alt: 'Hadi, Fatima and Asuma posing in gowns' },
  { name: 'zaynab-sis',   ratio: 1.333, caption: 'With Zaynab',             alt: 'Fatima, her sister and Zaynab' },
  { name: 'cute-group',   ratio: 0.750, caption: 'Everyone at once',        alt: 'A big group selfie' },
  { name: 'ignored',      ratio: 0.750, caption: 'Left on read, in person',           alt: 'Fatima being ignored by the boys' },
  { name: 'stressed',     ratio: 0.378, caption: 'Unbothered',              alt: 'Fatima looking unimpressed at an event' },
  { name: 'tjay',         ratio: 0.750, caption: 'Looking tuff',             alt: 'Swaray, Fatima and TJay' },
  { name: 'group1',       ratio: 0.750, caption: 'Uninvited wedding guests',         alt: 'The group dressed up outside' },
  { name: 'swaray-cute',  ratio: 0.750, caption: 'Twin',                      alt: 'Swaray and Fatima' },
];

/** Hero composition. */
export const heroPhoto  = { name: 'hadi-sunset', ratio: 0.563, alt: 'Hadi and Fatima at sunset' };
export const heroFloats = [
  { name: 'young-dress', ratio: 0.750, rot: '-7deg', rotMid: '-4deg',  dur: '7s',   delay: '0s'  },
  { name: 'shoot',       ratio: 0.667, rot: '5deg',  rotMid: '2.5deg', dur: '8.5s', delay: '.6s' },
];

/** ── THE WISHES ──────────────────────────────────────────────────────────
 *  One per person, in this order, popping up one after another mid-scroll.
 *  Replace each `text` when the real messages arrive. Ayesha is a voice
 *  note: drop the file at static/wishes/ayesha.m4a and it goes live.     */
export type Wish = {
  from: string; photo: string; ratio: number; alt: string;
  kind: 'text' | 'audio' | 'photo';
  text?: string;          // the written wish (or a one-line intro for audio/photo)
  audioSrc?: string;
  extraPhoto?: string;    // kind 'photo': the picture that IS the wish
  extraRatio?: number;
  extraAlt?: string;
  placeholder?: boolean;  // true until the real wish is dropped in
};

export const wishes: Wish[] = [
  { from: 'Hadii',  photo: 'hadii-cute',  ratio: 0.750, alt: 'Hadii hugging Fatima', kind: 'text',
    text: 'My beautiful Fatima ❤️\U0001f979 I want to wish you a very happy birthday 🎂🎉 May Allah continue to bless you and keep you the sweet, kind, and free spirited person that you are. I pray that Allah protects you from all evil, jealousy, hatred, and anything that is not meant for you. May He surround you with genuine people who truly love and care for you. And as you grow older, always remember that not everyone who smiles with you genuinely wishes you well — so keep your heart kind but also learn to recognize sincerity 🥲\nI pray that Allah grants you everything your heart desires in this life and in the Hereafter. May He bless you with happiness, good health, success, peace, and beautiful experiences. May Allah grant you Jannatul Firdaus and make everything you wish for come to you in the best and most beautiful way. I love you soo much and I pray you continue to be the sweetheart that you’re ❤️🥳' },
  { from: 'Asuma',  photo: 'asuma-collage', ratio: 0.563, alt: 'Asuma and Fatima collage', kind: 'text',
    text: "Happy Birthday, mylo 🥳 Today is all about you, my girl! We celebrate not just the beautiful person you are, but the supportive, caring, and amazing woman you have become over the years. I'm honestly so grateful for the friendship we've shared. We've grown together, laughed together, argued, had our little misunderstandings but somehow we always find our way back to each other, and that means so much to me. You are truly one of my special people, and I want you to know that I love and appreciate you more than words can say. My prayer for you is that God continues to bless you, protect you, and guide you in every area of your life — your dreams, and everything you put your hands on. May this new year bring you happiness, good health, peace, prosperity, favor, and so many beautiful reasons to smile. I love you so much Tima, thank you for loving me the way you did and supporting me anytime I need someone \U0001f979 Happy birthday once again my love Tima # Asuma e baby 😂💋🤍🎊💐" },
  { from: 'Zaynab', photo: 'zaynab',      ratio: 0.750, alt: 'Zaynab and Fatima', kind: 'text',
    text: "Happy birthday Tima, I hope you're always surrounded by kind people, endless happiness, and everything your heart deserves. Thank you for staying, for believing in me, and for never letting anyone change the way you see me. Through every phase, every breakdown, every overthinking moment, and all the chaos in my life, you still chose to be there. I'll always be grateful to have a friend like you. Not everyone gets to have someone who truly understands them and still stays anyway. I hope we stay like this foreverrr. To more happy moments, more random stories, more late night talks, and I love you always and forever Tima \U0001f979🤍" },
  { from: 'Ayesha', photo: 'ayesha',      ratio: 0.750, alt: 'Ayesha and Fatima in the garden', kind: 'audio',
    text: 'Happy birthday to the sweetest and fun girl I know ❤️\nYou are beautiful.\nYou are smart.\nYou are bold.\nYou are extraordinary.\n\nNever forget that ❤️',
    audioSrc: '/wishes/ayesha.m4a' },
  { from: 'Alimu',  photo: 'alimu',       ratio: 0.562, alt: 'Fatima and Alimu', kind: 'text',
    text: 'It’s my home girl’s birthday!! 🎉 The world is lucky to have you. More blessings, more glow, more wins this year. Love you sis ❤️' },
  { from: 'TJay',   photo: 'tjay',        ratio: 0.750, alt: 'Swaray, Fatima and TJay', kind: 'text',
    text: 'Happy Birthday Snowwhiteee' },
  { from: 'Singa',  photo: 'singa-booba', ratio: 0.750, alt: 'Singa, Booba and Fatima', kind: 'photo',
    text: 'Happy birthday timaaaaaaaa',
    extraPhoto: 'singa-shot', extraRatio: 0.750,
    extraAlt: 'Fatima in the sand at golden hour, photographed by Singa' },
  /* Zeya's is ghost-written for now — swap in her real words when she sends them. */
  { from: 'Zeya',   photo: 'zeya-cafe',   ratio: 0.563, alt: 'Zeya feeding Fatima at a cafe', kind: 'text',
    text: 'Happy birthday Tima 🤍 Twenty years of you, and I still haven’t found anyone I’d rather waste a whole day with. Stay soft, stay laughing — and whatever this year brings, you know I’ve got you. Always.' },
  { from: 'Swaray', photo: 'swaray-cute', ratio: 0.750, alt: 'Swaray and Fatima', kind: 'text',
    text: 'Happy birthday mignan! ❤️' },
];

/** ── THE FOOTAGE ─────────────────────────────────────────────────────────
 *  Static until she presses play. */
export const footage = [
  { name: 'dancing',         caption: 'The dance nobody asked for',  dur: '0:20' },
  { name: 'dancing-wedding', caption: 'Wedding floor, claimed',      dur: '0:11' },
  { name: 'goofy-groupie',   caption: 'Groupie gone wrong',          dur: '0:15' },
  { name: 'zeya-carrying',   caption: 'Zeya, carrying the situation', dur: '0:03' },
  { name: 'beach-night',     caption: 'Beach at night with Zaynab',  dur: '0:07' },
  { name: 'trio-goofy',      caption: 'Three-way chaos',             dur: '0:03' },
  { name: 'her-boys',        caption: 'Her boys',                    dur: '0:05' },
  { name: 'zeya-transition', caption: 'The transition',              dur: '0:12' },
  { name: 'hadi-tima',       caption: 'Hadi & Tima, the movie',      dur: '0:10' },
  { name: 'alimu',           caption: 'Homegirl meets homeboy',      dur: '0:17' },
];

/** ── THE CIRCLE ─────────────────────────────────────────────────────────
 *  Three group shots, floating like the closer deck. */
export const circlePhotos = [
  { name: 'circle-carpet', ratio: 1.333, caption: 'Center of it all',  alt: 'Fatima seated on a red carpet surrounded by all her friends' },
  { name: 'circle-selfie', ratio: 0.750, caption: 'Roll call',         alt: 'A joyful group selfie, thumbs up all round' },
  { name: 'circle-six',    ratio: 0.750, caption: 'Squad, assembled',  alt: 'Six friends dressed up outside' },
];

/** ── THE CLOSER ──────────────────────────────────────────────────────────
 *  Her birthday shoot, closing the loop: glasses at six, glasses at twenty. */
export const closerPhotos = [
  { name: 'shoot-car',  ratio: 0.75, caption: 'Twenty, arriving',   alt: 'Fatima leaning out of a white car window at her birthday shoot' },
  { name: 'shoot-roof', ratio: 0.75, caption: 'The glasses stayed', alt: 'Fatima on the car roof, sunglasses in hand, palm trees behind' },
];

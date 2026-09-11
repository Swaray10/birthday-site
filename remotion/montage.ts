/** The cut list. Times in seconds, taken from onset analysis of the track
 *  (scratchpad/beats.json): gentle open to 6.2, riser to the 8.68 drop,
 *  rapid cuts on measured hits through ~19.4, taper, then the lockup on
 *  the fade. All caption text is our own — no lyrics are rendered.        */
export type Cut = {
  src: string; from: number; to: number;
  style: 'kenburns' | 'punch' | 'fade';
};

export const CUTS: Cut[] = [
  // — childhood, slow, crossfaded —
  { src: 'young-dress',  from: 0.00,  to: 2.48,  style: 'kenburns' },
  { src: 'young-pink',   from: 2.48,  to: 4.20,  style: 'kenburns' },
  { src: 'young-1',      from: 4.20,  to: 6.20,  style: 'kenburns' },
  // — the riser: one held shot —
  { src: 'teen',         from: 6.20,  to: 8.68,  style: 'kenburns' },
  // — THE DROP: hard cuts on measured onsets —
  { src: 'hadii-cute',   from: 8.68,  to: 9.71,  style: 'punch' },
  { src: 'zeya-cafe',    from: 9.71,  to: 10.44, style: 'punch' },
  { src: 'zaynab',       from: 10.44, to: 11.17, style: 'punch' },
  // rapid-fire goofy quad (11.17 / 11.42 / 11.70 / 11.94)
  { src: 'swaray-goofy', from: 11.17, to: 11.42, style: 'punch' },
  { src: 'ignored',      from: 11.42, to: 11.70, style: 'punch' },
  { src: 'stressed',     from: 11.70, to: 11.94, style: 'punch' },
  { src: 'goofy-group',  from: 11.94, to: 12.70, style: 'punch' },
  { src: 'ayesha',       from: 12.70, to: 13.70, style: 'punch' },
  { src: 'zeya-mirror',  from: 13.70, to: 15.16, style: 'punch' },
  { src: 'cute-group',   from: 15.16, to: 15.70, style: 'punch' },
  { src: 'swaray-tima',  from: 15.70, to: 16.70, style: 'punch' },
  { src: 'zeya-asuma',   from: 16.70, to: 17.46, style: 'punch' },
  { src: 'group1',       from: 17.46, to: 19.44, style: 'punch' },
  { src: 'swaray-beach', from: 19.44, to: 20.67, style: 'punch' },
  // — taper: elegant, crossfaded —
  { src: 'asuma-hadi',   from: 20.67, to: 22.18, style: 'fade' },
  { src: 'wedding',      from: 22.18, to: 24.26, style: 'fade' },
  { src: 'sunset',       from: 24.26, to: 26.60, style: 'fade' },
];

export const LOCKUP_FROM = 26.0;      // overlaps the last fade
export const DURATION = 31.09;

/** Original captions, eyebrow-style. */
export const CAPTIONS = [
  { text: 'once upon a time', from: 0.4,  to: 6.0 },
  { text: 'and then came everyone', from: 8.68, to: 12.6 },
];

/** Single source of truth shared by the Svelte site and the Remotion video,
 *  so the rendered intro and the page it lands on cannot drift apart. */
export const color = {
  ink: '#202322', inkDeep: '#111412', charcoal: '#3d3d3d',
  paper: '#f7f7f2', white: '#ffffff', bgGray: '#e9ecea', muted: '#6a706e',
  lilac: '#cdbdff', mint: '#80ffcc', peach: '#ff9b8a', gold: '#ffe58f', sky: '#9edcff',
  lilacInk: '#714ce2', mintInk: '#13784f', peachInk: '#c1371f',
  goldInk: '#7f6615', skyInk: '#1a6f9f'
} as const;

export const type = {
  sans: '"Satoshi Variable", Satoshi, ui-sans-serif, system-ui, Arial, sans-serif',
  mono: '"SFMono-Regular", ui-monospace, Consolas, monospace',
  displayWeight: 300, displayLineHeight: 0.82, displayTracking: '-0.075em',
  eyebrowTracking: '0.18em', eyebrowWeight: 720
} as const;

export const radius = { sm: 12, md: 22, lg: 32, pill: 999 } as const;

/** Source easing, as Remotion-ready bezier args. */
export const ease = {
  out: [0.16, 1, 0.30, 1],      // the signature, used 65x on the source
  glass: [0.22, 1, 0.36, 1],
  inOut: [0.40, 0, 0.20, 1]
} as const;

/** Chapter accents, in scroll order. */
export const chapters = [
  { n: '01', key: 'lilac', accent: color.lilac, ink: color.lilacInk },
  { n: '02', key: 'mint',  accent: color.mint,  ink: color.mintInk  },
  { n: '03', key: 'sky',   accent: color.sky,   ink: color.skyInk   },
  { n: '04', key: 'gold',  accent: color.gold,  ink: color.goldInk  },
  { n: '05', key: 'peach', accent: color.peach, ink: color.peachInk }
] as const;

export const fps = 30;

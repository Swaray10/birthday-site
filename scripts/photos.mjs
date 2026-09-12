/** Regenerate /static/photos and /static/footage from /files.
 *  Photos: 420/780/1080 in WebP + JPEG. Footage: mp4 copied + poster frame.
 *  Requires macOS `sips`, `cwebp`, and remotion's ffmpeg. */
import { execFileSync } from 'node:child_process';
import { mkdirSync, copyFileSync, existsSync } from 'node:fs';

export const PHOTOS = {
  'young-dress':  'tima young pic',
  'young-pink':   'tima signature young pic',
  'young-1':      'tima young 1',
  'teen':         'tima teen',
  'haja':         'Haja and tima',
  'aunt':         'tima and aunt',
  'zeya-cafe':    'Zeya and tima',
  'zeya-1':       'zeya and tima 1',
  'zeya-mirror':  'zeya and tima mirror',
  'hadii-cute':   'hadii and tima cute',
  'hadii-goofy':  'Hadii and tima goofy',
  'hadi-sunset':  'hadi and tima sunset',
  'hadi-final':   'hadi and tima final',
  'zaynab':       'tima and zaynab',
  'zaynab-sis':   'tima sis and zaynab',
  'ayesha':       'tima and Ayesha',
  'asuma-collage':'asuma and tima collage',
  'asuma-hadi':   'tima asuma hadi',
  'zeya-asuma':   'zeya tima and asuma',
  'foursome':     'tima asuma zeya and hadii',
  'swaray-1':     'swaray and tima1',
  'swaray-goofy': 'swaray and tima goofy',
  'swaray-serious':'swaray and tima serious',
  'swaray-cute':  'cute swaray and tima',
  'tjay':         'swaray tima and tjay',
  'cute-group':   'cute group',
  'goofy-group':  'goofy group',
  'group1':       'group1',
  'group2':       'group2',
  'wedding':      'hadi tima zeya asuma wedding guests',
  'shoot':        'hadi tima adn asuma shoot',
  'ignored':      'tima ignored',
  'stressed':     'tima sttressed',
  'taifou':       'taifou and tima',
  'swaray-2':     'swaray and tima2',
  'swaray-amp':   'swaray&tima',
  'sis-swaray':   'tima, sis swaray',
  'group-collage':'group collage',
  'zeya-2':       'zeya and tima 2',
  'shoot-car':    'birthdayshoot1',
  'shoot-roof':   'birthdayshoot2',
  'circle-selfie':'group pic must be there',
  'circle-carpet':'group3',
  'circle-six':   'group4',
  'singa-booba':  'singa booba and tima',
  'singa-shot':   'shot by singa use for singa wish "Happy birthday timaaaaaaaa"',
};

export const FOOTAGE = {
  'goofy-groupie':  'goofy groupie tima zeya asuma',
  'her-boys':       'tima and her boys goofy',
  'zeya-transition':'tima and zeya transition',
  'trio-goofy':     'tima asuma and zeya goofy',
  'dancing-wedding':'tima dancing wedding',
  'dancing':        'tima dancing',
  'beach-night':    'tima zaynab beach night',
  'zeya-carrying':  'zeya carrying tima',
  'hadi-tima':      'hadi and tima video',
  'alimu':          'tima and alimu homeboy homegirl',
};

if (import.meta.url === `file://${process.argv[1]}`) {
  mkdirSync('static/photos', { recursive: true });
  mkdirSync('static/footage', { recursive: true });
  for (const [slug, name] of Object.entries(PHOTOS)) {
    const src = `files/${name}.jpg`;
    if (!existsSync(src)) { console.warn(`MISSING photo: ${name}`); continue; }
    for (const w of [420, 780, 1080]) {
      execFileSync('sips', ['-Z', String(w), '-s', 'format', 'jpeg', '-s', 'formatOptions', '82',
        src, '--out', '/tmp/_r.jpg'], { stdio: 'ignore' });
      copyFileSync('/tmp/_r.jpg', `static/photos/${slug}-${w}.jpg`);
      execFileSync('cwebp', ['-quiet', '-q', '78', '/tmp/_r.jpg',
        '-o', `static/photos/${slug}-${w}.webp`], { stdio: 'ignore' });
    }
    console.log(`photo   ${slug.padEnd(15)} ← ${name}`);
  }
  for (const [slug, name] of Object.entries(FOOTAGE)) {
    const src = `files/${name}.mp4`;
    if (!existsSync(src)) { console.warn(`MISSING video: ${name}`); continue; }
    copyFileSync(src, `static/footage/${slug}.mp4`);
    execFileSync('npx', ['remotion', 'ffmpeg', '-ss', '0.5', '-i', src,
      '-frames:v', '1', '-q:v', '3', '-y', `static/footage/${slug}-poster.jpg`], { stdio: 'ignore' });
    console.log(`footage ${slug.padEnd(15)} ← ${name}`);
  }
}

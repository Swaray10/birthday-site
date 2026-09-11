<script lang="ts">
  import { Chapter, Display, Eyebrow, Float, FootageCard, Gallery, Intro, Orb, Photo, PillButton, WishCard, reveal } from '$lib';
  import { her, chapters, wishes, footage, photos, heroPhoto, heroFloats, closerPhotos, circlePhotos } from '$lib/content';
</script>

<svelte:head>
  <title>{her.name} is {her.age}</title>
  <meta name="description" content="A birthday site for {her.name}, turning {her.age}." />
</svelte:head>

<Intro />

<main id="main">
  <!-- 01 · HERO — lilac, the thin-huge-tight display -->
  <Chapter index={0} id={chapters[0].id} full>
    <Orb x="-8%"  y="-10%" size="52vmax" color="var(--lilac)" opacity={0.5} />
    <Orb x="58%"  y="42%"  size="40vmax" color="var(--mint)"  opacity={0.32}
         dx="-24px" dy="18px" dur="14s" />
    <div class="heroGrid">
      <div class="hero l-stack">
        <div style="--i:0" class="u-rise"><Eyebrow>{chapters[0].eyebrow}</Eyebrow></div>
        <Display as="h1" lines={chapters[0].lines} accentFrom={1} />
        <p class="t-lead u-rise" style="--i:3; animation-delay:.35s">{chapters[0].lead}</p>
        <div class="cta u-rise" style="animation-delay:.5s">
          <PillButton href="#photos" shine>Start her story</PillButton>
          <span class="t-small">{her.date}</span>
        </div>
      </div>

      <div class="heroArt u-rise" style="animation-delay:.25s">
        <div class="floatL">
          <Float rot={heroFloats[0].rot} rotMid={heroFloats[0].rotMid}
                 dur={heroFloats[0].dur} delay={heroFloats[0].delay}>
            <Photo name={heroFloats[0].name} ratio={heroFloats[0].ratio} alt=""
                   sizes="(max-width:720px) 34vw, 17vw" rounded="var(--r-md)" />
          </Float>
        </div>
        <div class="centre">
          <Photo name={heroPhoto.name} ratio={heroPhoto.ratio} alt={heroPhoto.alt}
                 priority sizes="(max-width:720px) 56vw, 26vw" />
        </div>
        <div class="floatR">
          <Float rot={heroFloats[1].rot} rotMid={heroFloats[1].rotMid}
                 dur={heroFloats[1].dur} delay={heroFloats[1].delay}>
            <Photo name={heroFloats[1].name} ratio={heroFloats[1].ratio} alt=""
                   sizes="(max-width:720px) 30vw, 15vw" rounded="var(--r-md)" />
          </Float>
        </div>
      </div>
    </div>
  </Chapter>

  <!-- 02 · PHOTOS — mint, float primitive on the cards -->
  <Chapter index={1} id={chapters[1].id}>
    <Orb x="70%" y="10%" size="38vmax" opacity={0.3} />
    <div class="l-stack u-reveal" use:reveal style="margin-bottom:var(--sp-5)">
      <Eyebrow n={chapters[1].n}>{chapters[1].eyebrow}</Eyebrow>
      <Display lines={chapters[1].lines} />
      <p class="t-lead">{chapters[1].lead}</p>
    </div>
    <Gallery items={photos} />
  </Chapter>

  <!-- 03 · WISHES — sky, dark mode, one wish popping after another -->
  <Chapter index={2} id={chapters[2].id} mode="dark">
    <Orb x="-10%" y="30%" size="46vmax" opacity={0.22} />
    <div class="l-stack u-reveal" use:reveal>
      <Eyebrow n={chapters[2].n}>{chapters[2].eyebrow}</Eyebrow>
      <Display lines={chapters[2].lines} />
      <p class="t-lead">{chapters[2].lead}</p>
    </div>
    <div class="wishes">
      {#each wishes as w, i}
        <WishCard wish={w} index={i} />
      {/each}
    </div>
  </Chapter>

  <!-- 04 · FOOTAGE — gold, videos static until played -->
  <Chapter index={3} id={chapters[3].id}>
    <div class="l-stack u-reveal" use:reveal style="margin-bottom:var(--sp-5)">
      <Eyebrow n={chapters[3].n}>{chapters[3].eyebrow}</Eyebrow>
      <Display lines={chapters[3].lines} />
      <p class="t-lead">{chapters[3].lead}</p>
    </div>
    <div class="clips">
      {#each footage as v, i}
        <FootageCard name={v.name} caption={v.caption} dur={v.dur} index={i} />
      {/each}
    </div>
  </Chapter>

  <!-- 05 · THE CIRCLE — peach, three group shots floating -->
  <Chapter index={4} id={chapters[4].id}>
    <Orb x="65%" y="8%" size="42vmax" opacity={0.35} />
    <div class="l-stack u-reveal" use:reveal>
      <Eyebrow n={chapters[4].n}>{chapters[4].eyebrow}</Eyebrow>
      <Display lines={chapters[4].lines} />
      <p class="t-lead">{chapters[4].lead}</p>
    </div>
    <div class="circleDeck u-reveal" use:reveal>
      {#each circlePhotos as ph, i}
        <figure class="circleCard" class:mid={i === 1}>
          <Float rot={['-5deg', '3deg', '-3.5deg'][i]} rotMid={['-2.5deg', '1.5deg', '-1.5deg'][i]}
                 dur={['7.5s', '9s', '8s'][i]} delay="{i * 0.6}s">
            <Photo name={ph.name} alt={ph.alt} ratio={ph.ratio}
                   sizes="(max-width:720px) 88vw, 30vw" rounded="var(--r-md)" />
          </Float>
          <figcaption>{ph.caption}</figcaption>
        </figure>
      {/each}
    </div>
  </Chapter>

  <!-- 06 · TWENTY — lilac again, full circle: her birthday shoot -->
  <Chapter index={5} id={chapters[5].id} full>
    <Orb x="20%" y="20%" size="56vmax" opacity={0.4} />
    <div class="closerGrid">
      <div class="l-stack closer u-reveal" use:reveal>
        <Eyebrow n={chapters[5].n}>{chapters[5].eyebrow}</Eyebrow>
        <Display as="h2" lines={chapters[5].lines} />
        <p class="t-lead">{chapters[5].lead}</p>
        <p class="t-small">Made by {her.from}.</p>
      </div>
      <div class="shootDeck u-reveal" use:reveal>
        {#each closerPhotos as ph, i}
          <figure class="shootCard">
            <Float rot={i === 0 ? '-5deg' : '4deg'} rotMid={i === 0 ? '-2.5deg' : '2deg'}
                   dur={i === 0 ? '7.5s' : '9s'} delay="{i * 0.7}s">
              <Photo name={ph.name} alt={ph.alt} ratio={ph.ratio}
                     sizes="(max-width:720px) 44vw, 22vw" rounded="var(--r-md)" />
            </Float>
            <figcaption>{ph.caption}</figcaption>
          </figure>
        {/each}
      </div>
    </div>
  </Chapter>
</main>

<style>
  .hero { position: relative; z-index: 1; }
  .hero :global(.t-display) { max-width: 14ch; }
  .hero .t-lead { max-width: 32ch; }
  .cta { display: flex; align-items: center; gap: var(--sp-3); flex-wrap: wrap; }
  .heroGrid { display: grid; gap: var(--sp-5); align-items: center; position: relative; z-index: 1; }
  @media (min-width: 860px) { .heroGrid { grid-template-columns: 1fr 0.92fr; gap: var(--sp-6); } }

  .heroArt { position: relative; display: grid; place-items: center;
             perspective: 1200px; padding-block: var(--sp-4); }
  .centre { width: min(58%, 290px); position: relative; z-index: 2; }
  .floatL, .floatR { position: absolute; z-index: 1; }
  .floatL { left: 4%;  top: 40%; width: min(34%, 172px); transform: translateY(-50%); }
  .floatR { right: 4%; top: 62%; width: min(31%, 156px); transform: translateY(-50%); }
  @media (max-width: 520px) {
    .centre { width: 60%; }
    .floatL { left: 2%;  width: 33%; top: 38%; }
    .floatR { right: 2%; width: 30%; top: 64%; }
  }
  .wishes { display: grid; gap: var(--sp-6); margin-top: var(--sp-6); }
  .clips { columns: 1; column-gap: var(--sp-3); }
  @media (min-width: 720px)  { .clips { columns: 2; } }
  @media (min-width: 1020px) { .clips { columns: 3; } }
  .closer { position: relative; z-index: 1; }
  .closer :global(.t-display) { max-width: 12ch; }
  .closerGrid { display: grid; gap: var(--sp-5); align-items: center; }
  @media (min-width: 860px) { .closerGrid { grid-template-columns: 1.1fr 1fr; gap: var(--sp-6); } }
  .shootDeck { display: grid; grid-template-columns: 1fr 1fr; gap: var(--sp-3);
               align-items: start; perspective: 1000px; }
  .shootCard { margin: 0; }
  .shootCard:last-child { margin-top: var(--sp-5); }
  .circleDeck { display: grid; gap: var(--sp-4); margin-top: var(--sp-6);
                perspective: 1200px; }
  @media (min-width: 720px) {
    .circleDeck { grid-template-columns: 1fr 1fr 1fr; align-items: start; }
    .circleCard.mid { margin-top: var(--sp-6); }
  }
  .circleCard { margin: 0; }
  .circleCard figcaption, .shootCard figcaption { font-family: var(--font-mono); font-size: var(--fs-eyebrow);
                          letter-spacing: 0.1em; text-transform: uppercase;
                          color: var(--muted); padding-top: 0.6rem; text-align: center; }
</style>

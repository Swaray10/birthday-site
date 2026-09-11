<script lang="ts">
  import Photo from './Photo.svelte';
  import { reveal } from './reveal';
  import type { Wish } from '../content';
  /** One wish: the photo of that person WITH her, then the message.
   *  Cards alternate sides and pop in sequence as she scrolls. */
  let { wish, index = 0 }: { wish: Wish; index?: number } = $props();
  let audioEl: HTMLAudioElement | undefined = $state();
  let playing = $state(false);
  let missing = $state(false);
  function toggle() {
    if (!audioEl) return;
    if (playing) { audioEl.pause(); playing = false; }
    else audioEl.play().then(() => (playing = true)).catch(() => (missing = true));
  }
</script>

<article class="wish u-reveal" class:flip={index % 2 === 1} style="--i:{index % 2}" use:reveal={{ threshold: 0.3 }}>
  <div class="photo">
    <Photo name={wish.photo} alt={wish.alt} ratio={wish.ratio}
           sizes="(max-width:720px) 88vw, 34vw" rounded="var(--r-md)" />
  </div>
  <div class="body s-glass">
    <span class="who">{String(index + 1).padStart(2, '0')} / {wish.from}</span>
    {#if wish.kind === 'audio'}
      <p class="text">{wish.text}</p>
      <p class="t-small">…and she pressed record too:</p>
      <div class="player">
        <button class="pp" onclick={toggle} aria-label={playing ? 'Pause voice note' : 'Play voice note'}>
          {#if playing}<span class="pause"></span>{:else}<span class="tri"></span>{/if}
        </button>
        <span class="bars" class:live={playing} aria-hidden="true">
          {#each Array(14) as _, i}<i style="--i:{i}"></i>{/each}
        </span>
        {#if missing}<span class="note">voice note coming soon</span>
        {:else}<span class="note">a voice note from {wish.from}</span>{/if}
        <audio bind:this={audioEl} src={wish.audioSrc} preload="none"
               onended={() => (playing = false)}></audio>
      </div>
    {:else if wish.kind === 'photo'}
      <p class="text">“{wish.text}”</p>
      <div class="shot">
        <Photo name={wish.extraPhoto ?? ''} alt={wish.extraAlt ?? ''} ratio={wish.extraRatio ?? 0.75}
               sizes="(max-width:720px) 74vw, 26vw" rounded="var(--r-sm)" />
        <span class="credit">shot by {wish.from}</span>
      </div>
    {:else}
      <p class="text" class:long={(wish.text?.length ?? 0) > 360}
         class:ph={wish.placeholder}>“{wish.text}”</p>
    {/if}
  </div>
</article>

<style>
  .wish { display: grid; gap: var(--sp-3); align-items: center; }
  @media (min-width: 720px) {
    .wish { grid-template-columns: 0.9fr 1.1fr; gap: var(--sp-5); }
    .wish.flip .photo { order: 2; }
  }
  .photo { max-width: 340px; justify-self: center; }
  @media (min-width: 720px) { .photo { justify-self: stretch; } }
  .body { padding: 1.6rem; display: grid; gap: 0.9rem; }
  .who { font-family: var(--font-mono); font-size: var(--fs-eyebrow);
         font-weight: var(--fw-bold); letter-spacing: var(--ls-eyebrow);
         text-transform: uppercase; color: var(--chapter); }
  .text { font-size: var(--fs-h3); font-weight: var(--fw-medium);
          line-height: 1.3; letter-spacing: -0.02em; white-space: pre-line; }
  .text.long { font-size: var(--fs-lead); font-weight: var(--fw-body);
               line-height: 1.55; letter-spacing: 0; color: var(--ink); }
  .text.ph { opacity: 0.45; font-style: italic; }
  .player { display: flex; align-items: center; gap: 0.9rem; }
  .pp { width: 3rem; height: 3rem; border-radius: var(--r-circle); border: 0;
        background: var(--chapter); cursor: pointer; display: grid; place-items: center; flex: none; }
  .tri { width: 0; height: 0; border-style: solid; border-width: 8px 0 8px 13px;
         border-color: transparent transparent transparent #202322; margin-left: 3px; }
  .pause { width: 12px; height: 14px;
           border-left: 4px solid #202322; border-right: 4px solid #202322; }
  .bars { display: flex; align-items: center; gap: 3px; height: 26px; }
  .bars i { width: 3px; height: 30%; border-radius: 999px; background: var(--chapter); opacity: 0.55; }
  .bars.live i { animation: wave 0.9s ease-in-out calc(var(--i) * 70ms) infinite alternate; }
  @keyframes wave { from { height: 22%; } to { height: 100%; } }
  .note { font-size: var(--fs-small); color: var(--muted); }
  .shot { max-width: 300px; display: grid; gap: 0.45rem; }
  .credit { font-family: var(--font-mono); font-size: 0.625rem; letter-spacing: 0.12em;
            text-transform: uppercase; color: var(--muted); }
  @media (prefers-reduced-motion: reduce) { .bars.live i { animation: none; } }
</style>

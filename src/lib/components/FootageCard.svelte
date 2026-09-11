<script lang="ts">
  import { reveal } from './reveal';
  /** A video that stays a still until she presses play. */
  let { name, caption, dur = '', index = 0 }:
    { name: string; caption: string; dur?: string; index?: number } = $props();
  let started = $state(false);
  let videoEl: HTMLVideoElement | undefined = $state();
  function start() {
    started = true;
    queueMicrotask(() => videoEl?.play().catch(() => {}));
  }
</script>

<figure class="clip u-reveal" style="--i:{index % 4}" use:reveal>
  <div class="frame">
    {#if started}
      <video bind:this={videoEl} src="/footage/{name}.mp4" controls playsinline
             poster="/footage/{name}-poster.jpg"></video>
    {:else}
      <img src="/footage/{name}-poster.jpg" alt={caption} loading="lazy" />
      <button class="playCover" onclick={start} aria-label="Play: {caption}">
        <span class="pp"><span class="tri"></span></span>
        {#if dur}<span class="dur">{dur}</span>{/if}
      </button>
    {/if}
  </div>
  <figcaption>{caption}</figcaption>
</figure>

<style>
  .clip { margin: 0; break-inside: avoid; margin-bottom: var(--sp-3); }
  .frame { position: relative; border-radius: var(--r-md); overflow: hidden;
           background: var(--ink-deep); box-shadow: var(--shadow-soft); }
  img, video { width: 100%; display: block; }
  .playCover { position: absolute; inset: 0; border: 0; cursor: pointer;
               background: linear-gradient(180deg, transparent 40%, rgb(17 20 18 / 0.55));
               display: grid; place-items: center; }
  .pp { width: 3.4rem; height: 3.4rem; border-radius: var(--r-circle);
        background: rgb(255 255 255 / 0.92); display: grid; place-items: center;
        box-shadow: 0 10px 32px rgb(17 20 18 / 0.4);
        transition: transform var(--d-fast) var(--ease); }
  .playCover:hover .pp { transform: scale(1.08); }
  .tri { width: 0; height: 0; border-style: solid; border-width: 9px 0 9px 15px;
         border-color: transparent transparent transparent #202322; margin-left: 4px; }
  .dur { position: absolute; right: 0.8rem; bottom: 0.8rem;
         font-family: var(--font-mono); font-size: 0.6875rem; letter-spacing: 0.08em;
         color: #f4f6f4; background: rgb(17 20 18 / 0.65); padding: 0.25rem 0.6rem;
         border-radius: var(--r-pill); }
  figcaption { font-family: var(--font-mono); font-size: var(--fs-eyebrow);
               letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted);
               padding-top: 0.6rem; }
  @media (prefers-reduced-motion: reduce) { .playCover:hover .pp { transform: none; } }
</style>

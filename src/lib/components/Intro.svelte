<script lang="ts">
  import { onMount } from 'svelte';
  /** The intro is now a 31s montage WITH sound, so it cannot autoplay —
   *  browsers require a gesture for audio. Instead of a muted fallback we
   *  make the gesture the moment: a cover with her childhood photo and one
   *  play button. localStorage (not sessionStorage) remembers; ?intro
   *  replays; a hash deep-link skips; Escape always exits. */
  let { src = '/intro', poster = '/intro-poster.jpg' } = $props();

  let stage: 'hidden' | 'cover' | 'playing' = $state('hidden');
  let portrait = $state(false);
  let videoEl: HTMLVideoElement | undefined = $state();
  const file = $derived(portrait ? `${src}-vertical` : src);
  const KEY = 'birthday-intro-seen-v1';

  function done() {
    stage = 'hidden';
    try { localStorage.setItem(KEY, '1'); } catch {}
    document.documentElement.style.removeProperty('overflow');
  }

  function play() {
    stage = 'playing';
    // el mounts on next tick; play() here is inside the user gesture
    queueMicrotask(() => videoEl?.play().catch(done));
  }

  onMount(() => {
    const force = new URLSearchParams(location.search).has('intro');
    if (force) { try { localStorage.removeItem(KEY); } catch {} }
    let seen = false;
    try { seen = localStorage.getItem(KEY) === '1'; } catch {}
    const deepLink = location.hash.length > 1;
    if (!force && (seen || deepLink)) return;

    portrait = matchMedia('(orientation: portrait)').matches && innerWidth < 900;
    stage = 'cover';
    document.documentElement.style.overflow = 'hidden';
  });

  function onKey(e: KeyboardEvent) { if (e.key === 'Escape' && stage !== 'hidden') done(); }
</script>

<svelte:window on:keydown={onKey} />

{#if stage !== 'hidden'}
  <div class="intro" role="dialog" aria-label="Birthday intro" aria-modal="true">
    {#if stage === 'cover'}
      <img class="coverBg" src={poster} alt="" />
      <div class="veil"></div>
      <div class="coverUi">
        <span class="eyebrow">For Fatima</span>
        <h2 class="coverTitle">Twenty years,<br /><span>thirty-one seconds.</span></h2>
        <button class="playBtn" onclick={play}>
          <span class="tri" aria-hidden="true"></span> Play her story
        </button>
        <button class="skip" onclick={done}>Skip for now</button>
      </div>
    {:else}
      <video bind:this={videoEl} playsinline {poster} onended={done} onerror={done}>
        <source src="{file}.webm" type="video/webm" />
        <source src="{file}.mp4" type="video/mp4" />
      </video>
      <button class="skip floating" onclick={done}>Skip ›</button>
    {/if}
  </div>
{/if}

<style>
  .intro { position: fixed; inset: 0; z-index: 100; background: var(--ink-deep); }
  video, .coverBg { position: absolute; inset: 0; width: 100%; height: 100%;
                    object-fit: contain; background: var(--ink-deep); }
  .coverBg { object-fit: cover; filter: blur(26px) brightness(0.45) saturate(1.1);
             transform: scale(1.12); }
  .veil { position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 42%, transparent 0%, rgb(17 20 18 / 0.55) 78%); }

  .coverUi { position: absolute; inset: 0; display: grid; place-content: center;
             justify-items: center; gap: 1.1rem; text-align: center; padding: 2rem; }
  .eyebrow { font-family: var(--font-mono); font-size: var(--fs-eyebrow);
             font-weight: var(--fw-bold); letter-spacing: var(--ls-eyebrow);
             text-transform: uppercase; color: var(--lilac); }
  .coverTitle { font-family: var(--font-sans); font-size: clamp(2rem, 7vw, 3.6rem);
                font-weight: 300; line-height: 0.9; letter-spacing: -0.05em;
                color: #f4f6f4; text-wrap: balance; }
  .coverTitle span { color: var(--lilac); }

  .playBtn { display: inline-flex; align-items: center; gap: 0.8rem; margin-top: 0.5rem;
             padding: 0.95rem 2rem; border: 0; border-radius: var(--r-pill);
             background: var(--lilac); color: #202322; font-weight: var(--fw-medium);
             font-size: 1.05rem; cursor: pointer;
             box-shadow: 0 12px 40px rgb(205 189 255 / 0.35);
             transition: transform var(--d-fast) var(--ease); }
  .playBtn:hover { transform: translateY(-2px); }
  .tri { width: 0; height: 0; border-style: solid; border-width: 7px 0 7px 12px;
         border-color: transparent transparent transparent #202322; }

  .skip { background: none; border: 0; color: rgb(244 246 244 / 0.6);
          font-size: 0.875rem; cursor: pointer; padding: 0.5rem 1rem; }
  .skip:hover { color: #f4f6f4; }
  .skip.floating { position: absolute; top: max(1rem, env(safe-area-inset-top));
                   right: 1rem; background: rgb(255 255 255 / 0.08);
                   border-radius: var(--r-pill);
                   -webkit-backdrop-filter: var(--glass-blur); backdrop-filter: var(--glass-blur); }
  @media (prefers-reduced-motion: reduce) { .playBtn:hover { transform: none; } }
</style>

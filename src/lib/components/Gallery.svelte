<script lang="ts">
  import Photo from './Photo.svelte';
  import { reveal } from './reveal';
  /** Column-balanced gallery. Motion is deliberately restrained here — the
   *  source floats two or three hero objects, never a whole grid. Each tile
   *  gets `rise` on arrival and a lift on hover, nothing looping. */
  let { items = [] }: { items: { name: string; alt: string; ratio: number; caption: string }[] } = $props();
</script>

<div class="grid">
  {#each items as p, i}
    <figure class="tile u-reveal" style="--i:{i % 3}" use:reveal>
      <Photo name={p.name} alt={p.alt} ratio={p.ratio} sizes="(max-width:520px) 92vw, (max-width:1020px) 46vw, 30vw" />
      <figcaption>{p.caption}</figcaption>
    </figure>
  {/each}
</div>

<style>
  .grid { columns: 1; column-gap: var(--sp-2); }
  @media (min-width: 520px)  { .grid { columns: 2; } }
  @media (min-width: 1020px) { .grid { columns: 3; column-gap: var(--sp-3); } }
  .tile {
    break-inside: avoid; margin-bottom: var(--sp-2); position: relative;
    transition: transform var(--d-base) var(--ease);
  }
  @media (min-width: 1020px) { .tile { margin-bottom: var(--sp-3); } }
  .tile:hover { transform: translateY(-4px); }
  figcaption {
    font-family: var(--font-mono); font-size: var(--fs-eyebrow);
    letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted);
    padding-top: 0.6rem;
  }
  @media (prefers-reduced-motion: reduce) { .tile:hover { transform: none; } }
</style>

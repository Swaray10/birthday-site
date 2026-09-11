<script lang="ts">
  /** A numbered scroll chapter. Owns its accent (the confetti-per-chapter
      idea) and can flip to the source's dark cinematic mode. */
  import { chapters } from '../design/tokens';
  let { children, index = 0, mode = 'light', id = '', full = false }:
    { children?: any; index?: number; mode?: 'light' | 'dark'; id?: string; full?: boolean } = $props();
  const c = $derived(chapters[index % chapters.length]);
</script>
<section
  {id}
  class="l-chapter"
  class:full
  data-mode={mode === 'dark' ? 'dark' : undefined}
  style="--chapter:{c.accent}; --chapter-ink:{mode === 'dark' ? c.accent : c.ink};"
>
  <div class="l-wrap">{@render children?.()}</div>
</section>
<style>
  section { background: var(--paper); color: var(--ink); transition: background var(--d-slow) var(--ease); }
  .full { min-height: 100svh; display: grid; align-items: center; }
</style>

<script lang="ts">
  /** Two-tone display headline. `lines` = plain lines, `accentFrom` = index
      at which lines switch to the chapter accent (the source's move). */
  let { lines = [], accentFrom = 1, as = 'h2', stagger = true }:
    { lines?: string[]; accentFrom?: number; as?: string; stagger?: boolean } = $props();
</script>
<svelte:element this={as} class="t-display {stagger ? 'u-stagger' : ''}">
  {#each lines as line, i}
    <span class="line" class:accent={i >= accentFrom} style="--i:{i}">{line}</span>
  {/each}
</svelte:element>
<style>
  .line { display: block; }
</style>

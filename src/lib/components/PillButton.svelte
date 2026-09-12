<script lang="ts">
  let { children, href = '', variant = 'solid', shine = false, dot = '↗' }:
    { children?: any; href?: string; variant?: 'solid' | 'ghost'; shine?: boolean; dot?: string } = $props();
</script>
<svelte:element this={href ? 'a' : 'button'} {href} class="pill {variant}" class:u-shine={shine}>
  <span class="label">{@render children?.()}</span>
  <span class="dot" aria-hidden="true">{dot}</span>
</svelte:element>
<style>
  .pill {
    position: relative; overflow: hidden; isolation: isolate;
    display: inline-flex; align-items: center; gap: 0.75rem;
    padding: 0.7rem 0.7rem 0.7rem 1.4rem;
    border-radius: var(--r-pill); border: 1px solid transparent;
    font-weight: var(--fw-medium); text-decoration: none; cursor: pointer;
    transition: transform var(--d-fast) var(--ease), box-shadow var(--d-fast) var(--ease);
  }
  .solid { background: var(--chapter); color: var(--ink); box-shadow: var(--shadow-soft); }
  .ghost { background: transparent; border-color: var(--line); color: var(--ink); }
  .pill:hover { transform: translateY(-2px); box-shadow: var(--shadow-lift); }
  .pill:active { transform: translateY(0); }
  .dot {
    display: grid; place-items: center; width: 2rem; height: 2rem;
    border-radius: var(--r-circle); background: var(--ink); color: var(--paper);
    font-size: 0.8rem; flex: none;
  }
  .ghost .dot { background: var(--chapter); color: var(--ink); }
  @media (prefers-reduced-motion: reduce) { .pill:hover { transform: none; } }
</style>

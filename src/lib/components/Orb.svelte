<script lang="ts">
  /** Ambient background glow. The source layers 2–3 per section at low
      opacity with different drift vectors and durations. */
  let { color = 'var(--chapter)', size = '46vmax', x = '10%', y = '18%',
        dx = '28px', dy = '-20px', ds = 1.08, dur = 'var(--d-drift)', opacity = 0.42 } = $props();
</script>
<div
  class="orb u-drift"
  aria-hidden="true"
  style="--dx:{dx}; --dy:{dy}; --ds:{ds};
         inline-size:{size}; block-size:{size}; left:{x}; top:{y};
         background:radial-gradient(circle, {color} 0%, transparent 68%);
         opacity:{opacity}; animation-duration:{dur};"
></div>
<style>
  .orb { position: absolute; border-radius: var(--r-circle); filter: blur(42px);
         pointer-events: none; z-index: 0; will-change: transform; }
</style>

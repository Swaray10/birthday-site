<script lang="ts">
  /** Wraps a card/photo in the source's float: Y-lift *plus* a rotation
      change, which is what makes it read as 3D rather than a bob. */
  let { children, rot = '-6deg', rotMid = '-3.5deg', lift = '-13px',
        dur = 'var(--d-float)', delay = '0s' } = $props();
</script>
<div class="float u-float"
     style="--rot:{rot}; --rot-mid:{rotMid}; --lift:{lift};
            animation-duration:{dur}; animation-delay:{delay};">
  {@render children?.()}
</div>
<style>
  .float { will-change: transform; transform-style: preserve-3d; }
</style>

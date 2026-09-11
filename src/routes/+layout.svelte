<script lang="ts">
  import '$lib/design/tokens.css';
  import '$lib/design/base.css';
  import '$lib/design/motion.css';
  let { children } = $props();
</script>
<a class="u-skip" href="#main">Skip to content</a>
{@render children?.()}

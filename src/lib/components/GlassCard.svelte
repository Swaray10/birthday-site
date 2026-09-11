<script lang="ts">
  let { children, pad = '1.5rem' }: { children?: any; pad?: string } = $props();
</script>
<div class="s-glass" style="padding:{pad}">{@render children?.()}</div>

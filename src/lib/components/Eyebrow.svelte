<script lang="ts">
  let { children, n = '' }: { children?: any; n?: string } = $props();
</script>
<span class="t-eyebrow">{#if n}{n} /{/if} {@render children?.()}</span>

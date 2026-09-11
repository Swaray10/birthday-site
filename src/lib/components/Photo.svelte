<script lang="ts">
  /** Responsive picture: WebP with JPEG fallback, three widths, and an
   *  explicit aspect-ratio so nothing shifts while it loads. */
  let { name, alt = '', ratio = 0.75, sizes = '(max-width:720px) 92vw, 32vw',
        priority = false, rounded = 'var(--r-lg)' }:
    { name: string; alt?: string; ratio?: number; sizes?: string;
      priority?: boolean; rounded?: string } = $props();
  const w = [420, 780, 1080];
  const set = (ext: string) => w.map((x) => `/photos/${name}-${x}.${ext} ${x}w`).join(', ');
</script>

<picture>
  <source type="image/webp" srcset={set('webp')} {sizes} />
  <img
    src="/photos/{name}-780.jpg" srcset={set('jpg')} {sizes} {alt}
    loading={priority ? 'eager' : 'lazy'}
    fetchpriority={priority ? 'high' : 'auto'}
    decoding="async"
    style="aspect-ratio:{ratio}; border-radius:{rounded}"
  />
</picture>

<style>
  picture { display: block; }
  img { width: 100%; height: auto; object-fit: cover; display: block;
        background: var(--bg-gray); box-shadow: var(--shadow-soft); }
</style>

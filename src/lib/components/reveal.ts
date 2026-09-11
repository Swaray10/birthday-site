/** Svelte action: adds .is-in when the element scrolls into view, so the
 *  `rise` entrance fires on arrival rather than on mount. */
export function reveal(node: HTMLElement, opts: { threshold?: number; once?: boolean } = {}) {
  const { threshold = 0.18, once = true } = opts;
  if (typeof IntersectionObserver === 'undefined') { node.classList.add('is-in'); return; }
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { node.classList.add('is-in'); return; }
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { node.classList.add('is-in'); if (once) io.unobserve(node); }
      else if (!once) node.classList.remove('is-in');
    }),
    { threshold }
  );
  io.observe(node);
  return { destroy: () => io.disconnect() };
}

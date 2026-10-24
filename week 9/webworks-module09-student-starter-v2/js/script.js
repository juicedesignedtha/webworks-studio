/* WebWorks Studio — Module 9
   Mission City Makers Market

   Alpine.js owns the maker filtering interaction in index.html.
   Splide.js presents the filtered maker cards as a responsive carousel.
   Preline UI owns the FAQ accordion in index.html.

   The observer refreshes Splide after Alpine adds/removes slides in response
   to category or keyword filters. If the filter returns no slides, Splide is
   safely destroyed; it mounts again when matching slides return.
*/
(() => {
  const instances = new WeakMap();
  const observers = new WeakMap();

  function slideCount(root) {
    return root.querySelectorAll('.splide__list > .splide__slide').length;
  }

  function mountOrRefresh(root) {
    if (!root || !window.Splide) return;

    const existing = instances.get(root);
    const count = slideCount(root);

    if (count === 0) {
      if (existing) {
        existing.destroy(true);
        instances.delete(root);
      }
      return;
    }

    if (existing) {
      existing.refresh();
      return;
    }

    const carousel = new window.Splide(root, {
      type: 'slide',
      perPage: 3,
      perMove: 1,
      gap: '1.25rem',
      rewind: true,
      arrows: true,
      pagination: true,
      keyboard: 'focused',
      breakpoints: {
        1024: { perPage: 2, gap: '1rem' },
        640: { perPage: 1, gap: '0.75rem' }
      },
      i18n: {
        prev: 'Previous makers',
        next: 'Next makers',
        first: 'Go to first maker slide',
        last: 'Go to last maker slide',
        slideX: 'Go to slide %s',
        pageX: 'Go to page %s',
        carousel: 'Featured local makers',
        slide: 'maker slide',
        select: 'Select a maker slide'
      }
    });

    carousel.mount();
    instances.set(root, carousel);

    if (!observers.has(root)) {
      const list = root.querySelector('.splide__list');
      if (list) {
        const observer = new MutationObserver(() => {
          // Wait for Alpine's DOM update to finish before refreshing Splide.
          queueMicrotask(() => mountOrRefresh(root));
        });
        observer.observe(list, { childList: true });
        observers.set(root, observer);
      }
    }
  }

  window.initMakerSplide = mountOrRefresh;
})();

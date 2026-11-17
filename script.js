// Sketchbook lightbox: click a piece to see it larger, arrow keys to flip through.
(function () {
  const pieces = Array.from(document.querySelectorAll('.piece'));
  const box = document.querySelector('.lightbox');
  if (!box || !pieces.length || typeof box.showModal !== 'function') return;

  const img = box.querySelector('img');
  const title = box.querySelector('.lb-title');
  const sub = box.querySelector('.lb-sub');
  let current = 0;

  function show(i) {
    current = (i + pieces.length) % pieces.length;
    const p = pieces[current];
    const src = p.querySelector('img');
    img.src = src.getAttribute('src');
    img.alt = src.alt;
    title.textContent = p.dataset.title || '';
    sub.textContent = [p.dataset.medium, p.dataset.year].filter(Boolean).join(', ');
  }

  pieces.forEach((p, i) => {
    p.querySelector('.piece-btn').addEventListener('click', () => { show(i); box.showModal(); });
  });

  box.querySelector('.lb-close').addEventListener('click', () => box.close());
  box.querySelector('.lb-prev').addEventListener('click', () => show(current - 1));
  box.querySelector('.lb-next').addEventListener('click', () => show(current + 1));
  box.addEventListener('click', (e) => { if (e.target === box) box.close(); });
  box.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
})();

const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '×' : '☰';
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {links.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';}));
}
const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();
if (document.body.dataset.videoReady === 'true') {
  const player = document.getElementById('introVideo');
  const placeholder = document.getElementById('videoPlaceholder');
  if (player && placeholder) { placeholder.hidden = true; player.hidden = false; }
}

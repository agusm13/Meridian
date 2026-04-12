// ── VIEW SWITCHING ──────────────────────────────────────────────
function showView(id, btn, title, bc) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const v = document.getElementById('view-' + id);
  if (v) v.classList.add('active');

  if (title) document.getElementById('page-title').textContent = title;
  if (bc)    document.getElementById('page-bc').textContent    = bc;

  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  // Find the nav item by onclick attribute content
  document.querySelectorAll('.nav-item').forEach(n => {
    const fn = n.getAttribute('onclick') || '';
    if (fn.includes("'" + id + "'")) n.classList.add('active');
  });
}

// ── DRAWER ──────────────────────────────────────────────────────
function openDrawer() {
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('drawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('drawer').classList.remove('open');
  document.body.style.overflow = '';
}

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeDrawer();
});

// ── FILTER CHIPS ─────────────────────────────────────────────────
function filterClick(el) {
  const siblings = [...el.parentElement.children].filter(c => c.classList.contains('fchip'));
  siblings.forEach(s => s.classList.remove('active'));
  el.classList.add('active');
}

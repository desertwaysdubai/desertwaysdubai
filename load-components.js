// Load navbar
fetch('navbar.html')
  .then(r => r.text())
  .then(html => {
    const slot = document.getElementById('navbar-container');
    if (slot) slot.innerHTML = html;
  })
  .catch(() => { /* fail silently */ });

// Load footer
fetch('footer.html')
  .then(r => r.text())
  .then(html => {
    const slot = document.getElementById('footer-container');
    if (slot) slot.innerHTML = html;
  })
  .catch(() => { /* fail silently */ });

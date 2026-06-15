// Function to load HTML component into a container
function loadComponent(url, containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with ID "${containerId}" not found`);
    return Promise.resolve();
  }

  return fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`Failed to load ${url}`);
      return response.text();
    })
    .then(html => {
      container.innerHTML = html;
    })
    .catch(error => {
      console.error(`Error loading ${url}:`, error);
    });
}

// Load navbar and footer, then notify scripts
Promise.all([
  loadComponent('navbar.html', 'navbar-container'),
  loadComponent('footer.html', 'footer-container')
]).then(() => {
  document.dispatchEvent(new CustomEvent('componentsLoaded'));
});

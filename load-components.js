// Function to load HTML component into a container
function loadComponent(url, containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with ID "${containerId}" not found`);
    return;
  }

  fetch(url)
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

// Load navbar
loadComponent('navbar.html', 'navbar-container');

// Load footer
loadComponent('footer.html', 'footer-container');

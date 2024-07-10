document.addEventListener("DOMContentLoaded", () => {
  const loadPartial = (selector, url) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
        }
        return response.text();
      })
      .then(data => {
        document.querySelector(selector).innerHTML = data;
        console.log(`Loaded partial: ${url}`);
      })
      .catch(error => console.error('Error loading partial:', error));
  };

  loadPartial('#header-placeholder', 'partials/header.html');
  loadPartial('#footer-placeholder', 'partials/footer.html');
  
});

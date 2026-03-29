/**
 * Utility to wait for all current images in the DOM to be loaded.
 * Useful for ensuring a page is visually ready before hiding a loader.
 */
export const waitForImages = () => {
  const images = Array.from(document.querySelectorAll('img'));
  
  if (images.length === 0) {
    return Promise.resolve();
  }

  const promises = images.map(img => {
    if (img.complete) return Promise.resolve();
    
    return new Promise(resolve => {
      img.addEventListener('load', resolve, { once: true });
      img.addEventListener('error', resolve, { once: true }); // Still resolve on error to avoid hanging
    });
  });

  // Adding a max timeout of 3 seconds so the loader doesn't hang forever on broken images
  const timeout = new Promise(resolve => setTimeout(resolve, 3000));

  return Promise.race([Promise.all(promises), timeout]);
};

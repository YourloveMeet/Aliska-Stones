/**
 * Preloads a list of image URLs with progress reporting.
 * Useful for critical assets that need to be ready before the UI is shown.
 */
export const preloadImages = (urls, onProgress) => {
  if (!urls || urls.length === 0) {
    if (onProgress) onProgress(100);
    return Promise.resolve();
  }

  let loadedCount = 0;
  const totalCount = urls.length;

  const updateProgress = () => {
    loadedCount++;
    if (onProgress) {
      const percentage = Math.round((loadedCount / totalCount) * 100);
      onProgress(percentage);
    }
  };

  const promises = urls.map(url => {
    return new Promise(resolve => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        updateProgress();
        resolve();
      };
      img.onerror = () => {
        updateProgress();
        resolve(); // Resolve anyway to avoid hanging
      };
    });
  });

  // Adding a max timeout of 6 seconds for critical preloading
  const timeout = new Promise(resolve => setTimeout(resolve, 6000));

  return Promise.race([Promise.all(promises), timeout]);
};

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

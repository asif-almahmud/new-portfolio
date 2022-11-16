export const elementVisibleInPercent = (element: HTMLElement) => {
  return new Promise((resolve, reject) => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          resolve(Math.floor(entry.intersectionRatio * 100));
          clearTimeout(timeout);
          observer.disconnect();
        });
      }
    );

    observer.observe(element);
    // Probably not needed, but in case something goes wrong.
    const timeout = setTimeout(() => {
      reject();
    }, 500);
  });
};

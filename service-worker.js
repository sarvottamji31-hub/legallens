self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("legallens").then(cache => {
      return cache.addAll([
        "index.html",
        "style.css",
        "script.js"
      ]);
    })
  );
});

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("legallens").then(cache =>
      cache.addAll(["index.html","style.css","script.js"])
    )
  );
});

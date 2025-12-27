self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("brogang-mail").then(cache => {
      return cache.addAll(["index.html"]);
    })
  );
});

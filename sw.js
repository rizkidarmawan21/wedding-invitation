const cacheName = "WeddingInvitation"
const preCache = ["/", "/alpine/app.js"]

self.addEventListener("install", (e) => {
    console.log("service worker installed")

    e.waitUntil(
        (async () => {
            const cache = await caches.open(cacheName)
            cache.addAll(preCache)
        })(),
    )
})

self.addEventListener("activate", (e) => {
    console.log("service worker activated")
})

self.addEventListener("fetch", (e) => {
    e.respondWith(
        (async () => {
            // Check if the request is from a Chrome extension
            if (e.request.url.startsWith('chrome-extension://')) {
                return fetch(e.request);
            }

            const cache = await caches.open(cacheName);
            const resCache = await cache.match(e.request);

            if (resCache) return resCache;

            try {
                const res = await fetch(e.request);

                // Only cache responses with a status code of 200
                if (res.status === 200) {
                    cache.put(e.request, res.clone());
                }

                return res;
            } catch (error) {
                console.log(error);
            }
        })()
    );
});

// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA

const {location} = window;

const {
    NODE_ENV: productionMode,
    PUBLIC_URL: publicUrlString,
} = process.env;

const {serviceWorker} = navigator;

const isLocalHost = (() => {
    const {hostname} = location;
    return !!(hostname === "localhost" ||
        // [::1] is the IPv6 localhost address.
        hostname === "[::1]" ||
        // 127.0.0.1/8 is considered localhost for IPv4.
        hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
    );
})();

type Config = {
    onSuccess?: (registration: ServiceWorkerRegistration) => void;
    onUpdate?: (registration: ServiceWorkerRegistration) => void;
};

export function register(config?: Config) {
    if (productionMode === "production" && serviceWorker) {
        // The URL constructor is available in all browsers that support SW.
        const publicUrl = new URL(publicUrlString, location.href);
        if (publicUrl.origin !== location.origin) {
            // Our service worker won't work if PUBLIC_URL is on a different origin
            // from what our page is served on. This might happen if a CDN is used to
            // serve assets; see https://github.com/facebook/create-react-app/issues/2374
            return;
        }
        
        window.addEventListener("load", async () => {
            const swUrl = `${publicUrlString}/service-worker.js`;
            
            if (isLocalHost) {
                // This is running on localhost. Let's check if a service worker still exists or not.
                await checkValidServiceWorker(swUrl, config);
                
                // Add some additional logging to localhost, pointing developers to the
                // service worker/PWA documentation.
                await serviceWorker.ready;
                console.log("This web app is being served cache-first by a service worker. " +
                    "To learn more, visit https://bit.ly/CRA-PWA");
            } else {
                // Is not localhost. Just register service worker
                await registerValidSW(swUrl, config);
            }
        });
    }
}

async function registerValidSW(swUrl: string, config?: Config) {
    try {
        const registration = await serviceWorker.register(swUrl);
        registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            if (installingWorker === null) {
                return;
            }
            installingWorker.onstatechange = () => {
                if (installingWorker.state === "installed") {
                    if (serviceWorker.controller) {
                        // At this point, the updated precached content has been fetched,
                        // but the previous service worker will still serve the older
                        // content until all client tabs are closed.
                        console.log(
                            "New content is available and will be used when all tabs for this page are closed. " +
                            "See https://bit.ly/CRA-PWA.");
                        
                        // Execute callback
                        if (config && config.onUpdate) {
                            config.onUpdate(registration);
                        }
                    } else {
                        // At this point, everything has been precached.
                        // It's the perfect time to display a
                        // "Content is cached for offline use." message.
                        console.log("Content is cached for offline use.");
                        
                        // Execute callback
                        if (config && config.onSuccess) {
                            config.onSuccess(registration);
                        }
                    }
                }
            };
        };
    } catch (e) {
        console.error("Error during service worker registration:", e);
    }
}

export async function unRegister() {
    if (serviceWorker) {
        const registration = await serviceWorker.ready;
        await registration.unregister();
    }
}

async function checkValidServiceWorker(swUrl: string, config?: Config) {
    // Check if the service worker can be found. If it can't reload the page.
    try {
        const response = await fetch(swUrl);
        const contentType = response.headers.get("content-type");
        if (response.status === 404 ||
            (contentType !== null && !contentType.includes("javascript"))) {
            // No service worker found. Probably a different app. Reload the page.
            await unRegister();
            location.reload();
        } else {
            // Service worker found. Proceed as normal.
            await registerValidSW(swUrl, config);
        }
    } catch {
        console.log("No internet connection found. App is running in offline mode.");
        return;
    }
}

process.env.HOST = process.env.HOST || '0.0.0.0';
// Hostinger Passenger usually sets process.env.PORT, but we provide a fallback
process.env.PORT = process.env.PORT || 4321;

import('./dist/server/entry.mjs').catch(err => {
    console.error("Failed to load Astro server entry point:", err);
    process.exit(1);
});

# Archi Studio: wedding photography & films

    npm install
    npm run dev      # http://localhost:5173
    npm run build

**Edit content:** `src/data/siteData.js` (studio name, contact, photos, stories, services, testimonials).
**Photos:** replace Unsplash IDs with your own, or use full URLs / files in `/public` (e.g. `/photos/a.jpg`).
**Contact form:** copy `.env.example` to `.env` and set `VITE_FORM_ENDPOINT` (e.g. a Formspree URL). Without it the form simulates success.
**Studio name in page titles:** `src/components/usePageMeta.js` and `index.html`.

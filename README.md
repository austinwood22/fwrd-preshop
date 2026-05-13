# FWRD PreShop — Personal Shopper PWA

Ralph Lauren Collection Pre-Spring 2027 pre-shop app.
One codebase, 8 personal shopper versions.

---

## Folder Structure

```
fwrd-preshop/
├── shared/              ← product images, icons, logo (shared by everyone)
│   ├── images/          ← all look photos
│   ├── icons/           ← PWA app icons
│   ├── logo.png         ← FWRD Preferred logo
│   ├── products.json    ← product catalog
│   └── sw.js            ← service worker
│
└── shoppers/
    ├── austin/          ← Austin Wood's version
    ├── nichole/         ← Nichole Green's version
    ├── shopper3/        ← update with real name
    ├── shopper4/
    ├── shopper5/
    ├── shopper6/
    ├── shopper7/
    └── shopper8/
```

Each shopper folder contains:
- `index.html` — their full app
- `manifest.json` — PWA install config with their name
- `sw.js` — service worker

---

## Adding a New Shopper

1. Duplicate any existing shopper folder
2. In `index.html` find and replace:
   - The shopper name
   - Their email
   - Their phone number
   - Their photo filename (add photo to `shared/`)
3. Update `manifest.json` name fields
4. Commit — Netlify auto-deploys

---

## Deploying Each Shopper to Netlify

Each shopper folder deploys as its own Netlify site:

1. Go to app.netlify.com → New site
2. Connect to GitHub → select `fwrd-preshop` repo
3. Set **Base directory** to `shoppers/austin` (or whichever)
4. Set **Publish directory** to `shoppers/austin`
5. Deploy — done

Repeat for each shopper. Each gets their own URL:
- `austin-preshop.netlify.app`
- `nichole-preshop.netlify.app`
- etc.

---

## Updating the Product Catalog

Edit `shared/products.json` — all shopper sites update automatically on next deploy.

---

## Contacts

| Shopper | Email | Phone |
|---|---|---|
| Austin Wood | austin.wood@fwrd.com | 213-222-5189 |
| Nichole Green | nichole.green@fwrd.com | 646-403-5307 |
| — | — | — |
| — | — | — |
| — | — | — |
| — | — | — |
| — | — | — |
| — | — | — |

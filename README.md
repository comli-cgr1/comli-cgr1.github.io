# Comunilife Staff Desk

Static GitHub Pages build of the "Comunilife Intranet B – Desk v2" design export.

- `index.html` – the page (template + logic), exported from the `.dc.html` design file
- `support.js` – runtime that renders the template; loads React 18 from unpkg
- `_ds/` – Comunilife design-system tokens, fonts and components
- `.nojekyll` – keeps GitHub Pages from skipping the `_ds` folder
- `v1/`, `v2/` – self-contained "Comunilife Intranet" v1 and v2 exports (React and the design system are embedded), served at `/v1/` and `/v2/`

To preview locally, serve the folder over HTTP (opening the file directly won't work):

```bash
python -m http.server 8765
```

To update from a new design export, replace `index.html` (keep the `<title>` and `noindex` lines), `support.js` and the matching `_ds/` files.

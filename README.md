# Xie Lab

English-language research website for Xie Lab at Shanghai Jiao Tong University.

## Pages

- `index.html` — lab introduction
- `research.html` — research directions
- `publications.html` — publications, preprints, and conferences
- `teaching.html` — teaching overview
- `brain-computer-interfaces.html` — course syllabus
- `contact.html` — contact details and research opportunities
- `suggested-readings.html` — reading library, foundations, and article import

This is a static website. No build step or server-side dependencies are required.

## GitHub Pages

Publish the `main` branch from the repository root. `.nojekyll` ensures the files are served without a Jekyll build.

## Reading-library updates

DOI, BibTeX, and RIS imports use public Crossref/DataCite metadata and suggest a topic for review. Imported readings are saved in the current browser. They do not modify the public site automatically.

To publish additions, use **Download updated HTML**, replace `suggested-readings.html` in this repository, and commit the change. **Export library backup** produces a portable JSON copy. All other website files must remain alongside the exported page.

## Local preview

Run `python3 -m http.server 8767` in this directory and open `http://localhost:8767/`.

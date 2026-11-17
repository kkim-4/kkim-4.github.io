# kdkim portfolio

Plain HTML/CSS/JS, so there's no build step. GitHub Pages serves it as-is.

## Put it online

1. Create a repo named `<your-github-username>.github.io` (for you: `kkim-4.github.io`).
2. Upload everything in this folder to the repo root (`index.html` has to be at the top level).
3. In the repo, go to **Settings → Pages**, set Source to "Deploy from a branch", pick `main` and `/ (root)`.
4. The site goes live at `https://kkim-4.github.io` within a minute or two.

**Keep kdkim.dev:** add a file named `CNAME` containing `kdkim.dev`, then at your domain registrar
point the domain at GitHub Pages (four A records to 185.199.108.153, .109.153, .110.153 and .111.153, plus a
`www` CNAME to `kkim-4.github.io`). Then turn on "Enforce HTTPS" in Settings → Pages.

## Edit content

- **Resume:** save your PDF as `assets/Kevin_Kim_Resume.pdf`.
- **Your photo:** replace `assets/sketches/portrait.svg`, or point the hero `<img>` at a new file.
- **Sketchbook:** drop images into `assets/art/`, then in `index.html` copy a `<figure class="polaroid piece">`
  block and change `src`, `alt`, `data-title`, `data-medium`, `data-year` and the caption.
  Any shape works: tall, wide or square drawings keep their proportions and the board rearranges around them.
- **Handwritten notes:** anything with `class="note"`. Delete the two "draft / placeholder" notes once you've made it yours.
- **Colors and fonts:** the variables at the top of `style.css`.

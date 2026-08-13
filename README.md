# Single and Searching? Website

A responsive static website for the book **Single and Searching?** by Dr. Michael Agronah and Dr. Mary Agronah.

## Files
- `index.html` — website structure/content
- `styles.css` — all design and responsive styling
- `script.js` — menu, form messages, active navigation
- `assets/book-cover.png` — book mockup
- `assets/authors.png` — author photograph

## Run in VS Code

### Option 1: Live Server
1. Open this folder in VS Code.
2. Install the extension **Live Server** by Ritwick Dey.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

### Option 2: No extension
Double-click `index.html` in Finder/Explorer and it will open in your browser.

## Important edits before publishing

Search inside `index.html` for:
- `data-link="paperback"` and replace the `href="#"` with your paperback purchase URL.
- `data-link="audio"` and replace the `href="#"` with your audiobook purchase URL.
- Social media `href="#"` values.
- Podcast and speaking links.
- Blog article links.
- YouTube placeholders.

The assessment and newsletter forms currently display confirmation messages only. Connect them later to MailerLite, ConvertKit, Mailchimp, Kit, Google Forms, or your own backend.

## Publish with GitHub Pages
1. Create a GitHub repository.
2. Upload/push this folder.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose `main` and `/root`.
6. Save.

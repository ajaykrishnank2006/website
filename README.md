# Ajay Krishnan K | Developer Portfolio

Personal portfolio presenting my education, technical interests, internship experience, projects, skills and contact details.

**Live website:** https://ajaykrishnank.com

## Built with
- HTML, CSS and JavaScript
- Vercel hosting and a serverless contact endpoint

## Repository structure
```text
.
├── index.html
├── cv.html
├── resume.pdf
├── api/contact.js
├── favicon.svg
├── og-image.svg
├── robots.txt
├── sitemap.xml
├── SECURITY.md
└── vercel.json
```

## Run locally
For a basic static preview:
```bash
python -m http.server 8000
```
Open http://localhost:8000.

The contact form requires the Vercel serverless function and the `WEB3FORMS_ACCESS_KEY` environment variable. It will not send messages from a static Python server.

## Deploy
1. Import this repository into Vercel.
2. Set the project root to the repository root.
3. Add `WEB3FORMS_ACCESS_KEY` as a Production environment variable.
4. Deploy and test the contact form on the deployed domain.

Never commit API keys or other secrets.

## Security
See [SECURITY.md](SECURITY.md) for security notes and deployment requirements.

## Contact
- Email: ajaykrishnank2024@gmail.com
- GitHub: https://github.com/ajaykrishnank2006
- Portfolio: https://ajaykrishnank.com

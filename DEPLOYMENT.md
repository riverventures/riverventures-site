# Deployment Guide

## Quick Deploy to Vercel

1. Connect GitHub repository to Vercel
2. Import the project: `riverventures/riverventures-site`
3. Framework: Next.js
4. Build settings are automatically detected

## Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
vercel --prod
```

## Environment Variables

No environment variables required for this static site.

## Domain Setup

1. Go to Vercel dashboard
2. Add custom domain: `riverventures.co`
3. Update DNS records as instructed

## Performance

- Static site generation (SSG)
- Optimized images and fonts
- Minimal JavaScript bundle
- Fast loading times

## Updates

Push to master branch for automatic deployment via Vercel GitHub integration.
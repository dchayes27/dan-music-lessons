# 🚀 Deployment Guide

## Quick Deploy to Vercel (5 minutes)

### Step 1: Push to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Dan Chayes Music Lessons site"

# Create repository on GitHub, then:
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click **"New Project"**
3. **Import Git Repository** - select your GitHub repo
4. Vercel auto-detects Next.js settings (no configuration needed)
5. Click **"Deploy"**
6. Wait ~2 minutes for build

Done! You'll get a live URL like: `dan-music-lessons.vercel.app`

---

## Custom Domain Setup

### After deploying:

1. Buy domain from Namecheap, Google Domains, etc.
2. In Vercel project dashboard:
   - Click **"Settings"** → **"Domains"**
   - Add your domain (e.g., `danchayes.com`)
3. Configure DNS records as Vercel shows you
4. SSL certificate automatically added (free)

Usually live in 10-30 minutes.

---

## Contact Form Setup

### Using Formspree (Free):

1. Go to [formspree.io](https://formspree.io)
2. Create free account
3. Create new form
4. Copy your form ID (looks like: `xyzabc123`)
5. Update `components/ContactSection.tsx`:

```tsx
// Change this line:
action="https://formspree.io/f/YOUR_FORM_ID"

// To this (with your actual ID):
action="https://formspree.io/f/xyzabc123"
```

6. Commit and push:
```bash
git add .
git commit -m "Add Formspree form ID"
git push
```

Vercel auto-deploys on push. Form emails will come to your registered Formspree email.

---

## Adding Your Photo

1. Add photo file to `/public/images/dan-niece.jpg`
2. Update `components/AboutSection.tsx`:

```tsx
// Replace the placeholder div with:
<div className="aspect-[4/3] rounded-xl overflow-hidden border-[3px] border-sage">
  <img 
    src="/images/dan-niece.jpg" 
    alt="Dan teaching guitar with his niece"
    className="w-full h-full object-cover"
  />
</div>
```

3. Commit and push:
```bash
git add .
git commit -m "Add teaching photo"
git push
```

---

## Environment Variables (If Needed Later)

If you need API keys or secrets:

1. In Vercel dashboard: **Settings** → **Environment Variables**
2. Add variables (e.g., `FORMSPREE_KEY`, `GOOGLE_ANALYTICS_ID`)
3. Reference in code: `process.env.FORMSPREE_KEY`
4. Redeploy for changes to take effect

---

## Continuous Deployment

**Every time you push to GitHub, Vercel automatically:**
- Builds the site
- Runs tests (if any)
- Deploys if successful
- Keeps previous versions for rollback

**To update the site:**
```bash
# Make changes to files
git add .
git commit -m "Update copy"
git push
```

Live in ~2 minutes.

---

## Monitoring & Analytics

### Add Google Analytics (Optional):

1. Create GA4 property
2. Get Measurement ID (looks like: `G-XXXXXXXXXX`)
3. Add to `app/layout.tsx` in `<head>`:

```tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `
}} />
```

---

## Troubleshooting

**Build failing?**
- Check Vercel build logs
- Test locally: `npm run build`
- Common issues: missing dependencies, TypeScript errors

**Form not working?**
- Verify Formspree form ID is correct
- Check Formspree dashboard for submissions
- Test form on live site, not localhost

**Slow loading?**
- Images too large? Compress them
- Use Next.js `<Image>` component for optimization

**Need help?**
Check [Vercel docs](https://vercel.com/docs) or start a new Claude chat for troubleshooting.

---

## Cost Breakdown

- **Hosting (Vercel)**: FREE
- **Domain**: $10-15/year
- **Contact Form (Formspree)**: FREE (up to 50 submissions/month)
- **SSL Certificate**: FREE (included with Vercel)

**Total**: ~$10-15/year (just the domain)

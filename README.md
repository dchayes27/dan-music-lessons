# Dan Chayes Music Lessons

Music lessons website for Dan Chayes teaching in Astoria, NY through Just Accessible Music.

## 🎨 Design Features

- **Color Palette**: Custom warm-modern palette (sage, mauve, slate, mist, honey, deep)
- **Visual Elements**: Guitar + vinyl record + waveform culture markers
- **Responsive**: Mobile-first design that scales beautifully
- **Performance**: Next.js 14 with App Router for optimal speed

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## 📧 Contact Form Setup

The contact form uses Formspree. To set it up:

1. Go to [https://formspree.io/](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Copy your form ID
5. Update `components/ContactSection.tsx`:
   - Replace `YOUR_FORM_ID` with your actual form ID in the form action URL

Example:
```tsx
action="https://formspree.io/f/xyzabc123"
```

## 📸 Adding Your Photo

1. Add your photo to `/public/images/dan-niece.jpg`
2. Update `components/AboutSection.tsx`:

Replace the placeholder div with:
```tsx
<div className="aspect-[4/3] rounded-xl overflow-hidden border-[3px] border-sage">
  <img 
    src="/images/dan-niece.jpg" 
    alt="Dan teaching guitar"
    className="w-full h-full object-cover"
  />
</div>
```

## 🚢 Deploying to Vercel

### Method 1: GitHub + Vercel (Recommended)

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

### Method 2: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

Follow the prompts. Vercel will deploy your site and give you a URL.

## 🌐 Custom Domain

Once deployed on Vercel:

1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `danchayes.com`)
4. Follow Vercel's DNS instructions
5. Vercel handles SSL automatically

## 📁 Project Structure

```
/app
  layout.tsx       # Root layout with metadata
  page.tsx         # Main homepage
  globals.css      # Tailwind + global styles

/components
  Navigation.tsx        # Fixed header nav
  Hero.tsx             # Hero with guitar/vinyl/waveform
  TeachingSection.tsx  # What you teach grid
  AboutSection.tsx     # About Dan section
  ContactSection.tsx   # Contact form
  CTASection.tsx       # Call-to-action banner
  Footer.tsx           # Footer with JAM link

/public
  /images            # Put photos here
```

## 🎨 Color System

Colors are defined in `tailwind.config.ts`:

- `sage`: #5f8375 (Primary teal - CTAs, links)
- `mauve`: #8b6f88 (Secondary purple - accents)
- `slate`: #59738c (Dark grey-blue - text)
- `mist`: #b0b3c1 (Light grey-blue - borders)
- `honey`: #e9c46a (Yellow - highlights)
- `deep`: #264653 (Deep teal - headings)

Use in components:
```tsx
<div className="bg-sage text-white">...</div>
<button className="hover:bg-mauve">...</button>
```

## 🔧 Customization

### Update Copy
Edit component files in `/components` folder.

### Change Layout
Modify grid/spacing in component files or `page.tsx`.

### Add Pages
Create new files in `/app` folder:
- `/app/pricing/page.tsx` → `/pricing`
- `/app/about/page.tsx` → `/about`

## 📝 TODO Before Launch

- [ ] Install dependencies (`npm install`)
- [ ] Test locally (`npm run dev`)
- [ ] Set up Formspree for contact form
- [ ] Add your photo to `/public/images`
- [ ] Update contact form with real Formspree ID
- [ ] Push to GitHub
- [ ] Deploy to Vercel
- [ ] (Optional) Set up custom domain

## 🤝 Contact

Built for Dan Chayes | Music Lessons in Astoria, NY

Teaching through [Just Accessible Music](https://www.justaccessiblemusic.com/)

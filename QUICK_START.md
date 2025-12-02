# 🚀 Quick Start Guide - Ring to Kitchen AI

## Get Your Website Running in 5 Minutes

### Step 1: Install Dependencies (1 minute)

```bash
cd c:/Projects/ringtokitchenai
npm install
```

### Step 2: Start Development Server (30 seconds)

```bash
npm run dev
```

**Your website is now live at:** [http://localhost:3000](http://localhost:3000)

---

## 🎯 What You'll See

### Homepage
- Hero section with "AI that Speaks Restaurant"
- Value propositions
- How it works (4 steps)
- Pricing preview
- Testimonials
- Blog preview

### Test These Features:
1. Click **"Schedule Demo"** button → Modal opens
2. Fill out the form → Redirects to Calendly
3. Navigate to **Pricing** → See 3 tiers
4. Navigate to **Blog** → See 6 articles
5. Click any blog post → Read full content

---

## 📝 Quick Customization

### Change Company Info

Edit `lib/constants.ts`:
```typescript
export const COMPANY_INFO = {
  name: 'Ring to Kitchen AI',
  email: 'hello@ringtokitchen.ai',  // ← Change this
  phone: '+1 (888) 555-RING',       // ← Change this
  // ... more fields
};
```

### Add a Blog Post

Edit `lib/blogData.ts`:
```typescript
export const blogPosts: BlogPost[] = [
  {
    slug: 'my-new-post',
    title: 'My New Blog Post',
    excerpt: 'Short description...',
    content: `Full content here...`,
    category: 'Tutorial',
    date: '2024-11-08',
    readTime: '5 min',
    author: 'Your Name',
    image: '/images/blog/my-post.jpg',
  },
  // ... existing posts
];
```

### Update Pricing

Edit `lib/constants.ts` → `PRICING_TIERS`:
```typescript
{
  name: 'Starter',
  price: 99,  // ← Change price
  features: [
    { text: 'Your feature', included: true },  // ← Add features
    // ...
  ]
}
```

---

## 🎨 Customize Brand Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  'primary-navy': '#01335D',  // ← Your primary color
  'energy-red': '#F04833',    // ← Your accent color
  // ...
}
```

---

## 🚀 Deploy to Production

### Option 1: Vercel (Recommended - 5 minutes)

```bash
# 1. Build to verify everything works
npm run build

# 2. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin [your-repo-url]
git push -u origin main

# 3. Go to vercel.com
#    - Import your GitHub repo
#    - Add environment variables (from .env.local)
#    - Click Deploy
#    - Done! ✅
```

### Option 2: Other Platforms

The website works on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Railway
- Render

---

## ⚙️ Environment Variables

Already configured in `.env.local`:

```env
NEXT_PUBLIC_GTM_ID=GTM-NL4QC9P2
NEXT_PUBLIC_PIXEL_ID=609872899832972
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/carloshelp/interview-meeting
NEXT_PUBLIC_DOMAIN=ringtokitchen.ai
```

**Don't change these unless you have your own GTM/Pixel accounts!**

---

## 📊 Verify Analytics Work

### After Deployment:

1. **Google Tag Manager**
   - Open browser Dev Tools → Network tab
   - Visit your site
   - Search for "googletagmanager" → Should see requests

2. **Meta Pixel**
   - Install [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/) Chrome extension
   - Visit your site
   - Icon should show pixel is active

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or Next.js will auto-select next available port
```

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Modal Not Opening
- Check browser console for errors
- Ensure JavaScript is enabled
- Try incognito mode

---

## 📱 Test on Mobile

### Using Your Phone:

1. Get your computer's local IP:
   ```bash
   ipconfig  # Windows
   ifconfig  # Mac/Linux
   ```

2. Start dev server:
   ```bash
   npm run dev
   ```

3. On your phone, visit:
   ```
   http://[your-ip]:3000
   ```

---

## ✅ Pre-Launch Checklist

Before going live:

- [ ] Replace placeholder images with real photos
- [ ] Update company contact info
- [ ] Test demo modal on mobile
- [ ] Verify Calendly booking works
- [ ] Check all links work
- [ ] Run Lighthouse audit (npm run build first)
- [ ] Test on different browsers
- [ ] Proofread all content
- [ ] Verify GTM tracking
- [ ] Check Meta Pixel events

---

## 📚 Documentation

- **Full README**: [README.md](README.md)
- **Deployment Guide**: [DEPLOYMENT.md](DEPLOYMENT.md)
- **Project Summary**: [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

---

## 🎉 You're All Set!

Your website is ready to launch. Just:
1. Customize content
2. Add real images
3. Deploy to Vercel
4. Point your domain
5. Go live! 🚀

**Questions?** Check the documentation or contact support.

---

**Happy launching! 🎊**

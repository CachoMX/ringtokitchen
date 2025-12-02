# Ring to Kitchen AI - Deployment Guide

## ✅ Pre-Deployment Checklist

- [x] Website builds successfully (`npm run build`)
- [x] Environment variables configured
- [x] GTM and Meta Pixel IDs added
- [x] Calendly URL configured
- [x] All pages tested locally
- [ ] Custom domain DNS configured
- [ ] SSL certificate ready

## 🚀 Deploying to Vercel (Recommended)

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Ring to Kitchen AI website"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/ringtokitchenai.git

# Push
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings

### Step 3: Configure Environment Variables

In Vercel dashboard, add these environment variables:

```
NEXT_PUBLIC_GTM_ID=GTM-NL4QC9P2
NEXT_PUBLIC_PIXEL_ID=609872899832972
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/carloshelp/interview-meeting
NEXT_PUBLIC_DOMAIN=ringtokitchen.ai
```

### Step 4: Deploy

1. Click "Deploy"
2. Wait 2-3 minutes for build
3. Your site will be live at `your-project.vercel.app`

### Step 5: Add Custom Domain

1. In Vercel dashboard → Settings → Domains
2. Add domain: `ringtokitchen.ai`
3. Add `www.ringtokitchen.ai`
4. Vercel will provide DNS records

## 🌐 DNS Configuration

### For ringtokitchen.ai:

Add these DNS records to your domain registrar:

**A Record** (for ringtokitchen.ai):
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**CNAME Record** (for www.ringtokitchen.ai):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### SSL Certificate

Vercel automatically provisions SSL certificates. Wait 24-48 hours for DNS propagation.

## 🔍 Post-Deployment Verification

### 1. Test All Pages

- [ ] Homepage: https://ringtokitchen.ai
- [ ] Pricing: https://ringtokitchen.ai/pricing
- [ ] Blog: https://ringtokitchen.ai/blog
- [ ] Individual blog posts work
- [ ] Demo modal opens and works
- [ ] Calendly integration loads

### 2. Verify Analytics

**Google Tag Manager:**
- Open browser developer tools → Network tab
- Filter for "googletagmanager"
- Should see GTM container loaded
- Check dataLayer events fire

**Meta Pixel:**
- Install Meta Pixel Helper extension
- Visit your site
- Pixel should show as active
- PageView event should fire

### 3. Test SEO

- [ ] View page source - meta tags present
- [ ] Check robots.txt: https://ringtokitchen.ai/robots.txt
- [ ] Check sitemap: https://ringtokitchen.ai/sitemap.xml
- [ ] Run Lighthouse audit (aim for 90+ scores)

### 4. Mobile Testing

- [ ] Test on iPhone/Safari
- [ ] Test on Android/Chrome
- [ ] Navigation menu works
- [ ] Demo modal responsive
- [ ] All CTAs clickable

## 🔧 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild locally
rm -rf .next
npm run build
```

### Environment Variables Not Working

- Ensure variables start with `NEXT_PUBLIC_`
- Redeploy after adding variables
- Variables only available on client side

### GTM Not Loading

- Check GTM container ID is correct
- Verify GTM script in page source
- Check browser console for errors

### Calendly Not Loading

- Verify URL is correct in .env.local
- Check iframe loads without errors
- Test in incognito mode

## 📊 Analytics Setup (Post-Deployment)

### Google Tag Manager

1. Log into GTM (tagmanager.google.com)
2. Configure tags for:
   - Page views (already auto-tracked)
   - Button clicks (Schedule Demo)
   - Form submissions
   - Scroll depth
3. Publish container

### Meta Pixel

1. Log into Facebook Events Manager
2. Verify pixel is receiving data
3. Create custom conversions:
   - Lead Captured (when form submitted)
   - Demo Scheduled (Calendly confirmation)

### Google Analytics (Optional)

Add GA4 via GTM:
1. Create GA4 property
2. Add GA4 tag in GTM
3. Connect to GTM container

## 🎯 Performance Optimization

### After Deployment:

1. **Enable Vercel Analytics**
   - Dashboard → Analytics → Enable

2. **Run Lighthouse**
   - Target scores: 90+ across all metrics
   - Fix any issues flagged

3. **Test Core Web Vitals**
   - Use PageSpeed Insights
   - Monitor in Google Search Console

4. **Image Optimization**
   - Replace placeholder images with optimized versions
   - Use WebP format
   - Implement lazy loading

## 🔄 Continuous Deployment

Vercel automatically deploys when you push to GitHub:

```bash
# Make changes
git add .
git commit -m "Update: description"
git push

# Vercel automatically builds and deploys
```

## 📱 Custom Domain Propagation

DNS changes can take 24-48 hours. Check status:

```bash
# Check A record
dig ringtokitchen.ai

# Check CNAME
dig www.ringtokitchen.ai
```

## 🎉 Launch Checklist

- [ ] All pages load without errors
- [ ] GTM tracking verified
- [ ] Meta Pixel verified
- [ ] Custom domain active with SSL
- [ ] Mobile responsive confirmed
- [ ] Demo modal functional
- [ ] Calendly booking works
- [ ] Blog posts readable
- [ ] SEO meta tags present
- [ ] Sitemap accessible
- [ ] robots.txt accessible
- [ ] Lighthouse scores 90+
- [ ] All CTAs work
- [ ] Contact information correct

## 🚨 Emergency Rollback

If issues occur after deployment:

1. In Vercel dashboard → Deployments
2. Find previous working deployment
3. Click three dots → "Promote to Production"
4. Previous version goes live immediately

## 📞 Support

**Vercel Support:**
- Docs: vercel.com/docs
- Support: vercel.com/support

**DNS Support:**
- Contact your domain registrar

**Next.js Issues:**
- Docs: nextjs.org/docs
- GitHub: github.com/vercel/next.js

---

## 🎊 Congratulations!

Your Ring to Kitchen AI website is now live!

Next steps:
1. Monitor analytics
2. A/B test CTAs
3. Add more blog content
4. Collect user feedback
5. Iterate and improve

Good luck! 🚀

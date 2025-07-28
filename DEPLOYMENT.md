# Deployment Guide

## Quick Start

Your GojiTech website is ready to deploy! Here are the fastest deployment options:

## 🚀 Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - GojiTech website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Custom Domain (Optional):**
   - In Vercel dashboard, go to your project
   - Click "Domains" tab
   - Add your custom domain

## 🌐 Netlify

1. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy:**
   - Connect your GitHub repository
   - Set build settings above
   - Deploy

## ⚡ Quick Local Testing

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🔧 Environment Variables

If you need environment variables, create a `.env.local` file:

```env
# Example variables
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
```

## 📊 Performance Optimization

Your website is already optimized with:
- ✅ Next.js 14 with App Router
- ✅ Automatic image optimization
- ✅ Code splitting
- ✅ SEO meta tags
- ✅ PWA manifest
- ✅ Optimized fonts

## 🎯 What's Included

- **Responsive Design**: Works on all devices
- **Dark Theme**: Modern dark design with neon accents
- **Animations**: Smooth GSAP animations
- **Contact Form**: Ready-to-use contact form
- **Portfolio**: Interactive project showcase
- **SEO Ready**: Meta tags, Open Graph, structured data

## 📱 Mobile Optimization

The website is fully responsive and includes:
- Mobile navigation menu
- Touch-friendly interactions
- Optimized images for mobile
- Fast loading times

## 🔍 SEO Features

- Meta tags for all pages
- Open Graph for social sharing
- Structured data markup
- Robots.txt
- Sitemap ready
- PWA manifest

Your website is now ready to go live! 🚀 
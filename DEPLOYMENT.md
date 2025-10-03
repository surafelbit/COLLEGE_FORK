# Deployment Guide for Deutsche Hochschule für Medizin College

## Vercel Deployment

This application is configured for deployment on Vercel. Follow these steps:

### Prerequisites
- Node.js 20.19+ or 22.12+ (Vite requirement)
- Vercel account
- Git repository

### Deployment Steps

1. **Build the application locally** (optional, for testing):
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**:
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect this as a Vite project
   - The build command is configured as `npm run vercel-build`
   - Output directory is set to `dist`

3. **Environment Variables** (if needed):
   - API Base URL: `https://deutschemedizin-collage-backend-production.up.railway.app/api`
   - The application is already configured for production API endpoints

### Build Configuration

- **Framework**: Vite
- **Build Command**: `npm run vercel-build`
- **Output Directory**: `dist`
- **Node Version**: 20.19+ or 22.12+

### Important Notes

- The application uses a production backend API hosted on Railway
- All API endpoints are configured for production use
- The build process skips TypeScript checking to avoid build failures
- Static assets are optimized and chunked for better performance

### Troubleshooting

If you encounter build issues:
1. Ensure Node.js version is 20.19+ or 22.12+
2. Clear node_modules and reinstall: `rm -rf node_modules && npm install`
3. Check that all dependencies are properly installed

### File Structure

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].css
│   ├── index-[hash].js
│   └── [other assets]
└── animations/
    └── [animation files]
```

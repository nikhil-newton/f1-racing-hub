# F1 Team Logos Integration Guide

## 🏁 Replace Placeholder Logos with Your Actual Images

The website is now set up to use your exact F1 team logos. Follow these steps to replace the placeholder logos:

### Step 1: Locate the Logo Directory
Navigate to: `public/team-logos/`

### Step 2: Replace Placeholder Files
Replace each placeholder file with your corresponding team logo image:

1. **Red Bull Racing** → Replace `red-bull-racing.svg` with your Red Bull Racing logo
2. **Ferrari** → Replace `ferrari.svg` with your Ferrari logo  
3. **Mercedes** → Replace `mercedes.svg` with your Mercedes logo
4. **McLaren** → Replace `mclaren.svg` with your McLaren logo
5. **Aston Martin** → Replace `aston-martin.svg` with your Aston Martin logo
6. **Alpine** → Replace `alpine.svg` with your Alpine logo
7. **Williams** → Replace `williams.svg` with your Williams logo
8. **Racing Bulls** → Replace `racing-bulls.svg` with your Racing Bulls logo
9. **Haas** → Replace `haas.svg` with your Haas logo
10. **Kick Sauber** → Replace `kick-sauber.svg` with your Kick Sauber logo

### Step 3: File Format Support
- **Recommended**: PNG, JPG, or SVG format
- **File naming**: Keep the exact same filename (just change the extension if needed)
- **Size**: Any size (the website will automatically scale them)

### Step 4: Update File Extensions (if needed)
If your logos are in a different format (e.g., PNG instead of SVG), update the paths in:
`src/assets/team-logos/index.ts`

Example:
```typescript
export const teamLogoPaths = {
  'red-bull-racing': '/team-logos/red-bull-racing.png', // Changed from .svg to .png
  'ferrari': '/team-logos/ferrari.jpg', // Changed from .svg to .jpg
  // ... etc
};
```

### Step 5: Refresh the Website
After replacing the files, refresh your browser. The logos will automatically appear in:
- ✅ Teams page (`/teams`)
- ✅ Driver cards (`/drivers`) - team badges
- ✅ Search results (navbar search)
- ✅ Team modals and detail views

## 🎯 Key Features
- **Exact Logo Display**: No modifications or styling applied to your images
- **Responsive Sizing**: Logos automatically scale for different screen sizes
- **Fast Loading**: Optimized image loading with fallbacks
- **Professional Integration**: Seamlessly integrated across all website sections

## 📝 Notes
- The current placeholders are simple SVG files with team colors
- Your actual logos will completely replace these placeholders
- The website maintains the exact order you provided: Red Bull Racing → Ferrari → Mercedes → McLaren → Aston Martin → Alpine → Williams → Racing Bulls → Haas → Kick Sauber
- No styling or editing will be applied to your logos - they will display exactly as you provided them

## 🚨 Important
Keep the filename structure exactly as specified to maintain proper functionality across the website.
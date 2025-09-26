# F1 Racing Hub - Cars Images Guide

This guide explains how to add car images to your F1 Racing Hub project.

## Image Structure

### Directory Location
Place all F1 car images in: `public/cars/`

### Required Car Images (2025 Season)

1. **Red Bull Racing RB21** - `rb21.jpg`
2. **Ferrari SF-25** - `sf25.jpg`
3. **Mercedes-AMG F1 W16** - `w16.jpg`
4. **McLaren MCL39** - `mcl39.jpg`
5. **Aston Martin AMR25** - `amr25.jpg`
6. **Alpine A525** - `a525.jpg`
7. **Williams FW47** - `fw47.jpg`
8. **Racing Bulls RB21** - `rb21b.jpg` (Note: Different from Red Bull's RB21)
9. **Haas VF-25** - `vf25.jpg`
10. **Kick Sauber C45** - `c45.jpg`

## Image Requirements

### Technical Specifications
- **Format**: JPG or PNG (JPG recommended for smaller file sizes)
- **Resolution**: Minimum 800x600px, Recommended 1200x800px
- **Aspect Ratio**: 3:2 or 4:3 works best
- **File Size**: Keep under 500KB per image for optimal loading

### Image Content Guidelines
- **Show the full car** from a 3/4 front angle if possible
- **High quality** professional racing photos preferred
- **Clear visibility** of car livery and sponsor logos
- **Track or studio** background (avoid distracting backgrounds)
- **2025 season livery** - ensure cars show current season colors

## How to Add Images

1. **Download/Save** your F1 car images
2. **Rename** them according to the list above (e.g., `rb21.jpg`)
3. **Place** them in `public/cars/` directory
4. **Refresh** your application - images will automatically appear

## Data File Reference

Car image paths are defined in: `src/data/cars.ts`

Each car object has an `image` property:
```typescript
image: "/cars/rb21.jpg"  // Points to public/cars/rb21.jpg
```

## Current Status

🚧 **Placeholder**: Currently showing car emoji (🏎️) as placeholders
✅ **Ready**: All data structures and paths are configured
⏳ **Pending**: Waiting for actual car images to be added

## Finding Quality Images

### Recommended Sources
- **Official F1 Website**: formula1.com (media section)
- **Team Official Websites**: Each team's media/press section
- **Getty Images**: Professional motorsport photography
- **Motorsport.com**: High-quality F1 photography
- **Autosport**: Racing photography collection

### Important Notes
- Ensure you have rights to use any images
- Credit photographers when possible
- Higher resolution images will look better on modern displays
- Consistent styling across all car images provides the best user experience

## Troubleshooting

### Image Not Showing?
1. Check file name matches exactly (case-sensitive)
2. Verify image is in correct directory: `public/cars/`
3. Ensure image format is supported (JPG/PNG)
4. Clear browser cache and refresh

### Image Quality Issues?
- Use higher resolution source images
- Ensure images are not overly compressed
- Check aspect ratio is appropriate
- Consider optimizing images for web use

## Future Enhancements

Planned improvements for the Cars section:
- **Detailed car pages** with full specifications
- **Image galleries** showing multiple angles
- **Technical diagrams** and cutaway views
- **Comparison tools** between different cars
- **Historical car database** from previous seasons

---

*This guide will be updated as new features are added to the Cars section.*
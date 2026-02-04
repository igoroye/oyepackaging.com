# Brew Bags Images Migration

## Current Status

The Brew Bags page is currently using external image URLs from `c.animaapp.com`. These images work fine and are loaded directly from the external CDN.

## Migration to Supabase Storage (Optional)

If you want to migrate these images to your own Supabase Storage, follow these steps:

### 1. Edge Function Available

An Edge Function `upload-brew-images` has been created and deployed. This function will:
- Download all images from external URLs
- Upload them to Supabase Storage bucket `images` in folder `brew-bags/`
- Return the new URLs

### 2. Run the Migration

To migrate images, call the Edge Function:

```bash
curl -X POST "YOUR_SUPABASE_URL/functions/v1/upload-brew-images" \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -H "Content-Type: application/json"
```

The function will return:
```json
{
  "success": true,
  "uploaded": 37,
  "failed": 0,
  "results": [
    {
      "originalUrl": "https://c.animaapp.com/...",
      "newUrl": "https://your-project.supabase.co/storage/v1/object/public/images/brew-bags/...",
      "path": "brew-bags/image-name.svg"
    }
  ]
}
```

### 3. Update Component

After migration, update `/app/brew-bags/components/BrewBagsContent.tsx` to use the new URLs from Supabase Storage.

Replace URLs like:
```typescript
icon: "https://c.animaapp.com/mkvdixiwyRK4ZE/img/coffee--1--1.svg"
```

With:
```typescript
icon: "YOUR_SUPABASE_URL/storage/v1/object/public/images/brew-bags/coffee-1-1.svg"
```

## Image List

All images used in the Brew Bags page:

### Icons & Features
- coffee-1-1.svg - Coffee service icon
- european-union.svg - Made in Europe icon
- mug-hot-alt-2-8.svg - Sustainable materials icon
- shield-check-1.svg - Fully customizable icon
- subscription-1-1.svg - Subscription icon

### How It Works Steps
- coffee-beans-1.svg - Step 1 icon
- vector-21.svg - Step 2 icon
- coffee-heart-1.svg - Step 3 icon
- vector.svg - Step 4 icon

### Location Icons
- chair-office-1.svg - Offices
- gas-pump-alt-1.svg - Gas stations
- house-tree-1.svg - Tourist shops
- dorm-room-1-1.svg - Hotels
- shopping-cart-3-1.svg - Online stores
- gift-1.svg - Gift shops
- calendar-star-1.svg - Events and conferences

### Social Icons
- telegram-13-1.svg
- facebook-logo-1.svg
- instagram-5-1.svg
- linkedin-1.svg
- whatsapp-1.svg

### Navigation & Sidebar
- vector-18.svg - Drip bags icon
- tea-1.svg - Brew bags icon
- tea-2.svg - Cold brew bags icon

### Main Images
- group-239.png - Logo
- mask-group.png - Hero image
- 1-7503.png - Product image
- mask-group-3.png - Product detail
- mask-group-4.png - Office location image
- mask-group-1.png - Send coffee CTA
- mask-group-2.png - Configure packaging CTA
- group-247.png - Footer logo

### UI Elements
- vector-1.svg - Arrow icon
- vector-4.svg - MOQ icon
- picking-box-1-1.svg - Production time icon
- hand-zoom-in-1.svg - Zoom instruction
- cursor-finger-click-1.svg - Click instruction

## Storage Structure

```
images/
└── brew-bags/
    ├── coffee-1-1.svg
    ├── european-union.svg
    ├── mug-hot-alt-2-8.svg
    ├── ...
    └── group-247.png
```

## Notes

- Images are publicly accessible
- Bucket supports: JPEG, JPG, PNG, GIF, WEBP, SVG
- Max file size: 10MB
- RLS policies allow public read access
- Total: 37 images

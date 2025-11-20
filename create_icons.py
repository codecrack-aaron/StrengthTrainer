from PIL import Image
import os

# Open the source image
img = Image.open('muscle.png')

# Convert to RGBA if not already
if img.mode != 'RGBA':
    img = img.convert('RGBA')

# Create 192x192 icon
icon_192 = img.resize((192, 192), Image.Resampling.LANCZOS)
icon_192.save('icon-192.png', 'PNG', optimize=True)
print('Created icon-192.png (192x192)')

# Create 512x512 icon
icon_512 = img.resize((512, 512), Image.Resampling.LANCZOS)
icon_512.save('icon-512.png', 'PNG', optimize=True)
print('Created icon-512.png (512x512)')

# Also create apple-touch-icon for iOS
icon_180 = img.resize((180, 180), Image.Resampling.LANCZOS)
icon_180.save('apple-touch-icon.png', 'PNG', optimize=True)
print('Created apple-touch-icon.png (180x180)')

print('\nAll icons created successfully!')

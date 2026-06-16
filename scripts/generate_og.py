from PIL import Image, ImageDraw, ImageFont
import os

out_rect = 'public/og-image-rev.png'
out_sq = 'public/og-image-square.png'
bg = 'public/image/ubay1.jpg'

os.makedirs('public', exist_ok=True)

def make(path, size):
    w,h = size
    if os.path.exists(bg):
        img = Image.open(bg).convert('RGBA')
        img = img.resize((w,h))
    else:
        img = Image.new('RGBA', (w,h), (40,40,40,255))
    draw = ImageDraw.Draw(img)
    font = ImageFont.load_default()
    name = 'Ubay Rahmat Hidayat'
    email = 'ubayrahmat@iys.works'
    overlay = Image.new('RGBA', (w,140), (0,0,0,150))
    img.paste(overlay, (0,h-140), overlay)
    draw.text((30,h-120), name, font=font, fill=(255,255,255,255))
    draw.text((30,h-80), email, font=font, fill=(220,220,220,255))
    img.convert('RGB').save(path)

make(out_rect, (1200,630))
make(out_sq, (800,800))
print('done')

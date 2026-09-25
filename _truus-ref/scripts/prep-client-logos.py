"""Turn the logos folder into tight, transparent marks for the client strip."""
from pathlib import Path

import numpy as np
from PIL import Image

SRC = Path(r"C:\Users\hp\fiveps cursor\logos")
DST = Path(r"C:\Users\hp\fiveps cursor\_truus-ref\public\clients")

# Best file per client. Skip videos, FivePS's own mark, blank frames, and
# contact-only end screens that have no logo.
PICKS = [
    ("Adi's Farm 2-01.png", "adis-farm.png", None),
    ("Dental.png", "anand-dental.png", None),
    ("WhatsApp Image 2026-06-29 at 1.59.23 PM.jpeg", "belle-ame.png", None),
    ("download (23).png", "bmr6.png", None),
    ("Untitled design (1).png", "growth-lab.png", None),
    ("708754357_17867153691623853_5010456986285543527_n.jpg", "nihaal.png", None),
    ("Nu Look logo_page-0001.jpg.jpeg", "nu-look.png", None),
    ("Your Weekend Destination (1).png", "rao.png", None),
    ("WhatsApp Image 2026-07-17 at 2.43.36 PM.jpeg", "retro-insurance.png", None),
    ("WhatsApp Image 2026-07-21 at 2.05.24 PM.jpeg", "retro-tvs.png", None),
    ("Logo sspc (1).png", "shree-shyam.png", None),
    ("Untitled - 14 August 2026 at 15.03.06.png", "shyam-event.png", None),
    ("WhatsApp Image 2026-08-13 at 9.45.21 AM (1).jpeg", "solartouch.png", None),
    ("TVSLogo-hr.png", "tvs.png", None),
    ("+91 9350151150 (1).png", "waaree.png", None),
    ("yaduvanshi pearls.png", "yaduvanshi.png", None),
    ("WhatsApp Image 2026-07-30 at 2.36.07 PM.jpeg", "yamaha.png", None),
    ("WhatsApp Image 2026-07-30 at 2.36.18 PM.jpeg", "call-of-the-blue.png", None),
    # Logo sits in the top band; the rest is a phone number and address.
    ("yg.png", "yashika.png", 0.40),
]


def knock_and_trim(im, top_frac):
    im = im.convert("RGBA")
    if top_frac:
        im = im.crop((0, 0, im.width, int(im.height * top_frac)))

    arr = np.array(im)
    h, w = arr.shape[:2]
    inset = max(2, min(w, h) // 80)
    corners = np.stack([
        arr[inset, inset],
        arr[inset, w - 1 - inset],
        arr[h - 1 - inset, inset],
        arr[h - 1 - inset, w - 1 - inset],
    ]).astype(np.int16)
    if np.max(np.ptp(corners[:, :3], axis=0)) > 18:
        out = arr
    else:
        bg = corners[:, :3].mean(axis=0)
        rgb = arr[:, :, :3].astype(np.int16)
        dist = np.abs(rgb - bg).sum(axis=2)
        alpha = arr[:, :, 3].astype(np.int16)
        alpha = np.where(dist <= 28, 0, alpha)
        soft = (dist > 28) & (dist < 56)
        alpha = np.where(soft, (alpha * (dist - 28) / 28).astype(np.int16), alpha)
        out = arr.copy()
        out[:, :, 3] = np.clip(alpha, 0, 255).astype(np.uint8)

        opaque = out[:, :, 3] > 20
        if opaque.any():
            lum = out[:, :, :3].astype(np.int16).sum(axis=2)
            light = opaque & (lum > 690)
            if light.sum() / opaque.sum() > 0.82:
                out[light, 0] = 0
                out[light, 1] = 49
                out[light, 2] = 83

    rgba = Image.fromarray(out, "RGBA")
    bbox = rgba.getbbox()
    if not bbox:
        return rgba
    pad = 10
    l, t, r, b = bbox
    l = max(0, l - pad)
    t = max(0, t - pad)
    r = min(rgba.width, r + pad)
    b = min(rgba.height, b + pad)
    return rgba.crop((l, t, r, b))


def main():
    DST.mkdir(parents=True, exist_ok=True)
    for src_name, dest_name, top_frac in PICKS:
        im = Image.open(SRC / src_name)
        out = knock_and_trim(im, top_frac)
        # Cap the long edge so the strip stays light.
        long_edge = max(out.size)
        if long_edge > 900:
            scale = 900 / long_edge
            out = out.resize((int(out.width * scale), int(out.height * scale)), Image.Resampling.LANCZOS)
        out.save(DST / dest_name, "PNG")
        print(f"{dest_name}: {out.size[0]}x{out.size[1]}")


if __name__ == "__main__":
    main()

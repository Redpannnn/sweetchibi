# SWEET CHIBI — Wedding Invitation (Adhy & Diska)

Undangan pernikahan digital dengan tema chibi/folk-art. Dibangun dengan Next.js 16, TypeScript, dan Tailwind CSS 4.

## Deploy ke Vercel

### Opsi A — Import via GitHub (Rekomendasi)
1. Push folder ini ke repository GitHub (private/public bebas).
2. Buka https://vercel.com → **Add New… → Project**.
3. Import repository-nya. Vercel akan auto-detect Next.js.
4. **Build & Development Settings** (otomatis terisi):
   - Framework Preset: **Next.js**
   - Build Command: `next build`
   - Output Directory: `.next`
   - Install Command: `npm install` (atau `bun install` / `pnpm install`)
5. Klik **Deploy**. Tunggu ~2 menit. Selesai!

### Opsi B — Vercel CLI
```bash
npm i -g vercel
cd SWEET\ CHIBI
vercel          # ikuti prompt (akun, project name, lalu confirm)
vercel --prod   # deploy ke production
```

## Jalankan Lokal

```bash
npm install      # atau: bun install
npm run dev      # buka http://localhost:3000
```

## Build Production

```bash
npm run build
npm run start
```

## Struktur Project

```
SWEET CHIBI/
├── public/
│   └── images/                # semua gambar undangan
├── src/
│   ├── app/
│   │   ├── globals.css        # tema warna + font
│   │   ├── layout.tsx         # font Caveat + Great Vibes
│   │   └── page.tsx           # komposisi semua section
│   ├── components/
│   │   └── wedding/
│   │       ├── decorations.tsx     # SVG dekoratif (garland, frame, dll)
│   │       ├── music-player.tsx    # player musik (Web Audio API)
│   │       └── sections/
│   │           ├── cover.tsx           # Section 1: Cover
│   │           ├── save-the-date.tsx   # Section 2: Save the Date
│   │           ├── invitation.tsx      # Section 3: Invitation details
│   │           ├── gift.tsx            # Section 4: Gift
│   │           └── closing.tsx         # Section 5: Penutup
│   └── lib/
├── next.config.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.mjs
```

## Catatan

- Tidak ada database yang dipakai oleh website ini (folder `prisma/` dan `db/` hanya boilerplate scaffold — aman diabaikan).
- Musik dihasilkan dengan Web Audio API (tidak butuh file audio eksternal).
- Semua gambar ada di `public/images/`.

## Tema Warna

- Cream background: `#FDF8F0`
- Maroon: `#A04050`
- Navy: `#2F3465`
- Accent: mustard `#E3B23C`, coral `#E88A7D`, dusty pink `#E7B8B8`

---

Made with 💕 for Adhy & Diska — 20 Desember 2026

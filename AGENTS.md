## What This Is
A React.js + Vite frontend application for an internal corporate web system. This project is a modern migration of the Nova Bootstrap Template, converting its design language into a utility-first Tailwind CSS architecture.

## Stack
- Framework: React.js (Latest)
- Build Tool: Vite
- Styling: Tailwind CSS (Replacing Bootstrap 5)
- Animation: Framer Motion (Replacing AOS/Bootstrap Anims)
- Icons: Lucide React (Tailwind-friendly)
- Routing: React Router v6
- State Management: Zustand (Global State & UI State)
- Form Handling: React Hook Form + Zod (Validation)
- Deployment: Internal Server / Vercel / Netlify

## Architecture
- Menggunakan feature-based structure untuk memisahkan logika modul internal:
src/
├─ assets/       # Images, brand logos, global css
├─ components/   # Reusable Atomic UI (Buttons, Inputs, Tables, Skeletons)
├─ features/     # Business logic per modul (Inventory, Dashboard, UserMgmt)
├─ hooks/        # Custom react hooks (useAuth, useFetch)
├─ layouts/      # Base layouts (Sidebar, Topbar, AuthLayout)
├─ lib/          # Config (Axios instance, tailwind-merge, utils)
├─ pages/        # Route-level components
├─ store/        # Zustand stores
└─ services/     # API Integration layers
Routing Strategy (Internal Focused)
Implementasi Private dan Public routes:
- /login → Auth Page
- / → Dashboard Overview
- /services → Internal Services List
- /portfolio → Project/Asset Tracking
- /team → Directory Internal
- /contact → Support/IT Helpdesk
- /blog → Internal Announcements / News

## Migration Strategy (Bootstrap to Tailwind)
- Layouting: Gunakan CSS Grid dan Flexbox Tailwind untuk menggantikan Container/Row/Col Bootstrap.
- Components: Pecah elemen Nova (Hero section, Stats, Testimonials) menjadi komponen React fungsional.
- Data Display: Buat komponen Reused Table dan Pagination dengan vibe minimalis Nova.
- Theming: Definisikan palet warna Nova (Dark blues, accent greens) di tailwind.config.js.

## Key Responsibilities by Role
Frontend Developer (You)
- Melakukan slicing UI dari template Nova ke komponen Tailwind.
- Implementasi Skeleton Screens untuk loading state di setiap modul data.
- Memastikan responsiveness tetap terjaga tanpa library pihak ketiga tambahan.
- Setup konfigurasi Vite untuk optimasi build internal.

Designer / Product (Reference)
- Mengacu pada struktur visual Nova Bootstrap.
- Menyesuaikan komponen Admin-only (seperti Table, Form, Modal) agar tetap setema dengan Nova.

## Design Principles
- Utility-First: Hindari penulisan CSS murni, maksimalkan class Tailwind.
- Micro-Interactions: Gunakan Framer Motion untuk transisi halaman dan hover effects agar terasa premium.
- Data-Driven UI: UI harus siap menangani kondisi Empty State, Loading State, dan Error State.
- Consistency: Gunakan spacing dan color tokens yang sudah ditentukan di config.

## Guardrails
- No Bootstrap JS: Dilarang memasukkan script bootstrap.bundle.min.js. Gunakan Headless UI atau Radix UI jika butuh komponen kompleks (Modal/Dropdown).
- Strict Validation: Semua input internal wajib divalidasi dengan Zod di sisi frontend.
- No Logic in UI: Fetching dan transformasi data dilakukan di hooks atau services, bukan di dalam komponen markup.
- Naming: Gunakan PascalCase untuk komponen dan kebab-case untuk file non-komponen.

## Non-Goals
- SEO Optimization (Karena ini web internal).
- SSR (Server Side Rendering).
- External Public Access.

## Development Notes
- Prioritaskan migrasi Navbar dan Hero Section sebagai pondasi awal.
- Gunakan tailwind-merge dan clsx untuk manajemen conditional classes yang lebih bersih.
- Simpan aset gambar dari template asli di folder public/assets.
- Implementasi Global Search (Command Palette) untuk mempermudah navigasi user internal.

## Code Conventions
- Gunakan functional components only
- Wajib pakai arrow function untuk komponen
- Props harus di-destructure di parameter
- Maksimal 1 komponen utama per file
- Hindari inline styles
- Semua animation pakai Framer Motion, bukan CSS manual
# React + Vite + Tailwind CSS Setup Guide

*(Covers Tailwind v3 and Tailwind v4)*

---

# 🔹 PART 1 — Tailwind CSS v4 (Latest & Recommended)

> Recommended for new projects (Vite-based setup)

---

## 📌 Step 1: Create React Project

```bash
npm create vite@latest my-project -- --template react
```

---

## 📌 Step 2: Go Inside Project

```bash
cd my-project
```

---

## 📌 Step 3: Install Tailwind v4

```bash
npm install tailwindcss @tailwindcss/vite
```

⚠️ No PostCSS or Autoprefixer required in v4 with Vite.

---

## 📌 Step 4: Configure `vite.config.js`

Open `vite.config.js` and update:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

---

## 📌 Step 5: Add Tailwind Import in `index.css`

Replace everything inside:

```
src/index.css
```

with:

```css
@import "tailwindcss";
```

⚠️ In Tailwind v4, we use `@import` instead of:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 📌 Step 6: Ensure CSS is Imported

Inside `src/main.jsx`:

```js
import './index.css'
```

---

## 📌 Step 7: Run Development Server

```bash
npm run dev
```

---

## 📌 Step 8: Test Tailwind

Inside `App.jsx`:

```jsx
<h1 className="text-3xl font-bold underline bg-green-500">
  Tailwind v4 Working 🚀
</h1>
```

---

---

---

# 🔹 PART 2 — Tailwind CSS v3 (Old Method)

> Use this only if you specifically need Tailwind v3

---

## 📌 Step 1: Create React Project

```bash
npm create vite@latest my-project -- --template react
```

---

## 📌 Step 2: Go Inside Project

```bash
cd my-project
```

---

## 📌 Step 3: Install Tailwind v3

```bash
npm install -D tailwindcss@3 postcss autoprefixer
```

Initialize config files:

```bash
npx tailwindcss init -p
```

This creates:

* `tailwind.config.js`
* `postcss.config.js`

---

## 📌 Step 4: Configure Template Paths

Open `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

## 📌 Step 5: Add Tailwind Directives

Inside `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 📌 Step 6: Import CSS in `main.jsx`

```js
import './index.css'
```

---

## 📌 Step 7: Run Project

```bash
npm run dev
```

---

## 📌 Step 8: Test Tailwind

Inside `App.jsx`:

```jsx
<h1 className="text-3xl font-bold underline bg-green-500">
  Tailwind v3 Working 🚀
</h1>
```

---

# 📊 Key Differences Between v3 and v4

| Feature                      | Tailwind v3            | Tailwind v4               |
| ---------------------------- | ---------------------- | ------------------------- |
| Config File Required         | ✅ Yes                  | ❌ Not required by default |
| `init -p` Command            | ✅ Yes                  | ❌ Removed                 |
| PostCSS Needed               | ✅ Yes                  | ❌ No (with Vite plugin)   |
| CSS Setup                    | `@tailwind` directives | `@import "tailwindcss"`   |
| Recommended for New Projects | ⚠️ Legacy              | ✅ Yes                     |

---

# 🎯 Final Recommendation

If you are starting a new project in 2026:

> ✅ Use **Tailwind CSS v4 + Vite Plugin**

Use v3 only when maintaining older projects.

---
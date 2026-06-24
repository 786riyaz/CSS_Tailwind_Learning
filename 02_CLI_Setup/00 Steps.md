# Tailwind CSS CLI Setup Guide

This guide explains how to install and configure **Tailwind CSS (v4.x)** using the CLI method.

---

## 📦 Prerequisites

Make sure **Node.js** is installed on your system.

### Check Node & NPM Version

```bash
node -v
npm -v
```

If not installed, download Node.js from:
[https://nodejs.org/](https://nodejs.org/)

---

## 🚀 Step-by-Step Setup

---

### Step 1: Create Project Folder

```bash
mkdir my-tailwind-project
cd my-tailwind-project
```

---

### Step 2: Install Tailwind CSS CLI

```bash
npm install tailwindcss @tailwindcss/cli
```

---

### Step 3: Verify Installation

Open `package.json` and confirm Tailwind version:

```json
"tailwindcss": "4.x.x"
```

---

### Step 4: Create Input CSS File

Create a CSS file (for example):

```
style.css
```

Or inside a `src` folder:

```
src/input.css
```

---

### Step 5: Import Tailwind in CSS

Add this at the **top** of your CSS file:

```css
@import "tailwindcss";
```

---

### Step 6: Generate Output CSS

Run one of the following commands:

#### Basic Command

```bash
npx @tailwindcss/cli -i ./style.css -o ./output.css
```

#### If Using src Folder

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css
```

#### Watch Mode (Recommended During Development)

```bash
npx @tailwindcss/cli -i ./style.css -o ./output.css --watch
```

This will generate `output.css` in the specified folder and automatically rebuild on changes.

---

### Step 7: Create HTML File

Create an `index.html` file:

```
index.html
```

---

### Step 8: Link Output CSS in HTML

Add this inside the `<head>` section:

```html
<link href="output.css" rel="stylesheet">
```

---

## ✅ Folder Structure Example

```
my-tailwind-project/
│
├── node_modules/
├── package.json
├── style.css
├── output.css
└── index.html
```

---

## 🎯 You're Ready!

Now you can use Tailwind utility classes inside your HTML:

```html
<h1 class="text-3xl font-bold text-blue-600">
  Hello Tailwind!
</h1>
```
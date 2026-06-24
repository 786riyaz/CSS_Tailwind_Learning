# 🚀 TAILWIND PHASE 3 – STATES, VARIANTS & INTERACTIONS

This phase makes your UI production-ready.

We will cover:

1. Hover / Focus / Active states
2. Transitions & animations
3. Group & peer utilities
4. Dark mode
5. Advanced variants mindset

---

# 1️⃣ State Variants (Very Important)

Tailwind allows you to attach state prefixes to any utility.

Format:

```
state:utility
```

---

## 🔹 Hover

```html
<button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
  Hover Me
</button>
```

Hover changes background color.

---

## 🔹 Focus (Important for accessibility)

```html
<input 
  class="border p-2 focus:outline-none focus:ring-4 focus:ring-blue-300"
/>
```

Focus adds ring effect.

---

## 🔹 Active

```html
<button class="bg-green-600 active:scale-95">
```

Shrinks slightly when clicked.

---

## Visual State Examples

![Image](https://cdn.prod.website-files.com/610bb663a35dd3364ddbf08c/6240a6e16356f83dc2038058_tailwind-hover-6.gif)

![Image](https://i.sstatic.net/bhd02.png)

![Image](https://tailwindcss.com/api/og?path=%2Fdocs%2Fscale)

![Image](https://tw-elements.com/learn/te-foundations/tailwind-css/sizing/assets/sizing-1.jpg)

---

# 2️⃣ Transitions & Smooth Effects

Without transition → changes feel harsh.

---

## 🔹 Basic Transition

```html
<button class="bg-indigo-600 hover:bg-indigo-700 transition">
```

`transition` = smooth animation.

---

## 🔹 Control Speed

```
duration-200
duration-300
duration-500
```

---

## 🔹 Control Animation Type

```
ease-in
ease-out
ease-in-out
```

---

## 🔹 Example

```html
<button class="bg-purple-600 hover:bg-purple-700 
               transition duration-300 ease-in-out
               hover:scale-105">
  Smooth Button
</button>
```

---

# 3️⃣ Transform Utilities

You can scale, rotate, translate.

```
scale-105
rotate-6
translate-x-4
```

Example:

```html
<div class="hover:scale-110 transition">
```

---

# 4️⃣ Group Utility (Very Powerful)

Allows child elements to react when parent is hovered.

---

## 🔹 Example

```html
<div class="group bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
  <h2 class="text-xl font-bold group-hover:text-blue-600">
    Card Title
  </h2>
  <p class="text-gray-600">
    Description
  </p>
</div>
```

Parent hover changes child text color.

This is heavily used in modern UI.

---

# 5️⃣ Peer Utility (Form Interactions)

Peer allows sibling interaction.

---

## 🔹 Example

```html
<input type="checkbox" class="peer hidden" id="toggle">

<label for="toggle" 
       class="block bg-gray-300 peer-checked:bg-green-500 p-4">
  Toggle Box
</label>
```

When checkbox is checked → label changes color.

Used in:

* Toggle switches
* Custom checkboxes
* Tabs

---

# 6️⃣ Dark Mode

Tailwind supports dark mode via `dark:` prefix.

---

## 🔹 Enable Dark Mode (CDN way)

Add class to `<html>`:

```html
<html class="dark">
```

---

## 🔹 Example

```html
<div class="bg-white dark:bg-gray-900 dark:text-white p-6">
  Dark Mode Card
</div>
```

---

## Visual Dark Mode Example

![Image](https://tailwindcss.com/api/og?path=%2Fdocs%2Fdark-mode)

![Image](https://miro.medium.com/v2/resize%3Afit%3A1400/1%2Ao78AgJrn8gPCIxuJgPBYjQ.png)

![Image](https://tailwindflex.com/storage/thumbnails/toggle-switch/thumb_u.min.webp?v=1)

![Image](https://miro.medium.com/1%2Aqyl_aC0cCPHSuoO2gmrJQg.jpeg)

---

# 7️⃣ Advanced Variant Pattern (Important Concept)

Variants can stack.

Example:

```html
<button class="bg-blue-500 
               hover:bg-blue-600 
               focus:ring-4 
               active:scale-95 
               dark:bg-blue-400">
```

One element.
Multiple states.
Clean and scalable.

This is why Tailwind is powerful.

---

# 🎯 Phase 3 Practice Tasks

You must build:

1. ✅ Button with hover + transition + scale
2. ✅ Card that changes shadow + title color on hover (group)
3. ✅ Custom checkbox using peer
4. ✅ Dark mode card

---

# 🧠 After Phase 3 You Should Understand

* Interaction design
* Micro animations
* State-driven UI
* Parent-child interaction
* Dark theme handling

---

Next Phase (Phase 4):

* Reusable components
* tailwind.config.js
* Custom theme extension
* @apply
* Production mindset

---

Before we move forward:

Build at least one interactive card using:

* group
* hover
* transition
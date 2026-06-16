# 🚀 Frontend Projects Guide

Welcome to your Frontend workspace! This guide will help you navigate all your projects and get started quickly.

---

## 📁 Project Overview

Your workspace contains **6 awesome React projects** built with modern tools. Here's what each does:

### 1. **Myntra Clone** 🛍️

An e-commerce platform inspired by Myntra (Indian fashion retailer).

- **Location:** `Myntra-clone/`
- **Tech Stack:** React + Vite + Tailwind CSS + Redux
- **Backend:** Node.js Express server
- **Perfect for:** Learning full-stack development with e-commerce patterns

### 2. **React Startup** ⚡

A template/boilerplate project to quickly start new React applications.

- **Location:** `ReactStartUp/`
- **Tech Stack:** React + Vite + CSS
- **Use case:** Quick prototyping or starting new projects
- **Great for:** Learning React fundamentals

### 3. **Resume Builder** 📄

A professional resume creation and viewing application.

- **Location:** `Resume/`
- **Tech Stack:** React + Vite + Tailwind CSS + State Management
- **Features:** Create, edit, and download resumes
- **Perfect for:** Building portfolio project + UI/UX practice

### 4. **Social Media App** 👥

A social networking platform with posts, interactions, and user profiles.

- **Location:** `Social-Media/`
- **Tech Stack:** React + Vite + Custom Hooks + Context API
- **Features:** Posts, comments, likes, user profiles
- **Learn:** Advanced state management & component composition

### 5. **Temperature Converter** 🌡️

A simple utility app to convert between temperature scales.

- **Location:** `Temperature-Converter/`
- **Tech Stack:** React + Vite + CSS
- **Perfect for:** Learning React basics (state, props, events)

### 6. **Todo App** ✅

A task management application with add, edit, delete, and filter functionality.

- **Location:** `Todo-App/`
- **Tech Stack:** React + Vite + State Management
- **Features:** Create tasks, mark complete, delete, filter by status
- **Great for:** Learning state management fundamentals

---

## 🛠️ Tech Stack Overview

All projects use a consistent, modern stack:

| Tool             | Purpose                                     |
| ---------------- | ------------------------------------------- |
| **React**        | UI library for building components          |
| **Vite**         | Fast build tool and development server      |
| **Tailwind CSS** | Utility-first CSS framework (most projects) |
| **ESLint**       | Code quality & consistency checker          |
| **Redux**        | State management (Myntra, Todo App)         |
| **Context API**  | State management (Social Media)             |

---

## 🚀 Quick Start Guide

### Prerequisites

- Node.js (v14+) and npm installed on your system
- Basic knowledge of React and JavaScript

### Getting Started with Any Project

#### Step 1: Navigate to project folder

```bash
cd Frontend/ProjectName
# Example: cd Frontend/Myntra-clone/Myntra-frontend
```

#### Step 2: Install dependencies

```bash
npm install
```

#### Step 3: Start development server

```bash
npm run dev
```

#### Step 4: Open in browser

- Development server runs on `http://localhost:5173` (default Vite port)
- Open this URL in your browser
- Changes auto-reload (hot module replacement enabled)

#### Step 5: Build for production

```bash
npm run build
```

---

## 📚 Project-Specific Setup

### Myntra Clone (Full-Stack)

```bash
# Frontend setup
cd Frontend/Myntra-clone/Myntra-frontend
npm install
npm run dev

# Backend setup (in another terminal)
cd Frontend/Myntra-clone/actual_backend
npm install
npm start
```

**Backend runs on:** `http://localhost:5000`
**Frontend runs on:** `http://localhost:5173`

### Other Projects

```bash
cd Frontend/[ProjectName]
npm install
npm run dev
```

---

## 📖 How to Use Each Project

### 🛍️ Myntra Clone

1. Browse products from the backend API
2. Add items to cart
3. View cart and checkout
4. Learn full-stack React patterns

### ✅ Todo App

1. Add new tasks
2. Mark tasks as complete
3. Delete finished tasks
4. Filter by status
5. Explore state management patterns

### 📄 Resume Builder

1. Fill in your personal details
2. Add education & work experience
3. Preview your resume
4. Download or export

### 👥 Social Media App

1. Create posts with text/images
2. Like and comment on posts
3. View user profiles
4. Explore custom hooks & context usage

### 🌡️ Temperature Converter

1. Enter temperature value
2. Select source unit (Celsius, Fahrenheit, Kelvin)
3. View instant conversions
4. Understand React state & events

### ⚡ React Startup

- Use as template for new projects
- Follow file structure for consistency
- Customize with your own components

---

## 📁 Common File Structure

Most projects follow this pattern:

```
project-name/
├── src/
│   ├── components/       # Reusable React components
│   ├── store/            # Redux or Context setup
│   ├── assets/           # Images, icons, static files
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── public/               # Static files
├── package.json          # Dependencies & scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS config (if used)
└── README.md             # Project-specific guide
```

---

## 🎯 Useful npm Scripts

Available in all projects:

```bash
npm run dev       # Start development server
npm run build     # Create production build
npm run preview   # Preview production build locally
npm run lint      # Check code quality with ESLint
```

---

## 💡 Tips for Success

✅ **Start small:** Begin with Temperature Converter or Todo App to understand basics
✅ **Read component code:** Check `src/components/` to see how pieces fit together
✅ **Check state management:** Look at Redux store in Myntra or hooks in Social Media
✅ **Use browser DevTools:** Inspect elements, check console for errors
✅ **Experiment:** Try modifying components and see changes instantly
✅ **Read error messages:** They guide you to solutions
✅ **Keep dependencies updated:** Occasionally run `npm update`

---

## 🐛 Common Issues & Solutions

### Issue: Port already in use

```bash
# Kill process using port 5173
npx kill-port 5173
```

### Issue: Dependencies not installing

```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Hot reload not working

- Save file again
- Restart dev server: `Ctrl+C` then `npm run dev`

### Issue: Import paths not working

- Check `vite.config.js` for alias configuration
- Ensure paths use `@/` prefix if configured

---

## 🎓 Learning Path

**Week 1-2:** Temperature Converter & Todo App

- Focus: React basics (state, props, events, lists)

**Week 3-4:** Resume Builder & ReactStartUp

- Focus: Component composition, styling, forms

**Week 5-6:** Social Media App

- Focus: Advanced state management, hooks, context

**Week 7+:** Myntra Clone

- Focus: Full-stack development, APIs, databases

---

## 📚 Resources to Learn More

- [React Official Docs](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)
- [Redux Learning Path](https://redux.js.org/tutorials/fundamentals)
- [MDN Web Docs](https://developer.mozilla.org)

---

## 🤝 Contributing & Improving

Feel free to:

- Add new features to any project
- Refactor code for better practices
- Add tests and documentation
- Share your learnings in comments

---

## ✨ Happy Coding!

Pick a project, follow the quick start guide above, and start building! Remember: every expert was once a beginner. Happy learning! 🎉

---

**Last Updated:** June 2026
**Status:** All projects functional and ready to learn from

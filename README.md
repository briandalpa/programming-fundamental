# 🧠 Programming Fundamentals

This repository contains all assignments and exercises from the **Programming Fundamentals** module of Purwadhika AI Fullstack Software Development Bootcamp.

Each folder represents a different class session or topic, containing multiple exercises written in **TypeScript**.

---

## 📂 Folder Structure

```
programming-fundamental/
├── 01-intro-to-programming/
│   ├── exercise-01.ts
│   └── ...
│
├── 02-version-control/
│   ├── exercise-01.ts
│   └── ...
│
├── 03-conditional-and-loop/
│   └── exercise-01.ts
│   └── ...
│
├── 04-array-and-function/
│   └── exercise-01.ts
│   └── ...
│
├── 05-exercise/
│   └── exercise-01.ts
│   └── ...
│
└── tsconfig.json
```

---

## 🚀 How to Run the Code

### Option 1 – Using **Bun**

Bun can run TypeScript files directly, without compiling manually.

1. **Install Bun** (if not installed)

   ```bash
   curl -fsSL https://bun.com/install | bash
   ```

2. **Run any TypeScript file**
   ```bash
   bun run 01-intro-to-programming/exercise-01.ts
   ```

---

### Option 2 – Using **Node.js**

1. **Clone the repository**

   ```bash
   git clone https://github.com/briandalpa/programming-fundamental.git
   cd programming-fundamental
   ```

2. **Run TypeScript files**
   Make sure you have **Node.js** and **TypeScript** installed globally.

   ```bash
   npm install -g typescript
   ```

   Then compile and run:

   ```bash
   tsc 01-intro-to-programming/exercise-01.ts
   node 01-intro-to-programming/exercise-01.js
   ```

   Or, run directly with **ts-node**:

   ```bash
   npm install -g ts-node
   ts-node 01-intro-to-programming/exercise-01.ts
   ```

---

## 🧑🏻‍💻 Code Formatting

Each folder includes its own **`.prettierrc`** file.  
This is intentional, so if someone (like a lecturer) opens just one folder without cloning the entire repository,  
Prettier will still automatically format the code according to the project rules.

This ensures:

- Consistent formatting for every standalone homework folder.
- Ease of review for instructors who open only a single exercise folder.
- No dependency on global or root configuration.

Note: The root folder contains .gitignore, README.md, and tsconfig.json to manage repository wide settings and TypeScript configuration.

## 🧩 Topics Covered

- Intro to Software Development and Programming Fundamental
- Git and Version Control
- Conditional Statements and Loops
- Arrays and Functions
- Object Oriented Programming
- Algorithm and Data Structure
- Advanced JavaScript Concepts and Cross-Language Comparisons

---

## 🧰 Tools & Technologies

- **Visual Studio Code**
- **Git & GitHub**
- **Node.js**
- **Bun**
- **TypeScript**

---

## ✍🏻 Author

**Briand Alpa**  
🚀 Career switcher from video editing and motion graphics animation to **fullstack web development**.  
🎓 Currently learning at Purwadhika Digital Technology School.

---

## 📜 License

This repository is for educational purposes only as part of the Purwadhika Bootcamp coursework.

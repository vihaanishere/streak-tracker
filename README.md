# 🔥 Streak Tracker

A daily learning streak tracker built with **React + Vite**. Log what you studied each day, pick a subject, and watch your streak grow. Miss a day and the streak resets, so no skipping 😤

**Live demo:** [streaktrackerv.netlify.app](https://streaktrackerv.netlify.app)

---

## Why I built this

This is my all-in-one revision project. I wanted one thing that makes me use everything I've been learning: JavaScript classes, testing with Jest, React components, state, controlled forms, and localStorage. Also, I genuinely needed something to keep me consistent with Java, Python, DSA and Web Dev. Two birds, one repo.

---

## Features

- **Daily streak counter**: counts how many days in a row you've logged something
- **Subject-wise totals**: see how much time you've put into each subject
- **Add a log**: choose a date, subject and amount, with validation errors shown right on screen
- **Log history**: all your entries listed in one place
- **Saved automatically**: your logs stay even after you refresh or close the tab (localStorage)

---

## Tech used

| What | Why |
|------|-----|
| React (with Vite) | UI components and state |
| JavaScript classes | `LogEntry` and `Tracker` hold all the logic |
| Jest | Tests for the logic layer |
| localStorage + JSON | Saving logs in the browser |
| HTML + CSS | Layout and styling |
| Netlify | Hosting |

---

## How it works

All the streak logic lives in plain JavaScript classes, completely separate from React, so it can be tested on its own.

- **`LogEntry`**: one log (date, subject, amount)
- **`Tracker`**: holds all the logs and has the methods:
  - `addLog` (with validation)
  - `getLogsBySubject`
  - `totalBySubject`
  - `previousDay` and `todayString` (date helpers)
  - `getStreak`

React just reads from the `Tracker` and shows it on screen. `App.jsx` keeps the tracker in state, and every time you add a log the streak and totals get recalculated from it.

### Components

- `StreakCard`: shows the current streak
- `SubjectStats`: shows totals per subject
- `LogList` and `LogItem`: the list of logs
- `LogForm`: controlled inputs for adding a new log

---

## Run it locally

```bash
# clone the repo
git clone https://github.com/vihaanishere/streak-tracker.git
cd streak-tracker

# install dependencies
npm install

# start the dev server
npm run dev
```

To run the tests:

```bash
npm test
```

To make a production build:

```bash
npm run build
```

---

## Project structure

```
streak-tracker/
├── src/
│   ├── components/    # StreakCard, SubjectStats, LogList, LogItem, LogForm
│   ├── App.jsx        # main app, holds the Tracker in state
│   └── ...            # Tracker and LogEntry classes + tests
├── index.html
└── package.json
```

---

## What I learned

- Keeping logic in plain classes makes it way easier to test
- Controlled inputs in React and how validation errors flow back to the UI
- Using a lazy `useState` initializer to load saved data from localStorage
- Deploying a Vite app on Netlify

---

## What's next

- [ ] Delete a log
- [ ] Filter logs by subject
- [ ] Final polish and responsive tweaks

---

## Author

Made by **Vihaan** ([@vihaanishere](https://github.com/vihaanishere)), BTech AI/ML student at JIIT.

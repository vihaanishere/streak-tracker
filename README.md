# 🔥 Streak Tracker

A daily learning tracker built with React and Vite. Log what you studied, watch your streak grow, and see your total minutes per subject. All the tracking logic lives in a plain JavaScript class with its own unit tests, and React sits on top of it.

> Built as an all-in-one revision project for the Meta Front-End Developer Professional Certificate.

---

## 📖 About

Streak Tracker keeps a notebook of study sessions. Each session (a "log entry") records the subject, minutes, date and a short note. From the list of logs, the app works out:

- how many days in a row you've studied (your **streak**)
- how many minutes you've put into each subject
- a history of every session, newest first

The logic was written and tested first, with no UI. The HTML, CSS and React layers were built on top afterwards.

---

## ✨ Features

| Feature | Status |
|---|---|
| Add a log with a form (subject, minutes, date, notes) | ✅ Done |
| Validation errors shown on the page | ✅ Done |
| Streak counter (any log counts as a streak day) | ✅ Done |
| Total minutes per subject | ✅ Done |
| History list of all logs | ✅ Done |
| Responsive dark theme (CSS grid, flexbox, variables) | ✅ Done |
| 24 unit tests for the logic (Vitest) | ✅ Done |
| Filter logs by subject in the logic class | ✅ Done (not in the UI yet) |
| Save and load logs with `localStorage` (JSON) | 🔜 Next |
| Delete logs and filter the history in the UI | 🔜 Planned |

---

## 🧠 Skills Practised

| Topic | Where it shows up |
|---|---|
| Classes and OOP | `LogEntry` and `Tracker` |
| Error handling | `throw new Error(...)` in `addLog`, `try/catch` in the form |
| Higher-order methods | `filter`, `map`, `reduce`, `forEach` |
| `Set` | Removing duplicate dates when counting a streak |
| Objects as tally sheets | `totalBySubject` builds `{ Java: 65, DSA: 30 }` |
| Default parameters | `getStreak(today = todayString())` |
| Date handling | UTC-safe `previousDay`, local-time `todayString` |
| React components and props | `StreakCard`, `SubjectStats`, `LogForm`, `LogList`, `LogItem` |
| Lists and keys | `map` with `key` in `SubjectStats` and `LogList` |
| `useState` and controlled inputs | `LogForm` fields, the `logs` array in `App` |
| Derived state | Streak and totals are calculated from `logs`, never stored |
| Passing functions as props | `onAddLog` from `App` to `LogForm` |
| Unit testing | Vitest with `describe`, `test`, `beforeEach`, `toThrow`, `toEqual` |
| Git | Feature commits and a clean GitHub repo |

---

## 🛠️ Tech Stack

| Tool | Used for |
|---|---|
| JavaScript (ES6+) | App logic |
| React 19 | Components and state |
| Vite | Dev server and build |
| Vitest | Unit tests |
| oxlint | Linting |
| HTML + CSS | Layout and styling |
| Git + GitHub | Version control |

---

## 📁 Project Structure

```
streak-tracker/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    ├── components/
    │   ├── StreakCard.jsx
    │   ├── SubjectStats.jsx
    │   ├── LogForm.jsx
    │   ├── LogList.jsx
    │   └── LogItem.jsx
    └── logic/
        ├── tracker.js
        └── tracker.test.js
```

---

## 🧩 How It Works

### Data flow

1. `App` keeps the array of logs in state with `useState`.
2. On every render, `App` builds a `Tracker` from those logs and asks it for the streak and the totals.
3. The streak and totals are **derived**, never stored, so they can't get out of sync with the logs.
4. `LogForm` gets an `onAddLog` function as a prop. On submit it calls it, `App` validates the entry with `tracker.addLog`, and then adds it to the state.
5. If validation fails, the error message is caught in `LogForm` and shown under the button.

### `LogEntry`

One page in the notebook.

```js
new LogEntry(id, subject, minutes, date, notes)
```

`date` is a string in `"YYYY-MM-DD"` format.

### `Tracker`

The notebook that holds every log in `this.logEntries`.

| Method | What it does |
|---|---|
| `addLog(entry)` | Validates the entry and adds it. Throws an error for an empty subject, invalid minutes, or a missing date |
| `getLogsBySubject(subject)` | Returns only the logs for that subject, and doesn't change the original list |
| `totalBySubject()` | Returns an object of total minutes per subject, like `{ Java: 65, DSA: 30 }` |
| `getStreak(today)` | Returns the number of consecutive days with at least one log |

### Streak rules

- Any single log counts as a streak day.
- Two logs on the same day count as one day.
- If you haven't logged today but did log yesterday, the streak is still alive.
- If neither today nor yesterday has a log, the streak is `0`.
- `today` is passed in as a string, so tests can use a fixed date.

### Helpers

| Function | What it does |
|---|---|
| `previousDay("2026-10-27")` | Returns `"2026-10-26"`, using UTC maths so months and years roll over correctly |
| `todayString()` | Returns today's date as `"YYYY-MM-DD"` in local time |

---

## 🚀 Getting Started

```bash
git clone https://github.com/vihaanishere/streak-tracker.git
cd streak-tracker
npm install
npm run dev
```

| Command | What it does |
|---|---|
| `npm run dev` | Starts the dev server |
| `npm test` | Runs the tests in watch mode |
| `npm run build` | Makes a production build |
| `npm run lint` | Checks the code with oxlint |

---

## 🧪 Tests

The tests cover:

- adding a valid entry
- rejecting an empty subject, a spaces-only subject, `NaN` minutes, zero or negative minutes, and a missing date
- filtering by subject, including a subject with no logs
- totals per subject, including an empty tracker
- date helpers, including month, year and leap-year rollovers
- streaks: no logs, an active streak, a streak that is still alive from yesterday, a dead streak, a gap day, duplicate days on one date, and a month rollover

---

## 🗺️ Roadmap

- [x] Step 1: `LogEntry`, `Tracker`, validation, subject filter, totals, streak, date helpers and tests
- [x] Step 2: static HTML + CSS layout (semantic tags, grid, flexbox, CSS variables, responsive)
- [x] Step 3: split into React components and pass data with props
- [x] Step 4: add the log form with `useState` and show validation errors
- [ ] Tighten `addLog` validation (empty or badly formatted dates, `Infinity` minutes)
- [ ] Step 5: persist logs with `localStorage` and JSON
- [ ] Step 6: delete logs, filter the history in the UI, final polish

---

## 🧾 Commit Convention

This project uses conventional commits:

| Prefix | Used for |
|---|---|
| `feat` | New features |
| `fix` | Bug fixes |
| `refactor` | Restructuring without changing behaviour |
| `test` | Adding or changing tests |
| `style` | CSS and formatting |
| `docs` | README and documentation |

Example: `feat(streak-tracker): add subject filter, totals and streak logic`

---

## 📚 Course Progress

Part of my **Meta Front-End Developer Professional Certificate** journey on Coursera.

| Course | Status |
|---|---|
| 1. Introduction to Front-End Development | ✅ Completed |
| 2. Programming with JavaScript | ✅ Completed |
| 3. Version Control | ✅ Completed |
| React fundamentals | 🔄 In progress |

Made by [@vihaanishere](https://github.com/vihaanishere)

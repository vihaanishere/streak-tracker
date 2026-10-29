# 🔥 Streak Tracker

A daily learning tracker built with plain JavaScript logic and (soon) a React + Vite UI. Log what you studied, see your streak, and get a total of minutes per subject.

> Built as an all-in-one revision project for the Meta Front-End Developer Professional Certificate.

---

## 📖 About

Streak Tracker keeps a notebook of study sessions. Each session (a "log entry") records the subject, minutes, date and a short note. From that list of logs, the app works out:

- how many days in a row you've studied (your **streak**)
- how many minutes you've put into each subject
- which logs belong to a given subject

The logic is written and tested first, on its own, with no UI. The HTML, CSS and React layers come on top of it afterwards.

---

## ✨ Features

| Feature | Status |
|---|---|
| Log entries with validation (subject, minutes, date) | ✅ Done |
| Filter logs by subject | ✅ Done |
| Total minutes per subject | ✅ Done |
| Streak counter (any log counts as a streak day) | ✅ Done |
| Date helpers (`previousDay`, `todayString`) | ✅ Done |
| Jest unit tests for the logic | ✅ Done |
| Static HTML + CSS layout | 🔜 Next |
| React components with props | 🔜 Planned |
| Add-log form with `useState` | 🔜 Planned |
| Save and load with `localStorage` (JSON) | 🔜 Planned |
| Delete logs and filter the list in the UI | 🔜 Planned |

---

## 🧠 Skills Practised

| Topic | Where it shows up |
|---|---|
| Classes and OOP | `LogEntry` and `Tracker` |
| Error handling | `throw new Error(...)` in `addLog` for bad input |
| Higher-order methods | `filter`, `map`, `reduce` |
| `Set` | Removing duplicate dates when counting a streak |
| Objects as tally sheets | `totalBySubject` builds `{ Java: 65, DSA: 30 }` |
| Default parameters | `getStreak(today = todayString())` |
| Date handling | UTC-safe `previousDay`, local-time `todayString` |
| Unit testing | Jest with `describe`, `test`, `beforeEach`, `toThrow`, `toEqual` |
| Git | Feature commits using conventional commit messages |
| HTML/CSS/React | Coming in the next steps |

---

## 🛠️ Tech Stack

| Tool | Used for |
|---|---|
| JavaScript (ES6+) | App logic |
| Jest | Unit tests |
| HTML + CSS | Layout and styling (next step) |
| React + Vite | Components and state (planned) |
| Git + GitHub | Version control |

---

## 🧩 How the Logic Works

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
git clone https://github.com/vihaanishere/meta-frontend-course.git
cd meta-frontend-course/projects/streak-tracker
npm install
npm test
```

---

## 🧪 Tests

The tests cover:

- adding a valid entry
- rejecting an empty subject, a spaces-only subject, `NaN` minutes and a missing date
- filtering by subject, including a subject with no logs
- totals per subject, including an empty tracker
- date helpers, including month, year and leap-year rollovers
- streaks: no logs, an active streak, a streak that is still alive from yesterday, a dead streak, a gap day, duplicate days on one date, and a month rollover

---

## 🗺️ Roadmap

- [x] Step 1: `LogEntry`, `Tracker`, validation, subject filter, totals, streak, date helpers and tests
- [ ] Step 2: static HTML + CSS layout (semantic tags, grid, flexbox, CSS variables, responsive)
- [ ] Step 3: split into React components and pass data with props
- [ ] Step 4: add the log form with `useState` and show validation errors
- [ ] Step 5: persist logs with `localStorage` and JSON
- [ ] Step 6: delete logs, filter in the UI, final polish

---

## 🧾 Commit Convention

This project uses conventional commits:

| Prefix | Used for |
|---|---|
| `feat` | New features |
| `fix` | Bug fixes |
| `refactor` | Restructuring without changing behaviour |
| `test` | Adding or changing tests |
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

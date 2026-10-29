import StreakCard from "./components/StreakCard";
import SubjectStats from "./components/SubjectStats";
import LogList from "./components/LogList";
import LogForm from "./components/LogForm";

import './App.css'
function App(){
    const totals = { Java: 180, Python: 120, DSA: 150, "Web Dev": 210 };
    const logs = [
    { id: 1, subject: "Web Dev", minutes: 60, date: "2026-10-28", notes: "Built getStreak with a Set and a while loop" },
    { id: 2, subject: "Web Dev", minutes: 45, date: "2026-10-27", notes: "LogEntry, Tracker and validation" },
    { id: 3, subject: "DSA", minutes: 40, date: "2026-10-26", notes: "Arrays and two-pointer practice" },
    { id: 4, subject: "Java", minutes: 50, date: "2026-10-25", notes: "Classes and constructors" },
    { id: 5, subject: "Python", minutes: 35, date: "2026-10-24", notes: "List comprehensions" },
];
    return(
        <main>
            <StreakCard streak={5} />
            <SubjectStats totals={totals} />
            <LogForm />
            <LogList logs={logs} />
        </main>
    )
}
export default App;
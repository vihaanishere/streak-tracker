import StreakCard from "./components/StreakCard";
import SubjectStats from "./components/SubjectStats";
import LogList from "./components/LogList";
import LogForm from "./components/LogForm";
import { useState } from "react";
import {LogEntry , Tracker, todayString} from "./logic/tracker";


import './App.css'
function App(){
    const tracker = new Tracker();
   
    const [logs, setLogs] = useState([
    { id: 1, subject: "Web Dev", minutes: 60, date: "2026-10-28", notes: "Built getStreak with a Set and a while loop" },
    { id: 2, subject: "Web Dev", minutes: 45, date: "2026-10-27", notes: "LogEntry, Tracker and validation" },
    { id: 3, subject: "DSA", minutes: 40, date: "2026-10-26", notes: "Arrays and two-pointer practice" },
    { id: 4, subject: "Java", minutes: 50, date: "2026-10-25", notes: "Classes and constructors" },
    { id: 5, subject: "Python", minutes: 35, date: "2026-10-24", notes: "List comprehensions" },

]);
    
    logs.forEach(log =>{
        tracker.addLog(
            new LogEntry(
                log.id,
                log.subject,
                log.minutes,
                log.date,
                log.notes
            )
        )
    })
    const totals = tracker.totalBySubject()
    const streak = tracker.getStreak()
    console.log(todayString(), tracker.getStreak(), tracker.getStreak("2026-10-29"));
    console.log(tracker.logEntries.map(entry => entry.date));
    return(
        <main>
            <StreakCard streak={streak} />
            <SubjectStats totals={totals} />
            <LogForm />
            <LogList logs={logs} />
        </main>
    )
}
export default App;
import StreakCard from "./components/StreakCard";
import SubjectStats from "./components/SubjectStats";
import LogList from "./components/LogList";
import LogForm from "./components/LogForm";
import { useState } from "react";
import {LogEntry , Tracker} from "./logic/tracker";


import './App.css'
function App(){
    
    const tracker = new Tracker();
    
    const [logs, setLogs] = useState(() => {
        try {
            const saved = localStorage.getItem("logs");
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            return [];
        }
    });

    
    
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
    function handleAddLog(data){
    
        const entry = new LogEntry(Date.now(), data.subject, data.minutes, data.date, data.notes)
        const newLogs = [entry, ...logs]
        setLogs(newLogs)
        localStorage.setItem("logs", JSON.stringify(newLogs))
        
        
    }
    console.log("stored:", localStorage.getItem("logs"));
    return(
        <main>
            <StreakCard streak={streak} />
            <SubjectStats totals={totals} />
            <LogForm onAddLog={handleAddLog} />
            <LogList logs={logs} />
            
        </main>
    )
}

export default App;
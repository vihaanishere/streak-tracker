
class LogEntry{
    constructor(id, subject, minutes, date, notes){
        this.id = id;
        this.subject = subject;
        this.minutes = minutes;
        this.date = date;
        this.notes = notes;
    }
}
function previousDay(dateString) {
    const d = new Date(dateString + "T00:00:00Z");  
    d.setUTCDate(d.getUTCDate() - 1);              
    return d.toISOString().slice(0, 10);             
}
function todayString() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

class Tracker{
        constructor(){
            this.logEntries= [];
        }
        addLog(entry){
            if(entry.subject.trim() == ""){
                throw new Error("Empty Subject")
            }
            if(entry.minutes <= 0 || typeof entry.minutes != "number" || Number.isNaN(entry.minutes)){
                throw new Error("Time entered is not valid");
            }
            if(entry.date == undefined || entry.date == null){
                throw new Error("Date not entered")
            }
            this.logEntries.push(entry);
        }
        getLogsBySubject(subject){
            const result = [];
            for (let i = 0; i < this.logEntries.length; i++){
                const entry = this.logEntries[i];
                if (entry.subject === subject){
                    result.push(entry);
                }
        
            }
            return result;
        }
        totalBySubject(){
            const tally = {};
            for(let i = 0; i<this.logEntries.length;i++){
                const entry = this.logEntries[i];
                if(tally[entry.subject] === undefined){
                    tally[entry.subject] = 0;
                }
                tally[entry.subject] += entry.minutes;
            }
            return tally;
        }
        getStreak(today = todayString()) {
    
            const dates = new Set(this.logEntries.map(entry => entry.date));
            let current;
            if (dates.has(today)) {
                current = today;
            } else if (dates.has(previousDay(today))) {
                current = previousDay(today);
            } else {
                return 0;
            }

            let count = 0;
            while (dates.has(current)) {
                count++;
                current = previousDay(current);
            }

            return count;
        }
}

export { LogEntry, Tracker, previousDay, todayString };
import { useState } from "react";


function LogForm({onAddLog}){
    const [subject, setSubject] = useState("")
    const [minutes, setMinutes] = useState("")
    const [date, setDate] = useState("")
    const [notes, setNotes] = useState("")
    const [error, setError] = useState("")
    function handleSubmit(event) {
        event.preventDefault();
        try {
            onAddLog({ subject, minutes: Number(minutes), date, notes });
            // success: clear the four fields and the error
            setSubject("")
            setMinutes("")
            setDate("")
            setNotes("")
            
        } catch (err) {
            setError(err.message);
        }
        
    }
    return(
        <section>
            <h2>Add A Log</h2>
            <form onSubmit={handleSubmit}>
 
                <fieldset id="subject">
                    <legend>Subject:</legend>
                    <label><input type="radio" value="Java" name="subject" checked = {subject === "Java" } onChange={() => setSubject("Java")} required/>Java</label>
                    <label><input type="radio" value="Python" name="subject" checked = {subject === "Python" } onChange={() => setSubject("Python")} required/>Python</label>
                    <label><input type="radio" value="DSA" name="subject" checked = {subject === "DSA" } onChange={() => setSubject("DSA")} required/>DSA</label>
                    <label><input type="radio" value="Web Dev" name="subject" checked = {subject === "Web Dev" } onChange={() => setSubject("Web Dev")} required/>Web Dev</label>
                </fieldset>
 
                <div>
                    <label htmlFor="minutes">Time in minutes</label>
                    <input type="number" min="1" id="minutes" name="minutes" value = {minutes} onChange={(event) => setMinutes(event.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" name="date" value = {date} onChange={(event) => setDate(event.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="notes">Notes</label>
                    <input type="text" id="notes" name="notes" value = {notes} onChange={(event) => setNotes(event.target.value)} />
                </div>
                <div>
                    <button type="submit">Submit Record</button>
                </div>
                {error && <p className="error">{error}</p>}
            </form>
        </section>
    )
}
export default LogForm;
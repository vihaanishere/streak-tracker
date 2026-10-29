function LogForm(){
    return(
        <section>
            <h2>Add A Log</h2>
            <form>
 
                <fieldset id="subject">
                    <legend>Subject:</legend>
                    <label><input type="radio" value="Java" name="subject" required/>Java</label>
                    <label><input type="radio" value="Python" name="subject" required/>Python</label>
                    <label><input type="radio" value="DSA" name="subject" required/>DSA</label>
                    <label><input type="radio" value="Web Dev" name="subject" required/>Web Dev</label>
                </fieldset>
 
                <div>
                    <label htmlFor="minutes">Time in minutes</label>
                    <input type="number" min="1" id="minutes" name="minutes" required/>
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" name="date" required/>
                </div>
                <div>
                    <label htmlFor="notes">Notes</label>
                    <input type="text" id="notes" name="notes"/>
                </div>
                <div>
                    <button type="submit">Submit Record</button>
                </div>
            </form>
        </section>
    )
}
export default LogForm;
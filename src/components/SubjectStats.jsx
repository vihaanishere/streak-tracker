function SubjectStats({ totals }) {
    return (
        <section>
            <h2>Totals</h2>
            <ul className="totals">
                {Object.entries(totals).map(([subject, minutes]) => (
                    <li key={subject}>
                        <h3>{subject}</h3>
                        <p>{minutes} min</p>
                    </li>
                ))}
            </ul>
        </section>
    );
    
}
export default SubjectStats;
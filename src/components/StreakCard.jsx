function StreakCard({ streak }) {
    return (
        <section>
            <h2>Current Streak</h2>
            <strong className="streak-number">{streak}</strong>
            <p>Day Streak</p>
        </section>
    );
}

export default StreakCard;
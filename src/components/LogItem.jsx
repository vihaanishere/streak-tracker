function LogItem({ log }){
    const { subject, minutes, date, notes} = log;
    return(
        <li>
            <h3>{subject}</h3>
            <p>{minutes} min</p>
            <time dateTime={date}>{date}</time>
            <p>{notes}</p>
        </li>
    );
}
export default LogItem;
import LogItem from "./LogItem";

function LogList({logs}){
    return(
        <section>
            <h2>
                History
            </h2>
            <ul className="history">
                {logs.map((log) => (
                    <LogItem key = {log.id} log = {log} />
                ))}
            </ul>
        </section>
    )
    
}
export default LogList;
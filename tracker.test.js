const { LogEntry, Tracker } = require('./tracker.js');
describe("Tracker addLog", () =>{
    let tracker;
    beforeEach(() => {
        tracker = new Tracker();
    });
    test("adds a time", () =>{
        tracker.addLog(new LogEntry(1, "Java", 45, "2026-10-27", "loops"));
        expect(tracker.logEntry.minutes).toBe(45);
    });
    

})
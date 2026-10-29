import { describe, test, expect, beforeEach } from 'vitest';
import { LogEntry, Tracker, previousDay, todayString } from './tracker.js';

describe("Tracker addLog", () => {
    let tracker;

    beforeEach(() => {
        tracker = new Tracker();
    });

    test("adds a valid entry", () => {
        tracker.addLog(new LogEntry(1, "Java", 45, "2026-10-27", "loops"));
        expect(tracker.logEntries.length).toBe(1);
        expect(tracker.logEntries[0].minutes).toBe(45);
    });

    test("throws on an empty subject", () => {
        const bad = new LogEntry(1, "", 30, "2026-10-27", "");
        expect(() => tracker.addLog(bad)).toThrow();
    });

    test("throws on a spaces-only subject", () => {
        const bad = new LogEntry(1, "   ", 30, "2026-10-27", "");
        expect(() => tracker.addLog(bad)).toThrow();
    });

    test("throws on NaN minutes", () => {
        const bad = new LogEntry(1, "DSA", NaN, "2026-10-27", "");
        expect(() => tracker.addLog(bad)).toThrow();
    });

    test("throws on zero or negative minutes", () => {
        expect(() => tracker.addLog(new LogEntry(1, "DSA", 0, "2026-10-27", ""))).toThrow();
        expect(() => tracker.addLog(new LogEntry(2, "DSA", -10, "2026-10-27", ""))).toThrow();
    });

    test("throws on a missing date", () => {
        const bad = new LogEntry(1, "Java", 30);
        expect(() => tracker.addLog(bad)).toThrow();
    });

    test("does not add an invalid entry", () => {
        try {
            tracker.addLog(new LogEntry(1, "", 30, "2026-10-27", ""));
        } catch (error) {
            // expected
        }
        expect(tracker.logEntries.length).toBe(0);
    });
});

describe("Tracker getLogsBySubject", () => {
    let tracker;

    beforeEach(() => {
        tracker = new Tracker();
        tracker.addLog(new LogEntry(1, "Java", 45, "2026-10-27", "loops"));
        tracker.addLog(new LogEntry(2, "DSA", 30, "2026-10-27", "arrays"));
        tracker.addLog(new LogEntry(3, "Java", 20, "2026-10-26", "classes"));
    });

    test("returns only the logs for that subject", () => {
        const result = tracker.getLogsBySubject("Java");
        expect(result.length).toBe(2);
        expect(result.every(entry => entry.subject === "Java")).toBe(true);
    });

    test("returns an empty array for a subject with no logs", () => {
        expect(tracker.getLogsBySubject("Python")).toEqual([]);
    });

    test("does not change the original list", () => {
        tracker.getLogsBySubject("Java");
        expect(tracker.logEntries.length).toBe(3);
    });
});

describe("Tracker totalBySubject", () => {
    let tracker;

    beforeEach(() => {
        tracker = new Tracker();
    });

    test("returns an empty object when there are no logs", () => {
        expect(tracker.totalBySubject()).toEqual({});
    });

    test("adds up minutes per subject", () => {
        tracker.addLog(new LogEntry(1, "Java", 45, "2026-10-27", ""));
        tracker.addLog(new LogEntry(2, "DSA", 30, "2026-10-27", ""));
        tracker.addLog(new LogEntry(3, "Java", 20, "2026-10-26", ""));
        expect(tracker.totalBySubject()).toEqual({ Java: 65, DSA: 30 });
    });
});

describe("previousDay", () => {
    test("goes back one normal day", () => {
        expect(previousDay("2026-10-27")).toBe("2026-10-26");
    });

    test("rolls back over a month", () => {
        expect(previousDay("2026-03-01")).toBe("2026-02-28");
    });

    test("rolls back over a year", () => {
        expect(previousDay("2026-01-01")).toBe("2025-12-31");
    });

    test("handles a leap year", () => {
        expect(previousDay("2028-03-01")).toBe("2028-02-29");
    });
});

describe("todayString", () => {
    test("returns a YYYY-MM-DD string", () => {
        expect(todayString()).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
});

describe("Tracker getStreak", () => {
    let tracker;

    const logOn = (dates) => {
        dates.forEach((date, i) => {
            tracker.addLog(new LogEntry(i + 1, "Java", 30, date, ""));
        });
    };

    beforeEach(() => {
        tracker = new Tracker();
    });

    test("is 0 with no logs", () => {
        expect(tracker.getStreak("2026-10-27")).toBe(0);
    });

    test("counts 3 days in a row ending today", () => {
        logOn(["2026-10-25", "2026-10-26", "2026-10-27"]);
        expect(tracker.getStreak("2026-10-27")).toBe(3);
    });

    test("is still alive when the last log was yesterday", () => {
        logOn(["2026-10-24", "2026-10-25", "2026-10-26"]);
        expect(tracker.getStreak("2026-10-27")).toBe(3);
    });

    test("is 0 when the last log was 2 or more days ago", () => {
        logOn(["2026-10-23", "2026-10-24", "2026-10-25"]);
        expect(tracker.getStreak("2026-10-27")).toBe(0);
    });

    test("a gap day breaks the streak", () => {
        logOn(["2026-10-27", "2026-10-26", "2026-10-24"]);
        expect(tracker.getStreak("2026-10-27")).toBe(2);
    });

    test("two logs on the same day count once", () => {
        logOn(["2026-10-27", "2026-10-27"]);
        expect(tracker.getStreak("2026-10-27")).toBe(1);
    });

    test("works across a month change", () => {
        logOn(["2026-10-31", "2026-11-01", "2026-11-02"]);
        expect(tracker.getStreak("2026-11-02")).toBe(3);
    });
});

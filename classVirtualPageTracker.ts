// class define in TypeScript
class VirtualPageTracker extends Tracker {
    private virtualPageName: string = '';
    constructor(name) {
        super(name);
    }

    getName(): void {
        return this.virtualPageName;
    }

    static getTrackerName(): string {
        return  'VirtualPageTracker';
    }
}

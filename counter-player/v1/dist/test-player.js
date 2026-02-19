export class TestPlayer {
    count;
    id;
    label;
    maxCount;
    constructor(props) {
        this.id = props.id;
        this.label = props.label ?? 'Player';
        this.maxCount = props.maxCount ?? 10;
        this.count = 0;
    }
    getState() {
        return {
            id: this.id,
            label: this.label,
            count: this.count,
            maxCount: this.maxCount,
            atMax: this.count >= this.maxCount
        };
    }
    increment(step = 1) {
        this.count = this.clamp(this.count + Math.max(1, step));
        return this.getState();
    }
    decrement(step = 1) {
        this.count = this.clamp(this.count - Math.max(1, step));
        return this.getState();
    }
    reset() {
        this.count = 0;
        return this.getState();
    }
    rename(label) {
        this.label = label.trim() || this.label;
        return this.getState();
    }
    clamp(value) {
        return Math.min(Math.max(0, value), this.maxCount);
    }
}

export interface TestPlayerProps {
    id: string;
    label?: string;
    maxCount?: number;
}
export interface TestPlayerState {
    id: string;
    label: string;
    count: number;
    maxCount: number;
    atMax: boolean;
}
export declare class TestPlayer {
    private count;
    private readonly id;
    private label;
    private readonly maxCount;
    constructor(props: TestPlayerProps);
    getState(): TestPlayerState;
    increment(step?: number): TestPlayerState;
    decrement(step?: number): TestPlayerState;
    reset(): TestPlayerState;
    rename(label: string): TestPlayerState;
    private clamp;
}

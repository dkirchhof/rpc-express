export interface IAPI {
    hello(name: string): Promise<string>;
    foo(): Promise<string>;
    getDate(): Promise<Date>;
    math(a: number, b: number): Promise<number>;
}

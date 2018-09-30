import { IAPI } from "../common/IAPI";
export declare class API implements IAPI {
    hello(name: string): Promise<string>;
    foo(): Promise<string>;
    getDate(): Promise<Date>;
    math(a: number, b: number): Promise<number>;
}

import { IAPI } from "../common/IAPI";

export class API implements IAPI {

    hello(name: string) {
        return Promise.resolve(`hello ${name}`);
    }

    foo() {
        return Promise.resolve("bar");
    }

    getDate() {
        return Promise.resolve(new Date());
    } 
    
    math(a: number, b: number){
        return Promise.resolve(a + b);
    }
}

import fetch from "node-fetch";
import { createRPCClient } from "../../client";
import { IAPI } from "../common/IAPI";

export async function runExample() {
    const client = createRPCClient<IAPI>(fetch, "http://localhost:3000/rpc");

    const greeting = await client.hello("world");
    const foo = await client.foo();
    const date = await client.getDate();
    const fortyTwo = await client.math(40, 2);

    console.log(greeting, foo, date.toLocaleDateString(), fortyTwo);
}

runExample();

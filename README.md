# rpc-express
Communicate with your server in a typesafe way. Use server-side functions just like all the other functions in your code. 

## How to use

### Common
1. Define a common interface:
    ```ts
    export interface IAPI {
        hello(name: string): Promise<string>;
    }
    ```

### Client
1. Create a wrapper for this interface. Specify the fetch function like from the [native fetch api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) or [node-fetch](https://www.npmjs.com/package/node-fetch) and the server url:
    ```ts
    import { createRPCClient } from "rpc-express";
    import { IAPI } from "../common/IAPI";

    const client = createRPCClient<IAPI>(window.fetch, "http://localhost:3000/rpc");
    ```
1. Now, you can use the wrapper to call all the functions defined in your common interface:
    ```ts
    const greeting = await client.hello("world");

    console.log(greeting);
    ``` 

### Server
1. Implement your server-side functions and wrap them into an object or a class:
    ```ts
    const API: IAPI = {
        hello: (name: string) => Promise.resolve(`hello ${name}`),
    };
    ```
1. Connect the wrapper to an express server. Define the endpoint and use the raw body parser:
    ```ts
    import { raw } from "body-parser";
    import { connectRemoteFunctions } from "rpc-express";

    app.use(raw());

    connectRemoteFunctions(app, "/rpc", API);
    ```

## Under the hood
- This library uses [MessagePack](https://msgpack.org) as serialization format. It is smaller than json and as a side effect, it allows to use dates as dates. So no worries... You don't have to handle iso strings and convert them back to date objects.
- The client uses [Proxies](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy), so you don't have to implement the api at client-side. Just create the client via `createRPCClient` and the library does the rest for you.

## Example
1. Run `npm run example-server`
1. Run `npm run example-client`

## Compatibility
- Make sure that your client can use proxies. => https://caniuse.com/#search=proxy  
- The fetch api could probably be replaced, but other libraries haven't been tested yet. => https://caniuse.com/#search=fetch
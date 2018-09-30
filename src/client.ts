import { decode, encode } from "msgpack-lite";

interface IFetchOptions {
    // headers: { [key: string]: string };
    method: string;
    // body: ArrayBuffer;
    body: any;
}

interface IFetchResult {
    // arrayBuffer(): Promise<ArrayBuffer>;
    arrayBuffer(): Promise<any>;
}

type Fetch = (endpoint: string, options: IFetchOptions) => Promise<IFetchResult>;

export function createRPCClient<API>(fetch: Fetch, endpoint: string) {
    return new Proxy({ }, {
        get(_, key: string) {
            return (...args: any[]) => doRequest(fetch, endpoint, key, args)
        }
    }) as API;
}

async function doRequest(fetch: Fetch, endpoint: string, method: string, params: any[]) {
    const request = { 
        headers: { "content-type": "application/octet-stream" }, 
        method: "post", 
        body: encode({ method, params })
    };

    const response = await fetch(endpoint, request);
    const buffer = await response.arrayBuffer();

    return decode(new Uint8Array(buffer));
}

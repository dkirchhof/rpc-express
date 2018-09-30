interface IFetchOptions {
    method: string;
    body: any;
}
interface IFetchResult {
    arrayBuffer(): Promise<any>;
}
declare type Fetch = (endpoint: string, options: IFetchOptions) => Promise<IFetchResult>;
export declare function createRPCClient<API>(fetch: Fetch, endpoint: string): API;
export {};

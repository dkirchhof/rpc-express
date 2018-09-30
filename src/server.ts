import { Application, Request, Response } from "express";
import { decode, encode } from "msgpack-lite";

export function connectRemoteFunctions(app: Application, endpoint: string, rpcFunctions: Object) {
    app.post(endpoint, async (req: Request, res: Response) => {
        const { method, params } = decode(req.body);
		const result = await (rpcFunctions as any)[method](...params || []);
	
        res.send(encode(result));
    });
}

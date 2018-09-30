import createExpressApp from "express";
import { Application } from "express";
import { raw } from "body-parser";

import { connectRemoteFunctions } from "../../server";
import { API } from "./API";

const app = createExpressApp() as Application;
const api = new API();

app.use(raw());

connectRemoteFunctions(app, "/rpc", api);
	
app.listen(3000, () => console.log("server started on port 3000"));
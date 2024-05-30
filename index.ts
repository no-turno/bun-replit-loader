import repl from "./repl.config";

if (process.env.NODE_ENV !== " production") {
	console.log(repl.bun!, repl?.[".replit"]);
}

import bunfig from "./bunfig.toml";
import replit from "./.replit";

export default {
	".replit": replit,
	routers: [],
	bundlers: [],
	...(process.isBun
		? {
				bun: {
					meta: { version: Bun.version },
					config: bunfig,
				},
		  }
		: {}),
};

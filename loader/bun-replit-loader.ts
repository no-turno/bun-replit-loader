import { format } from "../src/biome";

const REPLIT_LOADER = `declare module "*.replit" { const content: ${Bun.inspect(
	Bun.TOML.parse(await Bun.file(".replit").text()),
)}; export default content }`;
await Bun.write(
	`types/replit-config-loader.d.ts`,
	await format(REPLIT_LOADER, "types/bun-replit-loader.d.ts"),
);

export {};

import { format } from "../src/biome";

const BUNFIG_LOADER = `declare module "*bunfig.toml" { const content: ${Bun.inspect(
	Bun.TOML.parse(await Bun.file("bunfig.toml").text()),
)}; export default content }`;
await Bun.write(
	`types/bunfig-loader.d.ts`,
	await format(BUNFIG_LOADER, "types/bunfig-loader.d.ts"),
);
export {};

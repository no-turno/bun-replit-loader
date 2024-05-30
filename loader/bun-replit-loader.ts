
const REPLIT_LOADER = `declare module "*.replit" { const content: ${Bun.inspect(
	Bun.TOML.parse(await Bun.file(".replit").text()),
)}; export default content }`;
await Bun.write(`types/replit-config-loader.d.ts`, REPLIT_LOADER);

export {};

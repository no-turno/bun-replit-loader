import { Distribution, Biome } from "@biomejs/js-api";

export const distributions = {
	NODE: () => Distribution.NODE,
	BUNDLER: () => Distribution.BUNDLER,
	WEB: () => Distribution.WEB,
};

export const biome = () =>
	Biome.create({
		distribution:
			distributions[
				(
					import.meta as unknown as {
						__biome_distribution__?: keyof typeof distributions;
					}
				)?.__biome_distribution__ ?? "NODE"
			](),
	});

export const format = async (
	code: TemplateStringsArray | string | string[],
	filePath: string,
) =>
	(await biome()).formatContent(code.toString(), {
		filePath: filePath,
	}).content;

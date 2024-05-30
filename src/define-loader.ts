export const declare_typescript_loader_module = <
	T extends string,
	S extends string | Record<any, any>,
>(
	glob: `${"*" | T}.${string}`,
	schema: S,
) => /* ts */ `// @ts-nocheck
declare module "${glob}" { 
	const content: ${Bun.inspect(schema)}; 
	export default content;
}`;

export function defineLoaderSchema<T extends Object>(schema: T) {
	return {
		schema: schema,
	};
}

class LoaderSchema<T extends Object> {
	public schema: T;

	constructor(schema: T) {
		this.schema = schema;
	}

	[Bun.inspect.custom]() {
		return this.schema;
	}

	static [Bun.inspect.custom](data: any) {
		return data;
	}
}

const loader = new LoaderSchema({
	glob: "*.replit",
	struct: {},
});

console.log(loader);

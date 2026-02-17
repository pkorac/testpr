export default defineEventHandler(async (event) => {
	const body = await readValidatedBody(event, (body) =>
		z
			.object({
				email: z.string().email(),
			})
			.parse(body),
	);

	return {
		ok: true,
	};
});

export type planetSummary = {
	name: string
	stats: stat[]
	synopsis: string
	imageUrl: string
}

type stat = {
	label: string
	value: string
}

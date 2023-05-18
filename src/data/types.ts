export type Planet = {
	name: string
	orbitTime: number
	stats: stat[]
	statsExtra: stat[]
	synopsis: string
	descriptionLong: string
	imageUrl: string
	sizeToEarth: number
	sizeToEarthAdjusted: number
}

type stat = {
	label: string
	value: string
}

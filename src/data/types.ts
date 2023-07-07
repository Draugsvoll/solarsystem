export type Planet = {
	name: string
	orbitTime: number
	stats: stat[]
	statsExtra: stat[]
	synopsis: string
	descriptionLong: string
	imageUrl: string
	videoUrl?: string
	sizeToEarth: number
	sizeToEarthAdjusted: number
	sizeToEarthSimple?: number
}

type stat = {
	label: string
	value: string
}

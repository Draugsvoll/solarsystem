import type {Planet} from './types';

const imageBaseUrl: string = 'src/assets/'


export const planets: Planet[] = [
	{
		name: 'mercury',
		orbitTime: 88,
		stats: [
			{
				label:'age', value:'3'
			},
			{
				label:'mass', value:'684684'
			},
			{
				label:'size', value:'6846846854'
			},
		],
		statsExtra: [
			{
				label:'age', value:'3'
			},
			{
				label:'mass', value:'684684'
			},
			{
				label:'size', value:'6846846854'
			},
		],
		synopsis: 'The closest planet to the sun, but still not the hottest',
		descriptionLong: 'Mercury, the smallest planet in our solar system, is a fascinating celestial body worth exploring. It holds the distinction of being the closest planet to the Sun. With scorching surface temperatures reaching up to a blistering 800 degrees Fahrenheit (430 degrees Celsius), it endures extreme heat. Mercury lacks a significant atmosphere, leaving its surface exposed to solar radiation and making it a barren and inhospitable world. Despite its inhospitable conditions, Mercury showcases captivating features such as its vast cratered landscapes and a mysterious dark side that remains hidden from Earths view. Its proximity to the Sun makes it a challenging yet alluring subject of scientific study and exploration.',
		imageUrl: imageBaseUrl+'mercury.png'
	},
	{
		name: 'venus',
		orbitTime: 225,
		stats: [
			{
				label:'age', value:'8'
			},
			{
				label:'mass', value:'684684'
			},
			{
				label:'size', value:'6846846854'
			},
		],
		statsExtra: [
			{
				label:'age', value:'3'
			},
			{
				label:'mass', value:'684684'
			},
			{
				label:'size', value:'6846846854'
			},
		],
		descriptionLong: 'Venus, the dazzling jewel of our evening and morning skies, is often called Earths twin sister. It boasts an array of captivating features that make it a truly intriguing planet. Venus is known for its scorching heat, earning it the title of the hottest planet in our solar system. With surface temperatures soaring up to a blistering 900 degrees Fahrenheit (475 degrees Celsius), it surpasses even Mercury in terms of sheer heat. This extraordinary temperature is a result of Venus thick atmosphere, composed mainly of carbon dioxide, which creates a runaway greenhouse effect BREAK',
		synopsis: 'The hottest planet',
		imageUrl: imageBaseUrl + 'venus.png',
	},
	{
		name: 'earth',
		orbitTime: 365,
		stats: [
			{
				label:'age', value:'3'
			},
			{
				label:'mass', value:'684684'
			},
			{
				label:'size', value:'6846846854'
			},
		],
		statsExtra: [
			{
				label:'age', value:'3'
			},
			{
				label:'mass', value:'684684'
			},
			{
				label:'size', value:'6846846854'
			},
		],
		descriptionLong: 'Earth, our home planet, is a remarkable and diverse world teeming with life. Situated in the habitable zone of our solar system, it offers a unique environment that supports a rich variety of ecosystems and species. Earth is known for its moderate temperatures, ranging from freezing polar regions to tropical climates near the equator. The presence of water in its three primary forms—solid, liquid, and gas—sets Earth apart and enables the existence of vibrant oceans, lakes, and rivers. Our planet also boasts a protective atmosphere, which shields us from harmful solar radiation and provides the air we breathe. Earths geological features, including majestic mountains, vast plains, and deep ocean trenches, are testaments to dynamic forces shaping the planet over billions of years. It is the only known celestial body where life has flourished, making it an extraordinary and precious oasis in the vastness of space.',
		synopsis: 'Home to humans',
		imageUrl: imageBaseUrl + 'earth.png',
	},
	{
		name: 'mars',
		orbitTime: 687,
		stats: [
			{
				label:'age', value:'3'
			},
			{
				label:'mass', value:'684684'
			},
			{
				label:'size', value:'6846846854'
			},
		],
		statsExtra: [
			{
				label:'age', value:'3'
			},
			{
				label:'mass', value:'684684'
			},
			{
				label:'size', value:'6846846854'
			},
		],
		descriptionLong:'Mars, often referred to as the "Red Planet," is a captivating world that has long captured our curiosity. With its rusty-red surface, Mars stands out among the planets in our solar system. Mars is known for its harsh and inhospitable conditions, with a thin atmosphere composed mostly of carbon dioxide. The planet experiences extreme temperatures, with average lows of around minus 80 degrees Fahrenheit (minus 60 degrees Celsius). Mars is also home to fascinating geological features, including the largest volcano in the solar system, Olympus Mons, and the vast Valles Marineris, a system of canyons that stretches for thousands of kilometers. Scientists believe that Mars may have once had liquid water on its surface, and the exploration of Mars continues in search of evidence for past or present life. With its potential for harboring answers to some of our most profound questions about the existence of life beyond Earth, Mars remains a tantalizing destination for future exploration and discovery.',
		synopsis: 'The only (potential) habitable planet',
		imageUrl: imageBaseUrl + 'mars.png',
	},
	{
		name: 'jupiter',
		orbitTime: 4333,
		stats: [
			{
				label:'age', value:'3'
			},
			{
				label:'mass', value:'684684'
			},
			{
				label:'size', value:'6846846854'
			},
		],
		statsExtra: [
			{
				label:'age', value:'3'
			},
			{
				label:'mass', value:'684684'
			},
			{
				label:'size', value:'6846846854'
			},
		],
		descriptionLong: 'Jupiter, the largest planet in our solar system, is a mesmerizing world of swirling clouds and immense size. Its banded appearance showcases a palette of captivating colors, while its iconic Great Red Spot, a massive storm, adds to its allure. Jupiter boasts a powerful magnetic field, generating breathtaking auroras that dwarf those on Earth. With over 70 known moons, including the fascinating Galilean moons, Jupiters gravitational influence shapes the dynamics of our solar system. As a cosmic guardian, it shields inner planets from potential impacts. Jupiter stands as a captivating giant, offering a glimpse into the wonders of our celestial neighborhood.',
		synopsis: 'The biggest planet in the solar system',
		imageUrl: imageBaseUrl + 'jupiter.png',
	},
	{
		name: 'saturn',
		orbitTime: 10759,
		stats: [
			{
				label:'age', value:'3'
			},
			{
				label:'mass', value:'684684'
			},
			{
				label:'size', value:'6846846854'
			},
		],
		statsExtra: [
			{
				label:'age', value:'3'
			},
			{
				label:'mass', value:'684684'
			},
			{
				label:'size', value:'6846846854'
			},
		],
		descriptionLong: 'Saturn, the magnificent ringed planet, captures our imagination with its celestial beauty. Its iconic rings, composed of icy particles, create a breathtaking sight that sets Saturn apart. This gas giant boasts a complex system of rings that range in size, shape, and composition. With more than 80 moons, including the intriguing moon Titan with its thick atmosphere, Saturn provides a rich environment for scientific exploration. Its vibrant hues and stunning features make Saturn a captivating celestial wonder, inviting us to delve deeper into the mysteries of our universe.',
		synopsis: 'Has the most amount of moons - 82',
		imageUrl: imageBaseUrl + 'saturn.png',
	},
	{
		name: 'uranus',
		orbitTime: 30687,
		stats: [
			{
				label:'age', value:'3'
			},
			{
				label:'mass', value:'684684'
			},
			{
				label:'size', value:'6846846854'
			},
		],
		statsExtra: [
			{
				label:'age', value:'3'
			},
			{
				label:'mass', value:'684684'
			},
			{
				label:'size', value:'6846846854'
			},
		],
		descriptionLong: 'Uranus, the icy giant of our solar system, is a captivating and mysterious planet. It is known for its distinct feature of rotating on its side, giving it a unique appearance among the planets. Uranus displays a serene blue color, attributed to its atmospheric composition of hydrogen, helium, and methane. With its system of rings and a collection of intriguing moons, such as Miranda with its varied landscape, Uranus offers a wealth of exploration opportunities. Its unconventional magnetic field adds to its enigmatic nature. Studying Uranus can provide valuable insights into the formation and dynamics of our cosmic neighborhood.',
		synopsis: 'Has a 98 degree axis tilt, making it feel special',
		imageUrl: imageBaseUrl + 'uranus.png',
	},
	{
		name: 'neptune',
		orbitTime: 60190,
		stats: [
			{
				label:'age', value:'3'
			},
			{
				label:'mass', value:'684684'
			},
			{
				label:'size', value:'6846846854'
			},
		],
		statsExtra: [
			{
				label:'age', value:'3'
			},
			{
				label:'mass', value:'684684'
			},
			{
				label:'size', value:'6846846854'
			},
		],
		descriptionLong: 'Neptune, the distant blue giant of our solar system, intrigues with its mesmerizing features. As the farthest planet from the Sun, Neptunes deep blue color sets it apart. Its atmosphere, rich in hydrogen and helium, exhibits dynamic and ever-changing characteristics. With its enigmatic nature and a collection of remarkable moons like Triton, Neptune offers a gateway to unraveling the mysteries of our cosmic neighborhood. Further exploration of this fascinating planet holds the potential to deepen our understanding of planetary formation and the vastness of our universe.',
		synopsis: 'The furthest planet from the sun with a striking blue color',
		imageUrl: imageBaseUrl + 'neptune.png',
	}
]

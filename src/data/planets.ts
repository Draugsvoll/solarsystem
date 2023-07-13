import type {Planet} from './types';

const mediaBaseUrl: string = 'src/assets/'

export const planets: Planet[] = [
	{
		name: 'mercury',
		sizeToEarth: 0.38,
		sizeToEarthAdjusted: 0.38,
		orbitTime: 88,
		stats: [
			{
				label:'moons', value:'0'
			},
			{
				label:'mass', value:'0.05 earth'
			},
			{
				label:'velocity', value:'47.87 km/s'
			},
		],
		statsExtra: [
			{
				label:'diameter', value:'4 879 km (0.38 earth)'
			},
			{
				label:'day length', value:'58.6 earth days'
			},
			{
				label:'orbit period', value:'88 days'
			},
			{
				label:'temperatures', value:'-180°C to 430°C'
			},
			{
				label:'Distance to sun', value:'57.9 million km (on average)'
			},
		],
		synopsis: 'The smallest planet & closest to the sun',
		descriptionLong: 'Mercury, the smallest planet in our solar system, is a fascinating celestial body worth exploring. It holds the distinction of being the closest planet to the Sun. With scorching surface temperatures reaching up to a blistering 800 degrees Fahrenheit (430 degrees Celsius), it endures extreme heat. Mercury lacks a significant atmosphere, leaving its surface exposed to solar radiation and making it a barren and inhospitable world. Despite its inhospitable conditions, Mercury showcases captivating features such as its vast cratered landscapes and a mysterious dark side that remains hidden from Earths view. Its proximity to the Sun makes it a challenging yet alluring subject of scientific study and exploration.',
		imageUrl: mediaBaseUrl+'mercury.png',
		videoUrl: mediaBaseUrl+'mercury.mp4'
	},
	{
		name: 'venus',
		sizeToEarth: 0.95,
		sizeToEarthAdjusted: 0.85,
		orbitTime: 225,
		stats: [
			{
				label:'moons', value:'0'
			},
			{
				label:'mass', value:'0.81 earth'
			},
			{
				label:'velocity', value:'35.02 km/s'
			},
		],
		statsExtra: [
			{
				label:'diameter', value:'12 104  km (0.95 earth)'
			},
			{
				label:'day length', value:'243 earth days'
			},
			{
				label:'orbit period', value:'225 days'
			},
			{
				label:'temperatures', value:'around 462°C'
			},
			{
				label:'Distance to sun', value:'108.2 million km (on average)'
			},
		],
		descriptionLong: 'Venus, the dazzling jewel of our evening and morning skies, is often called Earths twin sister. It boasts an array of captivating features that make it a truly intriguing planet. Venus is known for its scorching heat, earning it the title of the hottest planet in our solar system. With surface temperatures soaring up to a blistering 900 degrees Fahrenheit (475 degrees Celsius), it surpasses even Mercury in terms of sheer heat. This extraordinary temperature is a result of Venus thick atmosphere, composed mainly of carbon dioxide, which creates a runaway greenhouse effect',
		synopsis: 'The hottest planet in the solar system',
		imageUrl: mediaBaseUrl + 'venus.png',
		// videoUrl: mediaBaseUrl + 'venus.mp4',
	},
	{
		name: 'earth',
		sizeToEarth:1,
		sizeToEarthAdjusted:1,
		orbitTime: 365,
		stats: [
			{
				label:'moons', value:'1'
			},
			{
				label:'mass', value:'5.9 sextillion ton'
			},
			{
				label:'velocity', value:'29.78 km/s'
			},
		],
		statsExtra: [
			{
				label:'diameter', value:'12 742  km'
			},
			{
				label:'day length', value:'24 hours'
			},
			{
				label:'orbit period', value:'365.24 days'
			},
			{
				label:'temperatures', value:'-89.2°C to 56.7°C'
			},
			{
				label:'Distance to sun', value:'149.6 million km (on average)'
			},
		],
		descriptionLong: 'Earth, our home planet, is a remarkable and diverse world teeming with life. Situated in the habitable zone of our solar system, it offers a unique environment that supports a rich variety of ecosystems and species. Earth is known for its moderate temperatures, ranging from freezing polar regions to tropical climates near the equator. The presence of water in its three primary forms—solid, liquid, and gas—sets Earth apart and enables the existence of vibrant oceans, lakes, and rivers. Our planet also boasts a protective atmosphere, which shields us from harmful solar radiation and provides the air we breathe. Earths geological features, including majestic mountains, vast plains, and deep ocean trenches, are testaments to dynamic forces shaping the planet over billions of years. It is the only known celestial body where life has flourished, making it an extraordinary and precious oasis in the vastness of space.',
		synopsis: 'Home to humans',
		imageUrl: mediaBaseUrl + 'earth.png',
		videoUrl: mediaBaseUrl + 'earth.mp4',
	},
	{
		name: 'mars',
		sizeToEarth: 0.53,
		sizeToEarthAdjusted: 0.53,
		orbitTime: 687,
		stats: [
			{
				label:'moons', value:'2'
			},
			{
				label:'mass', value:'0.11 earths'
			},
			{
				label:'velocity', value:'24.07 km/s'
			},
		],
		statsExtra: [
			{
				label:'diameter', value:'6 7790 km  (0.53 earths)'
			},
			{
				label:'day length', value:'24.6 hours'
			},
			{
				label:'orbit period', value:'687 days'
			},
			{
				label:'temperatures', value:'-143°C to 35°C'
			},
			{
				label:'Distance to sun', value:'227.9 million km (on average)'
			},
		],
		descriptionLong:'Mars, often referred to as the "Red Planet," is a captivating world that has long captured our curiosity. With its rusty-red surface, Mars stands out among the planets in our solar system. Mars is known for its harsh and inhospitable conditions, with a thin atmosphere composed mostly of carbon dioxide. The planet experiences extreme temperatures, with average lows of around minus 80 degrees Fahrenheit (minus 60 degrees Celsius). Mars is also home to fascinating geological features, including the largest volcano in the solar system, Olympus Mons, and the vast Valles Marineris, a system of canyons that stretches for thousands of kilometers. Scientists believe that Mars may have once had liquid water on its surface, and the exploration of Mars continues in search of evidence for past or present life. With its potential for harboring answers to some of our most profound questions about the existence of life beyond Earth, Mars remains a tantalizing destination for future exploration and discovery.',
		synopsis: 'The only (potential) habitable planet',
		imageUrl: mediaBaseUrl + 'mars.png',
	},
	{
		name: 'jupiter',
		sizeToEarth: 12,
		sizeToEarthAdjusted: 13,
		orbitTime: 4333,
		stats: [
			{
				label:'moons', value:'79'
			},
			{
				label:'mass', value:'317.8 earths'
			},
			{
				label:'velocity', value:'13.07 km/s'
			},
		],
		statsExtra: [
			{
				label:'diameter', value:'139 820 km  (11 earths)'
			},
			{
				label:'day length', value:'9.9 hours'
			},
			{
				label:'orbit period', value:'4 333 days'
			},
			{
				label:'temperatures', value:'around -145°C '
			},
			{
				label:'Distance to sun', value:'778.3 million km (on average)'
			},
		],
		descriptionLong: 'Jupiter, the largest planet in our solar system, is a mesmerizing world of swirling clouds and immense size. Its banded appearance showcases a palette of captivating colors, while its iconic Great Red Spot, a massive storm, adds to its allure. Jupiter boasts a powerful magnetic field, generating breathtaking auroras that dwarf those on Earth. With over 70 known moons, including the fascinating Galilean moons, Jupiters gravitational influence shapes the dynamics of our solar system. As a cosmic guardian, it shields inner planets from potential impacts. Jupiter stands as a captivating giant, offering a glimpse into the wonders of our celestial neighborhood.',
		synopsis: 'The biggest planet in the solar system',
		imageUrl: mediaBaseUrl + 'jupiter.png',
		videoUrl: mediaBaseUrl+'jupiter.mp4'
	},
	{
		name: 'saturn',
		sizeToEarth: 9.46,
		sizeToEarthAdjusted: 32,
		sizeToEarthSimple: 14,
		orbitTime: 10759,
		stats: [
			{
				label:'moons', value:'82'
			},
			{
				label:'mass', value:'95.2 earths'
			},
			{
				label:'velocity', value:'9.69 km/s'
			},
		],
		statsExtra: [
			{
				label:'diameter', value:'116 460 km  (9.14 earths)'
			},
			{
				label:'day length', value:'10.7 hours'
			},
			{
				label:'orbit period', value:'10 759 days'
			},
			{
				label:'temperatures', value:'about -178°C'
			},
			{
				label:'Distance to sun', value:'1.4 billion km (on average)'
			},
		],
		descriptionLong: 'Saturn, the magnificent ringed planet, captures our imagination with its celestial beauty. Its iconic rings, composed of icy particles, create a breathtaking sight that sets Saturn apart. This gas giant boasts a complex system of rings that range in size, shape, and composition. With more than 80 moons, including the intriguing moon Titan with its thick atmosphere, Saturn provides a rich environment for scientific exploration. Its vibrant hues and stunning features make Saturn a captivating celestial wonder, inviting us to delve deeper into the mysteries of our universe.',
		synopsis: 'Has the most amount of moons',
		imageUrl: mediaBaseUrl + 'saturn.png',
		videoUrl: mediaBaseUrl + 'saturn.mp4',
	},
	{
		name: 'uranus',
		sizeToEarth: 4,
		sizeToEarthAdjusted: 4,
		orbitTime: 30687,
		stats: [
			{
				label:'moons', value:'27'
			},
			{
				label:'mass', value:'14.5 earths'
			},
			{
				label:'velocity', value:'6.81 km/s'
			},
		],
		statsExtra: [
			{
				label:'diameter', value:' 50 724 km  (3.98 earths)'
			},
			{
				label:'discovered', value:'1781 by William Herschel'
			},
			{
				label:'day length', value:'17.2 hours'
			},
			{
				label:'orbit period', value:'30 687 days'
			},
			{
				label:'temperatures', value:'about -224°C'
			},
			{
				label:'Distance to sun', value:'2.9 billion km (on average)'
			},
		],
		descriptionLong: 'Uranus, the icy giant of our solar system, is a captivating and mysterious planet. It is known for its distinct feature of rotating on its side, giving it a unique appearance among the planets. Uranus displays a serene blue color, attributed to its atmospheric composition of hydrogen, helium, and methane. With its system of rings and a collection of intriguing moons, such as Miranda with its varied landscape, Uranus offers a wealth of exploration opportunities. Its unconventional magnetic field adds to its enigmatic nature. Studying Uranus can provide valuable insights into the formation and dynamics of our cosmic neighborhood.',
		synopsis: 'Has a 98 degree axis tilt, making it feel special',
		imageUrl: mediaBaseUrl + 'uranus.png',
	},
	{
		name: 'neptune',
		orbitTime: 60190,
		sizeToEarth: 3.9,
		sizeToEarthAdjusted: 3.9,
		stats: [
			{
				label:'moons', value:'14'
			},
			{
				label:'mass', value:'17.1 earths'
			},
			{
				label:'velocity', value:'5.43 km/s'
			},
		],
		statsExtra: [
			{
				label:'diameter', value:' 49 244 km  (3.86 earths)'
			},
			{
				label:'discovered', value:'1846 by Johann Gottfried'
			},
			{
				label:'day length', value:'17.2 hours'
			},
			{
				label:'orbit period', value:'60 190 days'
			},
			{
				label:'temperatures', value:'about -223°C'
			},
			{
				label:'Distance to sun', value:'4.5 billion km (on average)'
			},
		],
		descriptionLong: 'Neptune, the distant blue giant of our solar system, intrigues with its mesmerizing features. As the farthest planet from the Sun, Neptunes deep blue color sets it apart. Its atmosphere, rich in hydrogen and helium, exhibits dynamic and ever-changing characteristics. With its enigmatic nature and a collection of remarkable moons like Triton, Neptune offers a gateway to unraveling the mysteries of our cosmic neighborhood. Further exploration of this fascinating planet holds the potential to deepen our understanding of planetary formation and the vastness of our universe.',
		synopsis: 'Has a striking blue color due to its methane content',
		imageUrl: mediaBaseUrl + 'neptune.png',
	}
]

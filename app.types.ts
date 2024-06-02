export interface ICourse {
	slug: string | undefined
	_id: string
	title: string
	description: string
	learning: string
	requirements: string
	level: string
	category: string
	language: string
	oldPrice: number
	currentPrice: number
	previewImage: string
	published: boolean
	tags: string
}

export interface ISection {
	title: string
	_id: string
	postion: number
	course: string
}

export interface ILesson {
	_id: string
	title: string
	position: number
	videoUrl: string
	content: string
	free: boolean
	duration: {
		hours: number
		minutes: number
		seconds: number
	}
}

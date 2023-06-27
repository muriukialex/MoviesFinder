export interface ParamsType {
	page: number
	language?: string
	include_adult?: boolean
	include_video?: boolean
	sorty_by?: string
}

export interface MovieDataType {
	adult: boolean
	backdrop_path: string //'/e2Jd0sYMCe6qvMbswGQbM0Mzxt0.jpg'
	genre_ids: Array<number>
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string //'/fiVW06jE7z9YnO4trhaMEdclSiC.jpg'
	release_date: string //'2023-05-17'
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}

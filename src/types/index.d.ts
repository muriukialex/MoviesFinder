export interface ParamsType {
	page: number
	language?: string
	include_adult?: boolean
	include_video?: boolean
	sorty_by?: string
}

export interface PopularMovieType {
	adult: boolean
	backdrop_path: string
	genre_ids: Array<number>
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	release_date: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}

export interface SeriesMovieType {
	backdrop_path: string
	first_air_date: string
	genre_ids: Array<number>
	id: number
	name: string
	origin_country: Array<string>
	original_language: string
	original_name: string
	overview: string
	popularity: number
	poster_path: string
	vote_average: string
	vote_count: number
}

export interface TVshowsType {
	adult: boolean
	backdrop_path: string
	id: number
	name: string
	original_language: string
	original_name: string
	overview: string
	poster_path: string
	media_type: string
	genre_ids: Array<number>
	popularity: number
	first_air_date: string
	vote_average: number
	vote_count: number
	origin_country: Array<string>
}

export type ActiveSection = 'PopularMovies' | 'Series' | 'TVshows'

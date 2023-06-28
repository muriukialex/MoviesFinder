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

export interface MovieDetailsType {
	adult?: boolean
	backdrop_path?: null | string | number
	belongs_to_collection?: null | string | number
	budget?: number
	genres?: Array<{
		id: number
		name: string
	}>
	homepage?: string
	id?: number
	imdb_id?: string //'tt0041283'
	original_language?: string
	original_title: string //'Daybreak in Udi'
	overview: string // 'An African tribe in the Eastern Nigerian village of Umana work to build a maternity hospital, with the aid of government officials, and against the opposition of some tribal members.'
	popularity?: number
	poster_path?: null | string | number
	production_companies?: Array<{
		id: number
		logo_path: null | string | number
		name: string
		origin_country: string
	}>
	production_countries?: Array<{
		iso_3166_1: string
		name: string
	}>
	release_date: string // '1949-08-15'
	revenue?: number
	runtime?: number
	spoken_languages?: Array<{
		english_name: string
		iso_639_1: string
		name: string
	}>
	status?: string // 'Released'
	tagline?: string
	title?: string // 'Daybreak in Udi'
	video?: boolean
	vote_average: number
	vote_count?: number
}

export type ActiveSection = 'PopularMovies' | 'Series' | 'TVshows'

export interface ImageDataType {
	backdrops: Array<{
		aspect_ratio: number
		height: number
		iso_639_1: null | string | number
		file_path: string //'/gGHjHezkPk6iY8fuGf2JsM7H4OL.jpg'
		vote_average: number
		vote_count: number
		width: number
	}>
	id: number
	logos: Array<{
		aspect_ratio: number
		height: number
		iso_639_1: null | number | string
		file_path: string // '/rJNbiQX9fXaQLj4q2Irp3yrXTum.jpg'
		vote_average: number
		vote_count: number
		width: number
	}>
	posters: Array<{
		aspect_ratio: number
		height: number
		iso_639_1: null | number | string
		file_path: string // '/rJNbiQX9fXaQLj4q2Irp3yrXTum.jpg'
		vote_average: number
		vote_count: number
		width: number
	}>
}

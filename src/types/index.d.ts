export interface DefaultParamsType {
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

export interface SearchMovieResultsType {
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
	imdb_id?: string
	original_language?: string
	original_title: string
	overview: string
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
	release_date: string
	revenue?: number
	runtime?: number
	spoken_languages?: Array<{
		english_name: string
		iso_639_1: string
		name: string
	}>
	status?: string
	tagline?: string
	title?: string
	video?: boolean
	vote_average: number
	vote_count?: number
}

export type ActiveSection = 'PopularMovies' | 'Series' | 'TVshows' | 'SearchResults'

export interface ImageDataType {
	backdrops: Array<{
		aspect_ratio: number
		height: number
		iso_639_1: null | string | number
		file_path: string
		vote_average: number
		vote_count: number
		width: number
	}>
	id: number
	logos: Array<{
		aspect_ratio: number
		height: number
		iso_639_1: null | number | string
		file_path: string
		vote_average: number
		vote_count: number
		width: number
	}>
	posters: Array<{
		aspect_ratio: number
		height: number
		iso_639_1: null | number | string
		file_path: string
		vote_average: number
		vote_count: number
		width: number
	}>
}

export interface APIResults<T> {
	page: number
	results: Array<T>
	total_pages: number
	total_results: number
}

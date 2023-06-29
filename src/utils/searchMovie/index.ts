import { DefaultParamsType, APIResults, SearchMovieResultsType } from '@/types'
import fetcher from '../fetcher'

interface SearchMoviesByTermProps extends DefaultParamsType {
	query: string
	primary_release_year?: string
	region?: string
	year?: string
}

export const searchMoviesByTerm = async (params: SearchMoviesByTermProps): Promise<APIResults<SearchMovieResultsType>> => {
	return await fetcher({ path: 'search/movie', params })
}

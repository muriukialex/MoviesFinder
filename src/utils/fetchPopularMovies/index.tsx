import { DefaultParamsType, APIResults, PopularMovieType } from '@/types'
import fetcher from '../fetcher'

interface FetchPopularMoviesProps {
	params?: DefaultParamsType
}

export const fetchPopularMovies = async ({ params }: FetchPopularMoviesProps): Promise<APIResults<PopularMovieType>> => {
	return await fetcher({ path: 'movie/popular', params })
}

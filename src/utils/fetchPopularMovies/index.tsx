import { ParamsType } from '@/types'
import fetcher from '../fetcher'

interface FetchPopularMoviesProps {
	params?: ParamsType
}

export const fetchPopularMovies = async ({ params }: FetchPopularMoviesProps) => {
	return await fetcher({ path: 'movie/popular', params })
}
import { ParamsType } from '@/types'
import fetcher from '../fetcher'

interface FetchMovieSeriesProps {
	params?: ParamsType
}

export const fetchMovieSeries = async ({ params }: FetchMovieSeriesProps) => {
	return await fetcher({ path: 'tv/top_rated', params })
}

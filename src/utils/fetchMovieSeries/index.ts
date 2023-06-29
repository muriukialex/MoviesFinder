import { DefaultParamsType, APIResults, SeriesMovieType } from '@/types'
import fetcher from '../fetcher'

interface FetchMovieSeriesProps {
	params?: DefaultParamsType
}

export const fetchMovieSeries = async ({ params }: FetchMovieSeriesProps): Promise<APIResults<SeriesMovieType>> => {
	return await fetcher({ path: 'tv/top_rated', params })
}

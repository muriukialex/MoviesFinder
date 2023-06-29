import { DefaultParamsType, APIResults, TVshowsType } from '@/types'
import fetcher from '../fetcher'

interface FetchTVShowsProps {
	params?: DefaultParamsType
}

export const fetchTVShows = async ({ params }: FetchTVShowsProps): Promise<APIResults<TVshowsType>> => {
	return await fetcher({ path: 'trending/tv/day', params })
}

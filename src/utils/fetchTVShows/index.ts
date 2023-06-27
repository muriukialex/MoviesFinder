import { ParamsType } from '@/types'
import fetcher from '../fetcher'

interface FetchTVShowsProps {
	params?: ParamsType
}

export const fetchTVShows = async ({ params }: FetchTVShowsProps) => {
	return await fetcher({ path: 'trending/tv/day', params })
}

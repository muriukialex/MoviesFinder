// import { APIResults, SeriesAndTVshowDetailsType } from '@/types'
import fetcher from '../fetcher'

interface FetchMovieSeriesDetailsProps {
	id: number | string | string[] | undefined
}

export const fetchSeriesAndTvShowDetails = async ({
	id,
}: FetchMovieSeriesDetailsProps) /*: Promise<APIResults<SeriesAndTVshowDetailsType>>*/ => {
	return await fetcher({ path: 'tv/' + id })
}

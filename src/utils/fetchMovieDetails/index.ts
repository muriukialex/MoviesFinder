import { APIResults, MovieDetailsType, ImageDataType } from '@/types'
import fetcher from '../fetcher'

interface FetchMovieDetailsProps {
	movie_id: number | string | string[] | undefined
}

export const fetchMovieDetails = async ({ movie_id }: FetchMovieDetailsProps): Promise<APIResults<MovieDetailsType>> => {
	return await fetcher({ path: 'movie/' + movie_id })
}

type fetchMovieImageProps = FetchMovieDetailsProps

export const fetchMovieImage = async ({ movie_id }: fetchMovieImageProps): Promise<ImageDataType> => {
	return await fetcher({ path: 'movie/' + movie_id + '/images' })
}

interface FetchSeriesAndTVshowImagesProps {
	id: number | string | string[] | undefined
}

export const fetchSeriesAndTVshowImages = async ({ id }: FetchSeriesAndTVshowImagesProps): Promise<ImageDataType> => {
	return await fetcher({ path: 'tv/' + id + '/images' })
}

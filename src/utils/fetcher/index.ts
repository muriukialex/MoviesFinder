import axios from 'axios'
import { DefaultParamsType } from '@/types'

interface fetcherProps {
	path: string
	params?: DefaultParamsType
}

const fetcher = async ({ path, params }: fetcherProps) => {
	const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_READ_ACCESS_TOKEN}`,
		},
		params,
	}
	const response = await axios.get(`${API_ENDPOINT}/${path}`, options)
	const result = response.data
	return result
}

export default fetcher

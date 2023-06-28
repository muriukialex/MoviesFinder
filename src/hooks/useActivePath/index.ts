import { useRouter } from 'next/router'

const useActivePath = (path: string) => {
	const router = useRouter()
	const isActivePath = (path: string) => router.pathname === path

	return isActivePath(path)
}

export default useActivePath

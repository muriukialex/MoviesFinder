// This is an example of to protect an API route
import { getServerSession } from 'next-auth/next'
import { authOptions } from './auth/[...nextauth]'

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const session = await getServerSession(req, res, authOptions)

	if (session) {
		return res.send({
			content: 'You are signed in ✅',
		})
	}

	res.send({
		error: 'You must be signed in to view this page',
	})
}

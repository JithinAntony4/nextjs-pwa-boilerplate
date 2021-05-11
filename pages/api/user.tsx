import {getSession} from '../../lib/iron'
import {NextApiRequest, NextApiResponse} from "next";
import {TokenPayload} from "google-auth-library/build/src/auth/loginticket";

export default async function user(req: NextApiRequest, res: NextApiResponse) {
    const session: TokenPayload = await getSession(req)
    if (session) {
        try {
            if (session.email) {
                res.status(200).json({user: session || null, userDet: null})
            } else {
                res.status(400).json(`User not found`)
            }
        } catch (e) {
            console.log(e.message)
            return res.status(400).json(e.message)
        }

    } else
        res.status(200).json({user: session || null})
}

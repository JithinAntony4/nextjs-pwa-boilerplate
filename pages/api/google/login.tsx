import passport from 'passport'
import nextConnect from 'next-connect'
import {encryptSession} from '../../../lib/iron'
import {setTokenCookie} from '../../../lib/auth-cookies'
import {NextApiRequest, NextApiResponse} from "next";
import {findGoogleUser} from "../../../lib/user";

export default nextConnect()
    .use(passport.initialize())
    .post(async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            // const user = await authenticateGoogleUser('local-token', req, res)
            let user = await findGoogleUser(req.body.username);
            // session is the payload to save in the token, it may contain basic info about the user
            // The token is a string with the encrypted session
            if (!user)
                return res.status(400).send("No user found")
            const token = await encryptSession(user)

            setTokenCookie(res, token)
            res.status(200).send({done: true})
        } catch (error) {
            console.error(error)
            res.status(400).send(error.message)
        }
    })

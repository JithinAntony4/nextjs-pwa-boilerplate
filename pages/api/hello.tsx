import type {NextApiRequest, NextApiResponse} from 'next'

type Data = {
    name: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    res.status(200).json({name: 'NextJS-PWA-Boilerplate'})
};

export default handler;


import { TwitterApi } from 'twitter-api-v2';
import type { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt';
import Users from '../../../database/users'
import connectToMongo from '../../../database/connection';

const client = new TwitterApi(process.env.BEARER_TOKEN as string);

export default async function user(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        await connectToMongo();

        const token = await getToken({
            req,
            secret: process.env.NEXTAUTH_SECRET
        });

        // @ts-ignore
        const user = await client.v2.user(token?.twitter?.accountId, {
            "user.fields": ['description', 'profile_image_url']
        })

        console.log(user)

        const registeredUser = await Users.findOne({ accountId: user?.data?.id })
        console.log(registeredUser)
        if (registeredUser) {
            console.log('user exists already')
            res.status(200).json({message: "User exists already"})
        }
        else {
            await Users.create({
                name: user?.data?.name,
                username: user?.data?.username,
                accountId: user?.data?.id,
                profileImage: user?.data?.profile_image_url
            })

            res.status(200).json(user)
        }
        
    } catch (error) {
        res.json({ error: "Something went wrong!" })
        console.log(error)
    }
}
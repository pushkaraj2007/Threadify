import { TwitterApi } from 'twitter-api-v2';
import type { NextApiRequest, NextApiResponse } from 'next'

const client = new TwitterApi(process.env.BEARER_TOKEN as string);

export default async function tweet(
   req: NextApiRequest,
   res: NextApiResponse
){

    try {
    
        const tweetId = JSON.parse(req.body).tweetUrl.split(/[\/?]/g)[5];
    
        const tweet = await client.v2.singleTweet(tweetId, {
            expansions: [
                'attachments.poll_ids',
                'author_id'
            ],
            "user.fields": 'profile_image_url'
        })
        
        res.status(200).json(tweet)
    } catch (error) {
        console.log(error)
    }
}
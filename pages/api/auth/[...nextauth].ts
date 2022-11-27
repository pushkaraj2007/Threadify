import NextAuth from 'next-auth'
import TwitterProvider from 'next-auth/providers/twitter'

export default NextAuth({
    providers: [
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID as string,
            clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
            version: "2.0",
        })
    ],

    callbacks: {
        async jwt({ token, user, account = {}, profile, isNewUser }) {

            console.log(user)
            // console.log(isNewUser)
            if (account?.provider && !token[account.provider]) {
                token[account.provider] = {};
            };

            if (account?.access_token) {
                // @ts-ignore
                token[account?.provider].accessToken = account?.access_token
            }

            if (account?.refresh_token) {
                // @ts-ignore
                token[account?.provider].refreshToken = account?.refresh_token;
                // @ts-ignore
                token[account?.provider].accountId = user?.id;
            }

            return token
        }
    }
})
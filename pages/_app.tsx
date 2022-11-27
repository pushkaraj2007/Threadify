import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import LoadingBar from 'react-top-loading-bar'
import Layout from '../components/Layout';
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }: AppProps<{session: Session}>) {
  const router = useRouter()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })

    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })
  })

  return (
    <>
      <SessionProvider session={pageProps.session}>
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          waitingTime={400}
        />
        <ThemeProvider attribute="class">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;

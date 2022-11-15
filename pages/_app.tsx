import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import LoadingBar from 'react-top-loading-bar'
import Layout from '../components/Layout';
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
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
    </>
  );
}

export default MyApp;

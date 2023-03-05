import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Website Coming Soon" />
        <p className="description">
          Enjin shut down my website <img src="/websitelogo.png" alt="Netlify Logo" className={styles.logo} />
        </p>
      </main>

      <Footer />
    </div>
  )
}

import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sự kiện Việt Tiệp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Website đang trong thời gian bảo trì, vui lòng quay lại sau!" />
        <p className="description">
          Liên hệ: VIET TIEP MEDIA <b>0944880202</b>
        </p>
      </main>
    </div>
  )
}

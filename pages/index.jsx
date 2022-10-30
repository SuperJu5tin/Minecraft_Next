import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  
  return (
    <div>
      <Head>
        <title>Next Minecraft</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <button onClick={() => router.push('/hi')}>Hi</button>
      </div>
    </div>
  )
}

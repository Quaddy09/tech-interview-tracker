import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-blue-500 text-white min-h-screen flex justify-center items-center">
      <Head>
        <title>Tech Interview Tracker</title>
        <meta name="description" content="Track your tech interviews!" />
      </Head>
      <h1 className="text-4xl font-bold">Welcome to Tech Interview Tracker!</h1>
    </div>
  )
}

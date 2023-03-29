import Image from 'next/image'
import { Inter } from 'next/font/google'
import { fetchGithubStars } from './fetchGithubStars'

export default async function Home() {
  const stars = await fetchGithubStars()
  console.log("Hi Index Page")

  return (
    <>
      <div>The Index Page</div>
      <p>Next.js has {stars} ⭐️</p>
    </>
  )
}

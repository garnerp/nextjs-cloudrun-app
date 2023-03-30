import Image from 'next/image'
import { Inter } from 'next/font/google'
import { fetchGithubStars } from '../fetchGithubStars'
import { Locale } from '../i18n-config'

export const dynamic = 'force-dynamic'

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const stars = await fetchGithubStars()

  return (
    <>
      <div>The Index Page</div>
      <p>Next.js has {stars} ⭐️</p>
      <p>Living on language {lang}</p>
    </>
  )
}

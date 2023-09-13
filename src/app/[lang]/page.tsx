"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { fetchGithubStars } from '../utils/fetchGithubStars'
import { Locale } from '../../i18n-config'
import logger from '../../app/utils/logger'

export const dynamic = 'force-dynamic'

export default async function Home({ params: { lang }, }: { params: { lang: Locale } }) {

  logger.info("Info from page")
  logger.error('Error from page')

  const stars = await fetchGithubStars()

  return (
    <>
      <div className="text-3xl">The Index Page</div>
      <p>Next.js has {stars} ⭐️</p>
      <p>Living on language {lang}</p>
      <p>I wonder how fast this comes up?  Takes about .4 seconds.  Timing off turbo?</p>
      <p>Did this recompile?  Now did it work?</p>
      <button>Hi</button>
      <button>This is #2</button>
      Did this work?  Yes it did.
    </>
  )
}

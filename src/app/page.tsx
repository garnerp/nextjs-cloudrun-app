import Image from 'next/image'
import { Inter } from 'next/font/google'
import { fetchGithubStars } from './utils/fetchGithubStars'
import logger from '../app/utils/logger'

export default async function Home() {

  //  logger.info("Info from page")

  const stars = await fetchGithubStars()

  return (
    <>
      <div className="text-3xl">The Index Page</div>
      <p>Next.js has {stars} ⭐️</p>
      <p>I wonder how fast this comes up?  Takes about .4 seconds.  Timing off turbo?</p>
      <p>Did this recompile?  Now did it work?</p>
      <button>Hi</button>
      <button>This is #2</button>
      Did this work?  Yes it did.  Test.
      Next v14 on Turbo!
      Is it fast?
    </>
  )
}

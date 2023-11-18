import Image from "next/image";
import { Inter } from "next/font/google";
import { fetchGithubStars } from "./utils/fetchGithubStars";
import logger from "../app/utils/logger";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import CC from "./cc";

export default async function Home() {
  const stars = await fetchGithubStars();
  const sess = await getServerSession(authOptions);
  console.log(sess);

  return (
    <>
      <div className="text-3xl">The Index Page</div>
      <p>Next.js has {stars} ⭐️</p>
      <p>
        I wonder how fast this comes up? Takes about .4 seconds. Timing off
        turbo?
      </p>
      <p>Did this recompile? Now did it work?</p>
      <button>Hi</button>
      <button>This is #2</button>
      Did this work? Yes it did. Test. Next v14 on Turbo! Is it fast?
      <br />
      Expires: {sess?.expires}
      <br />
      User: {sess?.user?.email}
      <br />
      <CC />
      Build time on new page?
    </>
  );
}

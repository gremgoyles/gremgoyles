import Head from "next/head";
import dynamic from "next/dynamic";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { SiDiscord, SiTiktok, SiTwitch } from "react-icons/si";
import { IoStorefront } from "react-icons/io5";
import { FaCheck, FaTrademark } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";
import Image from "next/image";
import team1 from "@/images/team1.PNG";
import team2 from "@/images/team2.JPG";
import team3 from "@/images/team3.PNG";
import team4 from "@/images/team4.jpg";
import canada from "public/canada.png";
import usa from "public/usa.png";
import opensea from "public/opensea.png";
import Link from "next/link/";
import spatial from "../public/spatial.png";
//import ReactPlayer from "react-player/youtube";

const ReactPlayer = dynamic(() => import("react-player"));

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gremgoyles</title>
        <meta
          name="description"
          content="NFT inspired by the 1984 horror film called Gremlins
              and a Saturday morning cartoon called Gargoyles."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-stone-900">
        <section
          id="aboutsection"
          className="min-h-screen w-full px-10 py-10 bg-black bg-hero-bgsm bg-center bg-cover md:bg-hero-bgsm md:bg-contain lg:bg-hero-bg lg:bg-cover bg-no-repeat "
        >
          <h1 className="pt-20 pb-5 text-4xl font-bold font-NocturaSans flex justify-center lg:text-6xl">
            GREMGOYLES
          </h1>
          <nav className="bg-black bg-opacity-75 fixed top-0 left-0 right-0 z-10 flex pb-5 justify-center">
            <ul className="flex items-center gap-2 text-2xl font-medium ">
              <Link href="#aboutsection">
                <li className="cursor-pointer lg:text-4xl hover:text-gray-400">
                  ABOUT
                </li>
              </Link>

              <Link href="#teamsection">
                <li className="cursor-pointer lg:text-4xl hover:text-gray-400">
                  TEAM
                </li>
              </Link>

              <Link legacyBehavior href="http://www.gremgoyles.com">
                <a>
                  <li className="text-5xl cursor-pointer lg:text-8xl hover:text-gray-400">
                    MINT
                  </li>
                </a>
              </Link>

              <Link href="#roadmap">
                <li className="cursor-pointer lg:text-4xl hover:text-gray-400">
                  ROADMAP
                </li>
              </Link>

              <Link href="#faqs">
                <li className="cursor-pointer lg:text-4xl hover:text-gray-400">
                  FAQs
                </li>
              </Link>
            </ul>
          </nav>
          <div className="pt-2 pb-10 flex px-4 items-center gap-2 text-center justify-center">
            <Link legacyBehavior href="http://twitter.com/gremgoyles">
              <a>
                <AiFillTwitterCircle className="bg-white hover:text-gray-400 p-1 rounded-full w-8 h-8 cursor-pointer text-black lg:w-20 lg:h-20" />
              </a>
            </Link>

            <Link legacyBehavior href="https://instagram.com/gremgoyles">
              <a>
                <AiFillInstagram className="bg-white hover:text-gray-400 p-1 rounded-full w-8 h-8 cursor-pointer text-black lg:w-20 lg:h-20" />
              </a>
            </Link>
            <Link legacyBehavior href="https://discord.gg/WHrtReUkmG">
              <a>
                <SiDiscord className="bg-white hover:text-gray-400 p-1 rounded-full w-8 h-8 cursor-pointer text-black lg:w-20 lg:h-20" />
              </a>
            </Link>
            <Link
              legacyBehavior
              href="https://opensea.io/GremGoyles?tab=created"
            >
              <a>
                <div className="bg-white p-1 rounded-full w-8 h-8 cursor-pointer text-black lg:w-20 lg:h-20">
                  <Image
                    src={opensea}
                    alt="opensea icon"
                    className="hover:opacity-50"
                  />
                </div>
              </a>
            </Link>
            <Link legacyBehavior href="https://bit.ly/3Xfoveo">
              <a>
                <div className="bg-white p-1 rounded-full w-8 h-8 cursor-pointer text-black lg:w-20 lg:h-20">
                  <Image
                    src={spatial}
                    alt="spatial icon"
                    className="hover:opacity-50"
                  />
                </div>
              </a>
            </Link>
            <Link
              legacyBehavior
              href="https://youtube.com/channel/UCIMxTAWOi3CHCjmf72-mkWQ"
            >
              <a>
                <AiFillYoutube className="bg-white hover:text-gray-400 p-1 rounded-full w-8 h-8 cursor-pointer text-black lg:w-20 lg:h-20" />
              </a>
            </Link>
            <Link legacyBehavior href="https://tiktok.com/@gremgoyles">
              <a>
                <SiTiktok className="bg-white hover:text-gray-400 p-1 rounded-full w-8 h-8 cursor-pointer text-black lg:w-20 lg:h-20" />
              </a>
            </Link>
            <Link legacyBehavior href="https://twitch.tv/gremgoyles">
              <a>
                <SiTwitch className="bg-white hover:text-gray-400 p-1 rounded-full w-8 h-8 cursor-pointer text-black lg:w-20 lg:h-20" />
              </a>
            </Link>
            <Link legacyBehavior href="https://gremgoylesmerch.bigcartel.com">
              <a>
                <IoStorefront className="bg-white hover:text-gray-400 p-1 rounded-full w-8 h-8 cursor-pointer text-black lg:w-20 lg:h-20" />
              </a>
            </Link>
          </div>
          <div className="text-center md:max-w-2xl lg:max-w-4xl mx-auto">
            <p className="py-2">
              Gremgoyles was inspired by the 1984 horror film called Gremlins
              and a Saturday morning cartoon called Gargoyles. The artist that
              came up this idea of bringing these 2 creatures together his name
              is King Pinky. One day Pinky decided he would try to draw an
              animated cartoon character of his own daughter, which then
              resulted in a baby Gremgoyle. So yes, the very first Gremgoyle
              ever made was him drawing his own daughter.
            </p>
            <p className="py-2">
              The Gremgoyles is a hand drawn 1/1 collection of 333 NFT&apos;S on
              the Ethereum blockchain. The 3 mint prices range from 0.03-0.07
              based rarities.
            </p>
            <p className="py-2">
              You can evolve your Gremgoyles by giving them potions which you
              can mint for a reasonable mint price of 0.02 ETH. There&apos;s 3
              stages of evolution starting from Gremgoyles to Teenagers, Beasts
              and from Beasts to the last form the Elders. The original
              Gremgoyle form is unisex. So after you&apos;ve minted your
              Gremgoyle, you really won&apos;t know what sex they are until you
              evolve them. Which may result in the community wanting to hold on
              to there NFT&apos;S.
            </p>
            <p className="py-2">
              A comic strip will be released to give our nfts a good back story,
              which will be place in a comic channel on our discord. In the
              meantime our communities have been coming up with there own ideas
              about what there castles have in them, until the comic strip is
              released. The discord itself is broken up into 3 separate chat
              rooms. Each private chat is named castle 1,2,3 to give our
              communities a home to belong to and to build personable
              relationships with each other. There are contests on the discord
              which keeps everyone engaged weekly.
            </p>
            <p className="py-2">
              Gremgoyles believe in equal opportunity and for this reason there
              is no whitelist. When our mint goes LIVE anyone and everyone has
              the same opportunity to mint 1 Gremgoyle per castle. The community
              also has the right to mint from all 3 castles. Each castle has 111
              NFT&apos;S in them. The rarest castle is castle 1 because it has
              100 Legendary out of 111 NFT&apos;S in it.
            </p>
            <p className="py-2">
              This NFT project is pretty straight forward, build a community
              that wants to grow with you. We do everything in stages just like
              our Gremgoyles evolutions.
            </p>
            <p className="py-5">
              -GROW YOUR GREMGOYLES, LET&apos;S GROW TOGETHER
            </p>
          </div>
        </section>

        <section className="bg-black h-screen-50 flex justify-center">
          <div className="w-full  flex justify-center p-10">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=6wQSFf-4SHg"
              controls={true}
            ></ReactPlayer>
          </div>
        </section>

        <section
          id="teamsection"
          className="min-h-screen pb-10 bg-team-bgsm bg-cover bg-no-repeat bg-right lg:bg-team-bg"
        >
          <div className="w-full">
            <h1 className="bg-black w-full py-10 text-7xl font-bold font-NocturaSans flex justify-center">
              THE TEAM
            </h1>
          </div>
          <div className="py-10 m-6 flex flex-wrap justify-center lg:max-w-5xl lg:mx-auto">
            <div className="bg-white flex flex-col rounded-lg m-6 text-center shadow-lg md:basis-1/3 lg:basis-1/3">
              <Image
                src={team1}
                alt="king pinky"
                className="object-cover py-2 px-2"
                width={"100%"}
                height={"100%"}
              />
              <h2 className="text-black text-3xl">alberto castronovo</h2>
              <h1 className="py-2 text-black text-6xl">king pinky</h1>
              <p className="py-2 text-black text-2xl">founder/design</p>
              <div className="py-2 flex items-center gap-2 text-center justify-center">
                <Link legacyBehavior href="https://twitter.com/VoiceOfBerto">
                  <a>
                    <AiFillTwitterCircle className="bg-white hover:text-gray-400 rounded-full w-10 h-10 cursor-pointer text-black" />
                  </a>
                </Link>
                <Link legacyBehavior href="https://discord.gg/WHrtReUkmG">
                  <a>
                    <SiDiscord className="bg-white  hover:text-gray-400 rounded-full w-10 h-10 cursor-pointer text-black" />
                  </a>
                </Link>
                <Image
                  src={canada}
                  alt="canada icon"
                  className="object-cover py-2 px-2 w-20 h-20"
                />
              </div>
            </div>
            <div className="bg-white flex flex-col rounded-lg m-6 text-center shadow-lg md:basis-1/3 lg:basis-1/3">
              <Image
                src={team2}
                alt="golden king"
                className="object-cover py-2 px-2"
                width={"100%"}
                height={"100%"}
              />
              <h2 className="text-black text-3xl">jumani parker</h2>
              <h1 className="py-2 text-black text-6xl">golden king</h1>
              <p className="py-2 text-black text-2xl">
                co founder/marketing manager
              </p>
              <div className="py-2 flex items-center gap-2 text-center justify-center">
                <Link legacyBehavior href="https://twitter.com/Jaycode86">
                  <a>
                    <AiFillTwitterCircle className="bg-white hover:text-gray-400 rounded-full w-10 h-10 cursor-pointer text-black" />
                  </a>
                </Link>
                <Link legacyBehavior href="https://discord.gg/WHrtReUkmG">
                  <a>
                    <SiDiscord className="bg-white  hover:text-gray-400 rounded-full w-10 h-10 cursor-pointer text-black" />
                  </a>
                </Link>
                <Image
                  src={usa}
                  alt="usa icon"
                  className="object-cover py-2 px-2 w-20 h-20"
                />
              </div>
            </div>
            <div className="bg-white flex flex-col rounded-lg m-6 text-center shadow-lg md:basis-1/3 lg:basis-1/3">
              <Image
                src={team3}
                alt="king icarus"
                className="object-cover py-2 px-2"
                width={"100%"}
                height={"100%"}
              />
              <h2 className="text-black text-3xl">dominic riolo</h2>
              <h1 className="py-2 text-black text-6xl">king icarus</h1>
              <p className="py-2 text-black text-2xl">
                co founder/art director
              </p>
              <div className="py-2 flex items-center gap-2 text-center justify-center">
                <Link legacyBehavior href="https://twitter.com/IcarusNeedles">
                  <a>
                    <AiFillTwitterCircle className="bg-white hover:text-gray-400 rounded-full w-10 h-10 cursor-pointer text-black" />
                  </a>
                </Link>
                <Link legacyBehavior href="https://discord.gg/WHrtReUkmG">
                  <a>
                    <SiDiscord className="bg-white  hover:text-gray-400 rounded-full w-10 h-10 cursor-pointer text-black" />
                  </a>
                </Link>
                <Image
                  src={canada}
                  alt="canada icon"
                  className="object-cover py-2 px-2 w-20 h-20"
                />
              </div>
            </div>
            <div className="bg-white flex flex-col rounded-lg m-6 text-center shadow-lg md:basis-1/3 lg:basis-1/3">
              <Image
                src={team4}
                alt="king code"
                className="object-cover py-2 px-2"
                width={"100%"}
                height={"100%"}
              />
              <h1 className="py-2 text-black text-6xl">king code</h1>
              <p className="py-2 text-black text-2xl">developer</p>
              <div className="py-2 flex items-center gap-2 text-center justify-center">
                <Link legacyBehavior href="https://discord.gg/WHrtReUkmG">
                  <a>
                    <SiDiscord className="bg-white  hover:text-gray-400 rounded-full w-10 h-10 cursor-pointer text-black" />
                  </a>
                </Link>
                <Image
                  src={canada}
                  alt="canada icon"
                  className="object-cover py-2 px-2 w-20 h-20"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="roadmap"
          className="min-h-screen pb-10 bg-roadmapsm-bg bg-no-repeat bg-cover lg:bg-roadmap-bg"
        >
          <div>
            <h1 className="bg-black w-full py-10 text-7xl font-bold font-NocturaSans flex justify-center ">
              ROADMAP
            </h1>
          </div>
          <div className="py-10 px-10 m-6 flex gap-4 justify-center">
            <ul className="text-center text-xl lg:text-3xl">
              <li className="flex justify-center">
                {" "}
                <span>
                  <FaCheck className="text-red-800" />
                </span>
                - Grow A GremGoyles Community
              </li>
              <li className="flex justify-center">
                <span>
                  <FaCheck className="text-red-800" />
                </span>
                - Choose A Castle{" "}
              </li>
              <li className="flex justify-center">
                <span>
                  <FaCheck className="text-red-800" />
                </span>
                - Open Discord & Website
              </li>
              <li className="flex justify-center">
                <span>
                  <FaCheck className="text-red-800" />
                </span>
                - Comic Strip{" "}
              </li>
              <li className="flex justify-center">
                <span>
                  <FaCheck className="text-red-800" />
                </span>
                - Mint First Generation GremGoyle
              </li>
              <li className="flex justify-center">
                <span>
                  <FaCheck className="text-red-800" />
                </span>
                - Reveal GremGoyle 1 Week After Mint Date{" "}
              </li>
              <li>
                - Release Growth / Serum For 2nd Evolution GremGoyle Based on
                1st NFT You Minted
              </li>
            </ul>
          </div>
          <div className="py-10 px-10 m-6 flex justify-center">
            <h2 className="text-3xl">Milestones</h2>
          </div>
          <div className="py-10 px-10 m-6 flex gap-4 justify-center">
            <ul className="text-center text-xl lg:text-3xl">
              <li>- Sell Out 333 Gremgoyles </li>
              <li>- OG Holders Get Free Mint for V2</li>
              <li>- OG Holders Get into Raffle</li>
              <li>- All Inclusive Paid Vacation for 2 </li>
              <li>- Each Mint Grants You 1 Entry into Raffle</li>
              <li>
                - If You Evolve Your Gremgoyles to Last Evolution Your Raffle
                Ticket Will Be 10X Effective.
              </li>
            </ul>
          </div>
        </section>

        <section
          id="faqs"
          className="min-h-screen pb-10 bg-faq-bgsm bg-cover bg-no-repeat lg:bg-faq-bg"
        >
          <div>
            <h1 className="bg-black w-full py-10 text-7xl font-bold font-NocturaSans flex justify-center ">
              faqs
            </h1>
          </div>
          <div className="py-10 px-10 m-6 flex gap-4 justify-center lg:py-20">
            <ul className="text-center text-xl">
              <li className="text-3xl">what is your mint price?</li>
              <li className="text-white text-opacity-75 pb-5">
                (castle 1 - 0.07 eth) (castle 2 - 0.03 eth) (castle 3 - 0.05
                eth)
              </li>

              <li className="text-3xl">what is the utility?</li>
              <li className="text-white text-opacity-75 pb-5">
                evolve Gremgoyle, comic book, merch and more!
              </li>

              <li className="text-3xl">mint date??</li>
              <li className="text-white text-opacity-75 pb-5">
                {" "}
                november 4th, 2022
              </li>

              <li className="text-3xl">what network willl GremGoyles be on?</li>
              <li className="text-white text-opacity-75 pb-5">
                ethereum network
              </li>

              <li className="text-3xl">how to get gg free mint?</li>
              <li className="text-white text-opacity-75 pb-5">
                join discord, be engaged with the community and the gremgoyles
                will notice you.
              </li>

              <li className="text-3xl">how do i get a giveaway?</li>
              <li className="text-white text-opacity-75 pb-5">
                -follow instructions for giveaways on discord and twitter,
                challenges and games and more!
              </li>
            </ul>
          </div>
        </section>
        <section className="bg-black w-full">
          <div className="flex justify-center py-10 text-center items-center">
            <span className="text-white">
              <BiCopyright />
            </span>
            <p>gremgoyles -</p>
            <p className="flex text-center px-2">
              gremgoyles
              <span className="text-white pr-3">
                <FaTrademark />
              </span>
              2022 .
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

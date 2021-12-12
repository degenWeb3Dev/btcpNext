import Head from 'next/head'
import Image from 'next/image'

import "nes.css/css/nes.min.css";
import Typer from "../components/Typer";

const spinner = <i className="nes-icon coin animate-ping"></i>

export default function Home() {
  return (
    <div>
			<Head>
				<title>BTCP</title>
        <meta name="description" content="BTC Printing machine" />
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css?family=Press+Start+2P"
					rel="stylesheet"
				/>
			</Head>

			<main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
				<div className="mt-8 md:mt-20 max-w-2xl">
					<h1 className="text-3xl md:text-5xl font-bold">👋 Hey there!</h1>
					<p className="mt-8 text-xl">
						<Typer>
							Send me a link of your favourite NFT on opensea for a chance to
							win a special NFT. When I complete Farza's nft course, I'll
							airdrop the winners a special NFT. Check below to see if your a
							winner.
						</Typer>
					</p>
				</div>

				<div className="mt-8 mb-2 md:w-1/2">
				</div>

					<button
						className={`${
							"cursor-wait"
						} nes-btn flex justify-center mt-8 w-96 bg-gray-400 py-3 rounded text-gray-100`}
					>
						"Connect metamask"
					</button>

				<div className="nes-container is-rounded my-6 max-w-sm p-4">
					<h3 className="text-xl font-bold">Number of NFT</h3>
					<p className="mt-4 text-xl">4</p>
				</div>

					<div className="p-4 max-w-full">
						<div
							className={`nes-container is-rounded text-left ${
								"bg-green-200"
							}`}
						>
							<p className="text-lg font-bold text-gray-800 break-words max-w-screen-lg">
								<a target="_blank">
									Opensea nft
								</a>
							</p>
							<p className="text-xs text-gray-600 italic">
                asdfa
							</p>
							<p className="text-gray-600 break-words">From: asdfas</p>
							<p className="text-gray-600 break-words">
								Is winner: yes 
							</p>
						</div>
					</div>
			</main>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </div>
  )
}

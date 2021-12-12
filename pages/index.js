import Head from "next/head";
import Image from "next/image";

import Typer from "../components/Typer";

const spinner = <i className="nes-icon coin animate-ping"></i>;

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
				<link
					href="https://unpkg.com/nes.css@2.3.0/css/nes.min.css"
					rel="stylesheet"
				/>
			</Head>

			<main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center mb-8">
				<div>
					{" "}
					<img className="w-400" src="logo2.jpeg" alt="logo" />
				</div>
				<div className="max-w-2xl">
					<h1 className="text-3xl md:text-5xl font-bold">$BTC Print</h1>
					<p className="mt-8 text-xl">
						<Typer>Reflection paid in Bitcoin</Typer>
					</p>
				</div>

				<div className="mt-8 mb-2">
					<a
						href="https://traderjoexyz.com/#/trade?outputCurrency=0xc1333a2e6f4a50ec20107c19fa73af9e8cc0419b"
						className="nes-btn is-success flex justify-center mt-8 w-96 bg-gray-400 py-3 rounded text-gray-100"
					>
						Buy $BTCP
					</a>

					<a
						href="https://dexscreener.com/avalanche/0x3c41b76e2096cfbfeb891ff097c1caae90792109"
						className="nes-btn flex justify-center mt-8 w-96 bg-gray-400 py-3 rounded text-gray-100"
					>
						See Chart
					</a>
					<a
						href="https://t.me/BTCPrint"
						className="nes-btn is-primary flex justify-center mt-8 w-96 bg-gray-400 py-3 rounded text-gray-100"
					>
						Join our community
					</a>
				</div>

				{/* <div className="nes-container is-rounded my-6 max-w-sm p-4">
					<h3 className="text-xl font-bold">Number of NFT</h3>
					<p className="mt-4 text-xl">4</p>
				</div> */}

				<div className="nes-container with-title is-centered mt-16 pb-10 max-w-5xl">
					<p className="title"> _Why ape?_ </p>
					<p className="mb-8">
						5% of all transaction gets reflected back to your wallet in Bitcoin!
					</p>

					<p className="nes-balloon from-left">
						For a limited time we are increasing to 12% reflection of BTC to
						your wallet
					</p>
				</div>

				<div className="nes-container with-title is-centered mt-16 pb-10 max-w-3xl">
					<p className="title"> _How to buy?_ </p>
					<ul className="nes-list is-disc text-left">
						<li className="mb-4">Set slippage to 17% or more</li>

						<li>
							Protip: add .111 to the end amount of $BTCP token you want to buy.
							Ie. buy 100 set to 100.111
						</li>
					</ul>
				</div>

				<div className="nes-container with-title is-centered mt-16 pb-10 max-w-5xl">
					<p className="title"> _FAQ_ </p>
					<p className="mb-8">Why can’t I see my BTC earnings?</p>
					<p className="mb-8">
						We have a dashboard coming soon, for the time being the most
						simplest way is to send 1 $BTCP to yourself and your wallet will get
						updated with WBTC.e rewards.
					</p>

					<p className="mb-4"> What are the tokenomics?</p>
					<p className="mb-10">5% Reflections - 4% Marketing - 8% Auto Liquidity</p>

					<p className="mb-4">
						Why are my reflections showing as $BTC.e instead of $BTC?
					</p>

					<p>
						$WBTC.e is Wrapped BTC on the Avalanche blockchain, the value is the
						same as BTC.
					</p>
				</div>

				<div className="mt-8 mb-2">
					<a
						href="https://twitter.com/BitcoinPrint"
						className="nes-btn is-success flex justify-center mt-8 w-96 bg-gray-400 py-3 rounded text-gray-100"
					>
						Twitter
					</a>
					<a
						href="https://t.me/BTCPrint"
						className="nes-btn flex justify-center mt-8 w-96 bg-gray-400 py-3 rounded text-gray-100"
					>
						Telegram
					</a>
				</div>
			</main>
		</div>
	);
}

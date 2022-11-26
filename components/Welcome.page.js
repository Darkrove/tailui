import React from "react";
import Link from "next/link";

function Welcome() {
	return (
		<div className="dark:bg-gray-900">
			<header>
				<input
					type="checkbox"
					name="hbr"
					id="hbr"
					className="hbr peer"
					hidden
					aria-hidden="true"
				/>
				<nav className="fixed z-20 w-full bg-white/90 dark:bg-gray-900 backdrop-blur navbar shadow-2xl shadow-gray-600/5 border-b border-gray-100 dark:border-gray-800 peer-checked:navbar-active dark:shadow-none">
					<div className="xl:container m-auto px-6 md:px-12 lg:px-6">
						<div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5">
							<div className="w-full items-center flex justify-between lg:w-auto">
								{/* logo */}
								<a className="relative z-10" href="#" aria-label="logo">
									<svg
										className="h-9 text-primary dark:text-primaryLight"
										viewBox="0 0 942 272"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											className="text-blue-900 dark:text-white"
											d="M392.603 62.008V102.536H420.075V130.552H392.603V192.024C392.603 197.827 393.963 202.088 396.683 204.808C399.403 207.347 403.664 208.616 409.467 208.616C413.093 208.616 416.72 208.253 420.347 207.528V233.64C415.632 235.635 409.195 236.632 401.035 236.632C388.704 236.632 379.003 233.187 371.931 226.296C364.859 219.224 361.323 209.523 361.323 197.192V130.552H336.843V102.536H343.643C350.352 102.536 355.429 100.632 358.875 96.824C362.32 93.016 364.043 88.0293 364.043 81.864V62.008H392.603ZM432.359 199.096C432.359 187.853 435.986 178.877 443.239 172.168C450.674 165.277 460.375 160.925 472.343 159.112L506.343 153.944C512.871 153.037 516.135 149.864 516.135 144.424C516.135 138.44 514.05 133.635 509.879 130.008C505.709 126.2 499.453 124.296 491.111 124.296C483.133 124.296 476.786 126.563 472.071 131.096C467.357 135.448 464.637 141.16 463.911 148.232L435.079 141.704C436.349 129.736 442.061 119.581 452.215 111.24C462.37 102.717 475.245 98.456 490.839 98.456C510.061 98.456 524.205 103.08 533.271 112.328C542.519 121.576 547.143 133.453 547.143 147.96V213.784C547.143 222.488 547.687 229.56 548.775 235H519.399C518.493 232.28 518.039 226.659 518.039 218.136C509.335 232.099 495.735 239.08 477.239 239.08C463.821 239.08 452.941 235.181 444.599 227.384C436.439 219.405 432.359 209.976 432.359 199.096ZM483.223 214.328C493.015 214.328 500.903 211.699 506.887 206.44C513.053 201 516.135 192.205 516.135 180.056V174.072L481.591 179.24C469.805 181.235 463.911 187.219 463.911 197.192C463.911 201.907 465.634 205.987 469.079 209.432C472.525 212.696 477.239 214.328 483.223 214.328ZM604.325 235H573.045V102.536H604.325V235ZM574.133 70.44C570.144 66.4507 568.149 61.6453 568.149 56.024C568.149 50.4027 570.144 45.5973 574.133 41.608C578.122 37.4373 582.928 35.352 588.549 35.352C594.352 35.352 599.248 37.3467 603.237 41.336C607.226 45.3253 609.221 50.2213 609.221 56.024C609.221 61.6453 607.226 66.4507 603.237 70.44C599.248 74.4293 594.352 76.424 588.549 76.424C582.928 76.424 578.122 74.4293 574.133 70.44ZM664.341 235H632.789V38.072H664.341V235ZM778.227 220.312C775.144 226.115 770.067 230.648 762.995 233.912C756.104 237.176 748.669 238.808 740.691 238.808C725.277 238.808 713.037 233.821 703.971 223.848C695.085 213.875 690.643 201.272 690.643 186.04V102.536H722.195V180.328C722.195 189.213 724.371 196.467 728.723 202.088C733.075 207.709 739.784 210.52 748.851 210.52C757.736 210.52 764.536 207.8 769.251 202.36C774.147 196.92 776.595 189.757 776.595 180.872V102.536H808.147V210.792C808.147 218.771 808.6 226.84 809.507 235H779.315C778.589 231.011 778.227 226.115 778.227 220.312ZM825.051 199.096L852.523 191.48C853.067 197.827 855.696 203.176 860.411 207.528C865.126 211.88 871.472 214.056 879.451 214.056C885.616 214.056 890.422 212.605 893.867 209.704C897.494 206.803 899.307 203.176 899.307 198.824C899.307 191.208 894.139 186.312 883.803 184.136L864.219 179.784C852.795 177.245 844 172.531 837.835 165.64C831.67 158.749 828.587 150.589 828.587 141.16C828.587 129.555 833.302 119.581 842.731 111.24C852.16 102.717 863.675 98.456 877.275 98.456C885.979 98.456 893.686 99.7253 900.395 102.264C907.104 104.803 912.272 108.157 915.899 112.328C919.707 116.317 922.608 120.216 924.603 124.024C926.598 127.832 927.867 131.64 928.411 135.448L901.755 143.064C901.03 137.987 898.672 133.453 894.683 129.464C890.875 125.293 885.072 123.208 877.275 123.208C871.835 123.208 867.302 124.749 863.675 127.832C860.048 130.733 858.235 134.269 858.235 138.44C858.235 145.875 862.678 150.499 871.563 152.312L891.691 156.392C904.022 159.112 913.451 164.008 919.979 171.08C926.507 178.152 929.771 186.675 929.771 196.648C929.771 207.709 925.328 217.592 916.443 226.296C907.739 234.819 895.499 239.08 879.723 239.08C870.656 239.08 862.496 237.72 855.243 235C848.171 232.28 842.55 228.835 838.379 224.664C834.39 220.312 831.216 216.051 828.859 211.88C826.683 207.528 825.414 203.267 825.051 199.096Z"
											fill="currentColor"
										/>
										<circle
											cx="126.5"
											cy="135.5"
											r="49"
											stroke="none"
											stroke-width="11"
											fill="currentColor"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M157.616 38.7183C137.547 27.9866 113.297 28.3356 93.5 39.7654L60.0914 59.0538C39.6709 70.8436 27.0914 92.632 27.0914 116.212V154.788C27.0914 178.368 39.6709 200.156 60.0914 211.946L93.5 231.235C113.92 243.024 139.08 243.024 159.5 231.235L192.909 211.946C213.329 200.156 225.909 178.368 225.909 154.788V116.212C225.909 99.106 219.289 82.9431 207.857 70.8562C214.603 65.9281 219.348 58.424 220.644 49.7914C239.072 66.6422 249.909 90.6554 249.909 116.212V154.788C249.909 186.942 232.755 216.654 204.909 232.731L171.5 252.019C143.654 268.096 109.346 268.096 81.5 252.019L48.0914 232.731C20.2453 216.654 3.09137 186.942 3.09137 154.788V116.212C3.09137 84.0576 20.2453 54.3462 48.0914 38.2692L81.5 18.9808C109.138 3.02371 143.143 2.90471 170.876 18.6237C164.141 23.2603 159.27 30.4096 157.616 38.7183Z"
											fill="currentColor"
										/>
										<circle cx="189" cy="45" r="21" fill="currentColor" />
									</svg>
								</a>
								<label
									for="hbr"
									className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
								>
									<div
										aria-hidden="true"
										className="m-auto h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
									></div>
									<div
										aria-hidden="true"
										className="m-auto mt-2 h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
									></div>
								</label>
							</div>
							<div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
								<div className="text-gray-600 dark:text-gray-300 lg:pr-4">
									<ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
										<li>
											<a
												href="#"
												className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
											>
												<span>Home</span>
											</a>
										</li>
										<li>
											<a
												href="#"
												className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
											>
												<span>Portfolio</span>
											</a>
										</li>
										<li>
											<a
												href="#"
												className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
											>
												<span>Services</span>
											</a>
										</li>
									</ul>
								</div>

								<div className="w-full space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
									<Link
										href="/signup"
										className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-primary/10 dark:focus:before:bg-primaryLight/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
									>
										<span className="relative text-sm font-semibold text-primary dark:text-primaryLight">
											Sign Up
										</span>
									</Link>
									<Link
										href="/signin"
										className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
									>
										<span className="relative text-sm font-semibold text-white dark:text-gray-900">
											Login
										</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>

			<div className="relative pt-40 pb-20 lg:pt-44">
				<div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
					<h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">
						Run successful remote and <br className="lg:block hidden" />{" "}
						<span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-primaryLight dark:to-secondaryLight">
							Hybrid teams
						</span>
						.
					</h1>
					<div className="lg:flex">
						<div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
							<p className="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
								DailyBot takes chat and collaboration to the next level: daily
								standups, team check-ins, surveys, kudos, best companion bot for
								your virtual watercooler, 1:1 intros, motivation tracking and
								more.
							</p>
							<span className="block font-semibold text-gray-500 dark:text-gray-400">
								The best companion bot for your chat app.
							</span>
							<div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
								<a
									aria-label="add to slack"
									href="#"
									className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30"
								>
									<div className="flex justify-center space-x-4">
										<img
											className="w-6 h-6"
											src="images/slack.png"
											alt="slack logo"
											loading="lazy"
											width="128"
											height="128"
										/>
										<span className="hidden font-medium md:block dark:text-white">
											Slack
										</span>
									</div>
								</a>
								<a
									aria-label="add to chat"
									href="#"
									className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30"
								>
									<div className="flex justify-center space-x-4">
										<img
											className="w-6 h-6"
											src="images/chat.png"
											alt="chat logo"
											loading="lazy"
											width="128"
											height="128"
										/>
										<span className="hidden font-medium md:block dark:text-white">
											Google Chat
										</span>
									</div>
								</a>
								<a
									aria-label="add to zoom"
									href="#"
									className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20 dark:hover:border-blue-300/30"
								>
									<div className="flex justify-center space-x-4">
										<img
											className="w-6 h-6"
											src="images/zoom.png"
											alt="chat logo"
											loading="lazy"
											width="128"
											height="128"
										/>
										<span className="hidden font-medium md:block dark:text-white">
											Zoom
										</span>
									</div>
								</a>
							</div>

							<div className="dark:text-gray-300">
								🔥🌟
								<span>Other integrations :</span>
								<a
									href="#"
									className="font-semibold text-gray-700 dark:text-gray-200"
								>
									Discord,
								</a>
								<a
									href="#"
									className="font-semibold text-gray-700 dark:text-gray-200"
								>
									Telegram
								</a>
							</div>

							<div className="pt-12 flex gap-6 lg:gap-12 justify-between grayscale lg:w-2/3">
								<img
									src="./images/clients/airbnb.svg"
									className="h-8 sm:h-10 w-auto lg:h-12"
									alt=""
								/>
								<img
									src="./images/clients/ge.svg"
									className="h-8 sm:h-10 w-auto lg:h-12"
									alt=""
								/>
								<img
									src="./images/clients/coty.svg"
									className="h-8 sm:h-10 w-auto lg:h-12"
									alt=""
								/>
								<img
									src="./images/clients/microsoft.svg"
									className="h-8 sm:h-10 w-auto lg:h-12"
									alt=""
								/>
							</div>
						</div>
						<div className="mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12">
							<div className="relative w-full">
								<div
									aria-hidden="true"
									className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl"
								></div>
								<img
									src="images/globalization-cuate.svg"
									className="relative w-full"
									alt="wath illustration"
									loading="lazy"
									width="320"
									height="280"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h-0 lg:h-16 xl:h-64 dark:bg-gray-900 bg-gray-100"></div>
			
		</div>
	);
}

export default Welcome;

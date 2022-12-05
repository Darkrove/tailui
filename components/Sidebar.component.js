import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import DarkContext from "../context/DarkContext";
import { shortenAddress } from "../utils/shortenAddress";
import {
  UserButton,
  useUser,
  SignedOut,
  SignedIn,
  SignInWithMetamaskButton,
} from "@clerk/nextjs";

import { useRouter } from "next/router";

const Navigation = () => {
  const { currentAccount, connectWallet } = useContext(DarkContext);
  const [isLoading, setLoading] = useState(true);
  const user = useUser();
  console.log(user);

  useEffect(() => {
    user.isSignedIn ? setLoading(true) : setLoading(false);
  }, []);

  const router = useRouter();
  const active = "relative flex items-center space-x-4 rounded-xl px-4 py-3 text-white bg-gradient-to-r from-sky-600 to-cyan-400";
  const style = "relative flex items-center space-x-4 rounded-xl px-4 py-3 text-gray-600 dark:text-white hover:text-cyan-400"
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <aside className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] dark:bg-gray-900 dark:border-gray-700">
        <div>
          <div className="-mx-6 px-6 py-4">
            <a href="#" title="home">
              <svg
                viewBox="0 0 943 262"
                fill="none"
                className="w-32 dark:hidden"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M154.078 31.037L153 30.4145C134.436 19.6965 111.564 19.6965 93 30.4145L50.8904 54.7265C32.3263 65.4445 20.8904 85.2521 20.8904 106.688V155.312C20.8904 176.748 32.3263 196.556 50.8904 207.273L93 231.585C111.564 242.303 134.436 242.303 153 231.585L195.11 207.273C213.674 196.556 225.11 176.748 225.11 155.312V106.688C225.11 90.9132 218.916 76.0203 208.247 64.9827C213.476 60.5157 217.314 54.4673 219.02 47.5778C235.447 62.5598 245.11 83.936 245.11 106.688V155.312C245.11 183.893 229.862 210.303 205.11 224.594L163 248.906C138.248 263.197 107.752 263.197 83 248.906L40.8904 224.594C16.1383 210.303 0.890388 183.893 0.890388 155.312V106.688C0.890388 78.1068 16.1383 51.6966 40.8904 37.406L83 13.094C107.752 -1.19662 138.248 -1.19662 163 13.094L164.691 14.0704C159.591 18.4485 155.823 24.3345 154.078 31.037Z"
                  fill="url(#paint0_angular)"
                />
                <path
                  d="M64 131.5C64 99.1913 90.1913 73 122.5 73V73C154.809 73 181 99.1913 181 131.5V131.5C181 163.809 154.809 190 122.5 190V190C90.1913 190 64 163.809 64 131.5V131.5Z"
                  fill="url(#paint1_linear)"
                />
                <rect
                  x="164"
                  y="16"
                  width="45"
                  height="45"
                  rx="22.5"
                  fill="#0DCBFD"
                />
                <path
                  d="M370.149 111.42V170.38C370.149 174.487 371.103 177.493 373.009 179.4C375.063 181.16 378.436 182.04 383.129 182.04H397.429V208H378.069C352.109 208 339.129 195.387 339.129 170.16V111.42H324.609V86.12H339.129V55.98H370.149V86.12H397.429V111.42H370.149ZM411.662 146.62C411.662 134.3 414.082 123.373 418.922 113.84C423.909 104.307 430.582 96.9733 438.942 91.84C447.449 86.7067 456.909 84.14 467.322 84.14C476.416 84.14 484.336 85.9733 491.082 89.64C497.976 93.3067 503.476 97.9267 507.582 103.5V86.12H538.602V208H507.582V190.18C503.622 195.9 498.122 200.667 491.082 204.48C484.189 208.147 476.196 209.98 467.102 209.98C456.836 209.98 447.449 207.34 438.942 202.06C430.582 196.78 423.909 189.373 418.922 179.84C414.082 170.16 411.662 159.087 411.662 146.62ZM507.582 147.06C507.582 139.58 506.116 133.2 503.182 127.92C500.249 122.493 496.289 118.387 491.302 115.6C486.316 112.667 480.962 111.2 475.242 111.2C469.522 111.2 464.242 112.593 459.402 115.38C454.562 118.167 450.602 122.273 447.522 127.7C444.589 132.98 443.122 139.287 443.122 146.62C443.122 153.953 444.589 160.407 447.522 165.98C450.602 171.407 454.562 175.587 459.402 178.52C464.389 181.453 469.669 182.92 475.242 182.92C480.962 182.92 486.316 181.527 491.302 178.74C496.289 175.807 500.249 171.7 503.182 166.42C506.116 160.993 507.582 154.54 507.582 147.06ZM584.304 71.6C578.877 71.6 574.331 69.9133 570.664 66.54C567.144 63.02 565.384 58.6933 565.384 53.56C565.384 48.4267 567.144 44.1733 570.664 40.8C574.331 37.28 578.877 35.52 584.304 35.52C589.731 35.52 594.204 37.28 597.724 40.8C601.391 44.1733 603.224 48.4267 603.224 53.56C603.224 58.6933 601.391 63.02 597.724 66.54C594.204 69.9133 589.731 71.6 584.304 71.6ZM599.484 86.12V208H568.684V86.12H599.484ZM660.714 45.2V208H629.914V45.2H660.714ZM806.205 86.12V208H775.185V192.6C771.225 197.88 766.018 202.06 759.565 205.14C753.258 208.073 746.365 209.54 738.885 209.54C729.352 209.54 720.918 207.56 713.585 203.6C706.252 199.493 700.458 193.553 696.205 185.78C692.098 177.86 690.045 168.473 690.045 157.62V86.12H720.845V153.22C720.845 162.9 723.265 170.38 728.105 175.66C732.945 180.793 739.545 183.36 747.905 183.36C756.412 183.36 763.085 180.793 767.925 175.66C772.765 170.38 775.185 162.9 775.185 153.22V86.12H806.205ZM883.234 209.98C873.261 209.98 864.314 208.22 856.394 204.7C848.474 201.033 842.167 196.12 837.474 189.96C832.927 183.8 830.434 176.98 829.994 169.5H861.014C861.601 174.193 863.874 178.08 867.834 181.16C871.941 184.24 877.001 185.78 883.014 185.78C888.881 185.78 893.427 184.607 896.654 182.26C900.027 179.913 901.714 176.907 901.714 173.24C901.714 169.28 899.661 166.347 895.554 164.44C891.594 162.387 885.214 160.187 876.414 157.84C867.321 155.64 859.841 153.367 853.974 151.02C848.254 148.673 843.267 145.08 839.014 140.24C834.907 135.4 832.854 128.873 832.854 120.66C832.854 113.913 834.761 107.753 838.574 102.18C842.534 96.6067 848.107 92.2067 855.294 88.98C862.627 85.7533 871.207 84.14 881.034 84.14C895.554 84.14 907.141 87.8067 915.794 95.14C924.447 102.327 929.214 112.08 930.094 124.4H900.614C900.174 119.56 898.121 115.747 894.454 112.96C890.934 110.027 886.167 108.56 880.154 108.56C874.581 108.56 870.254 109.587 867.174 111.64C864.241 113.693 862.774 116.553 862.774 120.22C862.774 124.327 864.827 127.48 868.934 129.68C873.041 131.733 879.421 133.86 888.074 136.06C896.874 138.26 904.134 140.533 909.854 142.88C915.574 145.227 920.487 148.893 924.594 153.88C928.847 158.72 931.047 165.173 931.194 173.24C931.194 180.28 929.214 186.587 925.254 192.16C921.441 197.733 915.867 202.133 908.534 205.36C901.347 208.44 892.914 209.98 883.234 209.98Z"
                  fill="#144150"
                />
                <defs>
                  <radialGradient
                    id="paint0_angular"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(123 131) rotate(-59.0352) scale(122.874 120.033)"
                  >
                    <stop stopColor="#01FEE6" />
                    <stop offset="1" stopColor="#0EC8FE" />
                  </radialGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="181"
                    y1="131"
                    x2="64"
                    y2="131"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#01FEE6" />
                    <stop offset="1" stopColor="#0DCBFD" />
                  </linearGradient>
                </defs>
              </svg>

              <svg
                className="w-32 hidden dark:block"
                viewBox="0 0 925 272"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M153.2 36.044L152.11 35.4145C133.546 24.6965 110.674 24.6965 92.1096 35.4144L50 59.7264C31.4359 70.4444 20 90.252 20 111.688V160.312C20 181.748 31.4359 201.555 50 212.273L92.1096 236.585C110.674 247.303 133.546 247.303 152.11 236.585L194.219 212.273C212.783 201.555 224.219 181.748 224.219 160.312V111.688C224.219 95.8389 217.968 80.8799 207.205 69.827C212.469 65.4222 216.359 59.4308 218.141 52.5882C234.561 67.5697 244.219 88.9412 244.219 111.688V160.312C244.219 188.893 228.971 215.303 204.219 229.594L162.11 253.906C137.357 268.197 106.862 268.197 82.1096 253.906L40 229.594C15.2479 215.303 0 188.893 0 160.312V111.688C0 83.1067 15.2479 56.6965 40 42.4059L82.1096 18.0939C106.862 3.80332 137.357 3.80332 162.11 18.0939L163.607 18.9582C158.565 23.392 154.866 29.3171 153.2 36.044Z"
                  fill="url(#paint0_linear_1024_182)"
                />
                <path
                  d="M63.1094 136.124C63.1094 103.815 89.3007 77.624 121.609 77.624V77.624C153.918 77.624 180.109 103.815 180.109 136.124V136.124C180.109 168.433 153.918 194.624 121.609 194.624V194.624C89.3007 194.624 63.1094 168.433 63.1094 136.124V136.124Z"
                  fill="url(#paint1_linear_1024_182)"
                />
                <rect
                  x="163.219"
                  y="20.624"
                  width="45"
                  height="45"
                  rx="22.5"
                  fill="url(#paint2_linear_1024_182)"
                />
                <path
                  d="M388.251 62.824V104.168H416.539V127.288H388.251V195.288C388.251 201.453 389.611 205.987 392.331 208.888C395.232 211.789 399.947 213.24 406.475 213.24C410.283 213.24 413.637 212.877 416.539 212.152V233.912C412.187 235.544 406.384 236.36 399.131 236.36C387.888 236.36 379.003 233.096 372.475 226.568C365.947 220.04 362.683 210.883 362.683 199.096V127.288H337.659V104.168H344.731C351.44 104.168 356.427 102.355 359.691 98.728C363.136 94.92 364.859 90.024 364.859 84.04V62.824H388.251ZM430.266 199.912C430.266 188.669 433.893 179.693 441.146 172.984C448.4 166.093 458.01 161.832 469.978 160.2L505.338 155.032C512.048 154.125 515.402 150.861 515.402 145.24C515.402 138.349 513.045 132.728 508.33 128.376C503.616 124.024 496.544 121.848 487.114 121.848C478.41 121.848 471.52 124.296 466.442 129.192C461.365 133.907 458.373 140.253 457.466 148.232L432.986 142.52C434.256 130.008 439.968 119.853 450.122 112.056C460.277 104.077 472.426 100.088 486.57 100.088C505.066 100.088 518.757 104.621 527.642 113.688C536.528 122.573 540.97 133.997 540.97 147.96V213.512C540.97 221.309 541.514 228.472 542.602 235H517.578C516.672 229.56 516.218 223.667 516.218 217.32C512.592 223.123 507.242 228.2 500.17 232.552C493.28 236.904 484.576 239.08 474.058 239.08C461.184 239.08 450.666 235.272 442.506 227.656C434.346 219.859 430.266 210.611 430.266 199.912ZM477.594 217.592C489.018 217.592 498.176 214.509 505.066 208.344C511.957 202.179 515.402 192.387 515.402 178.968V172.984L475.418 178.968C469.616 179.875 464.992 181.96 461.546 185.224C458.101 188.488 456.378 192.931 456.378 198.552C456.378 203.629 458.282 208.072 462.09 211.88C466.08 215.688 471.248 217.592 477.594 217.592ZM593.857 235H568.561V104.168H593.857V235ZM568.017 67.72C564.572 64.0933 562.849 59.7413 562.849 54.664C562.849 49.5867 564.572 45.2347 568.017 41.608C571.644 37.9813 575.996 36.168 581.073 36.168C586.151 36.168 590.503 37.9813 594.129 41.608C597.756 45.0533 599.569 49.4053 599.569 54.664C599.569 59.7413 597.756 64.0933 594.129 67.72C590.503 71.1653 586.151 72.888 581.073 72.888C575.996 72.888 571.644 71.1653 568.017 67.72ZM650.686 235H625.118V38.072H650.686V235ZM766.837 219.224C763.391 225.752 758.133 230.739 751.061 234.184C743.989 237.448 736.373 239.08 728.213 239.08C713.343 239.08 701.466 234.184 692.581 224.392C683.695 214.419 679.253 201.816 679.253 186.584V104.168H704.821V182.776C704.821 192.568 707.178 200.637 711.893 206.984C716.789 213.331 724.314 216.504 734.469 216.504C744.623 216.504 752.33 213.512 757.589 207.528C762.847 201.363 765.477 193.203 765.477 183.048V104.168H791.045V210.792C791.045 219.315 791.498 227.384 792.405 235H767.925C767.199 231.011 766.837 225.752 766.837 219.224ZM810.195 201L833.315 192.84C834.222 199.912 837.304 205.805 842.563 210.52C847.822 215.053 854.894 217.32 863.779 217.32C870.67 217.32 876.11 215.688 880.099 212.424C884.088 208.979 886.083 204.808 886.083 199.912C886.083 191.208 880.462 185.587 869.219 183.048L846.915 178.152C836.76 175.976 828.782 171.624 822.979 165.096C817.176 158.568 814.275 150.68 814.275 141.432C814.275 130.189 818.808 120.488 827.875 112.328C837.123 104.168 848.094 100.088 860.787 100.088C869.128 100.088 876.563 101.357 883.091 103.896C889.619 106.253 894.696 109.427 898.323 113.416C901.95 117.405 904.67 121.123 906.483 124.568C908.296 128.013 909.656 131.549 910.563 135.176L887.987 143.608C887.624 141.432 886.99 139.347 886.083 137.352C885.176 135.176 883.726 132.819 881.731 130.28C879.918 127.741 877.198 125.747 873.571 124.296C869.944 122.664 865.683 121.848 860.787 121.848C854.44 121.848 849.182 123.571 845.011 127.016C841.022 130.461 839.027 134.541 839.027 139.256C839.027 147.597 844.014 152.856 853.987 155.032L875.203 159.656C886.808 162.195 895.694 166.909 901.859 173.8C908.206 180.509 911.379 188.76 911.379 198.552C911.379 208.888 907.118 218.227 898.595 226.568C890.254 234.909 878.558 239.08 863.507 239.08C847.368 239.08 834.766 235.091 825.699 227.112C816.632 218.952 811.464 210.248 810.195 201Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1024_182"
                    x1="122.11"
                    y1="7.37598"
                    x2="122.11"
                    y2="264.624"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0DCAFE" />
                    <stop offset="1" stopColor="#00A5E9" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1024_182"
                    x1="121.609"
                    y1="77.624"
                    x2="121.609"
                    y2="194.624"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0DCAFE" />
                    <stop offset="1" stopColor="#00A5E9" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_1024_182"
                    x1="185.719"
                    y1="20.624"
                    x2="185.719"
                    y2="65.624"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0DCAFE" />
                    <stop offset="1" stopColor="#00A5E9" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center">
              {!user.isSignedIn ? (
                <div className="m-auto h-10 w-10 animate-pulse bg-gray-300 rounded-full lg:h-20 lg:w-20"></div>
              ) : (
                <UserButton
                  appearance={{
                    elements: {
                      userButtonTrigger:
                        "m-auto h-10 w-10 rounded-full object-cover bg-gray-300 lg:h-20 lg:w-20",
                      userButtonAvatarBox:
                        "m-auto h-10 w-10 rounded-full object-cover border border-cyan-500 lg:h-20 lg:w-20 transition duration-700 ease-in-out",
                    },
                  }}
                />
              )}
            </div>

            <h5 className="mt-4 hidden text-xl font-semibold text-gray-600 lg:block dark:text-gray-300">
              {user.isSignedIn ? user.user.fullName : "null"}
            </h5>
            <span className="hidden text-gray-400 lg:block">
              {user.isSignedIn ? (
                <SignedIn>
                  {shortenAddress(user.user.web3Wallets[0].web3Wallet)}
                </SignedIn>
              ) : (
                <SignedOut>
                  <SignInWithMetamaskButton className="transition duration-200 ease-linear h-11 rounded-full border mt-2 px-6 border-gray-300bg-white text-cyan-400 hover:border-white dark:hover:border-dark border-cyan-400 hover:text-white dark:bg-dark bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400">
                    Connect Wallet
                  </SignInWithMetamaskButton>
                </SignedOut>
              )}
            </span>
          </div>

          <ul className="mt-8 space-y-2 tracking-wide">
            <li>
              <Link
                href="/dashboard"
                aria-label="dashboard"
                className={router.pathname === "/dashboard" ? active : style}
              >
                <svg className="-ml-1 h-6 w-6 hover:fill-secondary" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                  ></path>
                  <path
                    d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                    className="fill-current text-gray-500 group-hover:text-cyan-600 hover:fill-secondary dark:group-hover:text-sky-400"
                  ></path>
                  <path
                    d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                    className="fill-current text-gray-500 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                  ></path>
                </svg>
                <span className="-mr-1 font-medium">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/categories"
                className={router.pathname === "/dashboard/categories" ? active : style}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 hover:fill-secondary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                    clipRule="evenodd"
                  />
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                    d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                  />
                </svg>
                <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">
                  Categories
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/peers"
                className={router.pathname === "/dashboard/peers" ? active : style}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                    fillRule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clipRule="evenodd"
                  />
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                  />
                </svg>
                <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">
                  Peers
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/other"
                className={router.pathname === "/dashboard/other" ? active : style}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
                    d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                  />
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                  />
                </svg>
                <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">
                  Other data
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/setting"
                className={router.pathname === "/dashboard/setting" ? active : style}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                  />
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                    fillRule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="group-hover:text-gray-700 dark:group-hover:text-white">
                  Settings
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="-mx-6 flex items-center justify-between border-t px-6 pt-4 dark:border-gray-700">
          <button className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <Link
              href="/"
              className="group-hover:text-gray-700 dark:group-hover:text-white"
            >
              Logout
            </Link>
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Navigation;

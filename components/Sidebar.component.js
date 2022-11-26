import React from 'react'
import Link from 'next/link'

const Navigation = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-900">
            <aside
                className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] dark:bg-gray-800 dark:border-gray-700"
            >
                <div>
                    <div className="-mx-6 px-6 py-4">
                        <a href="#" title="home">
                            <img src="images/tailus.svg" className="w-32 dark:hidden" alt="tailus logo" />
                            <img src="images/logo.svg" className="w-32 hidden dark:block" alt="tailus logo" />
                        </a>
                    </div>

                    <div className="mt-8 text-center">
                        <img
                            src="images/woman.jpg"
                            alt=""
                            className="m-auto h-10 w-10 rounded-full object-cover lg:h-28 lg:w-28"
                        />
                        <h5 className="mt-4 hidden text-xl font-semibold text-gray-600 lg:block dark:text-gray-300">Cynthia J. Watts</h5>
                        <span className="hidden text-gray-400 lg:block">Admin</span>
                    </div>

                    <ul className="mt-8 space-y-2 tracking-wide">
                        <li>
                            <a
                                href="#"
                                aria-label="dashboard"
                                className="relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                            >
                                <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                                        className="dark:fill-slate-600 fill-current text-cyan-400"
                                    ></path>
                                    <path
                                        d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                                        className="fill-current text-cyan-200 group-hover:text-cyan-300"
                                    ></path>
                                    <path
                                        d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                                        className="fill-current group-hover:text-sky-300"
                                    ></path>
                                </svg>
                                <span className="-mr-1 font-medium">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
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
                                <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">Categories</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
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
                                <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">Reports</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
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
                                <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">Other data</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
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
                                <span className="group-hover:text-gray-700 dark:group-hover:text-white">Finance</span>
                            </a>
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
                        <Link href="/signin" className="group-hover:text-gray-700 dark:group-hover:text-white">Logout</Link>
                    </button>
                </div>
            </aside>
            
        </div>
    )
}

export default Navigation
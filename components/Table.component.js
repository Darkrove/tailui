import React from 'react'
import { FaLink, FaEllipsisV } from 'react-icons/fa'
import { data } from "../utils/imageData";
import Image from "next/image";

function Table() {
    const renderRows = () => {
        let rows = data.slice(0, 6).map((row) => {
            return (
                <tr key={row.id}>
                    <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                    </th>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <Image src={row.icon} alt="Avatar Tailwind CSS Component" width={50} height={150}/>
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{row.name}</div>
                                {/* <div className="text-sm opacity-50">United States</div> */}
                            </div>
                        </div>
                    </td>
                    <td>
                        {row.modified}
                        <br />
                        <span className="badge badge-ghost badge-sm">SPAN</span>
                    </td>
                    <td>{row.type}</td>
                    <td>
                        {row.size}
                    </td>
                    <td>
                        <button className='w-full h-11 rounded-full transition hover:bg-gray-300 dark:hover:bg-gray-800'>
                            <div className='w-max mx-auto flex items-center justify-center space-x-4 dark:text-white'>
                                <FaLink />
                            </div>
                        </button>
                    </td>
                    <td>
                        <button className='w-full h-11 rounded-full transition hover:bg-gray-300 dark:hover:bg-gray-800'>
                            <div className='w-max mx-auto flex items-center justify-center space-x-4 dark:text-white'>
                                <FaEllipsisV />
                            </div>
                        </button>
                    </td>
                </tr>
            )
        })
        return rows.map((row) => row);
    }
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead class>
                        <tr>
                            <th>
                            </th>
                            <th>NAME</th>
                            <th>MODIFIED</th>
                            <th>TYPE</th>
                            <th>SIZE</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table

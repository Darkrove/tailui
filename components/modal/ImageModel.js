import React, { useState } from "react";
import Image from "next/image";

export default function Modal({ id, setOpenModal, src }) {
  const [isLoading, setLoading] = useState(true);
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-90"
          onClick={() => setOpenModal(false)}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8" id={id}>
          <div className="relative w-full max-w-lg p-4 mx-auto dark:bg-gray-900 bg-white rounded-lg shadow-lg">
            <div className="sm:flex">
              <div className="text-center">
                <h4 className="text-sm text-left xl:text-lg font-medium dark:text-white text-gray-800">
                  @darkrove
                </h4>
                <div className="mt-2 text-center space-y-6 text-[15px] leading-relaxed text-gray-500">
                  <Image
                    src={src}
                    alt="illustration"
                    loading="lazy"
                    width="1000"
                    height="600"
                    className="mx-auto w-50 rounded-lg"
                  />
                </div>
                <div className="items-center gap-2 mt-3 sm:flex">
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-white bg-cyan-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                    onClick={() => setOpenModal(false)}
                  >
                    Download
                  </button>
                  <button
                    className="w-full mt-2 p-2.5 flex-1 dark:text-white text-gray-800 rounded-md outline-none border ring-offset-2 ring-cyan-600 focus:ring-2"
                    onClick={() => setOpenModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

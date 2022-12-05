import React, { useState } from "react";
import Modal from "../../components/modal/Modal";

function categoriesList() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="p-6 2xl:container">
      <div className="flex h-screen items-center justify-center rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600">
        <span className="dark:text-white">
          <div className="flex flex-col items-center justify-center h-60">
            <h1 className="text-2xl font-bold">
              Click on the button to open the modal.
            </h1>
            <button
              className="px-4 py-2 mt-3 text-purple-100 bg-cyan-600 rounded-md"
              type="button"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Open Modal
            </button>

            {showModal && <Modal setOpenModal={setShowModal} />}
          </div>
        </span>
      </div>
    </div>
  );
}

export default categoriesList;

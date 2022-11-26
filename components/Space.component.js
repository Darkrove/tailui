import React from "react";

function Home() {
  return (
    <div className="h-screen border-b bg-white dark:bg-gray-900 dark:border-gray-700 ml-auto lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div className="p-6 2xl:container">
        <div className="flex h-[80vh] items-center justify-center rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600">
          <span className="dark:text-white">Content</span>
        </div>
      </div>
    </div>
  );
}

export default Home;

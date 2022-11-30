import React from "react";
import Card from "./Card.component"

function Home() {
  return (
    <div className="border-b bg-white dark:bg-gray-900 dark:border-gray-700 ml-auto lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div className="2xl:container">
        {/* <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600"> */}
          {/* <span className="dark:text-white">Content</span> */}
          <Card/>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Home;

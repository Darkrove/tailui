  import { useState } from "react";
  import { data } from "../utils/imageData";
  import Image from "next/image";

  function cn(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  function Card() {
    const [isLoading, setLoading] = useState(true);
    const renderCard = () => {
      let images = data.map((img) => {
        return (
          <div
            key={img.id}
            className="group p-2 sm:p-4 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl "
          >
            <div className="relative overflow-hidden rounded-xl h-32">
              <Image
                src={img.src}
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className={cn(
                  'h-32 w-full object-cover object-top transition group-hover:scale-105 group-hover:opacity-75 duration-700 ease-in-out',
                  isLoading
                    ? 'grayscale blur-3xl scale-110'
                    : 'grayscale-0 blur-0 scale-100'
                )}
                onLoadingComplete={() => setLoading(false)}
              />
            </div>
            <div className="mt-3 relative">
              <h5 className="text-md font-semibold text-gray-800 dark:text-white">
                {img.name}
              </h5>
              {/* <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Voluptates harum aliquam totam, doloribus eum impedit atque!
                Temporibus...
              </p>
              <a className="inline-block" href="#">
                <span className="text-primary">Read more</span>
              </a> */}
            </div>
          </div>
        );
      });
      return images.map((img) => img);
    };
    return (
      <div>
        <div>
          <div className="xl:container m-auto p-6 text-gray-600 md:px-6 xl:px-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {renderCard()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Card;

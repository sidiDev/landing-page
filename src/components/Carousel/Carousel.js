import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { useState } from 'react';

export default () => {

  let [count, setCount] = useState(0)

 const data = [
    {
      image: "slide1.jpg",
    },
    {
      image: "slide2.jpg",
    },
    {
      image: "slide3.jpg",
    },
    {
      image: "slide4.jpg",
    },
    {
      image: "slide5.jpg",
    },
    {
      image: "slide6.jpg",
    },
    {
      image: "slide7.jpg",
    },
    {
      image: "slide8.webp",
    },
    {
      image: "slide9.webp",
    }
  ];

  const moveRight = () => setCount(count >= data.length -1 ? 0 : count + 1)

  const moveLeft = () => setCount(count == 0 ? data.length -1 : count - 1)
  

  return (
    <div className="mt-20 px-4 max-w-3xl sm:mx-auto sm:px-6 lg:px-8">
      <div className="text-4xl font-semibold text-center py-4">
        Carousel
      </div>
      <div className="w-full h-72 relative bg-gray-200 sm:h-96">
        <img src={'/images/'+data[count].image} className="w-full h-full rounded" />
        <div className="absolute flex items-center justify-between w-full top-0 bottom-0">
          <button className="ml-3 px-2 py-2 rounded-full bg-gray-900 opacity-40 outline-none sm:px-3 sm:py-3"
            onClick={moveLeft}
          >
            <ChevronLeftIcon className="text-gray-100 w-5 h-5" />
          </button>
          <button className="mr-3 px-2 py-2 rounded-full bg-gray-900 opacity-40 outline-none sm:px-3 sm:py-3"
            onClick={moveRight}
          >
            <ChevronRightIcon className="text-gray-100 w-5 h-5" />
          </button>
          <div className="absolute left-0 right-0 flex items-center justify-center bottom-4 space-x-2">
            {
              data.map((items, idx) => {
                return (
                  <>
                    <button keys={idx} className={`${count == idx ? 'bg-gray-800' : 'bg-gray-400'} w-2.5 h-2.5 rounded-full`}
                      onClick={() => setCount(idx)}
                    >
                    </button>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
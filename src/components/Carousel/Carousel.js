import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { useState } from 'react';

export default () => {

  let [count, setCount] = useState(0)

 const data = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
    },
    {
      image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    },
    {
      image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    },
    {
      image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
    },
    {
      image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    },
    {
      image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
    },
    {
      image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
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
        <img src={data[count].image} className="w-full h-full rounded" />
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
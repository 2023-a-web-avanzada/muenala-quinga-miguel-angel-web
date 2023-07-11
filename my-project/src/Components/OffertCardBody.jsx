import React, { useState } from 'react'

export const OffertCardBody = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
      setExpanded(!expanded);
    };

  return (
    <div>
      <div className='flex'>
        <button
          className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded"
          onClick={toggleExpand}
        >
          {expanded ? "Staff picks ↑" : "Staff picks ↓"}
        </button>
        <hr className="border-t border-gray-300 my-1" />
      </div>
      {expanded && (
        <div className="flex flex-row overflow-x-scroll bg-neutral-800"
        style={{ scrollbarWidth: "thin", scrollbarColor: "red yellow" }}
        >

            <div className="flex-shrink-0 bg-gray-200 p-4 mr-4 rounded shadow my-3">
                <img src="https://picsum.photos/150/100?random=1" alt="Imagen 1" className="w-full" />
                <h3 className="text-xl font-bold mt-2">Top free assets</h3>
                <p className="text-gray-600 mt-1">
                Check popular free assets.
                </p>
                <div className="bg-red-500 text-white text-sm rounded-full px-2 py-1 mt-2">
                FREE
                </div>
            </div>

            <div className="flex-shrink-0 bg-gray-200 p-4 mr-4 rounded shadow my-3">
                <img src="https://picsum.photos/150/100?random=3" alt="Imagen 2" className="w-full" />
                <h3 className="text-xl font-bold mt-2">New Release Discount</h3>
                <p className="text-gray-600 mt-1">
                Check popular free assets.
                </p>
                <div className="bg-red-500 text-white text-sm rounded-full px-2 py-1 mt-2">
                UP TO 50% OFF
                </div>
            </div>

            <div className="flex-shrink-0 bg-gray-200 p-4 mr-4 rounded shadow my-3">
                <img src="https://picsum.photos/150/100?random=4" alt="Imagen 3" className="w-full" />
                <h3 className="text-xl font-bold mt-2">Top assets</h3>
                <p className="text-gray-600 mt-1">
                Check popular free assets.
                </p>
                <div className="bg-red-500 text-white text-sm rounded-full px-2 py-1 mt-2">
                TOP ASSETS
                </div>
            </div>

            <div className="flex-shrink-0 bg-gray-200 p-4 mr-4 rounded shadow my-3">
                <img src="https://picsum.photos/150/100?random=5" alt="Imagen 3" className="w-full" />
                <h3 className="text-xl font-bold mt-2">Top new assets</h3>
                <p className="text-gray-600 mt-1">
                Check popular free assets.
                </p>
                <div className="bg-red-500 text-white text-sm rounded-full px-2 py-1 mt-2">
                TOP NEW
                </div>
            </div>

            <div className="flex-shrink-0 bg-gray-200 p-4 mr-4 rounded shadow my-3">
                <img src="https://picsum.photos/150/100?random=6" alt="Imagen 3" className="w-full" />
                <h3 className="text-xl font-bold mt-2">Título de la tarjeta</h3>
                <p className="text-gray-600 mt-1">
                Check popular free assets.
                </p>
                <div className="bg-red-500 text-white text-sm rounded-full px-2 py-1 mt-2">
                10% de descuento
                </div>
            </div>

            <div className="flex-shrink-0 bg-gray-200 p-4 mr-4 rounded shadow my-3">
                <img src="https://picsum.photos/150/100?random=7" alt="Imagen 3" className="w-full" />
                <h3 className="text-xl font-bold mt-2">Título de la tarjeta</h3>
                <p className="text-gray-600 mt-1">
                Check popular free assets.
                </p>
                <div className="bg-red-500 text-white text-sm rounded-full px-2 py-1 mt-2">
                10% de descuento
                </div>
            </div>

        </div>
      )}
    </div>
  )
}

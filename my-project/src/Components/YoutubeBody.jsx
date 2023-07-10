import React, { useState } from 'react'
import YouTube from 'react-youtube'

export const YoutubeBody = () => {
    const [viewCount, setViewCount] = useState(0);
    const videoId = '5It8qNIUi2I';

    const handleVideoReady = (event) => {
      // Se ejecuta cuando el video está listo para reproducirse
      event.target.playVideo();
    };
  
    const handleVideoStateChange = (event) => {
      // Se ejecuta cuando cambia el estado del video (reproduciendo, pausado, etc.)
      if (event.data === window.YT.PlayerState.PLAYING) {
        setViewCount((prevCount) => prevCount + 1); // Aumenta el contador de vistas
      }
    };
  return (
    <div className='py-6'>
        
        <div className="flex justify-center ">
            <div className="flex justify-between bg-neutral-800 rounded-lg  w-5/6">
                <div className="items-center w-1/3 px-8 py-8">
                    <p className="text-gray-300 mt-2">SIRENIX</p>

                    <h1 className="text-white text-lg font-semibold">Odin Validator</h1>
                    <p className="text-gray-300 mt-2">See how the all-new Odin Validator helps</p>
                    <p className="text-gray-300 mt-2">automate and speed up the process of</p>
                    <p className="text-gray-300 mt-2">finding and resolving errors in a Unity</p>
                    <p className="text-gray-300 mt-2">project.</p>
                    <p className="text-center text-gray-500 mt-4">
                        Vistas: {viewCount}
                    </p>

                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded-md">Learn more</button>
                </div>
                <div className="">{/*w-1/3 */}
                    <div className="flex justify-center">
                        <YouTube
                            videoId={videoId} // Reemplaza 'VIDEO_ID' con el ID real de tu video de YouTube
                            onReady={handleVideoReady}
                            onStateChange={handleVideoStateChange}
                        />
                    </div>
                </div>      
            </div>
        </div>

    
    </div>
  )
}

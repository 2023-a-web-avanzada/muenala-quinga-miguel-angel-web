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
                    <p className="flex justify-center text-center text-gray-400 mt-4">
                        <img className='' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA3hJREFUSEu1ld1rHGUUxp9n3p1NNqZgbRoD0mKJtsYPRKoXUjQpkvoBglgQLQiBqMvuzoRSsDeFun9BEnYzG4PGIlQvAl70QiiINmliTVEUocFaVApKJQb1IoU2mY9H3pAsu0lTC92+d3Nmzvmdj+e8Q9zhwzscH3WAoFw+GksnBgYGFhoFrgKCcjlPMpB0MZaebRSkCvhgePjeMJWaArDHQprCcN9bR478c7uV1LVodHS0XVF0BuTDkH5kKvVKEkUvgXyZUqYWJnKZwGkaczKXy/21WSIbhjw2NtYWheEkgUduJXtJEcmRpkzmeH9//+J6n42AUqkzdpzPbavWPpZ03AG+uh5Fc9aWTqcfBLCb0j4A7wAwAH6jMc/lcrnLtZA6wFip1Bk5zgyBDusASSA7BfwC4DyBHgHNAM44xrxrg1UqlT1Ikk8A7AXwewI84Xne32uQKqBYLKbat237AeSjtuxY2kUyccgpAg+sL91IXVnfv2jtg4ODmWbX/Qbk4wAm8563fwMgCAKPUrnaFuB8cybTmywutoTGTIO0bameBOgm+X2hULhqjWPDwztjY2yC90B6M+/7J629WkFlZOQPAPcB6IN0dFVJs00tLQeiKGpdHfzuOiVJVwq+b31WTlAu95P8UNJ3Bd9/qg4QjIxcsMpRkhx0XHdGcXx2ZScAW/oBAK2UJtcNf6Hg++1VQBD0UTph96jg+131gCB4g9KnkhZEdrmum46Wl78muQvSrByn10IgTdfM5OO85/XZQJVKZSuS5FcAW0W+WCgUTtcBisWis72tzSroaQHfply3d2lpaUvKcaYB3A/gnMjn02F417IxkyQfspmm47gnyWTiOAxtwL2Q3s/7fm7DkK1haGjo7nQq9QXJJwVccow5COCq4nhmdT7njOv2JknSmkTR1AoEuETAbvkO286U63Zns9nwhgBrHB8f33L92rVTBPZLSgh8BnIW0rFVhUzLcV5DkrxqL8ca1c3ZqrPZ7J+bLtrai4mJCbMwP/8egGMknfU7cKNnAXN0nGfy+fy//wuoUcUOSocAvABgJ4AOSSJwReRlAhOx9KUDnCL5mICfHGN6ai+/hvzRSqXSdkOetTMB8LMbRd1vHz48X6eiW2nDzb5ZuepXd4dAf87zPmooYGWTg6CD0ut5zxveVEW3W8l6/4bM4GZJ/QecoXgo6MVIzwAAAABJRU5ErkJggg=="/>
                         Vistas: {viewCount}
                      
                    </p>

                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded-md">Learn more</button>
                </div>
                <div className="">{/*w-1/3 */}
                    <div className="flex justify-center">
                        <YouTube
                            videoId={videoId} // Reemplaza 'VIDEO_ID' con el ID real de tu video de YouTube   h-5 pt-1 pr-1
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

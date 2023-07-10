import React from 'react'
import 'boxicons'

export const SupBody = () => {
  return (
    <div>
        <div className="flex py-5 divide-x">
            <div className="w-1/4 flex justify-center">
                <img class="h-5 pt-1 pr-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWtJREFUSEvN1b1Lw0AYBvDn7XVwdHPRQl2q1XTUv8FV3NxdxAvazY/JguIgEkdXR8HFf8BNHHtaKjgU6+bg4FCouTzSQr+C2tQ0YMbk8vzeu8u9ESR8ScL5GAlIeYtFgeyROA5ccxKluMiA8px1gVx2Qn3bzGK7WhuGRALUubOCADcikuoCKshg86EeH/DySwrqViATnTCCdatNZlh46/nvMzgr5JTgTgSTg2Es+docxAaU57wIZCYc5AvnsWWqIwHKK6wJWYJIztfl9szSXoFRQgbGkE8U2be6fDWwRGnPeQQk37oZC2hrrPjaLISAXrXxgV6R3U3uX45/D5CoWbecTWyJArIYuOY0EYDkh7XvU9h5bSQCgDjy3fJu59Md6yaTbFppTEM/vyUDgBdWm43+gze2GRCktZ+z4RbeB8Q7ySSvrWtWw62lC7R7EXgIyNxfDpoPfxm6cv8jMHJTi/hCpD9axKxvhyUOfAGaur8Zs0Cy/QAAAABJRU5ErkJggg=="/>
                <p> Over </p>
                <p className='font-bold'>11,000 five-star assets</p>
            </div>
            <div className="w-1/4 flex justify-center">
                <img class="h-5 pt-1 pr-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAbpJREFUSEu1lb9PE2Ecxp+H94xhNCEkRiMgENDYmzWxDP4DxMTdOANXICwuzrKorfpfmLg5mgghON8RcVDSJgUWEkaG3stD3tI2bdPSuyvccsO97+fzfb7vjyNu+OEN89EhMMXcIon3AOcziaV9ARu2EP1ozu8S+FUS9zLBG5MkHdhCNN1T4JV8DQNvzo2DsFV4R4K0AkGnBO90F3UtAgmH1mrB8/Aa4Lt2ydACAUc2Vh7r0QGKj2YNvYjg7Ywt0qbANwTGHaAD/vXxjInNFsm7mRII+mKDaAUf5yeNubXtIHYkfo7l/Qo++1PmXDvdcDcmcYskHVsqj2DvvwNCqCEIq/iQe2g8/CJ4v9euSyy4bImq1tbyWPtbrsMaafrBUyVoVteSAHCtugqeSVBPIpRBkMDEoMOYqkWDYEOvwbUKTDFXIfkgC7S1XkLZFsKpPrdpbpHAJsi5TBIpFPC273XdE1o/rd4uibH27xJOrBc/w9Kff1cVk+yPVvKfGuEnidHGjjqzxAsE4e9BSZMJ3P4vPnkJ8NslUK9sYe/7ILj7nljgBo+U/FX3Pg/CT0ngqQVJoe3jUiXIIrgAQVPAGWk8Q1EAAAAASUVORK5CYII="/>
                <p>Rated by </p>
                <p className='font-bold'> 85,000+ customers</p>
            </div>
            <div className="w-1/4 flex justify-center">
            <img class="h-5 pt-1 pr-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAqJJREFUSEu1lU9IFVEUxr9v7ssUkogg+mNlIRTmvGgZKbYJKjdRi9oULQILaqYMWvVHaRdkvfdQqk1QQdAiCoRAaKFCqwKZeZSVqYG2aOHCRVFv7pyYkafvzzwdXniXh/N9v3POnTmXWOHDFfbH0oB002oldScAHiZkrxCNAIWQKRGMwpA3umb1S3R+yFUqtCJAZcwj8NnP0LTyEcg4hec923kblRUJSKSS3SBuxR2fiPhCueZb2bulmjJAIm32ALwZ17wwzxdc9m0nVRgrAqh0SwdhDFRjHmiCTjSkDXb2Xd5jEdDXvEZp9ZXgxmoBoU7ks1dbY+YvfgFgpJMXDKA/rrkAPynyDGRXqUZEjmnbfR3EFwAqbQ4Q7IgDEMGMpt8OK/tNpc0HBDsLdSLySNtuGCsAJGcIbF4OEJqr3AFc/PQdfc1NSquRsrEKRj3b2VfawW+CtUUAkTtCniWwIRwv8EMTrbjkTIbmnhomuSliRLPadtcXA1LmHMn6fLKIZLTtWsgkdygfI6CINrzWsPIgJjJMsCGqY4HMactdWwRIpMwxkLsWAJBp7aEdXe5EYAhBDpYzjV5zp0pgqJL5vF4+epa7p6SD5HMSp4ouK4DoXBuujE2F8Xu7G5VaFcw8svLF7vFU286ZEkDLadJ4UjbPAALuh/6biGM+/yv4J7WdfVEEQG9DnVLrxkhuK4dgEpAEwa3LfWUAvnj4lYQ1/qcYACBxv+UQDGMwhklkSrgqyIOwnJF8QtmyM9LmdQO8XQ3EF9/y7WymUBu5ro2UeYNED8FYL54AWgRXSzdp2YgKycFmhRgPSWxZqpvwwQHOeZY7FJW3dIWPG2vVXP1xEEcJJAXYPv9kYkIg7wEO6lnnFbrhVSoi1giquY+Kl/w/ZlHaf7iNCiho8TsyAAAAAElFTkSuQmCC"/>
                <p>Supported by </p>
                <p className='font-bold'> 100,000+ forum members</p>
            </div>
            <div className="w-1/4 flex justify-center">   
            <img class="h-5 pt-1 pr-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAqJJREFUSEu1lU9IFVEUxr9v7ssUkogg+mNlIRTmvGgZKbYJKjdRi9oULQILaqYMWvVHaRdkvfdQqk1QQdAiCoRAaKFCqwKZeZSVqYG2aOHCRVFv7pyYkafvzzwdXniXh/N9v3POnTmXWOHDFfbH0oB002oldScAHiZkrxCNAIWQKRGMwpA3umb1S3R+yFUqtCJAZcwj8NnP0LTyEcg4hec923kblRUJSKSS3SBuxR2fiPhCueZb2bulmjJAIm32ALwZ17wwzxdc9m0nVRgrAqh0SwdhDFRjHmiCTjSkDXb2Xd5jEdDXvEZp9ZXgxmoBoU7ks1dbY+YvfgFgpJMXDKA/rrkAPynyDGRXqUZEjmnbfR3EFwAqbQ4Q7IgDEMGMpt8OK/tNpc0HBDsLdSLySNtuGCsAJGcIbF4OEJqr3AFc/PQdfc1NSquRsrEKRj3b2VfawW+CtUUAkTtCniWwIRwv8EMTrbjkTIbmnhomuSliRLPadtcXA1LmHMn6fLKIZLTtWsgkdygfI6CINrzWsPIgJjJMsCGqY4HMactdWwRIpMwxkLsWAJBp7aEdXe5EYAhBDpYzjV5zp0pgqJL5vF4+epa7p6SD5HMSp4ouK4DoXBuujE2F8Xu7G5VaFcw8svLF7vFU286ZEkDLadJ4UjbPAALuh/6biGM+/yv4J7WdfVEEQG9DnVLrxkhuK4dgEpAEwa3LfWUAvnj4lYQ1/qcYACBxv+UQDGMwhklkSrgqyIOwnJF8QtmyM9LmdQO8XQ3EF9/y7WymUBu5ro2UeYNED8FYL54AWgRXSzdp2YgKycFmhRgPSWxZqpvwwQHOeZY7FJW3dIWPG2vVXP1xEEcJJAXYPv9kYkIg7wEO6lnnFbrhVSoi1giquY+Kl/w/ZlHaf7iNCiho8TsyAAAAAElFTkSuQmCC"/>
                <p>Every asset </p>
                <p className='font-bold'> moderated by Unity</p>
            </div>
        </div>


        <div className="flex justify-center ">
            <div className="flex justify-between bg-neutral-800 rounded-lg  w-5/6">
                <div className="items-center w-1/3 px-8 py-12">
                    <p className="text-gray-300 mt-2">TOOLS AND ART</p>

                    <h1 className="text-white text-lg font-semibold">30 for $30 Mega Bundle</h1>
                    <p className="text-gray-300 mt-2">Build your creative toolkit with this incredible</p>
                    <p className="text-gray-300 mt-2">collection of curated assets, and save up to</p>
                    <p className="text-gray-300 mt-2">95%.</p>

                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded-md">Shop Mega Bundle</button>
                </div>
                <div className="">{/*w-1/3 */}
                    <img src="https://picsum.photos/700/400?random" alt="Imagen de la publicidad" className="flex justify-end h-auto w-full rounded-md" />
                </div>      
            </div>
        </div>

    </div>
  )
}
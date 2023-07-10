import React, { useState } from 'react';
import 'boxicons'

const AssetCard = ({ imageSrc, author, assetName, rating, price }) => {
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
  
    const handleLike = () => {
      if (!isLiked) {
        setLikes(likes + 1);
        setIsLiked(true);
      } else {
        setLikes(likes - 1);
        setIsLiked(false);
      }
    };//max-w-sm object-cover http://www.w3.org/2000/svg
  return (
    <div className='px-3 py-3'>
      <div className="max-w-sm bg-slate-200 rounded overflow-hidden shadow-lg">
        <img src={imageSrc} alt={assetName} className="bg-slate-500 w-full h-48 object-cover" />
        <div className="px-6 py-4">
          <div className="text-gray-700 text-base mb-2">{author}</div>
          <p className="font-bold text-xl mb-2">{assetName}</p>
          <div className="flex items-center mb-2">
            <div className="flex">
              {Array.from({ length: rating }, (_, index) => (
                <svg
                  key={index}
                  xmlns="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAdlJREFUSEu1lT9oFEEYxX/vEgOB3O4WGlMKImJjGhvBgCiJGAULtQuKgkW6dILaRiytrNJo0FJQCSKoIAYrC7WJVpLycs3unn8Kvfsk43lJ7i57XzBZWBh23rzfzLxvZsUOP9phf9wAM/rJeAk0iJmQ+O2ZnB+QMQXMN02nFPNwewEpHxGHg6nxSQmj2wawGido8GqDYYnjKvOmF8S1RZaxAEy2mT1VzLn/BljOQYwl6CgIY4D9GuRrEaS1AvvGSeqcAYbDa+xFob0H6NvEpA5UMVYQFWAFqFBiQWVer45ZA6TUEEO9luzsryhmpB0wjbjnNCiSGeKKIu5vAITqy7mKMddlv31c4wfigmKe/xvQUUWWchHxCOj3ubZUVfqY0BAf1o/rWqaWcRp4AuxyQr4wwCkNstyu3/QcWBbymHYBxJgiFrtpiwDvgKMugHFLCbNuQLg5c35uIYdFxYz5ATnHMN66Zv9XVCcilvjuysBSriPudAHcbX6b6egrcV5lHvsAGc+As+vESxiXlPA+nJeUI81SPtDSGHNKuOYFVIHdwC9glojbUmiv+a1edTk3gJshK2NZCfu8gBdAgrisiM9FWViNQzR4gJEqYdwF2EK4PaWuH05PlwLBH6WqfxmFAVCzAAAAAElFTkSuQmCCg"
                  className="h-5 w-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v5.586l4.293 4.293a1 1 0 01-1.414 1.414L10 9.414 5.707 13.707a1 1 0 01-1.414-1.414L9 8.586V3a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <span className="text-gray-700 ml-1">{rating}</span>
          </div>
          <div className="flex items-center mb-2">
            <button
              className={`flex items-center text-gray-700 ${
                isLiked ? 'text-red-500' : ''
              } focus:outline-none`}
              onClick={handleLike}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M13.293 2.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-9 9a1 1 0 01-1.414 0l-9-9a1 1 0 010-1.414l3-3a1 1 0 011.414 0l2.293 2.293L10 9.586l3.293-3.293z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{likes}</span>
            </button>
          </div>
          <p className="text-gray-700 text-base">{price}</p>
          <a href="#" className="text-blue-500">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  )
}

export default AssetCard;
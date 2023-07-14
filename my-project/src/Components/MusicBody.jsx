import React, { useState, useEffect } from 'react';

export const MusicBody = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  useEffect(() => {
  }, [selectedOption]);

  const renderCard = () => {
    switch (selectedOption) {
      case 0:
        return <Card1 />;
      case 1:
        return <Card2 />;
      case 2:
        return <Card3 />;
      default:
        return null;
    }
  };

  return (
    <div className='py-12'>
      <div className='flex flex-col items-center'>
        <h1 className='bg-gray-800 text-white rounded-lg w-1/6 text-center font-bold'>Download Unity</h1>
        <nav className="flex justify-center bg-gray-800 text-white py-4 w-1/4 rounded-lg">
          <button
            onClick={() => handleOptionClick(0)}
            className={`px-4 py-2 rounded-lg hover:bg-blue-400 ${selectedOption === 0 ? 'bg-blue-500' : ''}`}
          >
            Option 1
          </button>
          <button
            onClick={() => handleOptionClick(1)}
            className={`px-4 py-2 rounded-lg hover:bg-blue-400 ${selectedOption === 1 ? 'bg-blue-500' : ''}`}
          >
            Option 2
          </button>
          <button
            onClick={() => handleOptionClick(2)}
            className={`px-4 py-2 rounded-lg hover:bg-blue-400 ${selectedOption === 2 ? 'bg-blue-500' : ''}`}
          >
            Option 3
          </button>
        </nav>
      </div>
      <div className="mt-4">
        {renderCard()}
      </div>
    </div>
  );
};

const Card1 = () => {
  return (
    <div className=" flex justify-center">
      <div className='bg-gray-300 w-1/4 rounded-lg flex flex-col items-center'>
        <img src='https://cdn.sforum.vn/sforum/wp-content/uploads/2023/03/unity-la-gi-1.jpg'/>
        <div className=' flex pt-4'>
          <box-icon type='logo' name='unity'></box-icon>
          <h2 className="text-lg font-bold ">Personal License</h2><br/>
        </div>
        <p>Free</p>
        <button className="bg-violet-500 hover:bg-violet-600 text-center font-bold rounded text-white w-1/2 my-4 border-zinc-500"
        >Get started</button>
      </div>
    </div>
  );
};

const Card2 = () => {
  return (
    <div className=" flex justify-center">
      <div className='bg-gray-300 w-1/4 rounded-lg flex flex-col items-center'>
        <img src='https://blog.facialix.com/wp-content/uploads/2021/10/0_Kl0LELkpH8stg1ZQ.jpg'/>
        <div className=' flex pt-4'>
          <box-icon type='logo' name='unity'></box-icon>
          <h2 className="text-lg font-bold">Pro license</h2><br/>
        </div>
        <p >from R$ 11,791 /yr</p>
        <button className="bg-violet-500 hover:bg-violet-600 text-center font-bold rounded text-white w-1/2 my-4"
        >Choose plan</button>
      </div>
    </div>
  );
};

const Card3 = () => {
  return (
    <div className=" flex justify-center">
      <div className='bg-gray-300 w-1/4 rounded-lg flex flex-col items-center'>
        <img src='https://i.blogs.es/0ebb19/unity-polemica/1366_2000.webp'/>
        <div className=' flex pt-4'>
          <box-icon type='logo' name='unity'></box-icon>
          <h2 className="text-lg font-bold">Company License</h2><br/>
        </div>
        <p>Let’s talk</p>
        <button className="bg-violet-500 hover:bg-violet-600 text-center font-bold rounded text-white w-1/2 my-4"
        >Contact us</button>
      </div>
    </div>
  );
};


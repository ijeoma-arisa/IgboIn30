'use client';

import { useState } from 'react';
import clsx from 'clsx'; 

const placeholderTopics = ['All', 'MEGA Playlist', 'Beginners', 'Intermediate'];

export default function TopicButtons() {
  const [selectedTopic, setSelectedTopic] = useState(() => placeholderTopics[0]);
  
  function handleClick(){
    console.log('Clicked!');
  }

  return (
    <div className="flex gap-4 mb-2 justify-between">
      {/* Left arrow */}
      <button 
          className="text-2xl text-orange-400"
          onClick={handleClick}
        >
        &#9664;
      </button>

      {placeholderTopics.map((topic) => {
        return (
          <button
            key={topic}
            className={clsx(
                'h-12 rounded-md text-center border border-orange-400 transition text-black text-md font-bold px-4 py-2',
                'hover:bg-orange-200 hover:scale-110 cursor-pointer',
                topic === selectedTopic 
                  ? 'bg-orange-200'
                  : 'bg-orange-300'
              )}
              onClick={handleClick}>
              {topic}
          </button>
        );
        
      })}

      {/* Right arrow */}
      <button 
          className="text-2xl text-orange-400"
          onClick={handleClick}
        >
        &#9654;
      </button>
    </div>
  ); 
}
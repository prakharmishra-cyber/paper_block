import React from 'react';
import examimg from './illustra2.png';

const Hero = () => {
  return (
    <div className='flex flex-col justify-center md:flex-row md:justify-around m-3 p-2'>
      <div className='font-mono text-8xl p-7 w-1/2'>
        A One Stop Solution for <span className='text-indigo-600'>Collage Exams</span>
        <br/>
        <button className='font-mono text-white bg-indigo-600 text-sm p-3 rounded-sm hover:shadow-xl'>Learn More &gt;</button>
      </div>
      <div className='w-1/2 text-center'>
        <img src={examimg} alt="exam illustration" width={600} height={390}/>
      </div>
    </div>
  )
}

export default Hero 
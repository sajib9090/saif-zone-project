import Lottie from 'lottie-react'
import React from "react";
import { Link } from "react-router-dom";
import reader from '../../assets/reading-boy.json'

const Home = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row items-center my-container mt-4'>
      <div className='md:w-[50%] w-full mt-16 md:mt-0'>
        <p className="badge">ON SALE!</p>
        <h1 className='font-bold text-4xl max-w-md mb-6'>
          A reader lives a thousand lives <span className='text-blue-500'>before he dies</span>
        </h1>
        <p className='max-w-md mb-6'>Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.</p>
        <div>
            <Link to="books"><button className='btn mr-4'>Visit store</button></Link>
            <Link to='about' className='font-bold'>Learn more</Link>
        </div>
      </div>
      <div className='md:w-[50%] w-full mt-12 md:mt-0 py-4'>
        <div>
        <Lottie animationData={reader} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Home;

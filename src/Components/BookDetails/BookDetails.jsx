import React, { useState } from "react";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const BookDetails = () => {
  const navigation = useNavigation();
  // console.log(navigation.state);
  if(navigation.state === 'loading'){
    return <LoadingSpinner/>
  }

  const bookDetails = useLoaderData();
  const [fold, setFold] = useState(true);

  
  return (
    <div className="my-container">
      <div className="border border-[#dddddd] p-8 flex md:flex-row flex-col">
        <div className="h-[100vh] md:w-[50%] w-[100%]">
            <img className="object-cover w-full h-full" src={bookDetails.image} alt="" />
        </div>
        <div className="h-[100vh] md:w-[50%] w-[100%] flex flex-col justify-center">
            <span><p className="badge">BRAND NEW</p></span>
            <h2 className="font-bold text-4xl max-w-sm my-2">{bookDetails.title}</h2>
            <p>Authors: {bookDetails.authors}</p>
            <p>Publisher: {bookDetails.publisher}</p>
            <p>Year: {bookDetails.year}</p>
            <p>Rating: {bookDetails.rating}</p>
            {
                fold? 
                    <>
                    <p className="my-4">{bookDetails.desc.substring(0,100)}... <span className="text-blue-500 cursor-pointer" onClick={()=>setFold(!fold)}>Read More</span></p>
                    </> : 
                    
                        <>
                        <p className="my-4">{bookDetails.desc}... <span className="text-blue-500 cursor-pointer" onClick={()=>setFold(true)}>Read Less</span></p>
                        </>
                    
                
            }
            <div className="flex items-center space-x-4">
                <button className="btn">Buy Now</button>
                <p>Price: {bookDetails.price}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

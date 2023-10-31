import Image from 'next/image';
import React from 'react'
import ColoredStarImage from "../../public/images/star.svg";
import UnColoredStarImage from "../../public/images/unstar.svg";

const ColoredStar = () => {
    return (
      <Image src={ColoredStarImage} alt="Colored Star" width={20} height={20} />
    );
  };


const UnColoredStar = () => {
    return (
      <Image src={UnColoredStarImage} alt="Uncolored Star" width={20} height={20} />
    );
  };


  const RatingSytem = ({ rating } : {rating : number}) => {
    const maxRating = 5;
    const roundedRating = Math.round(rating );
  
    const coloredStars = new Array(roundedRating).fill(0);
    const uncoloredStars = new Array(maxRating - roundedRating).fill(0);
  
    return (
      <div className='flex  mt-5'>
        {coloredStars.map((_, index) => (
          <ColoredStar key={index} />
        ))}
        {uncoloredStars.map((_, index) => (
          <UnColoredStar key={index} />
        ))}
      </div>
    );
  };
  
  export default RatingSytem;
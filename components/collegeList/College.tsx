import Image from "next/image";
import React from "react";
import { AiFillStar } from 'react-icons/ai';
import pic from "../../public/assets/images/droneCollege.jpeg"

import Stars from "./Stars";

interface CollegeProps {
  name: string;
  description: string;
  rating: number;
}

const CollegeCard: React.FC<CollegeProps> = ({
  name,
  description,
  rating,
}) => {
  return (
    
 <div className="college-container">
        {/* Image */}
            <Image
            className="image"
            src={pic}
            alt="College"
            width={100}
            height={100}
            />
        {/* Content */}
        <div className="content">
            <div className="details">
                <h2>{name}</h2>
                <span >Ghurdauri, Pauri</span>
            </div>
            <div className="ratings">
            <h3>#1 in National Universities</h3>
            <div className="stars">
                <Stars rating={3} maxRating={5} />
                <span>100reviews</span>
            </div>
            
            </div>
            <div className="details">
            <p className="">{description}</p>
            </div>
            </div>

            <div className="stats">
            <div className="fees">
                <span>Tution and fee</span>
                <h2>$50000</h2>
            </div>
            <div className="enrollment">
                <span>Students enrolled</span>
                <h2>10000</h2>
            </div>
            <div className="nrif">
                <span>NRIF Ranking</span>
                <h2>100</h2>
            </div>
        </div>
        </div>   );
};

export default CollegeCard;



//  <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
//         {/* Image */}
//             <Image
//             className="image"
//             src={pic}
//             alt="College"
//             />
//         {/* Content */}
//         <div className="content">
//             <div className="details">
//                 <h2>{name}</h2>
//                 <span >Ghurdauri, Pauri</span>
//             </div>
//             <div className="ratings">
//             <h3>#1 in National Universities</h3>
//             <div className="stars">
//                 <Stars rating={3} maxRating={5} />
//                 <span>100 reviews</span>
//             </div>
            
//             </div>
//             <div className="details">
//             <p className="">{description}</p>
//             </div>
//             </div>

//             <div className="stats">
//             <div className="fees">
//                 <span>Tution and fee</span>
//                 <h2>$50000</h2>
//             </div>
//             <div className="enrollment">
//                 <span>Students enrolled</span>
//                 <h2>10000</h2>
//             </div>
//             <div className="nrif">
//                 <span>NRIF Ranking</span>
//                 <h2>100</h2>
//             </div>
//         </div>
//         </div> 
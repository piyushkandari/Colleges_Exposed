import React from "react";
import { FaStar } from "react-icons/fa";

type Props = {
  heading: string;
  subtitle: string;
}

const Hero: React.FC<Props> = ({heading , subtitle}) => {
  const getStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {

        if(rating ==3 ){
          stars.push(<FaStar key={i} className="text-yellow-400  h-5 w-5  md:h-8  md:w-8  fill-current" />);
        }
        else if(rating < 3) {
          stars.push(<FaStar key={i} className="text-red-400 h-5 w-5  md:h-8 w-8  fill-current" />);
        }
        else{
          stars.push(<FaStar key={i} className="text-yellow-400 h-5 w-5  md:h-8 md:w-8 fill-current" />);

        }

        
      } else {
        stars.push(<FaStar key={i} className="text-gray-300 h-5 w-5  md:h-8 md:w-8  stroke-current" />);
      }
    }
    return stars;
  };

  return (
    // <div className='flex items-center justify-center  mb-12 bg-fixed bg-center bg-cover h-screen  custom-imgbg'>
    //   {/* Overlay */}
    //   <div className='absolute top-0 left-0 right-0  bg-black/70 z-[2] bottom-0 ' />
      // <div className='p-5 text-white z-[2] mt-60  container xl:w-[90%]'>
      //   <h2 className='text-3xl md:text-5xl mt-32  font-bold'>{heading}</h2>
      //   <p className='pt-5 text-xl'>{subtitle}</p>

      //   <div className="flex  items-center mr-4 py-1">
      //     <span className="font-bold   text-2xl py-1 md:mr-2 ">Rating: </span>
      //           {getStars(4) }
      //   </div>
        
      // </div>
    // </div>


    <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen lg:h-[80vh]"
>
          <div className="absolute top-0 w-full h-full bg-center bg-cover custom-imgbg"
              // style={{
              //   backgroundImage: 'custom-img'
              // }}
              >
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
          <div className='p-5 text-white z-[2] mt-60  container xl:w-[90%]'>
        <h2 className='text-3xl md:text-5xl mt-32  font-bold'>{heading}</h2>
        <p className='pt-5 text-xl'>{subtitle}</p>

        <div className="flex  items-center mr-4 py-1">
          <span className="font-bold   text-2xl py-1 md:mr-2 ">Rating: </span>
                {getStars(4) }
        </div>
        
      </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              {/* <polygon
                className="text-gray-100 fill-current"
                points="2560 0 2560 100 0"
              ></polygon> */}
            </svg>
          </div>
        </div>


  );
};

export default Hero;
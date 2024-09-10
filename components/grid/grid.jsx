import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'



const Grid = () => {



  return ( 


    <div className="container mx-auto ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">

            <Post img= '/assets/images/academics.jpg' category={'Academics'}  page={'academics'} />
            <Post img= '/assets/images/sports.jpg' category={'Sports'} page={'sports'}  />
            <Post img= '/assets/images/health.jpg' category={'Health & Care'} page={'health'} />
            <Post img= '/assets/images/campuslife.jpg' category={'Campus life'} page={'campuslife'} />
            <Post img= '/assets/images/infrastructure.jpg' category={'Infrastructure'} page={'infrastructure'} />
            
            

        </div>
    </div>
  )
}


function Post({img, category, page}){


    return(
         <div className="item m-2 p-4 rounded-lg flex flex-col justify-between bg-gray-50 shadow-2xl ">

            <div className="images">
                <div className='image' >
                <Link href={`/college1/${page}`}>
                    <Image src={img}  alt="" className="" width={600} height={450} />
                </Link>
                </div>
            </div>

            <div className="info flex justify-center flex-col   py-4 ">
                <div className="cat">
                <Link href={`/`}><span className='text-center text-purple-600 '>{category} </span></Link>
                <Link href={`/`}><span className='text-center text-gray-600'> - published</span></Link>
                </div>

                <div className="title ">
                <Link href={`/`}><span className='  text-center text-justify text-3xl  font-medium'>title</span></Link>
                </div>

                <p>subtitle</p>


            </div>
         </div>
    )
}



export default Grid;
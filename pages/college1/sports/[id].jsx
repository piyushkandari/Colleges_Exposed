import Image from "next/image";
import Reviews from "../../../components/reviews/Reviews"
import UserReviews from '../../../components/reviews/UserReviews'


import React, {createContext} from "react";
import axios from 'axios';
import Footer from "../../../components/Footer/Footer";





const userPage = (props) => {
    console.log("props", props.data);
    return (
        <>
        
        <section className=" mx-auto py-16 mx p-2 ">

            <div className="post py-10 ">
                <h1 className="font-bold text-4xl font-bold text-center pb-5 uppercase text-purple-900">
                     {props.data.title}
                </h1>

               
                

                {/*  rate and review system  */}

                <Reviews db="sports-reviews" collection={props.data.title} rating = {props.avg} />

                 
                <UserReviews db="sports-reviews" collection={props.data.title} reviews={props.reviews} rating = {props.avg}/>

                
                

            </div>

        </section>

        <Footer />
        </>
    );
};


export const getServerSideProps = async(context , props) => {

    const id =  context.params.id;

    const res  = await axios.get(`https://colleges-exposed.vercel.app/api/fetchid?db=test&collection=sports&id=${id}`);
    const data = await res.data;

    const res1  = await axios.get(`https://colleges-exposed.vercel.app/api/fetchout?db=sports-reviews&collection=${data.title}`);

    const res2 = await axios.get(`https://colleges-exposed.vercel.app/api/fetchout?db=avg-reviews&collection=sports-reviews`);

    const reviews = await res1.data;
    const avg = await res2.data; 


    

    return {
        props: {
            data,
            reviews, 
            avg
        }
   
    }
}






export default userPage;



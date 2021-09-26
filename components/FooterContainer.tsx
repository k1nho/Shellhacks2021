import Image from "next/dist/client/image"
import { CreatorSvg } from "./CreatorSvg"

export const FooterContainer = () => {
    return (
              <div className= "min-h-screen bg-gray-800 grid grid-cols-12 justify-items-center items-center">
           <div className=" col-span-12 md:col-span-6 justify-items-center items-center bg-white rounded-full p-5"> 
           <CreatorSvg/>
           </div>
           <div className ="col-span-12 md:col-span-5 justify-items-center items-center text-white space-y-4">
               <h1 className ="text-xl text-center font-bold">
                    For creators by creators
               </h1>
               <p className="text-base text-center">
                Creatt is here to support local creators and established influencers alike! by using the Lightning network our team provides instant bitcoin transaction on watch time, so that you can get exclusive creator content from anywhere in the world 🌎
               </p>
               </div> 
        </div> 
    )
}


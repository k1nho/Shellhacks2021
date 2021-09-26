import Image from "next/dist/client/image"

export const InfoContainer = () => {
    return (
      <div className= "min-h-screen grid grid-cols-12 justify-items-center items-center">
          <div className ="md:col-span-1"></div>
           <div className ="col-span-12 md:col-span-5 justify-items-center items-center space-y-4">
               <h1 className ="text-xl text-center font-bold">
                    Monetization in Full Force
               </h1>
               <p className="text-lg text-center">
                Common video services disable clear and transparent monetization for creators. In Creatt, we believe in the grow of our local communities through an instantanious monetization model, so that you can get rewarded in accordance to your effort. That way the users enjoy unique content from the creators
               </p>
               </div> 
           <div className=" col-span-12 md:col-span-6 justify-items-center items-center bg-white rounded-full p-5"> 
            <Image src= "/images/bitcoin.png" height={250} width={250}></Image>
           </div>
        </div>
    )
}

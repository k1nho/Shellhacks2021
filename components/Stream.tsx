import React, { useEffect, useState } from "react";
import {Video} from "../components/Video"
import {hasValidMacaroon} from "../authlib/validate"
import { Router } from "next/dist/client/router";
import Login from "./Login";
import { CertsForm } from "./CertsForm";
import { Authenticate } from "./Authenticate";

interface Iprops {
  userEmail? : string
}

export const Stream: React.FC<Iprops> = ({userEmail}) => {
  const [videosIds, setVideosIds] = useState([]);
  const [certValid, setCertValid] = useState(false);

  useEffect(()=> {
    const hydrateIds = async() =>{
    const getVideos = await fetch("/api/getvideos");
    const data = await getVideos.json();
    setVideosIds(data);
  }

  const checkMacaroon = async() =>{

    const res = await hasValidMacaroon(userEmail);
    console.log(res) 
    setCertValid(res);
  }

    checkMacaroon()
    hydrateIds();
  }, []);

if(certValid === false){
  return <Authenticate/>
}
  
  return (
    
    <div className= "grid grid-cols-12">
      {videosIds.length !== 0 ?  videosIds.map((id: string) => (<div className="col-span-12 md:col-span-4">
        <Video publicId = {id}/>
      </div>)) : <>no</>}
    </div>
  );
};

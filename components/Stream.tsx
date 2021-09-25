import React, { useEffect, useState } from "react";
import Image from "next/image";
import {Video} from "../components/Video"

const Stream = () => {
  const [videosIds, setVideosIds] = useState([]);

  useEffect(()=> {
    const hydrateIds = async() =>{
    const getVideos = await fetch("/api/getvideos");
    const data = await getVideos.json();
    setVideosIds(data);
  }

    hydrateIds();
  }, [])

  return (
    
    <div>
      {videosIds.length !== 0 ?  videosIds.map((id: string) => (<div>
        <Video publicId = {id}/>
      </div>)) : <>no</>}
    </div>
  );
};

export default Stream;

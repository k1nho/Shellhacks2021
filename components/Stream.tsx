import React, { useEffect, useState } from "react";
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
    
    <div className= "grid grid-cols-12">
      {videosIds.length !== 0 ?  videosIds.map((id: string) => (<div className="col-span-12 md:col-span-4">
        <Video publicId = {id}/>
      </div>)) : <>no</>}
    </div>
  );
};

export default Stream;

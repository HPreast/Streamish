import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Video from "./Video";
import { getUserVideos } from "../modules/videoManager";

const UserVideos = () => {
    const [videos, setVideos] = useState();
    const { id } = useParams();

    useEffect(() => {
        getUserVideos(id).then(setVideos);
    }, []);
    // console.log(videos);
    if (!videos) {
        return null;
    }

    return (
        <div className="container">
            <h3 className="title">Video List</h3>
            <div className="row justify-content-center">
                {videos.videos.map((video) => (
                    <Video video={video} key={video.id} />
                ))}
            </div>
        </div>
    );
};

export default UserVideos;
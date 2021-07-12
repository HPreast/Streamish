import React, { useEffect, useState } from "react";
import Video from './Video';
import { getAllVideos } from "../modules/videoManager";
import SearchCard from "./SearchCard";

const VideoList = () => {
    const [videos, setVideos] = useState([]);
    // const [results, setResults] = useState();
    const [search, setSearch] = useState('');

    const getVideos = () => {
        getAllVideos().then(res => setVideos(res));
        // console.log(videos);
    };

    const results = (searchString) => {
        let matchingVideos = videos.filter(video => {

            if (video.title.toLowerCase().includes(searchString)) {
                return true;
            }
        })
        setVideos(matchingVideos);
    }

    useEffect(() => {
        getVideos();
        results(search);
    }, [search]);

    return (
        <div className="container">
            <h3 className="title">Video List</h3>
            <input
                type="text"
                placeholder="Search Video"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="searchResults">
                {search.length === 0 ? <div className="row justify-content-center">
                    {videos.map((video) => (
                        <Video video={video} key={video.id} />
                    ))}
                </div> :
                    videos.map(res =>
                        <SearchCard
                            key={res.id}
                            result={res} />
                    )}
            </div>
            {/* <div className="row justify-content-center">
                {videos.map((video) => (
                    <Video video={video} key={video.id} />
                ))}
            </div> */}
        </div>
    );
};

export default VideoList;


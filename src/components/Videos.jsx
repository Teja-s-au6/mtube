import React from 'react';
import VideoListItem from './VideoListItem';


const Videos = ({ videos, mode = "trending"}) => {
    return (
            <>
                {videos.map(video => <VideoListItem video={video} key= {mode === 'search' ? video.id.videoId : video.id} mode={mode} />)}
            </>
    )
}

export default Videos;

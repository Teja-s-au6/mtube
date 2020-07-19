import React from 'react';
import VideoListItem from './VideoListItem';


const Videos = ({ videos}) => {
    return (
            <>
                {videos.map(video => <VideoListItem video={video} key={video.id} />)}
            </>
    )
}

export default Videos;

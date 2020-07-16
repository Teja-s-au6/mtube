import React from 'react';
import VideoListItem from './VideoListItem';
import { CardDeck } from 'react-bootstrap';


const Videos = ({ videos}) => {
    return (
        <CardDeck>
            {videos.map(video => <VideoListItem video={video} key={video.id} />)}
        </CardDeck>
    )
}

export default Videos;

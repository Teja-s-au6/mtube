import React from 'react';
import { Card} from 'react-bootstrap';

const limitDescriptionContent = (description, letterCount) => {
    return description.length <= letterCount ? description : `${description.slice(0, letterCount)}...`
}
const VideoListItem = ({video}) => {
	return (
		<Card
			style={{
				width: '18rem',
				alignContent: 'center',
				flexBasis: '300px',
				marginBottom: '15px',
				marginTop: '10px'
			}}>
			<Card.Img variant="top" src={video.snippet.thumbnails.high.url} width="200px" height="200px" />
			<Card.Body>
				<Card.Title>{video.snippet.title}</Card.Title>
				<Card.Text><span style={{fontWeight: "bold"}}> ChannelName: </span> {video.snippet.channelTitle}</Card.Text>
                <Card.Text><span style={{fontWeight: "bold"}}> Description: </span>{limitDescriptionContent(video.snippet.description, 100)}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default VideoListItem;

import React from 'react';
import { Card, Avatar } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const VideoListItem = ({video, mode}) => {
	return (

    <Card.Grid style={{width: '25%'}}>
    <Link to={`videos/${ mode === 'search' ? video.id.videoId : video.id}`} style={{ color : "inherit", textDecoration: "none"}}>
   <Card
    style={{ width: 360, height: 350}}
    cover={
      <img
        alt="example"
        src={video.snippet.thumbnails.high.url}
      />
    }
    key={mode === 'search' ? video.id.videoId : video.id}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title={video.snippet.title}
      description={video.snippet.channelTitle}
    />
  </Card>
  </Link>
    </Card.Grid>
	);
};

export default VideoListItem;

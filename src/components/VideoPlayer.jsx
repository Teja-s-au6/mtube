import React, {Component} from 'react';
import { Typography, Row, Col, Avatar, Input } from 'antd';
import { Button }from 'react-bootstrap';
import ShowMoreText from 'react-show-more-text';
import {
    LikeFilled,
    DislikeFilled,
    ShareAltOutlined,
    SaveFilled,
    SmallDashOutlined
  } from '@ant-design/icons';

const { Title } = Typography;

const { TextArea } = Input

class VideoPlayer extends Component {

    state = {
        date: new Date(this.props.video.snippet.publishedAt)
    }
    
    executeOnClick(isExpanded){
        console.log(isExpanded)
    }
    render() {
        //console.log(this.props)
        return (
            <>
            <div className="embed-responsive embed-responsive-16by9" style={{height: "auto", width: 1100}}>
                <iframe
                    title="video"
                    src={`https://www.youtube.com/embed/${this.props.video.id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
            <br/>
            <div style={{height: "auto", width: 1100}}>
            <Title level={3}>{this.props.video.snippet.title}</Title>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span="4">
                    <p>{`${this.props.video.statistics.viewCount} views.`}</p>
                </Col>
                <Col span="10">
                    <p>{this.state.date.toDateString()}</p>
                </Col>
                <Col span="2">
                    <LikeFilled />
                    <p>{`${this.props.video.statistics.likeCount}`}</p>
                </Col>
                <Col span="2">
                    <DislikeFilled />
                    <p>{`${this.props.video.statistics.dislikeCount}`}</p>
                </Col>
                <Col span="2">
                    <ShareAltOutlined />
                    <p>share</p>
                </Col>
                <Col span="2">
                    <SaveFilled />
                    <p>save</p>
                </Col>
                <Col span="2">
                    <SmallDashOutlined />
                </Col>
            </Row>
            <hr />
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span="1">
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </Col>
                <Col span="17">
                    <p>{this.props.video.snippet.channelTitle}</p>
                </Col>
                <Col span="2">
                    <Button variant="outline-primary">JOIN</Button>
                </Col>
                <Col span="2">
                    <Button variant="danger">Subscribe</Button>             
                </Col>
            </Row>
            <br/>
            <div style={{marginLeft: 50}}>
            <ShowMoreText
                    lines={3}
                    more='Show more'
                    less='Show less'
                    anchorClass=''
                    onClick={this.executeOnClick}
                    expanded={false}
                    width={1100}
                >
                {this.props.video.snippet.description}
            </ShowMoreText>
            </div>
            <hr/>
            <br/>
            <p>{`${this.props.video.statistics.commentCount} Comments`}</p>
            <br/>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span="1">
                    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }} >T</Avatar>
                </Col>
                <Col span="22">
                    <TextArea placeholder="Add a Public Comment"></TextArea>
                </Col>
            </Row>
            <br/>
            <Button variant="primary" style={{marginLeft: 50}}>Add Comment</Button>             
            </div>
            </>
        );

    }
}

export default VideoPlayer;

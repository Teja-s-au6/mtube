import React, {Component} from 'react';
import { Comment, Avatar, Collapse,Row, Col } from 'antd';
import Replies from './Replies';
import ShowMoreText from 'react-show-more-text';
import { DislikeFilled, LikeFilled } from '@ant-design/icons';

class CommentListItem extends Component {

    state = {
        date: new Date(this.props.comment.snippet.topLevelComment.snippet.publishedAt)
    }

    executeOnClick(isExpanded){
        console.log(isExpanded)
    }
    render() {

	return (
		<div style={{height: "auto", width: 1100}}>
			<Comment
				actions={[<span key="comment-nested-reply-to">Reply to</span>]}
				author={<a href="hi">{this.props.comment.snippet.topLevelComment.snippet.authorDisplayName} {this.state.date.toDateString()}</a>}
				avatar={
					<Avatar src={this.props.comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="Han Solo" />
				}
				content={
                                <ShowMoreText
                                lines={3}
                                more='Show more'
                                less='Show less'
                                anchorClass=''
                                onClick={this.executeOnClick}
                                expanded={false}
                                width={1100}
                            >
                            {this.props.comment.snippet.topLevelComment.snippet.textOriginal}                        
                                </ShowMoreText>
				}
			>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span="1">
                    <LikeFilled />
                </Col>
                <Col span="2">
                    <p>{this.props.comment.snippet.topLevelComment.snippet.likeCount}</p>
                </Col>
                <Col span="1">
                    <DislikeFilled />
                </Col>
                <Col span="1">
                    <p></p>
                </Col>
            </Row>
                {this.props.comment.replies ?
                     <>
                    <Collapse>
                    <Collapse.Panel header={`view ${this.props.comment.snippet.totalReplyCount} replies`}>
                     <Replies replies={this.props.comment.replies}/>
                    </Collapse.Panel>
                </Collapse>
                </>  : null}
               
            </Comment>
		</div>
    );
    }
};

export default CommentListItem;

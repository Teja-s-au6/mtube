import React, {Component} from 'react';
import { Comment, Avatar } from 'antd';
//import Replies from './Replies';
class ReplyListItem extends Component {
    render() {
        //console.log(this.props)
	return (
		<div style={{height: "auto", width: 1100}}>
			<Comment
				actions={[<span key="comment-nested-reply-to">Reply to</span>]}
				author={<a href="hi">{this.props.replyComment.snippet.authorDisplayName}</a>}
				avatar={
					<Avatar src={this.props.replyComment.snippet.authorProfileImageUrl} alt="Han Solo" />
				}
				content={
					<p>
                        {this.props.replyComment.snippet.textOriginal}
					</p>
				}
			>
            </Comment>
		</div>
    );
    }
};

export default ReplyListItem;

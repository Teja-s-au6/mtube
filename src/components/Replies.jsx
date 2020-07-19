import React from 'react'
import ReplyListItem from './ReplyListItem';

const Replies = ({replies}) => {
    //console.log(replies)
    return replies.comments.map(replyComment => <ReplyListItem  key={replyComment.id} replyComment={replyComment}/>)
}

export default Replies

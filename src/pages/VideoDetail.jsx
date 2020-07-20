import React, { Component } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import { connect } from 'react-redux';
import { fetchCurrentVideoComment, fetchCurrentVideos } from '../store/currentVideoReducer';
import Comments from '../components/Comments';
class VideoDetail extends Component {
	componentDidMount() {
		if(this.props.match.params.videoId === undefined) {
			return "hee"
		}
		this.props.fetchCurrentVideos(this.props.match.params.videoId);
		this.props.fetchCurrentVideoComment(this.props.match.params.videoId);
	}

	render() {
		return (
			<div>
				{this.props.currentVideo ? <VideoPlayer video={this.props.currentVideo.items[0]} /> : <h1>Loadingvideo...</h1>}

				{this.props.comments ? <Comments comments={this.props.comments.items} /> : <h1>Loadingcomment...</h1>}
			</div>
		);
	}
}

const mapStateToProps = (storeState) => {
	return {
		currentVideo: storeState.features.currentVideos.video,
		comments: storeState.features.currentVideos.comments
	};
};

export default connect(mapStateToProps, { fetchCurrentVideos, fetchCurrentVideoComment })(VideoDetail);

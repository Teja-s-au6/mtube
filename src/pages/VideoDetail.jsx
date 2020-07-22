import React, { Component } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import { connect } from 'react-redux';
import { fetchCurrentVideoComment, fetchCurrentVideos } from '../store/currentVideoReducer';
import Comments from '../components/Comments';
import { Spin } from 'antd';
class VideoDetail extends Component {
	componentDidMount() {
		if (this.props.match.params.videoId === undefined) {
			return 'hee';
		}
		this.props.fetchCurrentVideos(this.props.match.params.videoId);
		this.props.fetchCurrentVideoComment(this.props.match.params.videoId);
	}

	render() {
		return (
			<div>
				{this.props.currentVideo ? (
					<VideoPlayer video={this.props.currentVideo.items[0]} />
				) : (
					<div
						style={{
							textAlign: 'center',
							borderRadius: 4,
							marginBottom: 20,
							padding: '30px 50px',
							margin: '500px 0'
						}}
					>
						<Spin size="large" />
					</div>
				)}

				{this.props.comments ? (
					<Comments comments={this.props.comments.items} />
				) : (
					<div
						style={{
							textAlign: 'center',
							borderRadius: 4,
							marginBottom: 20,
							padding: '30px 50px',
							margin: '500px 0'
						}}
					>
						<Spin size="large" />
					</div>
				)}
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

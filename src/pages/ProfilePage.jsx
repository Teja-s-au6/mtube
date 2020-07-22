import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSubscription } from '../store/subscriptionReducer';
import { fetchChannel } from '../store/channelReducer';
import { Spin } from 'antd';

class ProfilePage extends Component {
	componentDidMount() {
		this.props.fetchChannel();
		this.props.fetchSubscription();
	}
	render() {
		return this.props.user ? (
			<div>
				<Jumbotron>
					<img
						src={this.props.user.imageUrl}
						alt="profilepic"
						style={{ width: 150, height: 150, borderRadius: '50%', marginLeft: 600 }}
					/>
					<br />
					<h1 style={{ marginLeft: 600 }}>{this.props.user.name}</h1>
					<br />
					<p style={{ marginLeft: 600 }}>Email: {this.props.user.email}</p>
					<br />
					{this.props.channel ? (
						this.props.channel.items.map((channel, index) => (
							<div key={index}>
								<h1>Your Channel Details</h1>
								<p>Title: {channel.snippet.title}</p>
								<p>Description: {channel.snippet.description}</p>
								<p>Joined At: {channel.snippet.publishedAt}</p>
								<p>viewCount: {channel.statistics.viewCount}</p>
								<p>commentCount : {channel.statistics.commentCount}</p>
								<p>subscriberCount : {channel.statistics.subscriberCount}</p>
								<p>videoCount: {channel.statistics.videoCount}</p>
							</div>
						))
					) : (
						<div style={{  
							textAlign: "center",
							borderRadius: 4,
							marginBottom: 20,
							padding: "30px 50px",
							margin: "500px 0"
							}} >
						<Spin size="large" />
					  </div>
					)}
					<br />
					<h1>Your Subscriptions</h1>
					{this.props.subscriptions ? (
						this.props.subscriptions.items.map((subscription, index) => (
                            <>
							<div key={index} style={{ border: "1px solid black"}}>
								<img
									src={subscription.snippet.thumbnails.medium.url}
									alt="channelpic"
									style={{ width: 100, height: 100, borderRadius: '50%', marginLeft: 600 }}
								/>
								<p>Title: {subscription.snippet.title}</p>
								<p>Description: {subscription.snippet.description}</p>
								<p>Joined At: {subscription.snippet.publishedAt}</p>
								<p>contentDetails: {subscription.contentDetails.totalItemCount}</p>
							</div>
                            <br/><br/>
                            </>
						))
					) : (
						<div style={{  
							textAlign: "center",
							borderRadius: 4,
							marginBottom: 20,
							padding: "30px 50px",
							margin: "500px 0"
							}} >
						<Spin size="large" />
					  </div>
					)}
					<br />
					<Link to="/playlists">
						<Button variant="primary" style={{ marginLeft: 600 }}>
							View Playlist
						</Button>
					</Link>
				</Jumbotron>
			</div>
		) : (
			<Redirect to="/" />
		);
	}
}

const mapStateToProps = (storeState) => {
	return {
		user: storeState.features.users.user,
		subscriptions: storeState.features.subscriptions.subscriptions,
		channel: storeState.features.channel.channel
	};
};

export default connect(mapStateToProps, { fetchChannel, fetchSubscription })(ProfilePage);

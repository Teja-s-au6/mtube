import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlaylists, createPlaylist } from '../store/playlistReducer';
import { Redirect } from 'react-router-dom';
import { Card } from 'antd';
import { Form, Button } from 'react-bootstrap';
import { Spin } from 'antd';

const { Meta } = Card;

class PlaylistPage extends Component {
	state = {
		privacyStatus: '',
		title: '',
		description: ''
	};
	componentDidMount() {
		this.props.fetchPlaylists();
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const { privacyStatus, title, description } = this.state;
		const playlist = {
			status: {
				privacyStatus
			},
			snippet: {
				description,
				title
			}
		};
		//console.log(playlist)
		this.props.createPlaylist(playlist);
	};

	render() {
		//console.log(this.props.playlists)
		if (!this.props.user) return <Redirect to="/" />;
		return (
			<div>
        <Form onSubmit={this.handleSubmit} >
					<Form.Control
						type="text"
						name="title"
						placeholder="Enter your playlist title"
						value={this.state.title}
						onChange={this.handleChange}
					/>
          <br/>
          <br/>
					<Form.Control
						type="text"
						name="description"
						placeholder="Enter your playlist description"
						value={this.state.description}
						onChange={this.handleChange}
					/>
          <br/>
          <br/>
					<Form.Control as="select" name="privacyStatus" onChange={this.handleChange} value={this.state.privacyStatus} custom>
						<option value="" disabled>
							Choose a status
						</option>
						<option value="public">Public</option>
						<option value="unlisted">Unlisted</option>
						<option value="private">Private</option>
					</Form.Control>
          <br/>
          <br/>
					<Button type="submit" value="Create Playlist" variant="primary" >Create Playlist</Button>
				</Form>
        <br/>
        <br/>
        <h1>Your Playlists</h1>
				{this.props.playlists ? (
					this.props.playlists.items.map((playlist, index) => (
						<div key={index}>
							<Card.Grid style={{ width: '25%' }}>
								<Card
									style={{ width: 360, height: 350 }}
									cover={<img alt="example" src={playlist.snippet.thumbnails.high.url} />}
								>
									<Meta title={playlist.snippet.title} description={playlist.snippet.channelTitle} />
								</Card>
							</Card.Grid>
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
			</div>
		);
	}
}

const mapStateToProps = (storeState) => {
	return {
		user: storeState.features.users.user,
		playlists: storeState.features.playlists.playlists
	};
};

export default connect(mapStateToProps, { fetchPlaylists, createPlaylist })(PlaylistPage);

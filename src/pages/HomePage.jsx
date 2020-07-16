import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllVideos } from '../store/videoReducer';
import Videos from '../components/Videos';

class HomePage extends Component {
    componentDidMount() {
        this.props.fetchAllVideos()
    }
    render () {
        if(!this.props.user)  return <Redirect to="/login" /> 
        return this.props.videos ? <Videos videos={this.props.videos.items} /> : <h1>Loading...</h1>
    }
}

const mapStateToProps = storeState => {
	return {
        user: storeState.features.users.user,
        videos: storeState.features.videos.videos
	}
}

export default connect(mapStateToProps, {fetchAllVideos})(HomePage);
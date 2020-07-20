import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTrendingVideos,nullify } from '../store/videoReducer';
import Videos from '../components/Videos';

class TrendingPage extends Component {
    componentDidMount() {
        this.props.nullify()
        this.props.fetchTrendingVideos()
    }
    render () {
        if(!this.props.user)  return <Redirect to="/" /> 
        return this.props.videos ? <Videos videos={this.props.videos.items} /> : <h1>Loading...</h1>
    }
}

const mapStateToProps = storeState => {
	return {
        user: storeState.features.users.user,
        videos: storeState.features.videos.videos
	}
}

export default connect(mapStateToProps, {fetchTrendingVideos, nullify})(TrendingPage);

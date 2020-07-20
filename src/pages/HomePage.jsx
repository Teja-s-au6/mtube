import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllVideos, nullify } from '../store/videoReducer';
import Videos from '../components/Videos';

class HomePage extends Component {
    componentDidMount() {
        this.props.nullify()
        this.props.fetchAllVideos()
    }

    handleClick = () => {   
        this.props.fetchAllVideos(this.props.videos.nextPageToken)
    }
    handleClick1 = () => {   
        this.props.fetchAllVideos(this.props.videos.prevPageToken)
    }
    render () {
        if(!this.props.user)  return <Redirect to="/" /> 
        return this.props.videos ? 
        <>
        <Videos videos={this.props.videos.items} />
        <button onClick={this.handleClick}>Next page</button>
        {this.props.videos.prevPageToken ?
            <>
            <button onClick={this.handleClick1}>prev page</button>
             </>
              : null }
        </>
        : <h1>Loading...</h1>
   
    }
}

const mapStateToProps = storeState => {
	return {
        user: storeState.features.users.user,
        videos: storeState.features.videos.videos
	}
}

export default connect(mapStateToProps, {fetchAllVideos, nullify})(HomePage);

import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSearchVideos } from '../store/videoReducer';
import Videos from '../components/Videos';

class SearchResultPage extends Component {
    componentDidMount() {
        const searchQuery = this.props.match.params.searchQuery
        console.log(searchQuery)
        this.props.fetchSearchVideos({searchQuery: searchQuery})
    }

    componentDidUpdate(prevProps) {
        const prevSearchQuery = prevProps.match.params.searchQuery
        const newSearchQuery = this.props.match.params.searchQuery
        if(prevSearchQuery !== newSearchQuery) {
            this.props.fetchSearchVideos({searchQuery: newSearchQuery})
        }
    }

    handleClick = () => {
        const searchQuery = this.props.match.params.searchQuery
        this.props.fetchSearchVideos({searchQuery: searchQuery, pageId : this.props.videos.nextPageToken})
    }
    handleClick1 = () => {   
        const searchQuery = this.props.match.params.searchQuery
        this.props.fetchSearchVideos({searchQuery: searchQuery, pageId : this.props.videos.prevPageToken})
    }
    render () {
        if(!this.props.user)  return <Redirect to="/" /> 
        return this.props.videos ? 
        <>
        <Videos videos={this.props.videos.items} mode="search" />
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

export default connect(mapStateToProps, {fetchSearchVideos})(SearchResultPage);

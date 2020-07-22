import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSearchVideos } from '../store/videoReducer';
import Videos from '../components/Videos';
import { Spin } from 'antd';

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
        : <div style={{  
            textAlign: "center",
            borderRadius: 4,
            marginBottom: 20,
            padding: "30px 50px",
            margin: "500px 0"
            }} >
        <Spin size="large" />
      </div>
   
    }
}

const mapStateToProps = storeState => {
	return {
        user: storeState.features.users.user,
        videos: storeState.features.videos.videos
	}
}

export default connect(mapStateToProps, {fetchSearchVideos})(SearchResultPage);

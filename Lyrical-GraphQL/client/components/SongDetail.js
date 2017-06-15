import React, {Component} from 'react';
import {graphql} from  'react-apollo';
import fetchSongQuery from '../queries/fetchSong';
import {Link} from 'react-router';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {

  render() {
    const {loading, song} = this.props.data;
    if(loading) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Link to='/'>Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics}/>
        <LyricCreate songId={song.id}/>
      </div>
    );
  }
}


export default graphql(fetchSongQuery, {
  options: (props) => {
    return {variables: { id: props.params.id}}
  }
})(SongDetail);

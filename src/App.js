import React, { Component } from 'react';
import ArtistDescription from './components/ArtistDescription';
import NotFound from './components/NotFound';
import SearchBar from './components/SearchBar';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: 'prince',
      method: 'getInfo',
      key: '94815164058d345ac89d834b6c7c69c2',
      error: null,
      isLoaded: false,
      artistResult: {},
      artistAlbums: {}
    }
  }

  componentDidMount() {
    this.artistSearch();
  }

  artistSearch = () => {
      fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.${this.state.method}&artist=${this.state.query}&limit=1&api_key=${this.state.key}&format=json`)
      .then(result => result.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            artistResult: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
          console.log(Response.ok);
        }
      )
  }

  getAlbums = () => {
    fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${this.state.query}&limit=1&api_key=${this.state.key}&format=json&limit=3`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            artistAlbums: result
          })
        }
      )
      console.log(this.state.artistAlbums)
  }

  render() {

    const {isLoaded, error} = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }
     
    else if (!isLoaded) {
      return <div>Loading...</div>
    }
     
    else if (this.state.artistResult.artist === undefined) {
      return (
        <div>
        <SearchBar 
          query={this.state.query}
          change={(e) => this.setState({ query: e.target.value })}
          submit={(e) => {e.preventDefault(); this.artistSearch()}}/>
          <NotFound/>
        </div>
      )
    }
    else {
      return (
        <div>

          <SearchBar 
          query={this.state.query}
          change={(e) => this.setState({ query: e.target.value })}
          submit={(e) => {e.preventDefault(); this.artistSearch()}}/>

          <button onClick={() => this.getAlbums()}>Get albums!</button>

          <ArtistDescription 
          artist={this.state.artistResult.artist.name}
          summary={this.state.artistResult.artist.bio.summary}
          image={this.state.artistResult.artist.image[4]['#text']}/>

        </div>
      );
    }
  }
}

export default App;

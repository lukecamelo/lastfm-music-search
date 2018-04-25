import React, { Component } from 'react';
import ArtistDescription from './components/ArtistDescription';
import NotFound from './components/NotFound';
import SearchBar from './components/SearchBar';
import TopAlbums from './components/TopAlbums';

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
      showAlbums: true,
      artistResult: {},
      artistAlbums: {}
    }
  }

  componentDidMount() {
    this.artistSearch();
    this.getAlbums();
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
      .then(this.getAlbums)
  }

  getAlbums = () => {
    fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${this.state.query}&api_key=${this.state.key}&format=json&limit=3`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            artistAlbums: result
          })
        }
      )
      console.log(this.state.artistAlbums.topalbums)
  }

  albumToggle = () => {
    if (this.state.showAlbums === false) {
      this.setState({
        showAlbums: true
      })
    }
    else {
      this.setState({
        showAlbums: false
      })
    }
  }

  render() {

    const {isLoaded, error} = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }
     
    else if (!isLoaded) {
      return <div className='Loading'><h1>Loading...</h1></div>
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

          <button className='AlbumButton' onClick={() => this.albumToggle()}>Show albums!</button>

          <ArtistDescription 
          artist={this.state.artistResult.artist.name}
          summary={this.state.artistResult.artist.bio.summary}
          image={this.state.artistResult.artist.image[4]['#text']}/>

          {(this.state.showAlbums === true && this.state.artistAlbums.topalbums !== undefined) ? 
            <TopAlbums 
            title={this.state.artistAlbums.topalbums.album[0].name}
            art={this.state.artistAlbums.topalbums.album[0].image[3]['#text']}
            art2={this.state.artistAlbums.topalbums.album[1].image[3]['#text']} /> 
            : null }

        </div>
      );
    }
  }
}

export default App;

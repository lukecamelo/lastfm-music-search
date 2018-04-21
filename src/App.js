import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      artistAlbums: []
    }
  }

  componentDidMount() {
    fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=cher&api_key=94815164058d345ac89d834b6c7c69c2&format=json`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            artistAlbums: result.topalbums.album
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const {isLoaded, artistAlbums, error} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <ul>
          {artistAlbums.map(album => (
            <li key={album.name}>
              {album.name} <br/>
              {album.playcount} <br/>
              {album.artist.name} <br/>
            </li>
          ))}
        </ul>
      );
    }
    // return (
    //   <div className="App">
    //     <h1>Lastfm Music Search!</h1>
    //   </div>
    // );
  }
}

export default App;

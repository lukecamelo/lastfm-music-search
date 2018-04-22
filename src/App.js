import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.searchQuery = React.createRef();

    this.state = {
      apiCall: 'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=prince&api_key=94815164058d345ac89d834b6c7c69c2&format=json',
      error: null,
      isLoaded: false,
      artistAlbums: []
    }
  }

  componentDidMount() {
    fetch(this.state.apiCall)
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

  artistSearch(event) {
    event.preventDefault();
    console.log('you searched!');
    const query = this.searchQuery.value;
    this.setState({
      apiCall: `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${query}&api_key=94815164058d345ac89d834b6c7c69c2&format=json`
    });
  }

  render() {

    const {isLoaded, artistAlbums, error} = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }
     
    else if (!isLoaded) {
      return <div>Loading...</div>
    }
     
    else {
      return (
        <div>
          <form action="" onSubmit={(e) => this.artistSearch(e)}>
            <input type="text" ref={this.searchQuery} />
          </form>
          <ul>
            {artistAlbums.map(album => (
              <li key={album.name}>
                <img src={`${album.image[2]['#text']}`} alt='album'/> <br/>
                {album.playcount} <br/>
                {album.artist.name} <br/>
              </li>
            ))}
          </ul>
        </div>
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

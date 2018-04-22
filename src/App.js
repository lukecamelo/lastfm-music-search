import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: 'prince',
      // apiCall: 'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=prince&api_key=94815164058d345ac89d834b6c7c69c2&format=json',
      error: null,
      isLoaded: false,
      artistAlbums: []
    }
  }

  componentDidMount() {
    this.artistSearch();
  }

  artistSearch = () => {
    fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${this.state.query}&limit=10&api_key=94815164058d345ac89d834b6c7c69c2&format=json`)
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

  // artistSearch(event) {
  //   event.preventDefault();
  //   // const query = this.searchQuery.value;
  //   this.setState({
  //     apiCall: `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${this.state.query}&api_key=94815164058d345ac89d834b6c7c69c2&format=json`
  //   });
  //   console.log(this.state.query);
  // }

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
          <form action="" onSubmit={(e) => {e.preventDefault(); this.artistSearch()}}>
            <input type="text" value={this.state.query} onChange={(e) => this.setState({ query: e.target.value })} />
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

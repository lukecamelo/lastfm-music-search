import React, { Component } from 'react';
import ArtistDescription from './components/ArtistDescription';

import Fade from 'react-reveal';
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
      artistResult: {}
    }
  }

  componentDidMount() {
    this.artistSearch();
  }

  artistSearch = () => {
    fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.${this.state.method}&artist=${this.state.query}&limit=1&api_key=${this.state.key}&format=json`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            artistResult: result
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

  render() {

    const {isLoaded, artistResult, error} = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }
     
    else if (!isLoaded) {
      return <div>Loading...</div>
    }
     
    else if (this.state.artistResult.artist === undefined) {
      return (
        <div>
          <form action="" onSubmit={(e) => {e.preventDefault(); this.artistSearch()}} className='searchBar'>
            <input type="text" value={this.state.query} onChange={(e) => this.setState({ query: e.target.value })} />
          </form>
          <h1>sorry, nothing to see here!</h1>
        </div>
      )
    }
    else {
      return (
        <div>
          <form action="" onSubmit={(e) => {e.preventDefault(); this.artistSearch()}} className='searchBar'>
            <input type="text" value={this.state.query} onChange={(e) => this.setState({ query: e.target.value })} />
          </form>
          
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

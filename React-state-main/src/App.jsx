import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: 'Jane Doe',
        bio: 'A passionate software developer with a love for coding.',
        imgSrc: '../../public/john.webp',
        profession: 'Software Engineer'
      },
      shows: false,
      interval: 0,
      mountedAt: null
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.setState({ mountedAt: Date.now() });
    this.intervalId = setInterval(() => {
      this.setState({ interval: Math.floor((Date.now() - this.state.mountedAt) / 1000) });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow() {
    this.setState(prevState => ({ shows: !prevState.shows }));
  }

  render() {
    const { Person, shows, interval } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to React State</h1>
        </header>
        <button onClick={this.toggleShow} className="toggle-button">
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div className="profile-card">
            <img src={Person.imgSrc} alt={Person.fullName} className="profile-img" />
            <h2>{Person.fullName}</h2>
            <p>{Person.bio}</p>
            <h3>{Person.profession}</h3>
          </div>
        )}
        <footer className="App-footer">
          <p>Time since last mounted: {interval} seconds</p>
        </footer>
      </div>
    );
  }
}

export default App;
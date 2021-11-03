import React, { Component } from 'react';
import axios from 'axios';

class ListView extends Component {
  state = {
    list: [],
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      this.setState({ list: response.data });
      console.log('arrived');
      console.log(this.state.list);
    });
  }

  cleanContributor = (name) => {
    if (name === undefined) {
      return name;
    } else {
      let namecleaned = '';
      for (let i = 0; i < name.length; i++) {
        if (name[i] === '<') {
          return namecleaned;
        } else {
          namecleaned += name[i];
        }
      }
      return namecleaned;
    }
  };

  render() {
    return (
      <div>
        <div className="ListBeers">
          <form method="GET" action="/search">
            <input name="q" type="text"></input>
            <button>Submit</button>
          </form>
          {this.state.list.map((beer) => (
            <div key={beer._id}>
              <a href={'/beer/' + beer.name} alt="link to beer details">
                <div>
                  <img src={beer.image_url} alt="logo of beer"></img>
                </div>
                <h1>{beer.name}</h1>
                <h2>{beer.tagline}</h2>
                <h3>{this.cleanContributor(beer.contributed_by)}</h3>
              </a>
            </div>
          ))}
        </div>
        <div>hello</div>
      </div>
    );
  }
}

export default ListView;

import React, { Component } from 'react';
import { randomBeer } from '../services/apibeer';

class RandomView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null,
    };
  }

  componentDidMount() {
    this.loadBeerDetail();
  }

  // If state or props of component changes,
  // component gets rerendered and componentDidUpdate is executed
  componentDidUpdate(previousState) {
    if (previousState === this.state) {
      this.loadBeerDetail();
    }
  }

  loadBeerDetail() {
    // // listAllBeers(this.props.match.params.number).then((beer) => {
    // listAllBeers.filter(this.props.match.params.number).then((beer) => {
    //   this.setState({ beer });
    // });

    randomBeer()
      .then((beer) => {
        this.setState({
          beer: beer,
        });
        console.log('this.state.beer');
        console.log(this.state.beer);
      })
      .catch((error) => {
        console.log(error);
        alert('Something went wrong loading the beer!.');
      });
  }

  cleanContributor = (name) => {
    let namecleaned = '';
    for (let i = 0; i < name.length; i++) {
      if (name[i] === '<') {
        return namecleaned;
      } else {
        namecleaned += name[i];
      }
    }
    return namecleaned;
  };

  render() {
    return (
      (this.state.beer && (
        <div>
          <img src={this.state.beer.image_url} alt="beer logo" />
          <div>
            <h1>{this.state.beer.name}</h1>
            <h2>{this.state.beer.tagline}</h2>
            <p>First Brewed: {this.state.beer.first_brewed}</p>
            <p>Description: {this.state.beer.description}</p>
            <p>
              Contributed by:{' '}
              {this.cleanContributor(this.state.beer.contributed_by)}
            </p>
          </div>
        </div>
      )) || <h1>Loading...</h1>
    );
  }
}

export default RandomView;

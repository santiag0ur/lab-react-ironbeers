import React, { Component } from 'react';
import { listAllBeers } from '../services/apibeer';

class DetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null,
      count: Math.random(),
    };
  }

  componentDidMount() {
    this.loadBeerDetail();
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.match.params.name !== this.props.match.params.name) {
      this.loadBeerDetail();
    }
  }

  loadBeerDetail() {
    listAllBeers()
      .then((list) => {
        this.setState({ list });
        console.log('this.state.list');
        console.log(this.state.list);
        console.log('this.props.params.name');
        console.log(this.props.match.params.name);
        const beerForDisplay = this.state.list.filter((beer) => {
          console.log('beer.name');
          console.log(beer.name);
          if (beer.name === this.props.match.params.name) {
            return beer;
          } else {
            return '';
          }
        });
        this.setState({
          beer: beerForDisplay,
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
      (this.state.beer && (
        <div>
          <img src={this.state.beer[0].image} alt="beer logo" />
          <div>
            <h1>{this.state.beer[0].name}</h1>
            <h2>{this.state.beer[0].tagline}</h2>
            <p>First Brewed: {this.state.beer[0].first_brewed}</p>
            <p>Description: {this.state.beer[0].description}</p>
            <p>
              Contributed by:{' '}
              {this.cleanContributor(this.state.beer[0].contributed)}
            </p>
          </div>
        </div>
      )) || <h1>Loading...</h1>
    );
  }
}

export default DetailView;

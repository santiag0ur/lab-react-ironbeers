import axios from 'axios';

export const listAllBeers = () => {
  return axios
    .get('https://ih-beers-api2.herokuapp.com/beers')
    .then((response) => {
      const data = response.data;
      const list = data.map((result) => {
        return {
          name: result.name,
          id: result._id,
          image: result.image_url,
          tagline: result.tagline,
          first_brewed: result.first_brewed,
          description: result.description,
          contributed: result.contributed_by,
        };
      });
      return list;
    });
};

export const randomBeer = () => {
  return axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
    .then((response) => {
      const beer = response.data;
      return beer;
    });
};

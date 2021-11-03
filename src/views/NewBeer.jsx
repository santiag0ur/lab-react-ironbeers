import React from 'react';

class NewBeerView extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      tagline: '',
      description: '',
      firstBrewed: '',
      brewersTips: '',
      atenuation: 0,
      contributed: '',
    };
  }

  handleChange = (event) => {
    const name = event.target.name;
    const type = event.target.type;
    let value =
      type === 'number' ? event.target.valueAsNumber : event.target.value;
    if (Number.isNaN(value)) value = '';
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <div>New Beer</div>
        <form
          method="POST"
          action="https://ih-beers-api2.herokuapp.com/beers/new"
        >
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Name"
          />
          <input
            type="text"
            name="tagline"
            value={this.state.tagline}
            onChange={this.handleChange}
            placeholder="Tagline"
          />
          <textarea
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="Description"
          ></textarea>
          <input
            type="text"
            name="firstBrewed"
            value={this.state.firstBrewed}
            onChange={this.handleChange}
            placeholder="First Brewed"
          />
          <input
            type="text"
            name="brewersTips"
            value={this.state.brewersTips}
            onChange={this.handleChange}
            placeholder="Brewers Tips"
          />
          <input
            type="number"
            name="atenuation"
            value={this.state.atenuation}
            onChange={this.handleChange}
            placeholder="0"
          />
          <input
            type="text"
            name="contributed"
            value={this.state.contributed}
            onChange={this.handleChange}
            placeholder="Contributed By"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewBeerView;

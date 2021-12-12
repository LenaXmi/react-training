import React, { Component } from 'react';
import shortid from 'shortid';
class Form extends Component {
  state = {
    name: '',
    surname: '',
    experience: 'junior',
    license: false,
  };

  nameInputId = shortid.generate();
  surnameInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleLicenseChange = e => {
    console.log(e.currentTarget.checked);
    this.setState({ license: e.currentTarget.checked });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };
  reset = () => {
    this.setState({ name: '', surname: '' });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Name
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              id={this.nameInputId}
            />
          </label>
          <label htmlFor={this.surnameInputId}>
            Surname
            <input
              name="surname"
              type="text"
              value={this.state.surname}
              onChange={this.handleChange}
              id={this.surnameInputId}
            />
          </label>
          <p>Your level:</p>
          <label htmlFor="">
            <input
              type="radio"
              name="experience"
              value="junior"
              onChange={this.handleChange}
              checked={this.state.experience === 'junior'}
            />
            Junior
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="experience"
              value="middle"
              onChange={this.handleChange}
              checked={this.state.experience === 'middle'}
            />
            Middle
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="experience"
              value="senior"
              onChange={this.handleChange}
              checked={this.state.experience === 'senior'}
            />
            Senior
          </label>
          <label>
            <input
              type="checkbox"
              name="license"
              checked={this.state.license}
              onChange={this.handleLicenseChange}
            />
            I agree
          </label>

          <button type="submit" disabled={!this.state.license}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;

import { Component } from 'react';


export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChange = evt => {
 
    this.setState({ [evt.target.name]: evt.target.value });
  };

  onSubmit = evt => {
    evt.preventDefault();
    this.props.createContact({
      name: this.state.name,
      number: this.state.number,
    });

    evt.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            required
            onChange={this.onChange}
            pattern="^[a-zA-Z]+$"
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            required
            onChange={this.onChange}
            pattern="^[ 0-9]+$"
          />
        </label>
        <button>add contact</button>
      </form>
    );
  }
}
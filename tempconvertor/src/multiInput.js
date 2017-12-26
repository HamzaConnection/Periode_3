import React from 'react';
import ReactDOM from 'react-dom';

export default class Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: true,
        numberOfGuests: 2
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
     
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
        /*
    name bliver til object key det er det samme som 
    var partialState = {};
    partialState[name] = value;
    this.setState(partialState);
        */
      });
    }
    

  
    render() {
      return (
        <form>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
              <p>IsGoing: {this.state.isGoing.toString()}</p>
              <p>Numbers of Guests{this.state.numberOfGuests}</p>
          </label>
        </form>
      );
    }
  }
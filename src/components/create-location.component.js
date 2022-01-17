import React, { Component } from 'react';
import axios from 'axios';

export default class CreateLocation extends Component {
  constructor(props) {
    super(props);

    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      locationName: ''
    }
  }

  onChangeLocation(e) {
    this.setState({
      locationName: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const location = {
      locationName: this.state.locationName
    }

    console.log(location);

    axios.post('http://localhost:5000/location/add', location)
      .then(res => console.log(res.data));

    this.setState({
      locationName: ''
    })

    window.location = '/create';
  }

  render() {
    return (
      <div>
        <h3>Create New Warehouse</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Warehouse Name: </label>
            <input  type="text"
                required
         
                className="form-control"
                value={this.state.locationName}
                onChange={this.onChangeLocation}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Warehouse" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
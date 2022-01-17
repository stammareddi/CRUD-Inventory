import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Item = props => (
  <tr>
    <td>{props.k.locationName}</td>
    <td>{props.k.itemName}</td>
    <td>{props.k.itemSummary}</td>
    <td>{props.k.itemType}</td>
    <td>{props.k.itemCost}</td>
    <td>{props.k.itemStock}</td>


    <td>
      <Link to={"/edit/"+props.k._id}>edit</Link> | <a href="#" onClick={() => { props.deleteItem(props.k._id) }}>delete</a>
    </td>
  </tr>
)

export default class ItemList extends Component {
  constructor(props) {
    super(props);

    this.deleteItem = this.deleteItem.bind(this)

    this.state = {locations: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ locations: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteItem(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      locations: this.state.locations.filter(el => el._id !== id)
    })
  }

  itemList() {
    return this.state.locations.map(currentitem => {
      return <Item k={currentitem} deleteItem={this.deleteItem} key={currentitem._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Inventory Items</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Location</th>
              <th>Item Name</th>
              <th>Item Summary</th>
              <th>Item Type</th>
              <th>Item Cost</th>
              <th>Item Stock</th>
              <th></th>

            </tr>
          </thead>
          <tbody>
            { this.itemList() }
          </tbody>
        </table>
      </div>
    )
  }
}
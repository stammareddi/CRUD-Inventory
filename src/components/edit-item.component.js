import React, { Component } from 'react';
import axios from 'axios';

export default class EditItem extends Component {
  constructor(props) {
    super(props);

    this.onChangeLocationName = this.onChangeLocationName.bind(this);
    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeItemSummary = this.onChangeItemSummary.bind(this);
    this.onChangeItemType = this.onChangeItemType.bind(this);
    this.onChangeItemCost = this.onChangeItemCost.bind(this);
    this.onChangeItemStock = this.onChangeItemStock.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      locationName: '',
      itemName:"",
      itemSummary:"",
      itemType:"",
      itemCost:0,
      itemStock:0,
      locations:[]
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
      .then(response => {
        this.setState({

          locationName: response.data.locationName,
          itemName: response.data.itemName,
          itemSummary: response.data.itemSummary,
          itemType: response.data.itemType,
          itemCost: response.data.itemCost,
          itemStock: response.data.itemStock,


        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/location/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            locations: response.data.map(loc => loc.locationName),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeLocationName(e) {
    this.setState({
      locationName: e.target.value
    })
  }

  
  onChangeItemName(e) {
    this.setState({
      itemName: e.target.value
    })

  }onChangeItemSummary(e) {
    this.setState({
      itemSummary: e.target.value
    })

  }onChangeItemType(e) {
    this.setState({
      itemType: e.target.value
    })

  }onChangeItemCost(e) {
    this.setState({
      itemCost: e.target.value
    })

  }onChangeItemStock(e) {
    this.setState({
      itemStock: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const editItem = {
      locationName: this.state.locationName,
      itemName:this.state.itemName,
      itemSummary:this.state.itemSummary,
      itemType:this.state.itemType,
      itemCost:this.state.itemCost,
      itemStock:this.state.itemStock
    }

    console.log(editItem);

    axios.post('http://localhost:5000/exercises/update/' + this.props.match.params.id, editItem)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Item </h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Location Name: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.locationName}
              onChange={this.onChangeLocationName}>
              {
                this.state.locations.map(function(loc) {
                  return <option 
                    key={loc}
                    value={loc}>{loc}
                    </option>;
                })
              }
          </select>
        </div>
      
        <div className="form-group"> 
          <label>Item name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.itemName}
              onChange={this.onChangeItemName}
              />
        </div>

        <div className="form-group"> 
          <label>Item Summary: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.itemSummary}
              onChange={this.onChangeItemSummary}
              />
        </div>

        <div className="form-group"> 
          <label>Item Type: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.itemType}
              onChange={this.onChangeItemType}
              />
        </div>

        <div className="form-group"> 
          <label>Item Cost: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.itemCost}
              onChange={this.onChangeItemCost}
              />
        </div>

        <div className="form-group"> 
          <label>Item Stock: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.itemStock}
              onChange={this.onChangeItemStock}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Item" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
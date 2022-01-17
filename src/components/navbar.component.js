import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Inventory  Tracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Item List</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Add New Item</Link>
          </li>
          <li className="navbar-item">
          <Link to="/location" className="nav-link">Add New Warehouse</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
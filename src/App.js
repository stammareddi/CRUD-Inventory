import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ItemList from "./components/item-list.component";
import EditItem from "./components/edit-item.component";
import CreateItem from "./components/create-item.component";
import CreateLocation from "./components/create-location.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <div className="container-fluid">

      <Route path="/" exact component={ItemList} />
      <Route path="/edit/:id" component={EditItem} />
      <Route path="/create" component={CreateItem} />
      <Route path="/location" component={CreateLocation} />
      </div>
    </Router>
  );
}

export default App;

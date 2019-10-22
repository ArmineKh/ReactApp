import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddNewContacts from './components/AddNewContacts';
import './App.css';

function App() {
  

  return (
    <div className="App">


<div className="body">
  <button className="logOutDiv"><span className="fa fa-sign-out"></span><p>Log Out</p></button>
  <div className="ellipse">
    <h2 className="je">JE</h2>
    <div className="name">
      <h3 > Jorge Edwards </h3>
    </div>
    <div className="rectangle">
      <h3>Jenny Alexander </h3>
    </div>
    <div className="rectangle">
      <h3>Morris Nguyen </h3>
    </div>
    <div className="rectangle">
      <h3>Eduardo Watson </h3>
    </div>
    <div className="rectangle">
      <h3>Norma Fisher </h3>
    </div>
    <div className="rectangle">
      <h3>Kyle Warren </h3>
    </div>
    <div className="rectangle">
      <h3>Ann Richards </h3>
    </div>
    <div className="rectangle">
      <h3>Regina Cooper </h3>
    </div>
    <div className="rectangle">
      <h3>Soham Steward </h3>
    </div>
    <Router>
    <div>
    <div className="rectangle rectangleAdd">
      <h3><Link to"/addNewContact"> + Add New Contact </Link> </h3>
    </div>

    <Switch>
          <Route path="/addNewContact">
            <AddNewContact />
          </Route>
    </Switch>
    </div>
    </Router>
    
  </div>
</div>
    </div>
    
  );
}
function AddNewContact() {
  return (
  <div className="addNewContact">
    <h3>Add New Contact</h3>
    <input type="text" name="addNewContact" placeholder="Enter contact’s full name"></input>
    <div className="rectangle add">
      <h5>Add to my List </h5>
    </div>
    </div>
    );
}

export default App;

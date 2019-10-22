import React from 'react';

function AddNewContacts(){
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

export default AddNewContacts;
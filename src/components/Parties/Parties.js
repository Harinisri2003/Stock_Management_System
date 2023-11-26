import React, { useState } from 'react';
import './Parties.css';

const PartiesPage = () => {
  const [parties, setParties] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [partyDetails, setPartyDetails] = useState({
    
    name: '',
    contactPerson: '',
    address: '',
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPartyDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleAddParty = () => {
    
    setParties((prevParties) => [...prevParties, partyDetails]);
    
    setPartyDetails({
      name: '',
      contactPerson: '',
      address: '',
    });
    
    setShowForm(false);
  };

  return (
    <div className="parties-page">
      <h2>Parties</h2>
      <button className='addparty' onClick={() => setShowForm(true)}>Add Party</button>

      {showForm && (
        <div className="party-form">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={partyDetails.name}
            onChange={handleInputChange}
          />
          <label>Contact Person:</label>
          <input
            type="text"
            name="contactPerson"
            value={partyDetails.contactPerson}
            onChange={handleInputChange}
          />
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={partyDetails.address}
            onChange={handleInputChange}
          />
          
          <button className='addparty' onClick={handleAddParty}>Add Party</button>
        </div>
      )}

      <div className="party-list">
        <h3>Added Parties</h3>
        <ul>
          {parties.map((party, index) => (
            <li key={index}>
              <strong>{party.name}</strong> - {party.contactPerson}, {party.address}
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PartiesPage;

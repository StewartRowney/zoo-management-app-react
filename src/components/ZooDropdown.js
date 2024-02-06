import React, { useEffect, useState } from 'react';

const ZooDropdown = ({ selectedZoo, onZooChange }) => {
  const [zoos, setZoos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/zoos')
      .then(response => response.json())
      .then(data => setZoos(data))
      .catch(error => console.error('Error fetching zoos:', error));
  }, []);

  return (
    <div>
      <label>Zoo:</label>
      <select
        name="zooId"
        value={selectedZoo}
        onChange={(e) => onZooChange(e.target.value)}
      >
        <option value="">Select a Zoo</option>
        {zoos.map((zoo) => (
          <option key={zoo.id} value={zoo.id}>
            {zoo.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ZooDropdown;

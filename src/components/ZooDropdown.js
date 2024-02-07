import React, { useEffect, useState } from 'react';
import getAllItems from '../apis/getApis';

const ZooDropdown = ({ selectedZoo, onZooChange }) => {
  const [zoos, setZoos] = useState([]);

  useEffect(() => {
    getAllItems('zoos')
    .then(fetchedItems => {
      if (fetchedItems)
        setZoos(fetchedItems);
      else
        console.error("Unexpected result returned from getZoos: ", fetchedItems);
  })
  .catch(e => {console.error("Error calling getZoos: ", e)}); 
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

const addItem = (type, collection, item, setCollection) => {
    const response = fetch('http://localhost:8080/' + type, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      })
      .then(response => response.json())
          .then(data => {
              console.log('Successfully added ' + data.name);
              setCollection(...collection, data);
          })
          .catch(error => console.error('Error adding: ' + type + '  ', error));
  
      if (!response.ok) {
        throw new Error(`Failed to submit form: ${response.status} ${response.statusText}`);
      }
  };

  export default addItem;
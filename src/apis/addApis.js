const addItem = (type, item) => {
    return fetch('http://localhost:8080/' + type, {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify(item),
        })
        .then(response => response.json())
        .then(data => {
              console.log('Successfully added ' + data.name);
              return data
        })
        .catch(error => console.error('Error fetching: ' + type, error));
  };

  export default addItem;
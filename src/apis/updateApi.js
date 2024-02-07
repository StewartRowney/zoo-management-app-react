const updateItem = (type, item) => {
    return fetch('http://localhost:8080/' + type, {
        method: 'PUT',
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify(item),
        })
        .then(response => response.json())
        .then(data => {
              console.log('Successfully updated ' + data.name);
              return data
        })
        .catch(error => console.error('Error updating: ' + type, error));
  };

  export default updateItem;
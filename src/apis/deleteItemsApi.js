
const deleteItems = (type, items) => {
    return fetch('http://localhost:8080/' + type, {
        method: 'DELETE',
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify(items),
        })
        .then(() => {
          console.log("items deleted");
          return true;})
        .catch(error => console.error('Error deleting items:', error));
  };

  export default deleteItems;
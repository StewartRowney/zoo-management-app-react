
const deleteItem = (type, item) => {
    return fetch('http://localhost:8080/' + type + '/' + item.id, {method: 'DELETE'})
        .then(() => {
          console.log(item.name + " deleted");
          return true;})
        .catch(error => console.error('Error deleting ' + item.name + ':', error));
  };

  export default deleteItem;
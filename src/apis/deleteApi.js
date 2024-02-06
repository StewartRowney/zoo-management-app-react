


const deleteItem = (type, collection, item, setCollection) => {
    fetch('http://localhost:8080/' + type + '/' + item.id, {method: 'DELETE'})
        .then(() => {
          console.log(item.name + " deleted");
          setCollection(collection.filter(i => i !== item));})
        .catch(error => console.error('Error deleting ' + item.name + ':', error));
  };

  export default deleteItem;
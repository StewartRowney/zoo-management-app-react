const updateItem = (type, item, setCollection) => {
    fetch('http://localhost:8080/' + type + '/' + item.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item) 
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to update ' + item.name);
        }
        console.log(item.name + " updated");
        setCollection(prevCollection => prevCollection.map(i => i.id === item.id ? item : i));
    })
    .catch(error => console.error('Error updating ' + item.name + ':', error));
};

export default updateItem;
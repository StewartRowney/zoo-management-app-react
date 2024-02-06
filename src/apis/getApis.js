
const getAllItems = (type, setCollection) => {
    fetch('http://localhost:8080/' + type)
    .then(response => response.json())
    .then(data => {
            console.log(data);
            setCollection(data);
    })
    .catch(error => console.error('Error fetching: ' + type, error));
};

export default getAllItems;
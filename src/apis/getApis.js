
const getAllItems = (type) => {
        return fetch('http://localhost:8080/' + type)
        .then(response => {
                    if(response.status === 200) {
                        return response.json();
                    } else {
                        console.error(`Response error in getAllItems: ${response.status}`);
                    }
                    })
                .catch(error => console.error('Error fetching: ' + type, error));
    }

export default getAllItems;
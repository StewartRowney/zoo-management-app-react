
const getAllItems = (type) => {
        return fetch('http://localhost:8080/' + type)
        .then(response => {
                    if(response.status === 200) {
                        return response.json();
                    } else {
                        console.error(`Respnose error in getNames: ${response.status}`);
                    }
                    })
                .catch(error => console.error('Error fetching: ' + type, error));
    } 


    // export function getAllItems(type) {
    //     const response = fetch('http://localhost:8080/' + type)
    //     return fetch(url, defaultOptions)
    //     .then(response => {
    //         if(response.status === 200) {
    //             return response.json();
    //         } else {
    //             console.error(`Respnose error in getNames: ${response.status}`);
    //         }
    //     }).catch((e) => console.error(`Error in getNames: ${JSON.stringify(e)}`));
    // }
    
    // const dataArray = fetch('http://localhost:8080/' + type)
    // .then(response => response.json())
    // .then(data => {
    //         console.log(data);
    // }) 
    // .catch(error => console.error('Error fetching: ' + type, error));

export default getAllItems;
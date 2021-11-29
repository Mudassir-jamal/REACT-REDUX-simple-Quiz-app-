


const getData = (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            dispatch({
                type : "dataFromApi",
                apidata : json
            })
        })
    
   

}


export {getData}
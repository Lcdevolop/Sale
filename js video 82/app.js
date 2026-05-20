const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
.then((data) => {   
    return data.json()
}) 
.then((datajson) =>{
    console.log(datajson);
})
.catch((err) => {
    console.log(err);
    
})
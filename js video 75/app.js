const request = new XMLHttpRequest()

request.addEventListener('readystatechange', () => {
    if (request.status === 200) {
        console.log(request, request.responseText);
    }else{
        console.log("Ma`lumot xato va topib bo`lmadi"); 
    }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
request.send()
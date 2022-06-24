const addIndicator = () => {
    let request = new XMLHttpRequest();

    
    request.open('POST','https://netology-slow-rest.herokuapp.com/upload.php');
    request.addEventListener('readystatechange', () => {
        console.log(request.onprogress)
    })

    
}

addIndicator()
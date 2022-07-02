const addIndicator = () => {
    const progress = document.getElementById('progress');

    const form = document.getElementById('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let xhr = new XMLHttpRequest();

        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

        xhr.send()

        xhr.onprogress = function (event) {
            progress.value = event.loaded;
        }
    })


}

addIndicator()
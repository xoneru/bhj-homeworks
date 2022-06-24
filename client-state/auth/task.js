const postAuth = () => {

    const login = document.getElementsByName('login')[0]
    const password = document.getElementsByName('password')[0]
    const button = document.getElementById('signin__btn')

    button.addEventListener('click', (event) => {
        event.preventDefault()

        const form = {
            login: login.value,
            password: password.value
        }

        return fetch('https://netology-slow-rest.herokuapp.com/auth.php',
            {
                method: 'POST',
                body: JSON.stringify(form)
            }).then(response => response.json())
            .then(res => console.log(res))
    })
}

postAuth()
let loader = document.getElementById('loader');

const getValute = () => {
    return fetch('https://netology-slow-rest.herokuapp.com')
    .then(response => {
        if(response.ok) {
            loader.classList.remove('loader_active')
            return response;
        }
    })
        .then(response => response.json())
}



const addValute = () => {

    let items = document.getElementById('items');

    console.log(items)
    getValute().then(value => {
        Object.entries(value.response.Valute).forEach(item => {
            const itemMain = document.createElement('div')
            itemMain.classList.add('item')

            const itemCode = document.createElement('div')
            itemCode.textContent = item[0]
            itemCode.classList.add('item__code')

            const itemValue = document.createElement('div')
            itemValue.textContent = item[1].Value;
            itemValue.classList.add('item__value')

            const itemCurrency = document.createElement('div')
            itemCurrency.textContent = item[1].Name;
            itemCurrency.classList.add('item__currency')

            itemMain.append(itemCode);
            itemMain.append(itemValue);
            itemMain.append(itemCurrency);

            items.append(itemMain);
        })
    })
}

addValute()
const check = () => {
    let inputs = document.getElementsByClassName('interest__check')

    console.log(inputs)

    let firstInput = inputs[0]

    let secondInput = inputs[3]

    firstInput.addEventListener('click', () => {
        inputs[1].checked = !inputs[1].checked
        inputs[2].checked = !inputs[2].checked
    })

    secondInput.addEventListener('click', () => {
        inputs[4].checked = !inputs[4].checked
        inputs[5].checked = !inputs[5].checked
    })


}

check()
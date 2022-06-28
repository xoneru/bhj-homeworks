const showChatWidget = () => {
    let chatWidget = document.getElementsByClassName('chat-widget')[0];

    chatWidget.addEventListener('click', () => {
        chatWidget.classList.add('chat-widget_active');
    })

    const messages = document.querySelector('.chat-widget__messages');

    let input = document.getElementById('chat-widget__input');

    const messagesList = [
        'Добрый день, До свидания!',
        'Где Ваша совесть?',
        'Кто тут?',
        'К сожалению, все операторы сейчас заняты'
    ]

    input.addEventListener('keydown', (event) => {

        let randomMessage = messagesList[Math.floor(Math.random() * messagesList.length)];

        let time = new Date().toLocaleTimeString();

        console.log(time);

        if (event.keyCode === 13) {
            messages.innerHTML += `
            <div class="message message_client">
            <div class="message__time">${time}</div>
            <div class="message__text">
                ${event.target.value}
                </div>
            </div>
            `;

            messages.innerHTML += `
            <div class="message">
            <div class="message__time">${time}</div>
            <div class="message__text">
                ${randomMessage}
                </div>
            </div>
            `;

            event.target.value = ''
        }
    })



}

showChatWidget()
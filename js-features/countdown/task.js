let count = document.getElementById('timer');
let count_textContent = +count.textContent;

let timer = () => {
    count_textContent = count_textContent - 1;
    if(count_textContent === -1) {
        count.textContent = '00:00:00';
        alert('Вы победили в конкурсе!');
        clearInterval(interval);
    }
    //Реализуйте таймер, отсчитывающий оставшееся время в формате hh:mm:ss
    let recordTime = (number) => {
        if (number < 10) {
            return '0' + number;
        }
        if (number >= 60) {
            if (number % 60 <10) {
                return '0' + number % 60;
            }
            return number % 60;
            }
            return number;
        }
        let hour = recordTime(Math.floor(count_textContent / 3600));
        let minutes = recordTime(Math.floor(count_textContent / 60));
        let seconds = recordTime(count_textContent);
        count.textContent =  hour + ':' + minutes + ':' + seconds;
    }
    let interval = setInterval(timer, 1000);
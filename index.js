const dd = document.querySelector('.dd');
const hh = document.querySelector('.hh');
const mm = document.querySelector('.mm');
const ss = document.querySelector('.ss');

const front = document.querySelectorAll('.front');

const updateCountdown = () => {
    let curr_day  = dd.dataset.value * 1;
    let curr_hour = hh.dataset.value * 1;
    let curr_min  = mm.dataset.value * 1;
    let curr_sec  = ss.dataset.value * 1;

    if (curr_sec > 0) {
        let sec_front = front[front.length - 1];
        sec_front.classList.add('flip');
        setTimeout(() => {
          sec_front.classList.remove('flip');
        }, 500);
        curr_sec -= 1;
    } else {
        curr_sec = 59;
        if (curr_min > 0) {
            let min_front = front[front.length - 2];
            min_front.classList.add('flip');
            setTimeout(() => {
                min_front.classList.remove('flip');
            }, 500);
            curr_min -= 1;
        } else {
            curr_min = 59;
            if (curr_hour > 0) {
                let hour_front = front[front.length - 3];
                hour_front.classList.add('flip');
                setTimeout(() => {
                    hour_front.classList.remove('flip');
                }, 500);
                curr_hour -= 1;
            } else {
                curr_hour = 23;
                if (curr_day > 0) {
                    let day_front = front[front.length - 4];
                    day_front.classList.add('flip');
                    setTimeout(() => {
                        day_front.classList.remove('flip');
                    }, 500);
                    curr_day -= 1;
                } else {
                    curr_day = 0;
                }
            }
        }
    }
    dd.dataset.value = curr_day;
    hh.dataset.value = curr_hour;
    mm.dataset.value = curr_min;
    ss.dataset.value = curr_sec;
    dd.innerHTML = curr_day < 10 ? '0' + curr_day : curr_day;
    hh.innerHTML = curr_hour < 10 ? '0' + curr_hour : curr_hour;
    mm.innerHTML = curr_min < 10 ? '0' + curr_min : curr_min;
    ss.innerHTML = curr_sec < 10 ? '0' + curr_sec : curr_sec;
};

setInterval(updateCountdown, 1000);

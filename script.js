const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

const target = "1 Jan 2021";
function countdown() {
    const targetDate = new Date(target);
    const currentDate = new Date();
    const totalseconds = (targetDate - currentDate) / 1000;


    const days = Math.floor((totalseconds / 3600 / 24))
    const hours = Math.floor((totalseconds / 3600 ) % 24)
    const minutes = Math.floor((totalseconds / 3600 / 60) % 60)
    const seconds = Math.floor((totalseconds) % 60)


    daysEl.innerHTML = timeFormater(days)
    hoursEl.innerHTML = timeFormater(hours)
    minutesEl.innerHTML = timeFormater(minutes)
    secondsEl.innerHTML = timeFormater(seconds)
    // const days]]

}
countdown()
function timeFormater(time) {
    return time < 10 ? `0${time}` : `${time}`
}
setInterval(countdown, 1000)
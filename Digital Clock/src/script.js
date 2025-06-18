const clock = document.querySelector('.time-display');

// ==> SetInterval function is running the program the time we have set like we have given 1sec or 1000ms 

setInterval(() => {
    let date = new Date();
    clock.innerText = date.toLocaleTimeString();
}, 1000);

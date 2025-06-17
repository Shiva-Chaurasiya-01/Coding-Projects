const colorMap ={
    yellow : "#EDFB52" ,  // Id of button 
    green : "#22FF22" ,
    red : "#FF1C1C" ,
    blue : "#27A5FF" ,
    default : "#000"
}

const buttons = document.querySelectorAll('.color-btn');
const body = document.querySelectorAll('body');
const resetBtn = document.querySelector('.reset-btn')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        document.body.style.backgroundColor = colorMap[button.id] ; // Checking id of each button 
    })
});

resetBtn.addEventListener( 'click' , () => {
        document.body.style.backgroundColor = colorMap.default ;
    });
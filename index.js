const searchInput = document.querySelector('.search');

const display = document.querySelector('.result');

const thanks = document.querySelector('.thanks');

// Normal Function thats work perfectly
// function show(){
//     display.innerHTML = this.value;
//     var self = this;
//     setTimeout(function(){        
//         thanks.innerHTML = `You have typed: ${self.value}`;
//     }, 1000);
// }

// const show = () => {
//     display.innerHTML = this.value;
// };

// searchInput.addEventListener('keyup', show);


//Arrow function not work for this
searchInput.addEventListener('keyup', () => {
    display.innerHTML = this.value;
});
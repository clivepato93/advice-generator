// API used https://api.adviceslip.com/

// Elements required from the DOM to make the app work
const adviceDiv = document.querySelector('.advice');
const dice = document.querySelector('.dice');

// Data in order to render the HTML from the API
function renderHTML(data){

    const id = data.id;
    const advice = data.advice;

    const html =  `
    <blockquote class="title">Advice #<span id="advice-id">${id}</span></blockquote>
    <blockquote class="text">${advice}</blockquote>`

    // replaces inner HTML with the following markup above
    adviceDiv.innerHTML = html;
}

/* 
function which takes in a Id (optional) then makes an API
call using  fetch then we get a promised returned back to us
in JSON format so we then convert to a object

*/
const getAdvice = function(id){

    let request = id?`https://api.adviceslip.com/advice/${id}`:`https://api.adviceslip.com/advice`;

    fetch(`${request}`).then(function (response) {
        return response.json();
    }).then(function (data) {
        // Destructing of object done here easier then doing data.slip
        const {slip} = data;
        // call to the render function 
        renderHTML(slip)        
    })
}

// initial call 
getAdvice(117);


// in order to generate more advice quotes
dice.addEventListener('click',function () {
   setTimeout(getAdvice,2000) 
})
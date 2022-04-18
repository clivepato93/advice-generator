
const main = document.querySelector('main');
const dice = document.querySelector('.dice');



function renderHTML(data){
    console.log(data.id, data.advice)
    const html =  `<p class="title">Advice #<span id="advice-id">${data.id}</span></p>
    <p class="text">${data.advice}</p>`
    main.insertAdjacentHTML('afterbegin',html)
}

const getAdvice = function(){
    fetch(`https://api.adviceslip.com/advice/${117}`).then(function (response) {
        
        console.log(response);
        return response.json();
    }).then(function (data) {
        const {slip} = data
        renderHTML(slip)
        console.log(slip)
        return slip
        
    })
}

console.log(getAdvice())

dice.addEventListener('click',function () {
    main.style.backgroundColor ='pink';
})
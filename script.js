

const getAdvice = function(){
    fetch(`	https://api.adviceslip.com/advice`).then(function (response) {
    
    console.log(response);
    return response.json();
    }).then(function (data) {
        const {slip} = data
        console.log(slip)
    })
}

getAdvice()
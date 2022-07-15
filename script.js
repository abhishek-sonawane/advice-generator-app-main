const apiUrl = 'https://api.adviceslip.com/advice'
const advice_num = document.querySelector('.advice-no')
const advice_output = document.querySelector('.advice-head')
const adviceBtn = document.querySelector('.new-quote')


async function getAdvice(){
    const response = await fetch(apiUrl);
    const data = await response.json()
    advice_num.innerText = "ADVICE #"+ data.slip.id;
    advice_output.innerText = data.slip.advice;
}


adviceBtn.addEventListener('click',getAdvice)

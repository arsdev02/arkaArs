let form = document.querySelector('#form')

let bot = {
    TOKEN:'5489509172:AAEMEGv-8OeJaOA6wsccBiCVv640Ii1nY8Y',
    chatID:'-684259397',
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    let message = document.querySelector('#inputName')
    let number = document.querySelector('#inputNumber')

    if(message.value.length>1 && number.value.length>8){

            const sendTelegram = `
            Имя: ${message.value} и телефон: ${number.value}
        `
        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${sendTelegram}`, {method: 'GET'})
        .then(response=>{
        alert('MESSEGE SUCCESS')
        }), error => {
            alert('MESSAGE ERROR')
        }
    }else{
        alert('вы ввели недостаточно символов в поля имя или телефон')
    }
    backdropFunc()
    message.value ='';
    number.value = '';
  
    
})
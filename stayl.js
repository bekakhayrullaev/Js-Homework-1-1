

 let name = prompt ('Как вас зовут?')

 if(name === 'Alex') {
     console.log('Добро пожаловать Alex');
    let account = prompt('Номер счета')
     if(account === '7777') {
        console.log('???');
    } else {
         console.log('Пользователь не найден')
    }

     let money = +prompt('Сколько обноличить?')

    if(money <=10000) {
         console.log('Все отлично');

     } else {
        console.log('Недостаточно средств')
     }
     
    

    
 } else {
     console.log('Пользователь не найден')
 }


const Num = document.getElementById('value')
const Increase = document.getElementById('increase')
const reset = document.getElementById('reset')
const decrease = document.getElementById('decrease')
let count = 0


Increase.addEventListener('click', () => {
    count += 1
    console.log(count)
    Num.textContent = count
    if(count > 0){
        Num.style.color = 'green'
    }else if(count < 0){
        Num.style.color = 'red'
    }else{
        Num.style.color = '#000'
    }
})
decrease.addEventListener('click', () => {
    count -= 1
    console.log(count)
    Num.innerText = count
    if(count > 0){
        Num.style.color = 'green'
    }else if(count < 0){
        Num.style.color = 'red'
    }else{
        Num.style.color = '#000'
    }
  
})
reset.addEventListener('click', () => {
    count = 0
    console.log(count)
    Num.innerText = count
    if(count > 0){
        Num.style.color = 'green'
    }else if(count < 0){
        Num.style.color = 'red'
    }else{
        Num.style.color = '#000'
    }
 
    
})

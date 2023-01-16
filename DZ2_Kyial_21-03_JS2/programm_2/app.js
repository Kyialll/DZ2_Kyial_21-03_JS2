const input=document.createElement('input')
const container=document.querySelector('.container')
container.append(input)
input.type='Number'
input.value='0'

const startBtn=document.querySelector('.start')
const stopBtn=document.querySelector('.stop')

function timer(){
    input.value++
}
startBtn.onclick=function(){
    window.timerId=window.setInterval(timer,1000)
}
stopBtn.onclick=function(){
    window.clearInterval(window.timerId)
}









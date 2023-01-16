const box=document.querySelector('.box')
let positionX=0
let positionY=0
const move=()=> {
    if (positionX < 450 && positionY===0) {
        positionX+=5
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX == 450 && positionY < 450) {
        positionY+=5
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    } else if (positionX>0 && positionY===450) {
        positionX-=5
        box.style.left=`${positionX}px`
        setTimeout(move, 1)
    } else if (positionX===0&&positionY>0){
        positionY-=5
        box.style.top=`${positionY}px`
        setTimeout(move, 1)
    }

}
move()
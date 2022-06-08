const previous = document.getElementById("previous")
const current = document.getElementById("current")
const next = document.getElementById("next")
const showphoto = document.getElementById("ShowPhoto")
let ImageOrder = 1
let ImageShow = false



previous.addEventListener("click", previousphoto => {
    SmallPrev()
    ImageOrder --;
})
function SmallPrev(){
    previous.style.transition = "100ms"
    previous.style.transform = "Scale(0.5,0.5)"
    setTimeout(NormalPrev, 100)
}
function NormalPrev(){
    previous.style.transition = "100ms"
    previous.style.transform = "Scale(1,1)"
    check2()
}


next.addEventListener("click", nextphoto => {
    SmallNext()
    ImageOrder ++;
})
function SmallNext(){
    next.style.transition = "100ms"
    next.style.transform = "Scale(0.5,0.5)"
    setTimeout(NormalNext, 100)
}
function NormalNext(){
    next.style.transition = "100ms"
    next.style.transform = "Scale(1,1)"
    check2()
}

function check2() {
    current.style.transition = "100ms"
    current.style.transform = "Scale(1.2,1.2)"
    check()
    setTimeout(check3, 100)
}
function check3() {
    current.style.transition = "100ms"
    current.style.transform = "Scale(1,1)"
}


current.addEventListener("click", show =>{
    if (ImageShow === false){
        current.style.zIndex = 1;
        current.style.transition = "250ms"
        current.style.transform = "Scale(1.8,1.8)"
        setTimeout(MakeitTrue, 500)
    }
    if (ImageShow === true){
        current.style.transition = "250ms"
        current.style.transform = "Scale(1,1)"
        setTimeout(MakeitFalse, 500)
    }
})
function MakeitTrue() {
    ImageShow = true
}
function MakeitFalse() {
    ImageShow = false
}



function check(){
    if (ImageOrder ===5 ){
        ImageOrder = 1
    }
    else if (ImageOrder ===0 ){
        ImageOrder = 4
    }
    if (ImageOrder===1){
        previous.style.backgroundImage = "url(./Images/photo4.PNG)"
        current.style.backgroundImage = "url(./Images/photo1.PNG)"
        next.style.backgroundImage = "url(./Images/photo2.PNG)"
    }
    else if (ImageOrder ===2){
        previous.style.backgroundImage = "url(./Images/photo1.PNG)"
        current.style.backgroundImage = "url(./Images/photo2.PNG)"
        next.style.backgroundImage = "url(./Images/photo3.PNG)"
    }
    else if (ImageOrder ===3){
        previous.style.backgroundImage = "url(./Images/photo2.PNG)"
        current.style.backgroundImage = "url(./Images/photo3.PNG)"
        next.style.backgroundImage = "url(./Images/photo4.PNG)"
    }
    else if (ImageOrder ===4){
        previous.style.backgroundImage = "url(./Images/photo3.PNG)"
        current.style.backgroundImage = "url(./Images/photo4.PNG)"
        next.style.backgroundImage = "url(./Images/photo1.PNG)"
    }
}

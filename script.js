let pageName = window.location.pathname;
console.log(pageName)


/* ------Page New Game-------*/

if(pageName === "/index.html"){
    document.body.addEventListener("click", e =>{
        window.location.assign("./Page D'acceuil.html"); 
    })
    document.body.addEventListener("keypress", e =>{
        window.location.assign("./Page D'acceuil.html"); 
    })
}

/* ------Page D'acceuil-------*/

if(pageName === "/Page%20D'acceuil.html"){
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

}

/* ------------ Page Qui Sommes Nous ------------------- */

    /* .... La nouvelle fenêtre d'affichage au clic des boutons Notre Mission, Notre Histoire, Notre Equipe */

    if(pageName === "/QuiSommesNous.html"){
        const board = document.getElementById("board")
        const title = document.getElementById("board-title")
        const text = document.getElementById("board-text")
        // const close = document.getElementById("close")
        const close_button = document.getElementById("close-button");
        const BoardVideo = document.getElementById("board-video");

        const mission = document.getElementById("mission")
        const histoire = document.getElementById("histoire")
        const equipe = document.getElementById("equipe")

        equipe.addEventListener("click", EquipeText =>{
            showboard();
            title.innerHTML = "Notre Equipe";
            text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            BoardVideo.setAttribute("src","https://player.vimeo.com/video/358296442?h=8b59dc64ae");
        })
        histoire.addEventListener("click", HistoireText =>{
            showboard();
            title.innerHTML = "Notre Histoire";
            text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            BoardVideo.setAttribute("src","https://player.vimeo.com/video/117026445?h=7ed53d35c6");
            
        mission.addEventListener("click", MissionText =>{
            showboard();
            title.innerHTML = "Notre Mission";
            text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            // BoardVideo.setAttribute("src","https://player.vimeo.com/video/50522981?h=9da431679d");
            BoardVideo.setAttribute("src","https://player.vimeo.com/video/232831266?h=ea447d256f&color=5cd7d4&byline=0&portrait=0");
        })
        })
        // close.addEventListener("click", CloseBoard =>{
        //     board.style.transition = "1000ms";
        //     board.style.transform = "Scale(0,0)";
        // })
        close_button.addEventListener("click", CloseBoard =>{
            board.style.transition = "1000ms";
            board.style.transform = "Scale(0,0)";
        })

        function showboard(){
            board.style.transition = "1000ms";
            board.style.transform = "Scale(1,1)";
        }
    }

    /* .... La petite animation de bas de page */

    let moving_icon = document.getElementById("moving-icon");
    let play_button = document.getElementById("play-button");
    let hidden_msg_front = document.getElementById("hidden-msg-front");

    moving_icon.onclick = ChangeIcon;
    

        /* .... Fonction pour changer l'image de l'icône au clic */

        function ChangeIcon(){
            console.log(moving_icon.getAttribute("src"));
            if(moving_icon.getAttribute("src") == "./Images/icons8-money-with-wings-48.png"){
                moving_icon.setAttribute("src", "./Images/icons8-mushroom-49.png");
            }
            else{
                moving_icon.setAttribute("src", "./Images/icons8-money-with-wings-48.png");
            }
        }

        function StartAnimation(){
            document.getElementById("moving-icon").classList.toggle("anim-start");
        }

        function StopAnimation(){
            document.getElementById("moving-icon").classList.toggle("anim-start");
            let x = document.getElementById("moving-icon").getBoundingClientRect().left;
            console.log(x);
        }

        /* .... Fonction pour démarrer et arrêter l'animation au clic du bouton */

        play_button.onclick = MoveStopAnim;

        function MoveStopAnim(){
            if(play_button.textContent == "▷"){
                console.log("Button state : Play");
                moving_icon.classList.toggle("anim-start");
                hidden_msg_front.classList.toggle("showhide-msg")
                play_button.textContent = "▢";
            }
            else{
                console.log("Button state : Stop");
                moving_icon.classList.toggle("anim-start");
                hidden_msg_front.classList.toggle("showhide-msg")
                play_button.textContent = "▷";
            }
        }

/* ------------ Page Liste Des Jeux ------------------- */
if(pageName === "/ListeDesJeux.html"){
    const Tetris = document.getElementById("Tetris")
    const Pong = document.getElementById("Pong")
    const Snake = document.getElementById("Snake")

    Tetris.addEventListener("click", PageTetris =>{
        window.location.assign("./Tetris.html")
    })
    Pong.addEventListener("click", PagePong =>{
        window.location.assign("./Pong.html")
    })
    Snake.addEventListener("click", PageSnake =>{
        window.location.assign("./Snake.html")
    })
    document.onmouseenter()
}

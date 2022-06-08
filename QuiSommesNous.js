const board = document.getElementById("board")
const title = document.getElementById("title")
const text = document.getElementById("text")
const close = document.getElementById("close")

const mission = document.getElementById("mission")
const histoire = document.getElementById("histoire")
const equipe = document.getElementById("equipe")

equipe.addEventListener("click", EquipeText =>{
	title.innerHTML = "Notre Equipe";
	text.innerHTML = "Notre equipe etc etc";
	showboard();
})
histoire.addEventListener("click", HistoireText =>{
	showboard();
	title.innerHTML = "Notre Histoire";
	text.innerHTML = "Notre histoire etc etc";
})
mission.addEventListener("click", MissionText =>{
	showboard();
	title.innerHTML = "Notre Mission";
	text.innerHTML = "Notre mission etc etc";
})
close.addEventListener("click", CloseBoard =>{
	board.style.transition = "1000ms"
    board.style.transform = "Scale(0,0)"
})


function showboard(){
    board.style.transition = "1000ms"
    board.style.transform = "Scale(1,1)"
}
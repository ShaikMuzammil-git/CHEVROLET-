
function bodyColor(){
  const carBody = document.getElementById("section8");

const input = document.getElementById("colorPicker"); 

setColor();
input.addEventListener("input", setColor);

function setColor() {
	carBody.style.backgroundColor = input.value;
}


}

function topColor(){
  const carTop1 = document.getElementById("goliathTopColor1");
  const carTop2 = document.getElementById("goliathTopColor2");
const input = document.getElementById("colorPicker2"); 

setColor();
input.addEventListener("input", setColor);

function setColor() {
	carTop1.style.backgroundColor = input.value;
  carTop2.style.backgroundColor = input.value;

}

}

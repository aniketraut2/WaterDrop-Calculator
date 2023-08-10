const outputDisplay = document.getElementById('output-display');
function display(value){
    outputDisplay.value += value;
}
function Calclulate(){
  try {
    const userInput = outputDisplay.value;
    outputDisplay.value = `${userInput} = ${eval(userInput)}`;
} catch (error) {
    alert("Invalid Expression");
}
}
function Clear() {
    outputDisplay.value = "";
}
function del() {
    outputDisplay.value = outputDisplay.value.slice(0,-1);
}
const waterDropSound = document.getElementById('waterDropSound');

function playWaterDropSound() {
    waterDropSound.currentTime = 0; // Reset audio to start
    waterDropSound.play();
}

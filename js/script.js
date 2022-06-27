function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}


function changeColor() {
    const defaultColor = document.getElementsByClassName("profile-font");
    for (let i = 0; i < defaultColor.length; i++) {
        defaultColor[i].style.color = generateRandomColor();
    }
}

function defaultColor() {
    const defaultColor = document.getElementsByClassName("profile-font");
    for (let i = 0; i < defaultColor.length; i++) {
        defaultColor[i].style.color = "#525252";
    }
}
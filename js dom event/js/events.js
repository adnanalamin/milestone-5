console.log("separate js file");

// Option no 2

function makeGreenButton() {
  document.body.style.backgroundColor = "green";
}

const makeRedButton = document.getElementById("make-red");
makeRedButton.onclick = makeRed;

function makeRed() {
  document.body.style.backgroundColor = "red";
}


const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick=function makePurple(){
    document.body.style.backgroundColor = 'purple'
}

const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click',makePink);

function makePink(){
    document.body.style.
    backgroundColor='pink';
}

const makeBlurButton = document.getElementById('make-blue');
makeBlurButton.addEventListener('click',function(){
    document.body.style.backgroundColor='blue';
})

document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor = 'goldenrod';
})
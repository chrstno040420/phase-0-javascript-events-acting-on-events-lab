// Your code here

const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

//dodger.style.left = "360px";

function moveDodgerLeft(){
    let leftNumbers = dodger.style.left.replace("px","");
    let left = parseInt(leftNumbers, 10);

    if(left > 0){
        dodger.style.left = `${left - 1}px`;

    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

function moveDodgerRight(){
    let leftNumbers = dodger.style.left.replace("px","");
    let left = parseInt(leftNumbers, 20);

    if(left > 360){
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function(c){
    if (c.key === "ArrowRight"){
        moveDodgerRight();
    }
});

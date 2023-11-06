const boxA = document.getElementById("boxA");

document.getElementById("height").addEventListener("input", e => {
  boxA.style.height = e.target.value + "px";
});
document.getElementById("width").addEventListener("input", e => {
  boxA.style.width = e.target.value + "px";
});

document.getElementById("color").addEventListener("input", e =>{
    boxA.style.backgroundColor = document.getElementById("color").value 
})
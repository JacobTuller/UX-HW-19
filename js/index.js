var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close");

btn.onclick = function(){
    modal.style.display = "block";
    console.log("button");
}
span.onclick = function() {
    modal.style.display = "none";
  }
window.onclick = function(event){
if (event.target == modal) {
     modal.style.display = "none";
    }
}


console.log("Testing");

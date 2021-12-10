document.getElementsByClassName("backbutton").addEventListener("hover", buttonGrow());
document.getElementsByClassName("backbutton").addEventListener("click", buttonClick());
document.getElementsByClassName("mpbutton").addEventListener("hover",buttonGrow());
document.getElementsByClassName("mpbutton").addEventListener("click",buttonClick());

function buttonGrow() {
  document.getElementsByClassName("backbutton").style.color = "red";
  document.getElementsByClassName("mpbutton").style.color = "red";
  console.log("hi");
}
function buttonClick() {
  document.getElementsByClassName("backbutton").style.color = "green";
  document.getElementsByClassName("mpbutton").style.color = "green";
  console.log("hi");
}

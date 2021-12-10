for (i=0;i < document.getElementsByClassName("mpbutton").length; i++)
{
  document.getElementsByClassName("mpbutton")[i].addEventListener("mouseover",buttonGrow);
  document.getElementsByClassName("mpbutton")[i].addEventListener("click",buttonClick);
  console.log("hi1");
}

document.getElementById("backbutton1").addEventListener("mouseover", buttonGrow);
document.getElementById("backbutton1").addEventListener("click", buttonClick);

function buttonGrow() {
  document.getElementById("backbutton1").style.backgroundColor = "red";
  for (i=0;i < document.getElementsByClassName("mpbutton").length; i++)
  {
    document.getElementsByClassName("mpbutton")[i].style.color = "red";
    console.log("hi");
  }
  // console.log("hi");
}
function buttonClick() {
  document.getElementById("backbutton1").style.color = "green";
  document.getElementsByClassName("mpbutton")[i].style.color = "green";
  console.log("hi");
}

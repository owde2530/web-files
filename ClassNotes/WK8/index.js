// console.log("hello world");
// console.log( Math.floor (Math.random()*10) );
//
// console.log(document.getElementsByClassName("options"));
//
// console.log(document.getElementsByClassName("options")[0].innerHTML);
// Options works like an array, in that it can find the elements in sections or DIVS
// in the order of an array
// Show me whats in this section in the general HTML file

const images = ["JustinButLag.jpeg","MatthewWatson.jpeg","RyanMagee.jpeg"]
const title = ["Justin", "Matt", "Ryan"];

for(i=0;i<document.getElementsByClassName('options').length;i++){
  document.getElementsByClassName('label')[i].innerHTML = title[i];
  // console.log(document.getElementsByClassName("options")[i].innerHTML);
  document.getElementsByClassName("options")[i].innerHTML += '<img src="Wk8Assets/' + images[i] + ' "> ';
  document.getElementsByClassName("options")[i].setAttribute("id", title[i]);
  document.getElementsByClassName("options")[i].addEventListener("click", function(){changeColor(this.id)});

  }

function changeColor(sectionID) {
  // console.log(sectionID);
  document.getElementByID(sectionID).classList.toggle("blue");
}

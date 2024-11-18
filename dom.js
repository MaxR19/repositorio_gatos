//CSS: # -> identificador; . -> clase
let mainHeader = document.getElementById("mainHeader");
let thunder = document.getElementsByClassName("thunder");
let body = document.getElementsByTagName("body");

console.log("Body: ", body)
console.log("MainHeader: ", mainHeader);
console.log("Thunder: ", thunder);

console.log("Body hijo:", body[0].childNodes);

//body[0].style = "background-color: lightcyan;";
body[0].style.backgroundColor = "lightcyan";

let main = document.getElementsByTagName("main");
main[0].style.paddingTop = "1rem";
main[0].style.paddingLeft = "1rem";
main[0].style.color = "black";

thunder[0].style.color = "purple";

let lista = document.getElementsByClassName("lista");
lista[0].style.paddingLeft = "2rem";
lista[1].style.paddingLeft = "2rem";

let like = document.getElementsByClassName("like");
like[0].style.color = "green";
like[1].style.color = "green";
like[2].style.color = "green";

let a = document.getElementsByTagName("a");
a[0].style.color = "plum";
a[0].style.fontStyle = "italic";

let img = document.getElementsByTagName("img");
img[0].style.borderRadius = "1rem";
img[0].style.height = "300px";

let h3 = document.getElementsByTagName("h3");
h3[0].style.fontStyle = "italic";
h3[1].style.fontStyle = "italic";

let li = document.getElementsByTagName("li");
li[3].style.color = "crimson";
li[5].style.color = "crimson";
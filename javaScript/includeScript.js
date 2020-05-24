function include(page, selecter){
fetch(page)
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector(selecter).innerHTML = data;
  });
}


//function includeHTML() {
//  var z, i, elmnt, file, xhttp;
//  /* Loop through a collection of all HTML elements: */
//  z = document.getElementsByTagName("*");
//  for (i = 0; i < z.length; i++) {
//    elmnt = z[i];
//    /*search for elements with a certain atrribute:*/
//    file = elmnt.getAttribute("w3-include-html");
//    if (file) {
//      /* Make an HTTP request using the attribute value as the file name: */
//      xhttp = new XMLHttpRequest();
//      xhttp.onreadystatechange = function() {
//        if (this.readyState == 4) {
//          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
//          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
//          /* Remove the attribute, and call this function once more: */
//          elmnt.removeAttribute("w3-include-html");
//          includeHTML();
//        }
//      }
//      xhttp.open("GET", file, true);
//      xhttp.send();
//      /* Exit the function: */
//      return;
//    }
//  }
//}
//var number = ["०”,"१","२","३","४",”५”,”६”,”७”,”८”,”९”,”१०","११","१२","१३","१४","१५","१६","१७","१८","१९","२०","२१","२२","२३","२४","२५","२६","२७","२८","२९","३०","३१","३२","३३",
//	"३४","३५","३६","३७","३८","१९","४०","४१","४२","३४","४४","४५","४६","४७","४८","४९","५०","५१","५२","५३","५४","५५","५६","५७","५८","५९","६०","६१","६२","६३","६४","६५","६६","६७",
//	"६८","६९","७०","७१","७२","७३","७४","७५","७६","७७","७८","७९","८०","८१","८२","८३","८४","८५","८६","८७","८८","८९","९०","९१","९२","९३","९४","९५","९६","९७","९८","९९","१००"];

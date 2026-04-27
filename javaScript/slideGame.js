
const arr = [...Array.from({ length: 15 }, (_, i) => i + 1), null];


for (let i = arr.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

console.log(arr);


function initializeGame() {
    const arrayContainer = document.getElementById("array");
    arrayContainer.innerHTML = "";
    arr.forEach((num, index) => {
        const block = document.createElement("div");
        block.className = "block";
        block.innerText = num !== null ? num : "";
        block.addEventListener("click", () => moveBlock(index));
        arrayContainer.appendChild(block);
    });
}

function moveBlock(index) {
    var indexofempty=arr.indexOf(null);
var roemp=Math.floor(indexofempty/4);
var colemp=indexofempty%4;
var roselected=Math.floor(index/4);
console.log("index"+ index)
var colselected=index%4;
console.log("roe: "+roemp + "coe: " + colemp );
console.log("rocl"+roselected+"colsel: " + colselected);
var r=Math.abs(roemp-roselected);
var c=Math.abs(colemp-colselected);
console.log(r);
console.log(c);
if (Math.abs(r-c)==1){
    [arr[index],arr[indexofempty]]=[arr[indexofempty],arr[index]]
}
initializeGame();
}


initializeGame();


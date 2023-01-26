//change the items to specific tasks/assignments
var li1 = document.getElementById("item1");
li1.innerHTML = "Spanish, Ch. 2";

//change the colors of your assignments according to subject
li1.style.color = "blue";

//append an estimated time for each assignment using a text node
//li1.appendChild(document.createTextNode("  :1 hr"));

//disable the button that removes the task
//document.getElementById("closebtns").setAttribute("disabled");

var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}



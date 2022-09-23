
function flip(event) {
  var element = event.currentTarget;


  var cardtag = document.getElementById("cards");
  if (element.className === "button") {
    if (cardtag.style.transform == "rotateY(180deg)") {
      cardtag.style.transform = "rotateY(0deg)";
    }
    else {
      cardtag.style.transform = "rotateY(180deg)";
    }

    // generate_table();
  }
  else {
    cardtag.style.transform = "rotateY(180deg)";
  }


};





function generate_table() {



  let number = document.getElementById("number").value;
  let terms = document.getElementById("numberoftimes").value;



  terms = (terms > 15) ? 15 : terms;
  terms = (terms == "") ? 10 : terms;

  let result = "";



  console.log(number);
  if (number === "") {
    document.getElementById("warning").innerText = "Please Fill the First Box";
  }
  else if (terms < 0 || terms == "-" || terms == "--" ) {
    document.getElementById("warning").innerHTML = "Terms cannot be less than zero";

  }
  else {
    for (let i = 1; i <= terms; i++) {
      let temp = number * i;
      result = `${result}
                  ${number} X ${i}  =  ${temp} <br>`;
    }
    document.getElementById("table").innerHTML = result;
  }
}

function resetdata(){
  document.getElementById("warning").innerText = "";
  document.getElementById("table").innerHTML = "";

}




// function flip(event){
// 	var element = event.currentTarget;
// 	if (element.className === "button") {
//     if(element.style.transform == "rotateY(180deg)") {
//       element.style.transform = "rotateY(0deg)";
//     }
//     else {
//       element.style.transform = "rotateY(180deg)";
//     }

//     // generate_table();
//   }
// };
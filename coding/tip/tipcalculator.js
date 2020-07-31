function calculate() {
    price = document.getElementById("itemamt").value;
    tip = document.getElementById("itemtip").value;
    ppl = document.getElementById("pplcount").value;
      if (price === "") {
        alert("Please enter meal value");      
      }
      if (tip == 0) {
        alert("Please enter tip amount");
      }
      if (ppl === "" || ppl <= 1) {
        ppl = 1;
      }
    document.getElementById("total").innerHTML = (parseFloat(price * tip) /parseFloat(ppl)).toFixed(2);
}

var input = document.getElementById("pplcount");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myButton").click();
  }
});
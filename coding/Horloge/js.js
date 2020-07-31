function calculate() {
  var n = new Date();
  var yn = n.getFullYear();
  var input = document.getElementById("birthday").value;
  var b = new Date(input);
  var y = b.getFullYear();
  document.getElementById("years").innerHTML = ((n - b) / 1000 / 60 / 60 / 24 / 365).toFixed(2);
  document.getElementById("months").innerHTML = ((n - b) / 1000 / 60 / 60 / 24 / 30).toFixed(2);
  document.getElementById("weeks").innerHTML = ((n - b) / 1000 / 60 / 60 / 24 / 7).toFixed(2);
  document.getElementById("days").innerHTML = ((n - b) / 1000 / 60 / 60 / 24).toFixed(2);
}
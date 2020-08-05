var one = Math.floor(Math.random() * 20) + 1;
var two = Math.floor(Math.random() * 20) + 1;
var total = one + two;

function generate() {
    document.getElementById("one").innerHTML = one
    document.getElementById("two").innerHTML = two
}

function check() {
    var guess = document.getElementById("guess").value;

    if (Number(guess) === total) {
        alert('Correct!');
        window.location.reload();
    }
    else {
        alert('Sorry, the correct answer was ' + total + '.');
        window.location.reload();
    }
}
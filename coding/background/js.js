function colorChange(){
    const values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    var one = values[Math.floor(Math.random() * values.length)];
    var two = values[Math.floor(Math.random() * values.length)];
    var three = values[Math.floor(Math.random() * values.length)];
    var four = values[Math.floor(Math.random() * values.length)];
    var five = values[Math.floor(Math.random() * values.length)];
    var six = values[Math.floor(Math.random() * values.length)];

    document.getElementById("hex").innerHTML = one + two + three + four + five + six
    document.body.style.backgroundColor = one + two + three + four + five + six
}
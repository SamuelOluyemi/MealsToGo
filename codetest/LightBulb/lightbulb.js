function bulbSwitch() {
    let bulb = document.getElementById("lightbulb");
    if(bulb.src.match("bulbon")) {
        bulb.src = "Bulbs/bulboff.JPG";
    } else {
        bulb.src = "Bulbs/bulbon2.JPG";
    }
}
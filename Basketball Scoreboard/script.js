// home counter
let displayCounter1 = document.getElementById("counter1")
let count1 = 0;

function homeAdd1() {
    count1 += 1
    displayCounter1.textContent = count1;
}

function homeAdd2() {
    count1 += 2
    displayCounter1.textContent = count1;
}

function homeAdd3() {
    count1 += 3
    displayCounter1.textContent = count1;
}


// guest counter
let displayCounter2 = document.getElementById("counter2")
let count2 = 0;

function guestAdd1() {
    count2 += 1
    displayCounter2.textContent = count2;
}

function guestAdd2() {
    count2 += 2
    displayCounter2.textContent = count2;
}

function guestAdd3() {
    count2 += 3
    displayCounter2.textContent = count2;
}

function reset(){
    count1 = 0;
    count2 = 0;
    displayCounter1.textContent = 0;
    displayCounter2.textContent = 0;
}
let btncounter = document.querySelector("#btcounter")
let counter = 0

btncounter.addEventListener('click', () => {
    counter++
    console.log(counter);
});
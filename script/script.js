
fetch('https://api.adviceslip.com/advice')
.then((data) => {
    return data.json();
})
.then((value) => {
    let id = value.slip.id;
    let advice = value.slip.advice;
    document.getElementById("content-div").innerHTML = `Quote -${id}: <br> ${advice}`;
});

function refreshPage() {
    location.reload();
}
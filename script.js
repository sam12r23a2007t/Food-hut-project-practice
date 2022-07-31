document.getElementById('foodbtn').addEventListener('click', () => {
    document.getElementById('juice').style.display = "none";
    document.getElementById('food').style.display = "block";
    document.getElementById('juicebtn').style.background = "transparent"
    document.getElementById('juicebtn').style.color = "red"
    document.getElementById('foodbtn').style.backgroundColor = "red"
    document.getElementById('foodbtn').style.color = "white"


})
document.getElementById('juicebtn').addEventListener('click', () => {
    document.getElementById('food').style.display = "none";
    document.getElementById('juice').style.display = "block";
    document.getElementById('foodbtn').style.background = "transparent"
    document.getElementById('foodbtn').style.color = "red"
    document.getElementById('juicebtn').style.backgroundColor = "red"
    document.getElementById('juicebtn').style.color = "white"
})

function navbar() {
    let nav = document.getElementById('nav');
    if (nav.style.display == "none") {
        nav.style.display = "block";
    }
    else {
        nav.style.display = "none";
    }
}
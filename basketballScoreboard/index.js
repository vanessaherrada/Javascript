let starting = 0
let starting2 = 0

result = document.getElementById("home-count")
result2 = document.getElementById("guest-count")

function hplus1() {
    result.textContent = (starting += 1)
}
function hplus2() {
    result.textContent = (starting += 2)
}
function hplus3() {
    result.textContent = (starting += 3)
}
function gplus1() {
    result2.textContent = (starting2 += 1)
}
function gplus2() {
    result2.textContent = (starting2 += 2)
}
function gplus3() {
    result2.textContent = (starting2 += 3)
}
function restart() {
    starting = 0
    starting2 = 0
    result.textContent = starting
    result2.textContent = starting2
}

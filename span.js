a = "The main enemy of knowledge is not ignorance, it is the illusion of knowledge."
splitedB = a.split(" ")

delay = 10
for (i =0; i<splitedB.length; i++){
    S = document.createElement("span")
    S.innerHTML = splitedB[i] + " "
    document.getElementById('1').appendChild(S)
    S.style.animationDelay = delay + "S";
    delay +=0.3
}
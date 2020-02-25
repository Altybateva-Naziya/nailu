a = "The main enemy of knowledge is not ignorance, it's the illusion of knowledge"
splitedB = a.split(" ")

delay = 10
for (i =0; i<splitedB.length; i++){
    S = document.createElement("span")
    S.innerHTML = splitedB[i] + " "
    document.getElementById('1').appendChild(S)
    S.style.animationDelay = delay + "S";
    delay +=0.3
}
c = "Stephen"
splitedC = c.split(" ")
delay = 16
for (k =0; k<splitedC.length; k++){
    s = document.createElement("span")
    s.innerHTML = splitedC[k]
    document.getElementById('2').appendChild(s)
    s.style.animationDelay = delay + "s";
    delay +=0
    .3
}

h = "Hawking"
splitedC = h.split(" ")
delay = 17
for (k =0; k<splitedC.length; k++){
    s = document.createElement("span")
    s.innerHTML = splitedC[k]
    document.getElementById('3').appendChild(s)
    s.style.animationDelay = delay + "s";
    delay +=0.3
}

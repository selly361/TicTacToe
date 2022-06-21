let welcome = document.getElementById("welcome");
let to = document.getElementById("to");
let my = document.getElementById("my");
let ttt = document.getElementById("ttt");
let game = document.getElementById("game");
let h1 = document.querySelector("h1");
let container = document.querySelector(".grid-container");
let item1 = document.querySelector(".grid-item1");
let item2 = document.querySelector(".grid-item2");
let item3 = document.querySelector(".grid-item3");
let item4 = document.querySelector(".grid-item4");
let item5 = document.querySelector(".grid-item5");
let item6 = document.querySelector(".grid-item6");
let item7 = document.querySelector(".grid-item7");
let item8 = document.querySelector(".grid-item8");
let item9 = document.querySelector(".grid-item9");
let button = document.querySelector(".button");
let lowerContainer = document.querySelector(".lower-container");
let topContainer = document.querySelector(".top-container");
let section = document.querySelector(".won");
let refresh =() => {setTimeout(() => {
    document.location.reload()}, 5000);}
container.style.transform = "scale(0)"
button.addEventListener("click", (e) => {
    setTimeout(() => {
    lowerContainer.style.display = "none"
    topContainer.style.display = "none"
    container.style.transition = "1s all"
   
    container.style.transform = "scale(1)"
    }, 300)
})

let array = [ 
    item1, item2, item3,
    item4, item5, item6,
    item7, item8, item9
];







container.addEventListener("click", (e) => {


    if(e.target.innerText == "X"){
        return
    }

    else if(e.target.innerText == "O"){
        return
    }
    if(array.includes(e.target)){
        e.target.innerText =  "O";}


    if(array.includes(e.target)){
        let index = array.indexOf(e.target)
        array.splice(index, 1);
        let random = array[Math.floor(Math.random() * array.length)]
        random.innerText = "X";
        index = array.indexOf(random);
        array.splice(index, 1)

    }

    else {
        let random = array[Math.floor(Math.random() * array.length)]
        random.innerText = "X";
        let index = array.indexOf(random);
        array.splice(index, 1)
    }

    
let Arrays = [ 
    [item1, item2, item3,],
    [item4, item5, item6,],
    [item7, item8, item9]
];



for(let i = 0; i <= 2; i++){
    let bool = Arrays.every(item => item[i].innerText == "O");
    if(bool){
        let text = document.createElement("h1");
        text.innerText = "You Won!";
        text.style.margin = "auto";
        section.appendChild(text)
        container.style.transform = 'scale(0)'
        lowerContainer.display = "block";
        refresh()
        return 

    }
}

for(let i = 0; i <= 2; i++){
    let bool = Arrays.every(item => item[i].innerText == "X");
    if(bool){
        let text = document.createElement("h1");
        text.innerText = "Computer Won!";
        section.appendChild(text);
        container.style.transform = 'scale(0)'
        refresh()


        return
    }}


for(let i = 0; i <= 2; i++){
    let bool = Arrays[i].every(item => item.innerText == "O")
    if(bool){
        let text = document.createElement("h1");
        text.innerText = "You Won!";
        section.appendChild(text);
        container.style.transform = 'scale(0)'
        refresh()


        return
    }
    
}

for(let i = 0; i <= 2; i++){
    let bool = Arrays[i].every(item => item.innerText == "X")
    if(bool){
        let text = document.createElement("h1");
        text.innerText = "Computer Won!";
        section.appendChild(text);
        container.style.transform = 'scale(0)'
        refresh()


        return
    }
    
}


for(let i = 0; i < 1; i++){
    let bool = Arrays[0][0].innerText == "O" && Arrays[1][1].innerText == "O" && Arrays[2][2].innerText == "O";
    if(bool){
        let text = document.createElement("h1");
        text.innerText = "You Won!";
        section.appendChild(text);
        container.style.transform = 'scale(0)'
        refresh()


        return
}
}


for(let i = 0; i < 1; i++){
    let bool = Arrays[0][2].innerText == "O" && Arrays[1][1].innerText == "O" && Arrays[2][0].innerText == "O";
    if(bool){
        let text = document.createElement("h1");
        text.innerText = "You Won!";
        section.appendChild(text);
        container.style.transform = 'scale(0)'
        refresh()


        return
}
}

for(let i = 0; i < 1; i++){
    let bool = Arrays[0][0].innerText == "X" && Arrays[1][1].innerText == "X" && Arrays[2][2].innerText == "X";
    if(bool){
        let text = document.createElement("h1");
        text.innerText = "Computer Won!";
        section.appendChild(text);
        container.style.transform = 'scale(0)'
        refresh()


        return
}
}


for(let i = 0; i < 1; i++){
    let bool = Arrays[0][2].innerText == "X" && Arrays[1][1].innerText == "X" && Arrays[2][0].innerText == "X";
    if(bool){
        let text = document.createElement("h1");
        text.innerText = "Computer Won!";
        section.appendChild(text);
        container.style.transform = 'scale(0)'
        refresh()

        return
}
}
})

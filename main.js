let div = document.querySelector("div")
let box = document.querySelectorAll(".box")


// div.classList.add('box')  присваевает класс 

// div.classList.remove('box') удаляет класс

// div.classList.toggle('box')  

const btnClick = () => {
    box[0].classList.toggle("box1")
    box[1].classList.toggle("box2")
}


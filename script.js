let mosaic = [];

let gen = document.querySelector(".container");
let box = gen.appendChild(document.createElement("div"));
const tam = prompt("Digite um número ímpar maior ou igual a 5");

for (let j = 0; j < tam; j++) {
    for (let i = 0; i < tam; i++) {

        let box = gen.appendChild(document.createElement("div"));
        box.className = 'box';

        if(i<Math.floor(tam/2) && j <Math.floor(tam/2) || i>tam/2 && j>tam/2){
            box.style.background = "blue";
        }

        if(i>tam/2 && j <Math.floor(tam/2) || i<Math.floor(tam/2) && j>tam/2){
            box.style.background = "green";
        }
        
        if(i == Math.floor((tam / 2)) && j == 0 || i == 0 && j == Math.floor((tam / 2)) || i == (tam-1) && j == Math.floor((tam / 2)) || i == Math.floor((tam / 2)) && j == (tam-1)){
            box.style.background = "yellow";
        }
    }
    gen.appendChild(document.createElement("br"));

}


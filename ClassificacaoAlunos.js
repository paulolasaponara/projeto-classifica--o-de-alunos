console.log("Inicio")

let listaAlunos = ["Paulo", "Shirley", "Lorenzo", "Stephan", "Lourdes"]

console.log("")

for (let index = 0; index < listaAlunos.length; index++) {

console.log(index)

if (index == 0){
    console.log("zero localizado: " + listaAlunos[index])
}

else if (index % 2 != 0) {
    console.log("numero impar: " + listaAlunos[index])
}

else {console.log("numero par: " + listaAlunos[index])
}


}
console.log("")

console.log("fim")
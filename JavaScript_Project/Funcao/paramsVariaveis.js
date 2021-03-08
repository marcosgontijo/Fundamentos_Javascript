function soma() {
    let soma = 0 
    for (i in arguments){
        soma += arguments[i]
    }
    if (soma > 1.1){
    console.log(`O resultado é : ${soma} sendo assim passou de 1.1`)
}else{
    return soma
}

}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3 ))
console.log(soma('a', 'b', 'c' ))
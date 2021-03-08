//Novo recurso do ES2015

const pessoa = {
    nome : 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }

}

const {nome, idade} = pessoa // Tire {} de dentro do Objeto Pessoa o (nome e a udade)
console.log(nome, idade)

const { nome: n, idade: i } = pessoa 
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep }} = pessoa 
 console.log(logradouro,numero,cep)


 
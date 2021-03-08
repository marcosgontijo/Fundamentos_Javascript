let isAtivo = false 
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)


isAtivo=1
console.log(!!isAtivo) 

console.log ('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!'texto ')
console.log(!![])
console.log (!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))



console.log('Os falso...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')

console.log(!!('' || null || 0 || ''))
//a lógica acima irá retornar verdadeiro, pois a pelo menos um unico valor true.

 


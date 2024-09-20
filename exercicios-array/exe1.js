//criando variaveis do tipo array (lista ou vetor)
let dino = ['Tiranossauro Rex', 'Estegossauro','Aquilossauro'];
console.log(dino); //dados
console.table(dino)//dados em uma tabela
//propriedade length indica numero de elementos da lista
console.log(`A lista (array) possui ${dino.length} elementos `)
dino.push('Brontossauro')
console.table(dino)
console.log(`A lista (array) possui ${dino.length} elementos `)
// adiciona um elemento no inicio da lista
dino.unshift('Triceraptos')
console.table(dino)
console.log(`A lista (array) possui ${dino.length} elmentos`)
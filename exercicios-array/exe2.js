let dino = ['Tiranossauro Rex', 'Estegossauro', 'Aquilossauro','Brontossauro','Triceraptos'];
console.table(dino)
console.log('O elemento da 1 posição é',dino[0]);
console.log(`O elemento da 3ª posição é ${dino[2]}`);
console.log(`20ª posição (nao existe entao retorna 'undefined) ${dino[20]}`);
//alterando um elemento conforme sua posiçao
dino[2]='Tiranossauro';
console.table(dino);
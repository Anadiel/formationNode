
/**
 * Utiliser la fonction .map sur le tableau passé en paramètre
 * pour retourner un nouveau tableau avec les valeurs multipliées par 2
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable
 * 
  */

const multiplyByTwo = array => array.map((value) => value * 2);


/**
 * Utiliser la fonction .filter sur le tableau passé en paramètre
 * retourne un nouveau tableau avec uniquement les nom qui commencent par la lettre "A"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

//const filterNameStartByA = array => array.filter((n) => n[0] === "A");
const filterNameStartByA = array => array.filter((n) => n.startsWith("A")); // Better solution

/**
 * Utiliser la fonction .reduce sur le tableau passé en paramètre
 * retourne la somme des valeurs du tableau
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const sum = array => array.reduce((r, current) => r + current, 0);

/**
 * Utiliser la fonction .find sur le tableau passé en paramètre
 * retourne l'utilisateur qui a l'id passé en 2e paramètre
 * 
 * exemple d'entrée:
 * [
 *  {id: 1, name: 'John'},
 *  {id: 2, name: 'Doe'},
 *  {id: 3, name: 'Foo'},
 *  {id: 4, name: 'Bar'},
 * ], 3
 * retour attendu: "Foo"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

//const findUserById = (array, id) => ( array.find((user) => user.id === id) ); //TODO Fix retourner uniquement le nom
const findUserById = (array, id) => ( array.find((user) => user.id === id)?.name ?? null ); // Better solution 

console.log(multiplyByTwo([2,3,4]));
console.log(filterNameStartByA(['Bob', 'Alain', 'Céline', 'Alice']));
console.log(sum([4, 5, 6, 7, 8]));
console.log(findUserById([{id: 1, name: 'John'}, {id: 2, name: 'Doe'}, {id: 3, name: 'Foo'}], 2)); 

module.exports = {multiplyByTwo, filterNameStartByA, sum, findUserById};
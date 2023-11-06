
/**
 * Utiliser les ternaires en les chainants, pour éviter les if elseif else
 * 
 * Renvoyer ">" si a supérieur à b
 * Renvoyer "<" si a inférieur à b
 * Renvoyer "=" si a égal à b
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */

function ternaryChain(a, b) {
   let r =  (a > b) ? ">" : 
            (a < b) ? "<" : 
                        "=";
    return r;
}

console.log(ternaryChain(1, 1));
console.log(ternaryChain(1, 2));
console.log(ternaryChain(2, 1));

module.exports = ternaryChain;
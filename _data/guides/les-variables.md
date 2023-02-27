---
title: 'Les variables'
---

Dans ce guide, nous allons parler des variables, une notion indispensable de n'importe quel langage de programation. Nous allons voir le concept, puis plus précisement leur fonctionnement en Javascript.

## Définition

Une [variable](https://www.w3schools.com/js/js_variables.asp) est une zone de stockage d’informations que l’on peut réutiliser dans un programme. On peut les imaginer comme des boîtes qui contiennent de la donnée, auxquelles on peut accéder par leur nom quand on le souhaite dans le programme.

![boxes](https://media.giphy.com/media/tZ4lfqxmQxoqY4uQhX/giphy.gif)

Une variable est composée de deux éléments :

-   **Son nom** qui permettra d’accéder à sa valeur et la modifier depuis le script
-   **Sa valeur** qui peut prendre différentes formes en fonction de son type (nombre, chaîne de caractères, etc.)

## Déclarer une variable

Une variable déclarée avec le mot clé `let` peut **changer de valeur** à n’importe quel moment du programme.
Avant on utilisait le mot clé `var` pour déclarer une variable mais [cette forme est déconseillée](https://www.w3schools.com/js/js_let.asp).

```js
let age = 27;
```

Une variable déclarée avec le mot clé `const` ne peut plus **jamais changer de valeur** et gardera sa valeur initiale.
**Utilise const dès que possible**, n’utilise `let` uniquement dans le cas où la référence de la variable peut changer (un compteur qui s’incrémente par exemple).

```js
const name = 'Jérémie'; // le nom ne change pas
let age = 27; // par contre
age += 1; // l'age augmente, la valeur de age est maintenant 28.
```

## Utiliser une variable

Pour utiliser une variable, rien de plus simple : il suffit de l'appeler par son nom.

Dans le code ci-dessous on crée 3 variables avec différents ages, ensuite on en crée une quatrième qui calcule la moyenne d'age. Enfin on affiche la variable moyenne avec `console.log` :

```js
const ageJeremie = 27;
const ageBenoit = 31;
const ageLaureline = 30;
const ageAverage = (ageJeremie + ageBenoit + ageLaureline) / 3;
console.log(`L'age moyen de mes colocs est de ${ageAverage}`);
```

## Les types de valeurs

Une variable peut contenir toute expression valide qui renvoie une valeur. Autrement dit beaucoup de choses 😅. En voici quelques exemples :

```js
const firstname = 'Jeremie';
const age = 27;
const presentation = `Bonjour, je m'appelle ${firstname} et j'ai ${age} ans.`;
const repeat = (count, message) => {
    for (let i = 0; i < count; ++i) {
        console.log(message);
    }
};
const person = {firstname, age, job: 'Developer'};
const isOld = age > 80;
const all = [firstname, age, presentation, repeat, person, isOld];
```

![confused](https://media.giphy.com/media/pPhyAv5t9V8djyRFJH/giphy.gif)

J'imagine que les quelques lignes de code ci-dessus ne font pas beaucoup de sens pour toi et c'est bien normal. Mais ne t'inquiète pas, d'ici quelques leçons ce code n'aura plus aucun secret pour toi !

Le javascript est un langage complexe avec beaucoup de subtilités, mais il est aussi très permissif.
Autrement dit, tu peux l’utiliser sans forcément tout comprendre. Mon but n'est pas que tu comprennes 100% des fonctionnalités de Javascript mais que tu en saches suffisament pour l'utiliser correctement et que tu maîtrises le code que tu écris.

### boolean

Le type [boolean](https://www.w3schools.com/js/js_booleans.asp) a deux valeurs possibles : `true` et `false`. On l’utilise pour tester des conditions et exécuter ou non les instructions en fonction.

```js
const isReady = true;
if (isReady) {
    console.log("C'est parti !");
}
```

### number

Le type [number](https://www.w3schools.com/jsref/jsref_obj_number.asp) peut représenter n’importe quel type de nombres :

-   Des entiers
-   Des nombres à virgule
-   Des nombres “spéciaux” (Infinity, Math.PI, NaN)

On peut l'utiliser par exemple pour faire des calculs.

```js
const price = 30;
const percentDiscount = 20;
const finalPrice = price - (price * percentDiscount) / 100;
```

### string

Une chaîne de caractères ou [string](https://www.w3schools.com/jsref/jsref_obj_string.asp) représente un texte sous la forme d'une séquence de caractères unicodes. Il est possible de faire des opérations comme la concaténation ou accéder à un caractère précis. Voici quelques exemples de strings :

```js
const firstname = 'Nina';
const presentation = "Je m'appelle " + firstname; // concaténation => "Je m'appelle Nina"
const apple = '🍎'; // on peut utiliser n'importe quel caractère unicode.
```

Comme vous pouvez le voir, on peut utiliser ' ou " pour déclarer une string. Il y a pas de règle là dessus, mais je vous conseille d'utiliser toujours la même chose pour avoir un code plus propre.

Avec ES6, il est possible d’[interpoler une string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals), autrement dit on peut insérer le résultat de variables à l'intérieur.

```js
const age = 29;
console.log(`J'ai ${age} ans.`); // Affiche "J'ai 29 ans"
```

### undefined

[undefined](https://www.w3schools.com/jsref/jsref_undefined.asp) est la valeur par défaut pour toutes les variables pas encore initialisées.

```js
let a = undefined;
let b;

console.log(a, b);
```

### null

Comme `undefined`, `null` signifie que la variable n’a pas de valeur. Mais contrairement à `undefined`, il faut qu’elle soit explicitement assignée à `null` pour pouvoir l’utiliser. Il arrive que certains codes utilisent `null` plutôt que `undefined` pour signifier qu'une variable n'a pas de valeur.

```js
let a = null;
console.log(a);
```

### object

[object](https://www.w3schools.com/jsref/jsref_obj_object.asp) est un type un peu spécial qui peut représenter beaucoup de choses.
Il se caractérise par la possibilité d’accéder à des propriétés qui lui sont propres avec cette notation : `myObject.itsProperty` et des méthodes : `myObject.itsMethod();`.

```js
const ingredient = {name: 'Egg', price: 0.5};
console.log(ingredient.name);
```

**En javascript, TOUS les types héritent du type object.**

### array

Le type [array](https://www.w3schools.com/jsref/jsref_obj_array.asp) permet de créer des tableaux, également appelés listes parfois. Comme pour objet il permet de stocker plusieures valeurs ensemble. Au lieu d'utiliser des champs nommés, les tableaux contiennent une listes de valeurs ordonnées auxquelles on peut accéder avec un index commençant à 0 et qui s'incrémente de 1 en 1.

```js
const names = ['Kim', 'Marcus', 'Marion']; // crée un tableau avec 3 éléments
console.log(names[1]); // Affiche Marcus, le deuxième élément du tableau
```

### function

Enfin le dernier type du Javascript est le type function. Les fonctions permettent notamment d'écrire du code réutilisable à plusieurs endroits. Voici un exemple de fonction :

```js
const sayHello = name => console.log(`Hello ${name}`); // on déclare la fonction
sayHello('Kim'); // on l'appelle avec la valeur 'Kim' en paramètre
```

_Nous renviendrons plus en détails sur les fonctions, objets et tableaux dans un prochain guide._

## Attributs & méthodes

Les attributs sont des variables associées à des objets et les méthodes sont des fonctions également associées à des objets.

Comme on l'a vu plus haut, en Javascript, tout est objet. C'est grâce à ça qu'on va pouvoir accéder aux attributs et méthodes des différents types qu'on a vu.

```js
(10.2412412).toFixed(2); // retourne la string '10.24'
'Jérémie is stupid'.replace('stupid', 'awesome'); // retourne la string 'Jérémie is awesome'
'Supercalifragilisticexpialidocious'.length; // contient le nombre 34
Math.random(); // retourne un nombre aléatoire
```

On verra dans une prochaine partie sur les objets comment créer nos propres attributs et méthodes. En attendant n'hésite pas à utiliser les sites qu'on a vu dans l'introduction pour découvrir et utiliser les différentes fonctions, méthodes et attributs fournies par JS dans ton code !

## Inférence de type

Dans certains langages, comme le C par exemple, le type d'une variable est donné explicitement à sa déclaration.

```js
const int age = 42; // ici le type `int` signifie nombre entier, la variable age a pour type `int`
```

Par contre, en javascript, on ne déclare jamais explicitement le type d'une variable, en effet il est déduit automatiquement par la valeur qu'on lui donne.

```js
const age = 42; // ici age a pour type number, qui est déduit de sa valeur
let name; // name a pour type undefined
name = 'Lucie'; // name a maintenant pour type string
```

Comme je l'ai déjà évoqué plus haut, Javascript est un langage très permissif. Cela permet de faire beaucoup de choses très rapidement, mais cela augmente aussi le risque de bugs et d'erreurs. C'est pour cela que des langages comme [Typescript](https://www.typescriptlang.org/) ont été inventés pour améliorer la gestion du typage. Par contre, je te conseille de bien maîtriser Javascript avant de te lancer sur Typesript.

## Les conversions

Dans un langage fortement typé comme le C, lorsqu'on essaye de faire des opérations ou d'assigner une valeur d'un type à un autre, on a généralement une erreur.

Les langages permissifs comme Javascript quant à eux vont tout faire pour éviter au maximum les erreurs. Pour cela, JS va essayer le plus possible de faire des conversions automatiques entre les valeurs.

```js
const a = 2 + '2'; // le résultat est 22 et pas 4 car 2 est automatiquement transformé en string
const b = '2' - 2; // par contre ici le résultat est 0 car "2" est transformé en nombre
const c = 'value = ' + true; // le résultat est "value = true" car true est transformé en string
```

Bref on ne va pas tous les faire, mais tu auras compris que JS fait des convertions de types automatiques en suivant certaines règles. Tu n'as pas besoin de toutes les connaître mais il faut être capable de les comprendre. (Tu peux toujours utiliser `console.log` pour voir afficher la valeur après un calcul).

## Le nommage (bonnes pratiques)

Comme vous avez pu le voir plus haut, il est important de donner un nom logique et clair à nos variables pour que notre code soit compréhensible. Il existe un certain nombre de bonnes pratiques qu'il est conseillé de respecter lorsqu'on nomme une variable en Javascript :

-   la notation [camelcase](https://fr.wikipedia.org/wiki/Camel_case), standard très courament utilisée en Javascript
-   des noms anglais, car le javascript se base sur ce langages et ça permet de rendre le code compréhensible par un maximum de personnes dans le monde
-   des noms clairs et explicites qui décrivent au mieux la variable
-   des noms concis et pas trop long pour ne pas surcharger le code

```js
const x = 'Apple'; // ⛔️ le nom ne décrit pas du tout la variable
const fruit = 'Apple'; // ✅ ici on comprend tout de suite le contenu de la variable
const fruits_basket = []; // ⛔️ bien que correct dans d'autre langage, en JS on utilise plutôt le camelcase
const currentIndexOfTheArray = 0; // ⛔️ ici le nom est bien trop long `index` aurait sans doute suffit
const student = {name: 'Clara', age: 21}; // ✅ variable et champs en anglais
const etudiant = {nom: 'Clara', age: 21}; // ⛔️ on peut utiliser le français pour tester mais c'est recommandé d'utiliser des noms en anglais
```

Attention 2 variables ne peuvent pas avoir le même nom (même s'il y a des exceptions qu'on verra + tard).

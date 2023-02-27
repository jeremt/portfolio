---
title: 'Les fonctions'
---

Dans ce guide on va parler d'un concept essentiel à la programmation : **les fonctions**.

## Définition

En Javascript, une fonction est un ensemble d’instructions rassemblées sous un même nom. Une fonction peut avoir des arguments, et peut retourner une valeur. Un peu comme cette machine à glaces :

![icecream](https://media.tenor.com/GFMipuxB7gQAAAAC/soft-serve-ice-cream.gif)

Si on lui passe du chocolat en argument, elle retournera de la glace au chocolat, mais si on lui passe de la vanille, elle retournera de la glace à la vanille. Bon d'accord, c'est un peu plus compliqué que ça mais tu vois l'idée.

## Syntaxe

On peut découper la déclaration d'une fonction en 3 parties :

-   la définition de ses arguments (entre `()`, sauf si il y en a qu'un seul on peut les omettre)
-   une `=>` juste après
-   son contenu entre `{` et `}` (optionel si il n'y a qu'une instruction)

On utilise le mot clef `return` quand on veut dans la fonction si on veut que la fonction s'arrète à cette instruction avec la valeur donnée.

```js
() => return_value;

param => {
    /* instructions */
};

(param1, param2) => {
    /* instructions */
    return return_value;
};
```

## Une valeur comme les autres

Déjà il est important de comprendre qu'une fonction est une `valeur` comme les autres. Autrement dit, elle peut être stockée dans une variable, ou passée en paramètre d'une autre fonction par exemple.

```js
// Prend en argument a et b et retourne l'addition des deux
const add = (a, b) => {
    return a + b;
};
// Affiche le message passé en paramètre en majuscule, suivi de !!!
// Retourne 'undefined' par défaut
const scream = message => {
    console.log(message.toUppercase() + ' !!!');
};

// Inverse la valeur du booléen passé en paramètre
// Comme tu peux le voir, le mot clef 'return' n'est pas obligatoire
// si la fonction n'a qu'une seule instruction
const toggle = value => !value;

// Cette fonction ne prend pas d'arguments et ne retourne pas de valeur
// Elle affiche simplement 'Bonjour !'
const greet = () => {
    console.log('Bonjour !');
};
```

### Appeler une fonction

Pour appeler une fonction, il suffit d'utiliser son nom et d'ajouter des parenthèses. Si elle prend des arguments, on les ajoute entre les parenthèses. Quelques exemples avec les fontions déclarées ci-dessus :

```js
const nb1 = add(5, 5); // nb1 contient la valeur 10
const nb2 = add(10, 7); // nb2 contient la valeur 17
scream('Quelle belle journée'); // affiche 'QUELLE BELLE JOURNÉE !!!'
scream('Bonjour'); // affiche 'BONJOUR !!!'
const result = toggle(false); // result contient true
greet(); // affiche 'Bonjour'
```

### Arrow functions > traditional functions

Avant la syntaxe des fonctions fléchées, les développeurs étaient habitués à utiliser une ancienne syntaxe avec le mot clef `function`. Bien que similaire, cette syntaxe peut mener plus facilement à des bugs c'est pourquoi je te suggère le plus possible d'utiliser des fonctions fléchées. Je ne rentrerai pas dans le détail des explications mais si tu veux en savoir plus sur les différences entre les deux, je te suggère de commencer par [cet article](https://medium.com/geekculture/regular-vs-arrow-function-1f8140fbcece).

## Mais du coup, à quoi ça sert ?

Techniquement, on pourrait écrire du code sans utiliser de fonctions, mais le code deviendrait rapidement incompréhensible. En effet, utiliser des fonctions présente plusieurs avantages :

### Ranger le code

Pour mieux s’y retrouver, on peut rassembler un ensemble d’instructions qui vont ensemble pour rendre le code plus compréhensible.

```js
const showFruits = () => {
    console.log('Pomme');
    console.log('Banane');
    console.log('Citron');
};

const showVeggies = () => {
    console.log('Carottes');
    console.log('Brocoli');
    console.log('Asperges');
};

showFruits();
showVeggies();
```

Cela ne te semble peut être pas si utile pour le moment, mais la plupart des projets ont des milliers de lignes de codes. C'est pourquoi ça devient indispensable de bien ranger et organiser son code en fonctions pour s'y retrouver.

### Réutiliser des instructions

L'autre avantage, c'est d'écrire un même code et l'utiliser plusieurs fois à des endroits différents. On peut même changer les paramètres pour alérer son comportement !

```js
const present = (firstname, age, job) => {
    console.log(`Hi! My name is ${firstname}, I'm ${age} and I'm ${job}`);
};

present('Julia', 22, 'Developer');
present('Tom', 24, 'Designer');
present('Kim', 33, 'Manager');
```

## Débugger et tester son code

Maintenant que tu connais les fonctions, les prochains exercices ne te demanderont plus simplement d'utiliser `console.log` mais d'écrire des fonctions qui retourneront des valeurs et qui seront potentiellement appelés avec des paramètres différents au moment de la validation.

### TDD

Une des bonnes pratiques quand on code c'est de faire du TDD "Test Driven Development", autrement dit, écrire des tests avant même de commencer à coder sa fonction. Bien qu'il ne soit pas utile de le faire tout le temps, c'est une bonne chose à faire pour éviter au maximum les bugs sur les parties importantes du code. Il existe de nombreux outils pour écrire des tests en js, mais la façon la plus simple est d'utiliser la fonction `console.assert`.

```
const countWords = (sentence) => sentence.split(' ').length;

console.assert(countWords('un deux trois') === 3, 'Should have 3 words');
console.assert(countWords('') === 3, 'Should have 0 words');
console.assert(countWords('bonjour') === 1, 'Should have 1 words');
console.assert(countWords('bonjour tout le monde') === 4, 'Should have 4 words');
```

Si la condition passée en argument échoue, `console.assert` déclenche une erreur. Si tous les tests passent sans erreur, c'est qu'il y a de grandes chances que le code écrit soit bon. Tu peux aussi tout simplement utiliser `console.log` pour tester ton code et vérifier qu'il renvoit bien les bonnes valeurs :

```
console.log('RESULT = ', countWorlds('il était une fois')); // devrait afficher 'RESULT = 4'
```

Dans les prochains exercices, on utilisera une fonction similaire à `console.assert` pour tester ton code automatiquement, si jamais ta fonction ne gère pas un cas correctement tu auras une erreur au moment de la validation qui te montera le cas qui pose problème, comme ci-dessous :

![test-error](/assets/images/test-error.png)

En effet, comme tu peux le voir, on obtient pas le résutat attendu en passant la string 'farine, œufs, chocolat' en argument.

### console.log

Avant de te laisser partir sur les exercices je voulais te donner un petit conseil pour débugger : utilise un maximum `console.log`. En effet, des fois c'est compliqué de voir ses erreurs en lisant simplement son code, mais heuresement avec console.log, tu peux afficher n'importe quelle valeur à n'importe quel moment du code. Donc utilise-le un maximum pour comprendre d'où vient le problème et débugger ton code.

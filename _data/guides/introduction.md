---
title: 'Introduction'
---

Bienvenue dans ce premier guide ! Au cours de ton apprentissage ici, je te proposerais 3 types de formats :

-   **les guides**, comme celui-ci, qui te donne des explications pour apprendre des nouveaux concepts
-   **les quiz** pour rapidement tester des connaissances et voir ce que tu as compris et retenu
-   **les exercices** pour passer à la pratique et t'entraîner

Ci-dessous, on va donc aborder ce qu'est Javascript et comment l'utiliser. C'est parti !

## Ma philosophie

Mon but ici n'est pas juste de te donner les clefs pour faire un site en Javascript le plus rapidement possible, en faisant des copier-coller de code sans trop comprendre pourquoi. On va plutôt prendre le temps de **bien comprendre et maîtriser** chaque notion.

Je vais, autant que possible, t'apprendre **les bonnes pratiques** dans la manière de coder pour ne pas seulement écrire du code qui marche, mais du "beau" code, qui est optimisé et agréable à lire par d'autres développeurs.

## Qu'est ce que Javascript ?

Le javascript est LE langage de script du web. En général, un site web est composé de fichiers utilisant 3 langages :

-   **HTML** pour la structure et le contenu
-   **CSS** pour le style et la mise en page
-   **Javascript** pour rendre le site dynamique (clic les boutons, requête serveur, etc.)

## ES5 ➡️ ES6

Il existe différentes versions de Javascript. Même si ES5 est encore pas mal utilisé, aujourd’hui beaucoup d’applications sont développées en utilisant la version ES6 qui est le nouveau standard et qui propose de nouvelles fonctionnalités bien pratiques. Dans ce cours, c’est donc sur ES6 que nous allons nous concentrer.

## Le javascript, un langage interprété

Contraîrement aux langages compilés (comme le C par exemple), javascript est directement executé par le navigateur.

-   Un script s'exécute de haut en bas, ligne par ligne
-   Chaque ligne est une instruction
-   Une instruction se termine par un ; ou }

Exemple de script avec 3 instructions :

```javascript
let age = 26; // 1) crée la variable age
age += 1; // 2) rajoute 1 à age
console.log(age); // 3) affiche la valeur la variable age
```

## Comment utiliser le Javascript ?

À la base, le javascript est principalement utilisé par les navigateurs web comme Chrome, Safari ou Edge. Mais aujourd'hui on trouve du javascript dans de nombreux autres usages comme des serveurs ou même des moteurs de jeux par exemple !

### La console de chrome

Chrome donne accès à un outil bien pratique pour les développeur.e.s : la console. Pour l'activer, allez dans le menu `Afficher > Options pour les développeurs > Console Javascript`
ou utilisez le raccourci _option+command+j_.

![console-chrome](/assets/images/console-chrome.png)

### La console de NodeJS

[Node](https://nodejs.org/en/) est un outil permettant d'utiliser Javascript sur un serveur web. Si tu l'installes, tu pourras également lancer du Javascript directement depuis ton [terminal](https://openclassrooms.com/fr/courses/6173491-apprenez-a-utiliser-la-ligne-de-commande-dans-un-terminal). Tu pourras entre autres directement "exécuter" un fichier js avec node :

```
node myFile.js
```

Ou lancer la console de node, avec la commande `node` sans arguments, puis l'utiliser comme la console de chrome.

![node-terminal](/assets/images/node-terminal.png)

### Avec le HTML et le CSS

Lorsqu'on veut executer du Javascript depuis une page web (HTML), il suffit d'ajouter une balise `<script>` dans le html, ce qui executera automatiquement le code js au chargemnt de la page :

```html
<button id="message">Bonjour</button>
<script src="index.js"></script>
```

index.js :

```js
// Alterne le message entre bonjour et au revoir quand on clique sur le bouton
const message = document.querySelector('#message');
message.addEventListener('click', () => {
    message.innerHTML = message.innerHTML === 'Bonjour' ? 'Au revoir' : 'Bonjour';
});
```

### Dans ce cours

Tu peux utiliser n'importe laquelle des méthodes ci-dessus pour tester ton code javascript et t'entraîner.

Par contre, dans ce cours, nous allons nous concentrer sur le code Javascript uniquement. C'est pourquoi il y aura un éditeur Javascript directement intégré au site ce qui te permettra de tester rapidement les exerices comme sur l'image ci-dessous :

![exercise-tuto](/assets/images/exercise-tuto.png)

## La console javascript

L'objet `console` permet d’intéragir avec la console du navigateur, en affichant des logs avec [console.log](https://www.w3schools.com/jsref/met_console_log.asp) par exemple.

C’est un outil très important pour trouver les problèmes (bugs) dans le code car cela permet d’afficher des valeurs n’importe où dans ton code !

```js
console.log('Hello, world !');
```

## Les erreurs JS

Comme dans tous les langages de programmation, il est possible d’avoir des erreurs dans son code. Elles sont automatiquement affichées dans la console du navigateur. Il est important de bien savoir les lire et les comprendre pour les corriger !

![exercise-tuto](/assets/images/error-description.png)

## Chercher sur internet c'est tricher !

Quand on est à l'école, on nous apprend qu'aller chercher la réponse sur Internet, c'est pas bien, c'est de la triche. Et bah figure-toi que quand tu codes, ne n'est pas le cas, c'est même tout l'inverse !

![jail](https://media.giphy.com/media/3oz8xyYJVYlztGuHoQ/giphy.gif)

Quand tu codes un site web, une app ou tu fais des exercices, le plus important c'est de trouver la bonne réponse, et pour ça tous les moyens sont bons pour y arriver. Aujourd'hui, internet est un outil très puissant ou l'on peut trouver (presque) toutes les réponses à nos questions, alors pourquoi s'en priver ?

### Trouver la réponse c'est bien, la comprendre c'est mieux !

Attention, chercher sur internet, ça ne veut pas dire copier la première réponse qu'on trouve sans réfléchir. C'est important de bien comprendre les réponses qu'on trouve si on veut les utiliser et maitriser notre code 😉

### Les sites référence

Même si on peut trouver de bonnes informations sur pleins de sites différents, j'ai répertorié une petite liste de site qu'il faut que tu connaisses et utilise quand tu codes en Javascript :

-   [W3schools](https://www.w3schools.com/) une des documentations sur le javascript les plus fournies d'internet ! ce site explique en détail des fonctionnalités précises de javascript. J'y ferais souvent référence (et je l'ai déjà fait un peu plus haut pour les plus curieux 🧐)
-   [MDN Web](https://developer.mozilla.org/) très similaire au site précédent, très bonne alternative selon les goûts et les couleurs 😉
-   [Stackoverflow](https://stackoverflow.com/) en tant que développeur, tu finiras forcément par tomber dessus. Il s'agit d'une gigantesque communauté de développeurs qui répondent à divers questions de code, ce qui peut être bien pratique quand on rencontre un problème !
-   [ChatGPT](https://chat.openai.com/chat) il faut savoir vivre avec son temps, et en attendant que les IAs fassent le boulot (entièrement) à notre place, il ne faut pas hésiter à les soliciter pour nous aider. Mais attention toute fois à ne pas copier/coller bêtement et bien comprendre la réponse...
-   [Google](https://google.com) pour finir, utiliser google ou n'importe quel moteur de recherche reste indispensable, et tu te rendras vite compte que Google va probablement devenir ton meilleur ami (et parfois enemi) durant ton apprentisage du dévelopement !

## Le mot de la fin

C'est tout pour cette petite introduction sur le Javascript, tu as peut être déjà des questions et des choses que tu ne comprends pas, mais ne t'inquiète pas, je suis sûr qu'elles seront répondues par la suite.

Je te laisse passer au Quiz puis faire écrire ton premier code JS ! On se retrouve au prochain guide 😉

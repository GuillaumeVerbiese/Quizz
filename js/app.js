// On déclare une fonction init qui contient le code qui permet d'initialiser le jeu. Pour lancer une partie, il suffit d'appeler la fonction init()
const init = function() {
    // Petit message dans la console pour indiquer que la fonction est bien lancée
    console.log("Fonction init lancée");


    // On boucle sur le tableau des questions pour récupérer à chaque itération l'index de la question et la poser.
    for (const indexQuestion in questions) {
    
        // On pose la question à l'utilisateur et on récupère sa réponse.
        const userAnswer = askQuestion(indexQuestion);
        
        // On vérifie que la réponse de l'utilisateur est correcte en demandant à la fonction checkResponse.
        // Cette dernière renvoie true ou false selon que la réponse est correcte ou non.
        const isCorrect = checkResponse(indexQuestion, userAnswer);
        
        // On délègue l'ajout de la question qu'on vient de poser à la fonction addResponseToDom. On lui passe en premier argument la question à ajouter et en 2ème une valeur booléenne (true pour l'ajouter dans l'encart vert, false pour l'encart rouge)
        addResponseToDom(indexQuestion, isCorrect);
        
    }

}

// Fonction qui se charge de poser une question à l'utilisateur.
// Le paramètre indexQuestion contient le numéro de la question à poser
function askQuestion(indexQuestion) {

    // On affiche une question à l'utilisateur tout en récupérant sa réponse dans la variable userAnswer.
    const userAnswer = prompt(questions[indexQuestion]);

    // On retourne la réponse de l'utilisateur.
    return userAnswer;

}

// Fonction dont le but est de vérifier si une réponse proposée par l'utilisateur est correcte.
// Cette fonction renvoie true si la réponse est correcte false sinon.
function checkResponse(indexResponse, userAnswer) {
    // Si la réponse de l'utilisateur est la meme que celle dans le tableau de bonnes réponses, alors on retourne true
    if(userAnswer == responses[indexResponse]) {
        console.log("CORRECT");

        return true;
    }
    //Sinon, on retourne false
    else {
        console.log("Faux");

        return false;
    }
}

// Fonction qui ajoute une question sur la page.
// Selon la valeur de isCorrect, elle l'ajout dans l'encart vert ou rouge
function addResponseToDom(indexResponse, isCorrect) {

    // On crée une variable container vide. Celle-ci sert à recueillir l'emplacement des bonnes ou mauvaises réponses. 
    // On la crée juste avant la condition pour qu'elle n'ait pour portée cette condition (ce qui l'empecherait d'en sortir)
    let container = '';

    // Si la réponse de l'utilisateur est correcte, on sélectionne le container de bonnes réponses
    if(isCorrect === true) {
        container = document.querySelector('#right .responses');
    }
    //Sinon, on sélectionne le container de mauvaises réponses
    else {
        container = document.querySelector('#wrong .responses');
    }


    // On crée un nouvel li qu'on va insérer dans la page 
    const newLiElement = document.createElement('li');

    // On attribue un contenu à notre LI
    newLiElement.textContent = questions[indexResponse];

    // On ajoute ce nouvel LI dans le container qu'on a ciblé plus tot
    container.append(newLiElement);
}

// Au chargement de la page, on lance le jeu avec la fonction init.
init();
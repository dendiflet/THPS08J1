// 1.1 lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot "clique" en console.


let footer = document.getElementsByTagName("footer")[0]
footer.addEventListener('click',function(){
	console.log("Clique !")
});


// 1.2   lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.


let clickcounter = 0
footer.addEventListener('click',function(){
	clickcounter += 1;
	// ici la fonction directement a l'intérieur
	// console.log(`Clic numéro ${clickcounter}`)

	// ici l'appel d'une fonction extérieur
	affichage()
});

// display the number of clics
function affichage(){
		console.log(`Clic numéro ${clickcounter}`)
}



// 2 Tu vas faire que si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id navbarHeader perde sa classe collapse. Une fois que ça, ça marche, fait que si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader

// lets get the item to modify
let navbarheader = document.getElementById("navbarHeader")
console.log(navbarheader)
// lets get the button
let hambutton = document.querySelectorAll("header .navbar-toggler")[0]


// create a variable to know if collapse is here or not
let collapsestatus = true


// add event on the hamburger button
hambutton.addEventListener('click',function(){
	console.log("tu viens de cliquer sur le header/navbar !");
	navbarheadercollapser()
});

function navbarheadercollapser() {

	if (collapsestatus == true){
		navbarheader.classList.remove("collapse");
		collapsestatus = false
		console.log("tadam !");

	}
	else if (collapsestatus == false){
		navbarheader.classList.add("collapse");
		collapsestatus = true
		console.log("disparut !");

	}
};


// 3  si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page).





// 4  On va faire quelque chose de similaire à la fonctionnalité 3 mais un peu plus complexe : si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant ! Tu l'as compris, il va falloir que tu cherches comment faire un "toggle" sur le style du texte. C'est plus compliqué que sur une classe.









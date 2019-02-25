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
let navbarHeader = document.getElementById("navbarHeader")
// console.log(navbarheader)
// lets get the button
let hamButton = document.querySelectorAll("header .navbar-toggler")[0]


// create a variable to know if collapse is here or not
let collapsestatus = true


// add event on the hamburger button
hamButton.addEventListener('click',function(){
	console.log("tu viens de cliquer sur le header/navbar !");
	navbarheadercollapser()
});

function navbarheadercollapser() {

	if (collapsestatus == true){
		navbarHeader.classList.remove("collapse");
		collapsestatus = false
		console.log("tadam !");

	}
	else if (collapsestatus == false){
		navbarHeader.classList.add("collapse");
		collapsestatus = true
		console.log("disparut !");
	}
};


// 3  si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page).


// select the first card 
let card1 = document.getElementsByClassName("card")[0];
//console.log(card1)

// select the button edit from this card
let editbutton = card1.getElementsByClassName("btn-outline-secondary")[0];
//console.log(editbutton)


editbutton.addEventListener('click',function(){
//	console.log("tu viens de cliquer sur le bouton edit de la 1ere carte !");
//	console.log("(et le texte s'est changé en rouge)");
	firstcardtextcolorchanger()
});


function firstcardtextcolorchanger() {
	card1.style.color = 'red'
}





// 4  On va faire quelque chose de similaire à la fonctionnalité 3 mais un peu plus complexe : si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant ! Tu l'as compris, il va falloir que tu cherches comment faire un "toggle" sur le style du texte. C'est plus compliqué que sur une classe.



// select the second card 
let card2 = document.getElementsByClassName("card")[1];
//console.log(card1)

// select the button edit from this card
let secondeditbutton = card2.getElementsByClassName("btn-outline-secondary")[0];
//console.log(editbutton)


secondeditbutton.addEventListener('click',function(){
//	console.log("tu viens de cliquer sur le bouton edit de la 2eme carte !");
//	console.log("(et le texte s'est changé en rouge)");
	secondcardtextcolorchanger()
});


let colorstatuschanged = false
function secondcardtextcolorchanger() {
	if (colorstatuschanged == true){
		card2.style.color = '';
		colorstatuschanged = false
		console.log("retour a la normale !");
	}
	else if (colorstatuschanged == false){
		card2.style.color = 'green';
		colorstatuschanged = true
		console.log("texte en vert !");
	}
}



// 5 si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).


let csser = document.querySelectorAll("head,link")[1]
console.log("voici le head du site : (csser)")
console.log(csser)
console.log("voici le liens a modifier (-> csser.href)")
console.log(csser.href)


let navbar = document.querySelectorAll("header")[0]
//console.log(navbar)

// declare var to know if there is boobstrap link in head
let isboobstrappresent = true

navbar.addEventListener('dblclick', function() {
		console.log("tu viens de double cliquer !");

	boopstraphidding()

});


function boopstraphidding() {

		console.log("dans la fonction!");


	if (isboobstrappresent === true){
		console.log("sans boobstrap !");
		csser.setAttribute("href", "");
		isboobstrappresent = false
	}

	else if (isboobstrappresent === false){
		console.log("avec boobstrap !");
		csser.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css")
		isboobstrappresent = true
	}

	};


































































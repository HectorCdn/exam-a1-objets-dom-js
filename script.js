const citations = [
    {
	citation: '"Un esprit curieux est un esprit sans limites."',
	auteur: "- Neil deGrasse Tyson, ",
	date: "1792",
	backgroundColor: "#44e5ca",
	fontColor: "#4c0f19",
	origine: "A great Book!",
},
{
	citation: '"L’imagination gouverne le monde."',
	auteur: "- Marie Curie, ",
	date: "1792",
	backgroundColor: "#e55744",
	fontFamilyColor: "#0f454c",
},
{
	citation: '"Le bonheur dépend de nous-mêmes."',
	auteur: "- Socrate, ",
	date: "1730",
	tag: "Innovation, Astronomie",
	backgroundColor: "#69e544",
	fontFamilyColor: "#3e0f4c",
},
{
	citation: '"Nous sommes faits de poussière d’étoiles."',
	auteur: "- Carl Sagan,",
	date: "2017",
	tag: "Littérature, Innovation, Histoire",
	backgroundColor: "#e5a044",
	fontFamilyColor: "#0f294c",
	origin: "Le Monde",
},
{
	citation:'"Les ordinateurs sont inutiles, ils ne savent que donner des réponses."',
	auteur: "- Albert Einstein, ",
	date: "1907",
	backgroundColor: "#bde544",
	fontFamilyColor: "#1e0f4c",
	origin: "Das Computer",
},
]

const h1 = document.querySelector("#h1");
const h2 = document.querySelector("#h2");
const buttonQuote = document.querySelector("#buttonQuote");
const origine = document.querySelector("#origine");

buttonQuote.addEventListener("click", () => {
	h1.textContent = citations.citation;
	h2.textContent = `${citations.auteur} ${citations.date}`;
	origine.textContent = `${citations.origine}`;
	document.body.style.background = citations.backgroundColor;
	buttonQuote.style.background = citations.fontColor;
    console.log(citations)
});

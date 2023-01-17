// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l'array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede


//Milestone 0:  crea array
const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: "wayne-barnett-founder-ceo.jpg"
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: "angela-caroll-chief-editor.jpg"
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: "walter-gordon-office-manager.jpg"
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: "angela-lopez-social-media-manager.jpg"
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: "scott-estrada-developer.jpg"
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: "barbara-ramos-graphic-designer.jpg"
    }
];


//Milestone 1:  stampa array su console


for (let i = 0; i < team.length; i++) {

    console.log(team[i].name, team[i].role, team[i].photo);
}


//Milestone 2 - Stampa come JSON su HTML
// let myString = JSON.stringify(team);

// document.getElementById("teamsection").innerHTML = myString;

//Milestone 2 - Stampa come txt su HTML


const teamList = document.querySelector(".teamsection");

for (let i = 0; i < team.length; i++) {

    const newListItem = document.createElement("li");

    newListItem.innerHTML = team[i].name + '-' + team[i].role + '-' + team[i].photo;

    teamList.append(newListItem);
}



		
		
		
		
		
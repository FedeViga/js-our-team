/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
*/


// creo array di oggetti con i membri del team
const teamMembers = [

    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },

    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    },

]

console.log(teamMembers);


// stampo in console tutte le informazioni per ogni membro del team

// Stampo le stesse informazioni su DOM sottoforma di stringhe
const mainElement = document.querySelector("main");
const listElement = document.createElement("ol");
mainElement.append(listElement);

// ciclo for per iterare tutti gli oggetti dell'array teamMembers
for (let i = 0; i < teamMembers.length; i++) {

    const member = teamMembers[i];

    let membersList = "";

    // ciclo for-in per iterare tutte le informazioni di ogni oggetto
    for (let key in member) {

        console.log(` ${key}: ${member[key]} `);

        membersList += ` ${key} : ${member[key]} <br>`;
    }

    listElement.innerHTML += `<li class="list-group-item bg-secondary text-white"> ${membersList} </li>`;
    listElement.classList.add("list-group");
}

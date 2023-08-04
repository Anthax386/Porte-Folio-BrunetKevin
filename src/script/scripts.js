let projets = [];

let porteFolio = {
    name: "Porte folio",
    readme: "Cette première ébauche de porte folio est completement statique et n'utilise que html/css. Elle a été créer peu avant mon entrée en formation.",
    preview: "../src/images/appercu-porte-folio.png",
    imageAlt: "porte folio preview",
};
projets.push(porteFolio);


let technologies = [];

let technoHTML = {
    image:"../src/images/HTML5.png",
    imageAlt: "HTML",
    name:"HTML",
};
let technoCSS = {
    image:"../src/images/CSS3.png",
    imageAlt: "CSS",
    name:"CSS",
};
let technoVsCode = {
    image:"../src/images/VS-Code.png",
    imageAlt: "VS Code",
    name:"vs Code",
};
let technoGit = {
    image:"../src/images/GIT.png",
    imageAlt: "GIT",
    name:"GIT",
};
let technoGithub = {
    image:"../src/images/github.png",
    imageAlt: "Github",
    name:"Github",
};
technologies.push(technoHTML, technoCSS, technoVsCode, technoGit, technoGithub);

console.log(technologies);
console.log(projets);
console.log(technologies[2].text);
console.log(projets[0]);


for (let i = 0; i < projets.length; i++) {
    /*Selectionne la section .projets*/
    const sectionProjets = document.querySelector(".projets");

    /*Crer une div Qui contiendra le text*/
    const projetText = document.createElement("div");
    projetText.classList.add("readme-projet");
    sectionProjets.appendChild(projetText);

    /*Créer les deux balises de text (h2 et p)*/
    const projetName = document.createElement("h2");
    projetName.textContent = projets[i].name;

    const projetReadme = document.createElement("p");
    projetReadme.textContent = projets[i].readme;

    projetText.appendChild(projetName);
    projetText.appendChild(projetReadme);

    /*Créer une div qui contiendra l'image*/
    const projetPreview = document.createElement("div");
    projetPreview.classList.add("aperçu-projet");
    sectionProjets.appendChild(projetPreview);

    /*Créer la balise img*/
    const projetImg = document.createElement("img");
    projetImg.src = projets[i].preview;
    projetImg.alt = projets[i].imageAlt;
    projetPreview.appendChild(projetImg);
};

for (let i=0; i < technologies.length; i++) {
    /*Selection de la section techno*/
    const sectionTechno = document.querySelector(".Technologies");

    /*Création de la div qui contiendra toutes les infos*/
    const technoElement = document.createElement("div");
    technoElement.classList.add("techno");
    sectionTechno.appendChild(technoElement);

    const technoImage = document.createElement("img");
    technoImage.src = technologies[i].image;
    technoImage.alt = technologies[i].imageAlt;

    const technoName = document.createElement("p");
    technoName.textContent = technologies[i].name;

    technoElement.appendChild(technoImage);
    technoElement.appendChild(technoName);
}
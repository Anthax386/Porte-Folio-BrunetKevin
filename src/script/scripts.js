let projets = [];

let porteFolio = {
    name: "Porte folio",
    readme: "Cette première ébauche de porte folio est completement statique et n'utilise que html/css et JavaScript. Elle a été créer peu avant mon entrée en formation.",
    preview: "../src/images/appercu-porte-folio.png",
    imageAlt: "porte folio preview",
    githubLink:"https://github.com/Anthax386/Porte-Folio-BrunetKevin",
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
let technoJavaScript = {
    image:"../src/images/javascript.png",
    imageAlt:"JavaScript",
    name:"JavaScript",
};

technologies.push(technoHTML, technoCSS, technoJavaScript, technoVsCode, technoGit, technoGithub);

for (let i = 0; i < projets.length; i++) {
    /*Selectionne la section .projets*/
    const sectionProjets = document.querySelector(".projets");

    //Créer une div qui contient les deux span
    const divProjet = document.createElement("div");
    divProjet.classList.add("projet");
    sectionProjets.appendChild(divProjet)

    /*Crer une span Qui contiendra le text*/
    const projetText = document.createElement("span");
    projetText.classList.add("readme-projet");
    divProjet.appendChild(projetText);

    /*Créer les deux balises de text (h2 et p)*/
    const projetName = document.createElement("h2");
    projetName.textContent = projets[i].name;

    const projetReadme = document.createElement("p");
    projetReadme.textContent = projets[i].readme;

    projetText.appendChild(projetName);
    projetText.appendChild(projetReadme);

    /*Créer une span qui contiendra l'image*/
    const projetPreview = document.createElement("span");
    projetPreview.classList.add("aperçu-projet");
    divProjet.appendChild(projetPreview);

    /*Créer la balise img*/
    const projetImg = document.createElement("img");
    projetImg.src = projets[i].preview;
    projetImg.alt = projets[i].imageAlt;
    projetPreview.appendChild(projetImg);

    //Créer un lien vers la page github
    const projetGithubLink = document.createElement("a");
    projetGithubLink.href = projets[i].githubLink;
    projetGithubLink.target = "_blank"
    projetGithubLink.textContent="Github"
    projetPreview.appendChild(projetGithubLink);
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
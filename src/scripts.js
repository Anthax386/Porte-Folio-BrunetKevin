let projets = [];

let porteFolio = {
  name: "Portefolio",
  readme:
    "Cette première ébauche de porte folio est complètement statique et n'utilise que HTML/Css et Javascript. Elle a été créer peu avant mon entrée en formation.",
  preview: "../src/images/appercu-porte-folio.png",
  imageAlt: "porte folio preview",
  githubLink: "https://github.com/Anthax386/Porte-Folio-BrunetKevin",
};
projets.push(porteFolio);

let technoLang = [];
let technoTool = [];

let technoHTML = {
  image: "../src/images/HTML5.png",
  imageAlt: "HTML",
  name: "HTML",
};
let technoCSS = {
  image: "../src/images/CSS3.png",
  imageAlt: "CSS",
  name: "CSS",
};
let technoVsCode = {
  image: "../src/images/VS-Code.png",
  imageAlt: "VS Code",
  name: "vs Code",
};
let technoGit = {
  image: "../src/images/GIT.png",
  imageAlt: "GIT",
  name: "GIT",
};
let technoGithub = {
  image: "../src/images/github.png",
  imageAlt: "Github",
  name: "Github",
};
let technoJavaScript = {
  image: "../src/images/javascript.png",
  imageAlt: "JavaScript",
  name: "JavaScript",
};

technoLang.push(technoHTML, technoCSS, technoJavaScript);
technoTool.push(technoVsCode, technoGit, technoGithub);



for (let i = 0; i < technoLang.length; i++) {
  /*Selection de la section techno*/
  const sectionTechnoLang = document.querySelector(".technoLang");

  /*Création de la div qui contiendra toutes les infos*/
  const technoElement = document.createElement("div");
  technoElement.classList.add("techno");
  sectionTechnoLang.appendChild(technoElement);

  const technoImage = document.createElement("img");
  technoImage.src = technoLang[i].image;
  technoImage.alt = technoLang[i].imageAlt;

  const technoName = document.createElement("p");
  technoName.textContent = technoLang[i].name;

  technoElement.appendChild(technoImage);
  technoElement.appendChild(technoName);
}

for (let i = 0; i < technoTool.length; i++) {
  /*Selection de la section techno*/
  const sectionTechnoTools = document.querySelector(".technoTools");

  /*Création de la div qui contiendra toutes les infos*/
  const technoElement = document.createElement("div");
  technoElement.classList.add("techno");
  sectionTechnoTools.appendChild(technoElement);

  const technoImage = document.createElement("img");
  technoImage.src = technoTool[i].image;
  technoImage.alt = technoTool[i].imageAlt;

  const technoName = document.createElement("p");
  technoName.textContent = technoTool[i].name;

  technoElement.appendChild(technoImage);
  technoElement.appendChild(technoName);
}

function sendMail() {
    
    var mail = document.getElementById('email')
    var message = document.getElementById('message')

    if (message.value !== '' && mail.value !== '') {
        
    }
}
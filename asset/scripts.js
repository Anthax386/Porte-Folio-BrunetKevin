import works from './JSON/works.json' assert{type: 'json'};
import technoLang from'./JSON/technoLang.json' assert{type: 'json'};
import technoTool from'./JSON/technoTool.json' assert{type: 'json'};

function getWorks (){
  /*Selection de la section works*/
  const sectionWorks = document.querySelector('.works');

  /*Creation du titre*/
  const sectionName = document.createElement('h2');
  sectionName.innerHTML = 'Mes projets';
  sectionName.classList.add('section-title');
  sectionName.setAttribute('id', 'projets');
  sectionWorks.appendChild(sectionName);

  const worksDiv = document.createElement('div');
  worksDiv.classList.add('projets');
  sectionWorks.appendChild(worksDiv);

  for (let i = 0; i < works.length; i++){
    const workArticle = document.createElement('article');
    workArticle.classList.add('projet')
    worksDiv.appendChild(workArticle);

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('projet_readme');
    workArticle.appendChild(titleDiv);

    const workTitle = document.createElement('h3');
    workTitle.innerHTML = works[i].name;
    titleDiv.appendChild(workTitle);

    const workReadme = document.createElement('p');
    workReadme.innerHTML = works[i].readme_short;
    workArticle.addEventListener("mouseover", function(){
      workReadme.innerHTML = works[i].readme_long;
    });
    workArticle.addEventListener("mouseout", function(){
      workReadme.innerHTML = works[i].readme_short;
    });
    titleDiv.appendChild(workReadme);

    const previewDiv = document.createElement('div');
    previewDiv.classList.add('projet_preview');
    workArticle.appendChild(previewDiv);

    const workImg = document.createElement('img');
    workImg.src = works[i].preview;
    previewDiv.appendChild(workImg);

    const wrokBtns = document.createElement('div');
    wrokBtns.classList.add('links');
    previewDiv.appendChild(wrokBtns);

    const githubBtn = document.createElement('a');
    githubBtn.classList.add('btn');
    githubBtn.setAttribute('target',"_blank");
    githubBtn.href = works[i].githubLink ;
    githubBtn.innerHTML = 'Github';
    wrokBtns.appendChild(githubBtn);

    if (works[i].githubPageLink) {
      const githubPageBtn = document.createElement('a');
      githubPageBtn.classList.add('btn');
      githubPageBtn.setAttribute('target',"_blank");
      githubPageBtn.href = works[i].githubPageLink;
      githubPageBtn.innerHTML = 'Github Page' ;
      wrokBtns.appendChild(githubPageBtn);
    }
  }
};

getWorks();


for (let i = 0; i < technoLang.length; i++) {
  /*Selection de la section techno*/
  const sectionTechno = document.getElementById('technoLang');

  /*Création de la div qui contiendra toutes les infos*/
  const technoElement = document.createElement("article");
  technoElement.classList.add("btn");
  sectionTechno.appendChild(technoElement);
      
  const technoImage = document.createElement("img");
  technoImage.src = technoLang[i].image;
  technoImage.alt = technoLang[i].imageAlt;
  technoElement.appendChild(technoImage)
      
  const technoName = document.createElement("p");
  technoName.textContent = technoLang[i].name;
  technoElement.appendChild(technoName)
}

for (let i = 0; i < technoTool.length; i++) {
  /*Selection de la section techno*/
  const sectionTechno = document.getElementById('technoTool');

  /*Création de la div qui contiendra toutes les infos*/
  const technoElement = document.createElement("article");
  technoElement.classList.add("btn");
  sectionTechno.appendChild(technoElement);
      
  const technoImage = document.createElement("img");
  technoImage.src = technoTool[i].image;
  technoImage.alt = technoTool[i].imageAlt;
  technoElement.appendChild(technoImage)
      
  const technoName = document.createElement("p");
  technoName.textContent = technoTool[i].name;
  technoElement.appendChild(technoName)
}
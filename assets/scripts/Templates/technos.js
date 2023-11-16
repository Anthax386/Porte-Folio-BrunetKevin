import technoLang from'../../data/technoLang.json' assert{type: 'json'};
import technoTool from'../../data/technoTool.json' assert{type: 'json'};

export function getTechnoLang(){
  const $sectionTechno = document.getElementById('technoLang');
  
  technoLang.forEach(element => {
    const $technoElement = document.createElement("article");
    $technoElement.classList.add("btn");
    $sectionTechno.appendChild($technoElement);
      $technoElement.innerHTML=`
        <img src="${element.image}" alt="${element.imageAlt}"></img>
        <p>${element.name}</p>
      `;
  });
};

export function getTechnoTool(){
  const $sectionTechno = document.getElementById('technoTool');
  
  technoTool.forEach(element => {
    const $technoElement = document.createElement("article");
    $technoElement.classList.add("btn");
    $sectionTechno.appendChild($technoElement);
      $technoElement.innerHTML=`
        <img src="${element.image}" alt="${element.imageAlt}"></img>
        <p>${element.name}</p>
      `;
  });
};
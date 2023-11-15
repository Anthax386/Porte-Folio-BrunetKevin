import works from '../../JSON/works.json' assert{type: 'json'};

export function getWorks (){
    /*Selection de la section works*/
    const $sectionWorks = document.querySelector('.works');
        $sectionWorks.innerHTML = `
            <h2 class="section-title" id="projets">Mes projets</h2>
            <div class="projets"></div>
        `;
    works.forEach(element => {
        const $projets = document.querySelector('.projets');
        const $workArticle = document.createElement('article');
            $workArticle.classList.add('projet');
            $workArticle.innerHTML= `
                <div class="projet_readme">
                    <h3>${element.name}</h3>
                    <p id="readme">${element.readme_short}</p>
                </div>
                <div class="projet_preview">
                    <img src="${element.preview}"></img>
                    <div class="links">
                        <a class="btn" target="_blank" href="${element.githubLink}">Github</a>
                    </div>
                </div>
            `
        $projets.appendChild($workArticle);
    });
};

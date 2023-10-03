async function getData(){
    const reponse = await fetch('http://localhost:5678/api/works');
    const works = await reponse.json();
    return works;
};

const tous = document.getElementById('tous');
const objets = document.getElementById('objects');
const appartements = document.getElementById('appartements');
const hotels = document.getElementById('hotels');


async function getAllWorks() {
    const works = await getData()
    console.log(works);

    const gallery = document.getElementById('gallery');
    empty(gallery);

    for (let i=0; i < works.length; i++) {

        const figure = document.createElement('figure')
        gallery.appendChild(figure);
    
        const img = document.createElement('img')
        img.src = works[i].imageUrl;
        figure.appendChild(img);
        
        const figcaption = document.createElement('figcaption');
        figcaption.innerHTML = works[i].title;
        figure.append(figcaption);
    };
}

getAllWorks();

function empty(element) {
    while(element.firstElementChild) {
       element.firstElementChild.remove();
    }
}

async function getFilteredWorks(Category) {
    const works = await getData()
    const result = works.filter((work) =>work.categoryId === Category);
    console.log(result);

    const gallery = document.getElementById('gallery');
    empty(gallery);
    for (let i=0; i < result.length; i++) {
        
        const figure = document.createElement('figure');
        gallery.appendChild(figure);
    
        const img = document.createElement('img')
        img.src = result[i].imageUrl;
        figure.appendChild(img);
        
        const figcaption = document.createElement('figcaption');
        figcaption.innerHTML = result[i].title;
        figure.append(figcaption);
    };
}

tous.addEventListener("click", async function(){
    getAllWorks();
    objets.classList.remove('active-filtre');
    appartements.classList.remove('active-filtre');
    hotels.classList.remove('active-filtre');
    tous.classList.add('active-filtre');
});

objets.addEventListener("click", async function(){
    getFilteredWorks(1);
    tous.classList.remove('active-filtre');
    appartements.classList.remove('active-filtre');
    hotels.classList.remove('active-filtre');
    objets.classList.add('active-filtre');
});

appartements.addEventListener("click", async function(){
    getFilteredWorks(2);
    tous.classList.remove('active-filtre');
    objets.classList.remove('active-filtre');
    hotels.classList.remove('active-filtre');
    appartements.classList.add('active-filtre');
});

hotels.addEventListener("click", async function(){
    getFilteredWorks(3);
    tous.classList.remove('active-filtre');
    objets.classList.remove('active-filtre');
    appartements.classList.remove('active-filtre');
    hotels.classList.add('active-filtre');
});
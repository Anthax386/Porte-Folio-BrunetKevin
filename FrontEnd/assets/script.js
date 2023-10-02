async function getData(){
    const reponse = await fetch('http://localhost:5678/api/works');
    const works = await reponse.json();
    console.log(works)

    for (let i=0; i < works.length; i++) {
        const gallery = document.getElementById('gallery');
        
        const figure = document.createElement('figure');
        gallery.appendChild(figure);
    
        const img = document.createElement('img')
        img.src = works[i].imageUrl;
        figure.appendChild(img);
        
        const figcaption = document.createElement('figcaption');
        figcaption.innerHTML = works[i].title;
        figure.append(figcaption);
    };
};

getData();
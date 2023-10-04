function LogIn() {
    const formValues = document.querySelector('#loginForm');
    console.log(formValues);

    formValues.addEventListener('submit', async function(event){
        event.preventDefault();

        // Récupération des input
        const loginValue = {
            email: event.target.querySelector('[name=e-mail]').value,
            password: event.target.querySelector('[name= password]').value,
        }
        console.log(loginValue);

        // Création charge utile au format JSON
        const chargeUtile = JSON.stringify(loginValue);
    
        const reponse= await fetch('http://localhost:5678/api/users/login', {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: chargeUtile,
        });

        //Stokage de la réponse dans constante
        const loginToken = await reponse.json();
        console.log(loginToken);
        return loginToken;
    });
}

LogIn();